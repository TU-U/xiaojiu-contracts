import fs from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import openapiTS,{astToString} from 'openapi-typescript';

const root=new URL('../',import.meta.url);
const specification=JSON.parse(await fs.readFile(new URL('openapi.json',root),'utf8'));
const base=specification.servers[0].url;
const routes=[];
for(const [path,item] of Object.entries(specification.paths))for(const [method,operation] of Object.entries(item)){
 if(!['get','post','patch','delete','put'].includes(method))continue;
 if(!operation['x-legacy-path']||!operation['x-field-coverage'])throw new Error(`Missing migration metadata: ${method} ${path}`);
 routes.push({method:method.toUpperCase(),legacy:operation['x-legacy-path'],path:base+path.replace(/\{([^}]+)\}/g,':$1'),schemaPath:path,operationId:operation.operationId,coverage:operation['x-field-coverage'],transport:operation['x-transport']||'json'});
}
if(new Set(routes.map(r=>r.method+' '+r.path)).size!==routes.length)throw new Error('Duplicate versioned route');
const outputs={
 'routes.d.mts': 'export const API_BASE: \"/api/v1\";\nexport const CONTRACT_VERSION: string;\nexport const routes: ReadonlyArray<{method:string;legacy:string;path:string;schemaPath:string;operationId:string;coverage:string;transport:string}>;\n',
 'types.d.ts':'// Generated from openapi.json. Do not edit.\n'+astToString(await openapiTS(specification)),
 'routes.mjs':'// Generated from openapi.json. Do not edit.\n'+`export const API_BASE = ${JSON.stringify(base)};\nexport const CONTRACT_VERSION = ${JSON.stringify(specification.info.version)};\nexport const routes = ${JSON.stringify(routes,null,2)};\n`,
};
const check=process.argv.includes('--check');
if(!check)await fs.mkdir(new URL('generated/',root),{recursive:true});
for(const [name,contents] of Object.entries(outputs)){
 const dest=new URL('generated/'+name,root);
 if(check){if(await fs.readFile(dest,'utf8')!==contents)throw new Error(`${fileURLToPath(dest)} is stale. Run npm run generate in contracts.`);}
 else await fs.writeFile(dest,contents);
}
console.log(`${check?'Checked':'Generated'} ${routes.length} operations, ${Object.keys(specification.components.schemas).length} schemas; contracts ${specification.info.version}`);
