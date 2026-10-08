// Generated from openapi.json. Do not edit.
export interface paths {
    "/research-search-settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /research-search-settings
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getResearchSearchSettings"];
        put?: never;
        /**
         * POST /research-search-settings
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postResearchSearchSettings"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/research-tasks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /research-tasks
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postResearchTasks"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/research-tasks/{id}/external/{sourceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /research-tasks/{id}/external/{sourceId}
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getResearchTasksByIdExternalBySourceId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/research-tasks/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /research-tasks/{id}
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getResearchTasksById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/research-tasks/{id}/action": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /research-tasks/{id}/action
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postResearchTasksByIdAction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/research-sources": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /research-sources
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getResearchSources"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/source-threads": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /source-threads
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        post: operations["postSourceThreads"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /threads
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getThreads"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/{id}/turns": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /threads/{id}/turns
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getThreadsByIdTurns"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settings/storage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /settings/storage
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getSettingsStorage"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/backups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /backups
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        post: operations["postBackups"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/backups/{id}/download": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /backups/{id}/download
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        get: operations["getBackupsByIdDownload"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/backups/{id}/verify-restore": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /backups/{id}/verify-restore
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        post: operations["postBackupsByIdVerifyRestore"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settings/capabilities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /settings/capabilities
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getSettingsCapabilities"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settings/capabilities/{id}/test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /settings/capabilities/{id}/test
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postSettingsCapabilitiesByIdTest"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/devices/capabilities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /devices/capabilities
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        get: operations["getDevicesCapabilities"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/devices/session": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /devices/session
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        post: operations["postDevicesSession"];
        /**
         * DELETE /devices/session
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        delete: operations["deleteDevicesSession"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/accounting/imports/{id}/classifications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /accounting/imports/{id}/classifications
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getAccountingImportsByIdClassifications"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/accounting/imports/{id}/classify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /accounting/imports/{id}/classify
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postAccountingImportsByIdClassify"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/accounting/imports/{id}/review": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /accounting/imports/{id}/review
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postAccountingImportsByIdReview"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/accounting/imports/{id}/commit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /accounting/imports/{id}/commit
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postAccountingImportsByIdCommit"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/accounting/imports/{id}/reviews": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /accounting/imports/{id}/reviews
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getAccountingImportsByIdReviews"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/accounting/imports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /accounting/imports
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getAccountingImports"];
        put?: never;
        /**
         * POST /accounting/imports
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postAccountingImports"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/accounting/imports/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /accounting/imports/{id}
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getAccountingImportsById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/accounting/imports/{id}/reparse": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /accounting/imports/{id}/reparse
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postAccountingImportsByIdReparse"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/accounting/imports/{id}/original": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /accounting/imports/{id}/original
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        get: operations["getAccountingImportsByIdOriginal"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/accounting/budget": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * PATCH /accounting/budget
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        patch: operations["patchAccountingBudget"];
        trace?: never;
    };
    "/accounting/checks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /accounting/checks
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getAccountingChecks"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/accounting/checks/confirm": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /accounting/checks/confirm
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postAccountingChecksConfirm"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/accounting/view": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /accounting/view
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getAccountingView"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/event-references": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /event-references
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getEventReferences"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/event-references/resolve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /event-references/resolve
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        post: operations["postEventReferencesResolve"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/library/{id}/tasks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /library/{id}/tasks
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getLibraryByIdTasks"];
        put?: never;
        /**
         * POST /library/{id}/tasks
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postLibraryByIdTasks"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/work-tasks/{id}/library": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /work-tasks/{id}/library
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getWorkTasksByIdLibrary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/work-tasks/{id}/library/{sourceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * DELETE /work-tasks/{id}/library/{sourceId}
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        delete: operations["deleteWorkTasksByIdLibraryBySourceId"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/library": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /library
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getLibrary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/library/files": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /library/files
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getLibraryFiles"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/library/scan": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /library/scan
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postLibraryScan"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/library/control": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /library/control
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postLibraryControl"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/library/decisions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /library/decisions
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postLibraryDecisions"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/library/{id}/decision": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /library/{id}/decision
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postLibraryByIdDecision"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/library/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /library/search
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getLibrarySearch"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/library/{id}/metadata": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * PATCH /library/{id}/metadata
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        patch: operations["patchLibraryByIdMetadata"];
        trace?: never;
    };
    "/library/{id}/index": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /library/{id}/index
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getLibraryByIdIndex"];
        put?: never;
        /**
         * POST /library/{id}/index
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postLibraryByIdIndex"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/library/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /library/{id}
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getLibraryById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/library/{id}/analyze": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /library/{id}/analyze
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postLibraryByIdAnalyze"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/library/{id}/file": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /library/{id}/file
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        get: operations["getLibraryByIdFile"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /categories
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        get: operations["getCategories"];
        put?: never;
        /**
         * POST /categories
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        post: operations["postCategories"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/categories/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * PATCH /categories/{id}
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        patch: operations["patchCategoriesById"];
        trace?: never;
    };
    "/notes/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /notes/categories
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postNotesCategories"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/classification-corrections": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /classification-corrections
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getClassificationCorrections"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/classification-corrections/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * PATCH /classification-corrections/{id}
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        patch: operations["patchClassificationCorrectionsById"];
        trace?: never;
    };
    "/projects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /projects
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        get: operations["getProjects"];
        put?: never;
        /**
         * POST /projects
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        post: operations["postProjects"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/projects/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * PATCH /projects/{id}
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        patch: operations["patchProjectsById"];
        trace?: never;
    };
    "/projects/{id}/links": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /projects/{id}/links
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postProjectsByIdLinks"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/projects/{id}/candidates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /projects/{id}/candidates
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getProjectsByIdCandidates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/projects/{id}/items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /projects/{id}/items
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getProjectsByIdItems"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/notes/{id}/classification": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /notes/{id}/classification
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getNotesByIdClassification"];
        put?: never;
        /**
         * POST /notes/{id}/classification
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postNotesByIdClassification"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/todos/{id}/carry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /todos/{id}/carry
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        post: operations["postTodosByIdCarry"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/health": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /health
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        get: operations["getHealth"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/session": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /session
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        get: operations["getSession"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /login
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        post: operations["postLogin"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settings/worker": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /settings/worker
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getSettingsWorker"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/logout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /logout
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        post: operations["postLogout"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bootstrap": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /bootstrap
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        get: operations["getBootstrap"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/changes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /changes
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        get: operations["getChanges"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /search
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        get: operations["getSearch"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/todos/{id}/upgrade": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /todos/{id}/upgrade
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postTodosByIdUpgrade"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/todos": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /todos
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        post: operations["postTodos"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/todos/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * DELETE /todos/{id}
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        delete: operations["deleteTodosById"];
        options?: never;
        head?: never;
        /**
         * PATCH /todos/{id}
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        patch: operations["patchTodosById"];
        trace?: never;
    };
    "/transactions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /transactions
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        get: operations["getTransactions"];
        put?: never;
        /**
         * POST /transactions
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postTransactions"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/transactions/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * DELETE /transactions/{id}
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        delete: operations["deleteTransactionsById"];
        options?: never;
        head?: never;
        /**
         * PATCH /transactions/{id}
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        patch: operations["patchTransactionsById"];
        trace?: never;
    };
    "/transactions/import/preview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /transactions/import/preview
         * @deprecated
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postTransactionsImportPreview"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/transactions/import/commit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /transactions/import/commit
         * @deprecated
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postTransactionsImportCommit"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/transactions/ocr": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /transactions/ocr
         * @deprecated
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postTransactionsOcr"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pet/chat": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /pet/chat
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        post: operations["postPetChat"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/notes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /notes
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        post: operations["postNotes"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/notes/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * DELETE /notes/{id}
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        delete: operations["deleteNotesById"];
        options?: never;
        head?: never;
        /**
         * PATCH /notes/{id}
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        patch: operations["patchNotesById"];
        trace?: never;
    };
    "/notes/{id}/summarize": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /notes/{id}/summarize
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        post: operations["postNotesByIdSummarize"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/events/suggest": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /events/suggest
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        post: operations["postEventsSuggest"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /events
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        post: operations["postEvents"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/events/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * DELETE /events/{id}
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        delete: operations["deleteEventsById"];
        options?: never;
        head?: never;
        /**
         * PATCH /events/{id}
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        patch: operations["patchEventsById"];
        trace?: never;
    };
    "/events/{id}/check": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /events/{id}/check
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postEventsByIdCheck"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/events/{id}/checks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /events/{id}/checks
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getEventsByIdChecks"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/events/{id}/schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /events/{id}/schedule
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postEventsByIdSchedule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/events/{id}/snooze": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /events/{id}/snooze
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postEventsByIdSnooze"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/events/{id}/end": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /events/{id}/end
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postEventsByIdEnd"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/events/{id}/confirm": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /events/{id}/confirm
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postEventsByIdConfirm"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/events/{id}/image/{imageId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /events/{id}/image/{imageId}
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        get: operations["getEventsByIdImageByImageId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/computer-files": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /computer-files
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getComputerFiles"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/computer-files/import": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /computer-files/import
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postComputerFilesImport"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/import": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /import
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postImport"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/notes/{id}/images": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /notes/{id}/images
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postNotesByIdImages"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/notes/{id}/images/{attachment}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * DELETE /notes/{id}/images/{attachment}
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        delete: operations["deleteNotesByIdImagesByAttachment"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/notes/{id}/file/{attachment}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /notes/{id}/file/{attachment}
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        get: operations["getNotesByIdFileByAttachment"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/search-brief": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /search-brief
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postSearchBrief"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/{id}/context": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /threads/{id}/context
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getThreadsByIdContext"];
        put?: never;
        /**
         * POST /threads/{id}/context
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postThreadsByIdContext"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ask": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /ask
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        post: operations["postAsk"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /conversations/{id}
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        get: operations["getConversationsById"];
        put?: never;
        post?: never;
        /**
         * DELETE /conversations/{id}
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        delete: operations["deleteConversationsById"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/{id}/memory-proposals/{index}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * PATCH /conversations/{id}/memory-proposals/{index}
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        patch: operations["patchConversationsByIdMemoryProposalsByIndex"];
        trace?: never;
    };
    "/conversations/{id}/memory-review": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /conversations/{id}/memory-review
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postConversationsByIdMemoryReview"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * DELETE /threads/{id}
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        delete: operations["deleteThreadsById"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tasks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /tasks
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postTasks"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/artifacts/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /artifacts/{id}
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        get: operations["getArtifactsById"];
        put?: never;
        post?: never;
        /**
         * DELETE /artifacts/{id}
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        delete: operations["deleteArtifactsById"];
        options?: never;
        head?: never;
        /**
         * PATCH /artifacts/{id}
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        patch: operations["patchArtifactsById"];
        trace?: never;
    };
    "/artifacts/{id}/download": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /artifacts/{id}/download
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        get: operations["getArtifactsByIdDownload"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/memories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /memories
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        post: operations["postMemories"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/memories/{id}/source-review": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /memories/{id}/source-review
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getMemoriesByIdSourceReview"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/memories/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * DELETE /memories/{id}
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        delete: operations["deleteMemoriesById"];
        options?: never;
        head?: never;
        /**
         * PATCH /memories/{id}
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        patch: operations["patchMemoriesById"];
        trace?: never;
    };
    "/settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /settings
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        get: operations["getSettings"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * PATCH /settings
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        patch: operations["patchSettings"];
        trace?: never;
    };
    "/settings/test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /settings/test
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postSettingsTest"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ai/logs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /ai/logs
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getAiLogs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/export": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /export
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getExport"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/notes/{id}/transcript-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /notes/{id}/transcript-history
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getNotesByIdTranscriptHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/notes/{id}/transcription": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /notes/{id}/transcription
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getNotesByIdTranscription"];
        put?: never;
        /**
         * POST /notes/{id}/transcription
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postNotesByIdTranscription"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/notes/{id}/transcript": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * PATCH /notes/{id}/transcript
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        patch: operations["patchNotesByIdTranscript"];
        trace?: never;
    };
    "/notes/{id}/processing": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /notes/{id}/processing
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getNotesByIdProcessing"];
        put?: never;
        /**
         * POST /notes/{id}/processing
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postNotesByIdProcessing"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pet/reminders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /pet/reminders
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getPetReminders"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/supervision/recap": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /supervision/recap
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getSupervisionRecap"];
        put?: never;
        /**
         * POST /supervision/recap
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postSupervisionRecap"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/work-tasks/settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /work-tasks/settings
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getWorkTasksSettings"];
        put?: never;
        /**
         * POST /work-tasks/settings
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postWorkTasksSettings"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/work-runs/{id}/evidence-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /work-runs/{id}/evidence-history
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getWorkRunsByIdEvidenceHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/work-runs/{id}/evidence-history/{checkId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /work-runs/{id}/evidence-history/{checkId}
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getWorkRunsByIdEvidenceHistoryByCheckId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/work-runs/{id}/evidence-options": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /work-runs/{id}/evidence-options
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getWorkRunsByIdEvidenceOptions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/work-runs/{id}/evidence-sources": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /work-runs/{id}/evidence-sources
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getWorkRunsByIdEvidenceSources"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/work-tasks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /work-tasks
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        get: operations["getWorkTasks"];
        put?: never;
        /**
         * POST /work-tasks
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postWorkTasks"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/work-tasks/{id}/artifacts/{artifactId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /work-tasks/{id}/artifacts/{artifactId}
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        get: operations["getWorkTasksByIdArtifactsByArtifactId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/work-tasks/{id}/conditions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /work-tasks/{id}/conditions
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postWorkTasksByIdConditions"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/work-tasks/{id}/action": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /work-tasks/{id}/action
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postWorkTasksByIdAction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/work-runs/{id}/action": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * POST /work-runs/{id}/action
         * @description Route and transport inventoried. Detailed body/response extraction pending; existing backend validators remain authoritative.
         */
        post: operations["postWorkRunsByIdAction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Attachment: {
            id: string;
            name: string;
            size: number;
            mime: string;
        };
        Transcript: {
            transcriptRevision: number;
            durationMs: number;
            language: string;
            edited: boolean;
            segments: {
                startMs: number;
                endMs: number;
                speakerId: string | null;
                text: string;
            }[];
            diarization: {
                state: string;
                error?: string;
            };
        };
        Note: {
            summaryInputs?: {
                sourceRevision: number;
                imageIds: string[];
                imageNames: string[];
                textCharacters: number;
            };
            transcript?: components["schemas"]["Transcript"];
            referenceIssue?: string;
            categoryId?: string;
            projectId?: string;
            id: string;
            revision: number;
            title: string;
            content: string;
            summary: string;
            summaryMode?: "ai" | "rule";
            type: "text" | "document" | "image" | "audio";
            tags: string[];
            project: string;
            pinned: boolean;
            createdAt: string;
            updatedAt: string;
            sample?: boolean;
            status: string;
            notice?: string;
            attachments: components["schemas"]["Attachment"][];
            sourcePath?: string;
            score?: number;
        };
        Source: {
            excerpts?: {
                start: number;
                end: number;
                quote: string;
                selectionMethod?: string;
            }[];
            sourceField?: string;
            totalCharacters?: number;
            truncated?: boolean;
            scopeKind?: string;
            scopeId?: string;
            purpose?: string;
            id: string;
            kind?: "note" | "memory" | "event" | "web" | "libraryFile" | "researchExternal";
            taskId?: string;
            title: string;
            quote: string;
            url?: string;
            revision: number;
            createdAt: string;
        };
        ConversationReference: {
            id: string;
            kind: "note" | "event" | "libraryFile";
            title: string;
            revision: number;
        };
        Memory: {
            sourceConversationId?: string | null;
            sourceRevision?: number;
            sourceRef?: {
                kind: "note" | "event" | "libraryFile" | "conversation";
                id: string;
                revision?: number;
            };
            scopeKind?: "global" | "project" | "thread";
            scopeId?: string;
            sourceIssue?: string;
            id: string;
            revision: number;
            title: string;
            content: string;
            scope: string;
            status: "candidate" | "active" | "paused" | "rejected" | "invalid";
            sourceId?: string | null;
            createdAt: string;
            sample?: boolean;
        };
        EventRecord: {
            occurredAt?: string | null;
            relatedTaskIds?: string[];
            reviewStale?: boolean;
            reviewSnapshot?: {
                sources: {
                    kind: string;
                    id: string;
                    revision: number | null;
                    title: string;
                    missing: boolean;
                    issue?: string;
                }[];
                createdAt: string;
            } | null;
            reviewJob?: {
                id: string;
                state: string;
                error?: string;
            } | null;
            eventType?: "long_term" | "one_off" | null;
            lifecycleStatus?: "ongoing" | "ended";
            currentOccurrenceId?: string | null;
            id: string;
            revision: number;
            title: string;
            summary: string;
            tags: string[];
            project: string;
            priority: "normal" | "high";
            dueAt: string;
            status: "open" | "confirmed" | "ended";
            sourceNoteId?: string | null;
            relatedEventIds?: string[];
            images?: (components["schemas"]["Attachment"] & {
                sourceAttachmentId?: string;
            })[];
            reviewText?: string;
            reviewNotice?: string;
            reviewedDueAt?: string;
            createdAt: string;
            confirmedAt?: string | null;
        };
        Todo: {
            supervisionTaskId?: string;
            supervisionRunId?: string;
            upgradedAt?: string;
            timeZone?: string;
            carriedFromId?: string;
            carriedRootId?: string;
            carriedFromDay?: string;
            carriedSourceRevision?: number;
            id: string;
            revision: number;
            title: string;
            done: boolean;
            day?: string;
            completedAt?: string | null;
            createdAt: string;
            updatedAt: string;
        };
        LedgerTransaction: {
            importBatchId?: string;
            id: string;
            revision: number;
            type: "income" | "expense";
            amountCents: number;
            category: string;
            date: string;
            note: string;
            sourceRef?: string;
            source?: "manual" | "wechat" | "alipay" | "ocr";
            createdAt: string;
            updatedAt: string;
        };
        AccountingBudget: {
            id?: string;
            revision?: number;
            amountCents: number;
            updatedAt?: string;
        };
        PetChatMessage: {
            role: "user" | "assistant";
            content: string;
        };
        PetChatReply: {
            reply: string;
            memoryUsage?: {
                id: string;
                revision: number;
                title: string;
            }[];
            memoryNotice?: string;
            callId?: string;
        };
        Artifact: {
            qualityNotice?: string;
            id: string;
            revision: number;
            title: string;
            body: string;
            sources: components["schemas"]["Source"][];
            mode: "local" | "model" | "human";
            originMode?: "local" | "model";
            editedAt?: string;
            template: string;
            project: string;
            createdAt: string;
            memories?: {
                id: string;
                content: string;
                revision?: number;
                scope?: string;
                scopeKind?: string;
                scopeId?: string;
            }[];
        };
        MemoryProposal: {
            scopeKind?: "global" | "project" | "thread";
            scopeId?: string;
            scope?: string;
            conflictRefs?: {
                id: string;
                revision: number;
                content: string;
                reason: string;
            }[];
            content: string;
            conflictId?: string;
            conflictRevision?: number;
            conflictContent?: string;
        };
        Conversation: {
            projectId?: string | null;
            qualityNotice?: string;
            id: string;
            revision: number;
            threadId?: string;
            threadTitle?: string;
            project?: string;
            query: string;
            body: string;
            sources: components["schemas"]["Source"][];
            references?: components["schemas"]["ConversationReference"][];
            webSearch?: boolean;
            mode: "local" | "model";
            createdAt: string;
            memoryProposals?: components["schemas"]["MemoryProposal"][];
            memoryNotice?: string;
            memoryReview?: "pending" | "none" | "reviewed" | "expired";
        };
        Task: {
            id: string;
            title: string;
            status: string;
            error?: string;
            createdAt: string;
        };
        PendingMemoryBatch: {
            id: string;
            threadId: string;
            title: string;
            count: number;
            revision: number;
        };
        Bootstrap: {
            pendingMemoryBatches?: components["schemas"]["PendingMemoryBatch"][];
            notes: components["schemas"]["Note"][];
            events: components["schemas"]["EventRecord"][];
            todos: components["schemas"]["Todo"][];
            transactions: components["schemas"]["LedgerTransaction"][];
            accountingBudget: components["schemas"]["AccountingBudget"];
            memories: components["schemas"]["Memory"][];
            artifacts: components["schemas"]["Artifact"][];
            tasks: components["schemas"]["Task"][];
            conversations: components["schemas"]["Conversation"][];
            cursor: number;
            settings: {
                name: string;
                modelEnabled: boolean;
                model: string;
                hybridEnabled?: boolean;
                webSearchEnabled?: boolean;
                demoAccess: boolean;
            };
            serverTime: string;
        };
        Settings: {
            name: string;
            provider: {
                baseUrl: string;
                model: string;
                hasKey: boolean;
                environmentManaged: boolean;
            };
            webSearch: {
                /** @constant */
                provider: "brave";
                hasKey: boolean;
                environmentManaged: boolean;
            };
            demoAccess: boolean;
        };
        Error: {
            error: string;
            /** @description Latest entity or conflict envelope; shape depends on the operation. */
            current?: unknown;
        };
        Ok: {
            /** @constant */
            ok: true;
        };
        Health: {
            /** @constant */
            ok: true;
            version: string;
        };
        Session: {
            authenticated: boolean;
            demoAccess: boolean;
        };
        LoginRequest: {
            code: string;
        };
        RevisionRequest: {
            revision: number;
        };
        DeviceLoginRequest: {
            code: string;
            deviceId: string;
            deviceName: string;
        };
        DeviceSession: {
            token: string;
            expiresAt: number;
            workspaceId: string;
        };
        DeviceCapabilities: {
            protocolVersion: number;
            deviceAuth: boolean;
            sync: boolean;
            idempotentImport: boolean;
            asyncTasks: boolean;
            maxUploadBytes: number;
        };
        Changes: {
            changed: boolean;
            cursor: number;
        };
        NoteCreate: {
            title?: string | null;
            content: string;
            tags?: string[] | null;
            project?: string | null;
            pinned?: unknown;
            categoryId?: string;
            opId?: string | (null | "" | false | 0);
        };
        TodoCreate: {
            title: string;
            day?: string | null;
            done?: boolean;
        };
        EventCreate: {
            title: string;
            summary?: string | null;
            priority?: ("normal" | "high") | null;
            project?: string | null;
            tags?: string[] | null;
            dueAt?: string | null;
            sourceNoteId?: string | null;
            relatedEventIds?: string[];
            relatedTaskIds?: string[];
            eventType?: ("long_term" | "one_off") | null;
            occurredAt?: string | null;
            opId?: string;
        };
        EventSuggestRequest: {
            eventId?: string;
            noteId?: string;
            eventRevision?: number;
            noteRevision?: number;
            draft?: {
                title: string;
                summary: string;
                tags: string[];
                project: string;
            };
        };
        ArtifactUpdate: {
            title: string;
            body: string;
            revision: number;
        };
        PetChatRequest: {
            message: string;
            history?: {
                /** @enum {string} */
                role: "user" | "assistant";
                content: string;
            }[];
        };
        SourceThreadRequest: {
            /** @enum {string} */
            kind: "note" | "event";
            id: string;
        };
        SourceThread: {
            threadId: string;
            created?: boolean;
            reference?: components["schemas"]["ConversationReference"];
        };
        AskRequest: {
            query: string;
            project?: string;
            projectId?: string;
            threadId?: string;
            webSearch?: boolean;
            references?: {
                /** @enum {string} */
                kind: "note" | "event" | "libraryFile";
                id: string;
                revision?: number;
            }[];
            opId?: string;
        };
        EmptyRequest: Record<string, never>;
        NameRequest: {
            name: string;
            opId?: string;
        };
        NameUpdate: {
            name: string;
            revision: number;
        };
        Project: {
            id: string;
            revision: number;
            name: string;
            createdAt?: string;
            updatedAt?: string;
        };
        Category: {
            id: string;
            revision: number;
            name: string;
            /** @enum {string} */
            kind: "builtin" | "development_project";
            projectId?: string;
            sortOrder: number;
        };
        CategoryCreate: {
            name: string;
            projectId: string;
        };
        ProjectLink: {
            /** @enum {string} */
            kind: "note" | "event" | "libraryFile" | "artifact";
            id: string;
            revision: number;
        };
        CarryTodoRequest: {
            revision: number;
            targetDay: string;
        };
        BackupReceipt: {
            id: string;
            createdAt: string;
            files: number;
            bytes: number;
            includesCredentials: boolean;
            downloadUrl: string;
        };
        RestoreReceipt: {
            ok: boolean;
            entities: number;
            message: string;
        };
        ReferenceResolveRequest: {
            /** @enum {string} */
            kind: "event" | "workTask";
            ids: string[];
            excludeId?: string;
        };
        ReferenceResolved: {
            id: string;
            title: string;
            revision: number | null;
            invalid: string;
        };
        SearchBriefRequest: {
            query: string;
            references?: {
                /** @enum {string} */
                kind: "note" | "event" | "libraryFile";
                id: string;
                revision?: number;
            }[];
            threadId?: string;
        };
        SearchBrief: {
            brief: string;
            url?: string;
            mode?: string;
            sources?: components["schemas"]["Source"][];
        };
        MemoryCreate: {
            opId?: string;
            /** @enum {string} */
            scopeKind?: "global" | "project" | "thread";
            scopeId?: string;
            content: string;
            /** @enum {string} */
            scope: "通用" | "周报" | "文章";
            sourceId?: string | null;
        };
        MemoryPatch: {
            opId?: string;
            revision: number;
            /** @enum {string} */
            scopeKind?: "global" | "project" | "thread";
            scopeId?: string;
            content?: string;
            /** @enum {string} */
            scope?: "通用" | "周报" | "文章";
            /** @enum {string} */
            status?: "candidate" | "active" | "paused" | "rejected";
            replace?: {
                id: string;
                revision: number;
            }[];
            reviewedSource?: {
                /** @enum {string} */
                kind: "note" | "event" | "libraryFile" | "conversation";
                id: string;
                revision: number;
            };
        };
        NotePatch: {
            title?: string | null;
            content?: string;
            tags?: string[] | null;
            project?: string | null;
            pinned?: unknown;
            categoryId?: string;
            opId?: string | (null | "" | false | 0);
            revision: number;
        };
        TodoPatch: {
            title?: string;
            day?: string | null;
            done?: boolean;
            revision: number;
        };
        EventPatch: {
            title?: string;
            summary?: string | null;
            priority?: ("normal" | "high") | null;
            project?: string | null;
            tags?: string[] | null;
            dueAt?: string | null;
            sourceNoteId?: string | null;
            relatedEventIds?: string[];
            relatedTaskIds?: string[];
            eventType?: ("long_term" | "one_off") | null;
            occurredAt?: string | null;
            opId?: string;
            revision: number;
        };
        ProviderInput: {
            baseUrl: string;
            model: string;
            apiKey?: string;
            clearKey?: boolean;
        };
        SettingsPatch: {
            name?: string;
            provider?: components["schemas"]["ProviderInput"];
            visionProvider?: components["schemas"]["ProviderInput"] | null;
            retrieval?: {
                qdrant: string;
                embedding: string;
                model: string;
                apiKey?: string;
                clearKey?: boolean;
            };
            webSearch?: {
                apiKey?: string;
                clearKey?: boolean;
            };
            accessCode?: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    getResearchSearchSettings: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postResearchSearchSettings: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postResearchTasks: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getResearchTasksByIdExternalBySourceId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                sourceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getResearchTasksById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postResearchTasksByIdAction: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getResearchSources: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postSourceThreads: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SourceThreadRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SourceThread"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getThreads: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getThreadsByIdTurns: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getSettingsStorage: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postBackups: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EmptyRequest"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BackupReceipt"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getBackupsByIdDownload: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Unwrapped original bytes; preserve Content-Type and Content-Disposition. */
            200: {
                headers: {
                    "Content-Disposition"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/zip": string;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postBackupsByIdVerifyRestore: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EmptyRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RestoreReceipt"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getSettingsCapabilities: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postSettingsCapabilitiesByIdTest: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getDevicesCapabilities: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeviceCapabilities"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postDevicesSession: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DeviceLoginRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeviceSession"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    deleteDevicesSession: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getAccountingImportsByIdClassifications: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postAccountingImportsByIdClassify: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postAccountingImportsByIdReview: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postAccountingImportsByIdCommit: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getAccountingImportsByIdReviews: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getAccountingImports: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postAccountingImports: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    /** Format: binary */
                    file: string;
                    opId?: string;
                    source?: string;
                };
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getAccountingImportsById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postAccountingImportsByIdReparse: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getAccountingImportsByIdOriginal: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Unwrapped original bytes; preserve Content-Type and Content-Disposition. */
            200: {
                headers: {
                    "Content-Disposition"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "*/*": string;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    patchAccountingBudget: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getAccountingChecks: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postAccountingChecksConfirm: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getAccountingView: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getEventReferences: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postEventReferencesResolve: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReferenceResolveRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: components["schemas"]["ReferenceResolved"][];
                    };
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getLibraryByIdTasks: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postLibraryByIdTasks: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getWorkTasksByIdLibrary: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    deleteWorkTasksByIdLibraryBySourceId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                sourceId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getLibrary: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getLibraryFiles: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postLibraryScan: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postLibraryControl: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postLibraryDecisions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postLibraryByIdDecision: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getLibrarySearch: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    patchLibraryByIdMetadata: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getLibraryByIdIndex: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postLibraryByIdIndex: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getLibraryById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postLibraryByIdAnalyze: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getLibraryByIdFile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Unwrapped original bytes; preserve Content-Type and Content-Disposition. */
            200: {
                headers: {
                    "Content-Disposition"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "*/*": string;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getCategories: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: components["schemas"]["Category"][];
                    };
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postCategories: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CategoryCreate"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Category"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    patchCategoriesById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["NameUpdate"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Category"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postNotesCategories: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getClassificationCorrections: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    patchClassificationCorrectionsById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getProjects: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: components["schemas"]["Project"][];
                    };
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postProjects: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["NameRequest"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Project"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    patchProjectsById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["NameUpdate"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Project"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postProjectsByIdLinks: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getProjectsByIdCandidates: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getProjectsByIdItems: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getNotesByIdClassification: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postNotesByIdClassification: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postTodosByIdCarry: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CarryTodoRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Todo"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getHealth: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Health"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getSession: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Session"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postLogin: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LoginRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getSettingsWorker: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postLogout: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getBootstrap: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Bootstrap"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getChanges: {
        parameters: {
            query?: {
                /** @description Decimal nonnegative safe-integer cursor; omitted means 0. Validated without resetting the change log. */
                since?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Changes"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getSearch: {
        parameters: {
            query?: {
                q?: string;
                project?: string;
                tag?: string;
                type?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        notes: components["schemas"]["Note"][];
                    };
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postTodosByIdUpgrade: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postTodos: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TodoCreate"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Todo"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    deleteTodosById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RevisionRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    patchTodosById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TodoPatch"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Todo"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getTransactions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        transactions: components["schemas"]["LedgerTransaction"][];
                    };
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postTransactions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    deleteTransactionsById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RevisionRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    patchTransactionsById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postTransactionsImportPreview: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Retired endpoint; use accounting imports. */
            410: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postTransactionsImportCommit: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Retired endpoint; use accounting imports. */
            410: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postTransactionsOcr: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Retired endpoint; use accounting imports. */
            410: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postPetChat: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PetChatRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PetChatReply"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postNotes: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["NoteCreate"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Note"];
                };
            };
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Note"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    deleteNotesById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RevisionRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    patchNotesById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["NotePatch"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Note"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postNotesByIdSummarize: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Note"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postEventsSuggest: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EventSuggestRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        title: string;
                        summary: string;
                        tags: string[];
                        project: string;
                        relatedEventIds: string[];
                        sourceNoteId: string | null;
                        analyzedImages: number;
                        inputReceipt: {
                            [key: string]: unknown;
                        };
                        inputNotice: string;
                    };
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postEvents: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EventCreate"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EventRecord"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    deleteEventsById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RevisionRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    patchEventsById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EventPatch"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EventRecord"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postEventsByIdCheck: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getEventsByIdChecks: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postEventsByIdSchedule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postEventsByIdSnooze: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postEventsByIdEnd: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postEventsByIdConfirm: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getEventsByIdImageByImageId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                imageId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Unwrapped original bytes; preserve Content-Type and Content-Disposition. */
            200: {
                headers: {
                    "Content-Disposition"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "image/*": string;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getComputerFiles: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postComputerFilesImport: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postImport: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    /** Format: binary */
                    file: string;
                    originalName?: string;
                    opId?: string;
                    categoryId?: string;
                };
            };
        };
        responses: {
            /** @description Saved note */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Note"];
                };
            };
            /** @description Saved note */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Note"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postNotesByIdImages: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    images: string[];
                    revision?: string;
                };
            };
        };
        responses: {
            /** @description Saved note */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Note"];
                };
            };
            /** @description Saved note */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Note"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    deleteNotesByIdImagesByAttachment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                attachment: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RevisionRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Note"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getNotesByIdFileByAttachment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                attachment: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Unwrapped original bytes; preserve Content-Type and Content-Disposition. */
            200: {
                headers: {
                    "Content-Disposition"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "*/*": string;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postSearchBrief: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getThreadsByIdContext: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postThreadsByIdContext: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postAsk: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AskRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Conversation"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getConversationsById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Conversation"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    deleteConversationsById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RevisionRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    patchConversationsByIdMemoryProposalsByIndex: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                index: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postConversationsByIdMemoryReview: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    deleteThreadsById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postTasks: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getArtifactsById: {
        parameters: {
            query?: {
                revision?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Artifact"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    deleteArtifactsById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RevisionRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    patchArtifactsById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ArtifactUpdate"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Artifact"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getArtifactsByIdDownload: {
        parameters: {
            query?: {
                revision?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Unwrapped original bytes; preserve Content-Type and Content-Disposition. */
            200: {
                headers: {
                    "Content-Disposition"?: string;
                    "X-Artifact-Revision"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "text/markdown": string;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postMemories: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MemoryCreate"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Memory"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getMemoriesByIdSourceReview: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    deleteMemoriesById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RevisionRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    patchMemoriesById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MemoryPatch"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Memory"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getSettings: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Settings"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    patchSettings: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SettingsPatch"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postSettingsTest: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getAiLogs: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getExport: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getNotesByIdTranscriptHistory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getNotesByIdTranscription: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postNotesByIdTranscription: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    patchNotesByIdTranscript: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getNotesByIdProcessing: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postNotesByIdProcessing: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getPetReminders: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getSupervisionRecap: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postSupervisionRecap: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getWorkTasksSettings: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postWorkTasksSettings: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getWorkRunsByIdEvidenceHistory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getWorkRunsByIdEvidenceHistoryByCheckId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                checkId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getWorkRunsByIdEvidenceOptions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getWorkRunsByIdEvidenceSources: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getWorkTasks: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postWorkTasks: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getWorkTasksByIdArtifactsByArtifactId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                artifactId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Unwrapped original bytes; preserve Content-Type and Content-Disposition. */
            200: {
                headers: {
                    "Content-Disposition"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "text/markdown": string;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postWorkTasksByIdConditions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postWorkTasksByIdAction: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postWorkRunsByIdAction: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description Existing successful response; shape is still owned by the business module. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
}
