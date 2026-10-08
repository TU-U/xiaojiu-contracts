# xiaojiu-contracts

拾光 / 小九的独立 HTTP 协议仓库。`openapi.json` 是唯一编辑源（OpenAPI 3.1.1 / JSON Schema），不在这里放数据库、提示词、用户资料或密钥。

`npm ci && npm run generate` 从协议生成 TypeScript 类型和路由迁移表；`npm run check` 检查生成物是否过期。生成物提交到仓库，消费端固定 Submodule 提交，不需要在运行时安装生成器。Android 的 Kotlin 消费方式留待其独立接入阶段验证。

## 版本与迁移

- 当前 `0.1.0` 是协议抽取的首批版本，尚有 `x-field-coverage: legacy-owned` 接口待逐模块抽取；不能作为全部字段稳定的 `1.0.0` 发布。
- 协议包遵循 SemVer，API 主路径为 `/api/v1`，OpenAPI 文档格式版本另计。后续增量抽取必须兼容现有可用调用；破坏性请求或响应变化需明确迁移版本。
- 每个 operation 的 `x-legacy-path` 是唯一旧路径映射；`/api/mobile/v1/session` 对应 `/api/v1/devices/session`，不能与网页 Cookie 会话混淆。
- `reviewed` 表示字段已抽取；`legacy-owned` 表示路由已盘点、字段仍由业务模块校验；`retired` 为已有 410 入口。不把无结构的 `{}` 当作已完成字段抽取。
- `revision` 是业务实体版本，`opId` 是业务操作标识。新旧路径共用原事务、回执和幂等命名空间；切换路径不能重置游标或生成新 opId。
- 错误维持原 HTTP 状态和 `{error, current?}`，不回显密钥或完整请求。客户端必须容忍未知响应字段；新增枚举不能假定所有旧解码器兼容。
- Cookie 与 Bearer 的权限判断在后端。Schema 仅描述形状，不决定关联对象存在性、自关联、来源有效性、人工确认或并发冲突。
- 请求校验禁止隐式转换、删除未知字段或填入默认值，避免改变业务指纹。已有业务归一化仍在原处理函数中执行。
- 上传是 multipart，文件与 ZIP 下载保持原始字节及响应头。当前聊天 `/ask` 返回完整 JSON，尚无聊天 SSE 协议；新增流式协议时再定义事件，不虚构已支持流式聊天。

## 发布

修改协议 → 生成类型和路由 → 定向兼容检查 → 提交并打版本标签 → 发布到独立远端 → 消费仓库显式更新 Submodule 指针。移除旧路由必须另有退役计划和消费者升级证据。

工具依据：[OpenAPI](https://spec.openapis.org/oas/v3.1.1.html)、[openapi-typescript](https://openapi-ts.dev/node)、[Ajv JSON Schema 2020-12](https://ajv.js.org/json-schema.html)、[SemVer](https://semver.org/)。
