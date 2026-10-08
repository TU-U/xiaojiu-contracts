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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
         */
        get: operations["getResearchSearchSettings"];
        put?: never;
        /**
         * POST /research-search-settings
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
         */
        get: operations["getThreads"];
        put?: never;
        /**
         * POST /threads
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        post: operations["postThreads"];
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
         */
        get: operations["getAccountingImports"];
        put?: never;
        /**
         * POST /accounting/imports
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
         */
        get: operations["getLibraryByIdTasks"];
        put?: never;
        /**
         * POST /library/{id}/tasks
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
         */
        get: operations["getLibraryByIdIndex"];
        put?: never;
        /**
         * POST /library/{id}/index
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire shape; state-dependent checks remain in the business handler.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
         */
        get: operations["getNotesByIdClassification"];
        put?: never;
        /**
         * POST /notes/{id}/classification
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire shape; state-dependent checks remain in the business handler.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
         */
        get: operations["getThreadsByIdContext"];
        put?: never;
        /**
         * POST /threads/{id}/context
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire shape; state-dependent checks remain in the business handler.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
         */
        get: operations["getNotesByIdTranscription"];
        put?: never;
        /**
         * POST /notes/{id}/transcription
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
         */
        get: operations["getNotesByIdProcessing"];
        put?: never;
        /**
         * POST /notes/{id}/processing
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
         */
        get: operations["getSupervisionRecap"];
        put?: never;
        /**
         * POST /supervision/recap
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
         */
        get: operations["getWorkTasksSettings"];
        put?: never;
        /**
         * POST /work-tasks/settings
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
         */
        get: operations["getWorkTasks"];
        put?: never;
        /**
         * POST /work-tasks
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
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
         * @description Shared wire contract. Normalization, authorization, state, revision, reference validity and idempotency remain business-owned.
         */
        post: operations["postWorkRunsByIdAction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/{id}/web-policy": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /threads/{id}/web-policy
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        get: operations["getThreadsByIdWebPolicy"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * PATCH /threads/{id}/web-policy
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        patch: operations["patchThreadsByIdWebPolicy"];
        trace?: never;
    };
    "/chat-runs/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET /chat-runs/{id}
         * @description Wire shape shared with consumers. State-dependent business checks and normalization remain server-owned.
         */
        get: operations["getChatRunsById"];
        put?: never;
        post?: never;
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
            classification?: {
                state: string;
                reason?: string;
            };
            summaryStale?: boolean;
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
            agentRun?: components["schemas"]["ChatRun"];
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
        /** @description No trimming/coercion in the shared validator; domain checks the current source and draft. */
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
            kind: "note" | "event" | "libraryFile";
            id: string;
        };
        SourceThread: {
            threadId: string;
            created?: boolean;
            reference?: components["schemas"]["ConversationReference"];
            projectId?: string;
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
            continueRunId?: string;
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
            topic: string;
            background: string[];
            questions: string[];
            brief: string;
            notice: string;
            /** @enum {string} */
            mode: "local" | "model";
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
        LibraryLocation: {
            id: string;
            title: string;
            revision?: number;
            start?: number;
            end?: number;
            text?: string;
        };
        AccountingView: {
            day: string;
            filtered: components["schemas"]["LedgerTransaction"][];
            filteredTotals: {
                income: string;
                expense: string;
            };
            monthTotals: {
                income: string;
                expense: string;
            };
            livingSpent: string;
            budgetCents: string;
            budgetRemaining: string;
            monthlySpend: string;
            categories: {
                name: string;
                i: number;
                value: string;
            }[];
            chartYears: string[];
            monthOptions: string[];
            monthChart: {
                month: string;
                label: string;
                income: string;
                expense: string;
            }[];
            recentMonthChart: {
                month: string;
                label: string;
                income: string;
                expense: string;
            }[];
            ranking: components["schemas"]["LedgerTransaction"][];
        };
        AccountingCheck: {
            day: string;
            title: string;
            status: string;
        };
        AccountingImportRow: {
            rowId: string;
            rowNumber: number;
            sheetName?: string;
            decision: string;
            decisionReason?: string;
            status: string;
            reason: string;
            issues: string[];
            rawCells: (string | null)[];
            values: {
                merchant?: string;
            };
            draft: {
                type: string;
                amountCents: number | null;
                category: string;
                date: string;
                note: string;
                source: string;
                sourceRef: string;
            };
            transactionId?: string | null;
            formulas?: {
                column: number;
                formula: string;
            }[];
            duplicateCandidates?: {
                groupId: string;
                basis: string;
                count: number;
            }[];
            reviewId?: string;
            confirmedAt?: string;
            reviewedDraft?: components["schemas"]["AccountingDraftInput"] | null;
            duplicateAcknowledged?: boolean;
        };
        AccountingImportPage: components["schemas"]["AccountingImportSummary"] & {
            rows: components["schemas"]["AccountingImportRow"][];
            offset: number;
            limit: number;
            totalRows: number;
            duplicateGroups: {
                id: string;
                rowIds?: string[];
                basis?: string;
            }[];
        };
        AccountingReviewPreview: {
            reviewId: string;
            revision: number;
            reviewToken: string;
            choices: {
                rowId: string;
                decision: string;
                reason?: string;
                draft?: {
                    date: string;
                    category: string;
                    amountCents: number;
                    note: string;
                };
            }[];
            duplicates: {
                rowId: string;
                matches: {
                    kind: string;
                    id: string;
                    rowNumber?: number;
                    sheetName?: string;
                    date?: string;
                    amountCents?: number;
                    note?: string;
                    basis: string[];
                }[];
            }[];
        };
        AccountingClassification: {
            id: string;
            batchId: string;
            batchRevision: number;
            status: string;
            notice: string;
            inputs: {
                rowId: string;
                type: string;
                note: string;
            }[];
            suggestions: {
                rowId: string;
                type: string;
                note: string;
                category: string;
            }[];
        };
        AiLogEvent: {
            at: string;
            stage?: string;
            kind?: string;
            callId?: string;
            model?: string;
            error?: string;
            finishReason?: string;
        } & {
            [key: string]: unknown;
        };
        Capability: {
            id: string;
            label: string;
            configured: boolean;
            source: string;
            notice: string;
            config: {
                baseUrl: string;
                model: string;
                hasKey: boolean;
                host?: string;
                port?: number;
            };
            test: components["schemas"]["CapabilityTest"] | null;
            configRevision?: string;
        };
        ClassificationCorrection: {
            id: string;
            revision: number;
            sourceTitle: string;
            sourceRevision: number;
            oldCategoryName: string | null;
            newCategoryName: string;
            classifierRevision: number;
            model: string | null;
            promptVersion: string | null;
            reason: string;
            status: "open" | "resolved";
            resolution?: string;
            createdAt: string;
            history?: {
                status: string;
                resolution: string;
                at: string;
            }[];
        };
        ClassifiedNote: components["schemas"]["Note"];
        ClassificationState: {
            note: components["schemas"]["ClassifiedNote"];
            job: {
                state: string;
                error: string | null;
                sourceRevision: number;
            } | null;
        };
        ComputerFileItem: {
            name: string;
            path: string;
            kind: "directory" | "file";
        };
        ComputerFileListing: {
            root: string;
            path: string;
            items: components["schemas"]["ComputerFileItem"][];
            truncated: boolean;
        };
        EventReview: {
            reviewedAt?: string | null;
            reviewText?: string;
            reviewNotice?: string;
            reviewSnapshot?: ({
                sources: {
                    kind: string;
                    id: string;
                    revision: number | null;
                    title: string;
                    missing: boolean;
                    issue?: string;
                }[];
                createdAt: string;
            } | null) | null;
        };
        EventCheck: {
            reviewedAt?: string | null;
            reviewText?: string;
            reviewNotice?: string;
            reviewSnapshot?: ({
                sources: {
                    kind: string;
                    id: string;
                    revision: number | null;
                    title: string;
                    missing: boolean;
                    issue?: string;
                }[];
                createdAt: string;
            } | null) | null;
            id: string;
            dueAt: string;
            status: string;
            confirmedAt?: string | null;
            cancelledAt?: string;
            cancelReason?: string;
            history: (components["schemas"]["EventReview"] & {
                action: string;
                at?: string;
                dueAt: string;
            })[];
        };
        LibraryStatus: {
            index: {
                status: string;
                error?: string;
                pending?: number;
                title?: string;
                chunk?: number;
                total?: number;
            };
            job: {
                status: string;
                error?: string;
                path?: string;
                queue?: string[];
                startedAt?: string;
                finishedAt?: string;
                resumeStatus?: string;
            };
            counts: {
                [key: string]: number;
            };
            files: components["schemas"]["LibraryFile"][];
        };
        LibraryIndexState: {
            state: string;
            sourceRevision: number;
            indexedRevision?: number;
            completedChunks?: number;
            retryable: boolean;
            message: string;
        };
        LibraryTaskCandidate: {
            id: string;
            revision: number;
            title: string;
            status: string;
        };
        LibraryTaskPage: {
            items: components["schemas"]["LibraryTaskCandidate"][];
            nextCursor: string | null;
            total: number;
        };
        PetReminder: {
            id: string;
            sourceKind: string;
            sourceId: string;
            sourceRevision: number;
            occurrenceKey: string;
            title: string;
            message: string;
            count: number;
            dueAt: string | null;
            actionTarget: {
                page: string;
                id: string;
                threadId?: string;
                runId?: string;
                history?: boolean;
                day?: string;
                occurrenceId?: string;
            };
        };
        PetFeedback: {
            id: string;
            kind: "completed" | "concern";
            at: string;
            message: string;
            taskId: string;
            runId: string;
        };
        PetReminderSnapshot: {
            feedback?: components["schemas"]["PetFeedback"][];
            snapshot: string;
            cursor: number;
            total: number;
            items: components["schemas"]["PetReminder"][];
        };
        ProcessingState: {
            note: components["schemas"]["Note"];
            job: {
                id: string;
                state: string;
                attempts: number;
                error: string | null;
                sourceRevision: number;
            } | null;
        };
        ResearchCandidateDecision: {
            targetId: string;
            targetKind: "event" | "workTask";
            title: string;
            available?: boolean;
        };
        ResearchActionCandidate: {
            title: string;
            description: string;
            kind: string;
        };
        ResearchSearchPricing: {
            revision: number;
            enabled: boolean;
            maxCostMicros?: number;
            reviewUntil?: string;
            usable: boolean;
            notice: string;
        };
        ResearchReference: {
            id: string;
            kind: "note" | "event" | "libraryFile";
            revision: number;
            title: string;
        };
        ResearchBrief: {
            topic: string;
            background: string;
            questions: string[];
            constraints: string;
            type: "learning" | "comparison" | "feasibility" | "custom";
            asOf: string;
            expectedOutput: string;
            web: boolean;
        };
        ResearchPlan: {
            version: number;
            goal: string;
            conditions: string;
            steps: string[];
            known: string[];
            unknown: string[];
            deliverable: string;
        };
        ResearchEvidence: {
            id: string;
            kind?: string;
            url?: string;
            retrievedAt?: string;
            evidenceId: string;
            title: string;
            revision: number;
            quote: string;
            start: number;
            end: number;
            total: number;
            truncated: boolean;
            evidenceType?: string;
            providedAt?: string;
            urls?: string[];
        };
        ResearchDetail: {
            reportAcknowledgement?: {
                artifactId: string;
                artifactRevision: number;
                at: string;
            };
            id: string;
            revision: number;
            candidateDecisions?: {
                [key: string]: components["schemas"]["ResearchCandidateDecision"];
            };
            title: string;
            status: string;
            notice?: string;
            researchApproval?: {
                planVersion: number;
            };
            handoff?: {
                id: string;
                text: string;
                state: string;
            };
            externalMaterials?: {
                id: string;
                revision: number;
                title: string;
                providedAt: string | null;
                available: boolean;
            }[];
            handoffBrief: string;
            researchBrief: components["schemas"]["ResearchBrief"];
            plan: components["schemas"]["ResearchPlan"] | null;
            planHash: string | null;
            references: components["schemas"]["ResearchReference"][];
            job: {
                id: string;
                state: string;
                attempts: number;
                error: string | null;
            } | null;
            budget: {
                spentTimeMs: number;
                reservedTimeMs: number;
                chargedMicros: number;
                reservedMicros: number;
                uncertainMicros: number;
            };
            artifacts: {
                id: string;
                revision: number;
                researchReportVersion?: number;
                body: string;
                mode: string;
                sources: components["schemas"]["ResearchEvidence"][];
                actionCandidates: {
                    title: string;
                    description: string;
                    kind: string;
                }[];
            }[];
        };
        EvidenceHistoryEntry: {
            id: string;
            state: string;
            finishedAt: string | null;
            inputEvidenceRevision: number;
            status?: string;
            error: string;
            notice: string;
        };
        EvidenceHistoryPage: {
            items: components["schemas"]["EvidenceHistoryEntry"][];
            nextBefore: number | null;
        };
        EvidenceHistoryDetail: {
            id: string;
            state: string;
            finishedAt: string | null;
            inputEvidenceRevision: number;
            status?: string;
            error?: string;
            notice?: string;
            evidence: string;
            requirements?: {
                minimumSeconds: number;
                conditions: {
                    id: string;
                    description: string;
                }[];
            } | null;
            sources: {
                id: string;
                title?: string;
                revision?: number;
                content: string;
                sourceState?: string;
            }[];
            assessment?: {
                reason: string;
                results?: {
                    conditionId: string;
                    status: string;
                    reason: string;
                    evidence: {
                        sourceId: string;
                        quote: string;
                        start: number;
                        end: number;
                    }[];
                }[];
            };
        };
        EvidenceReference: {
            kind: "note" | "libraryFile" | "artifact";
            id: string;
            revision: number;
        };
        EvidenceSourceItem: {
            kind: "note" | "libraryFile" | "artifact";
            id: string;
            revision: number;
            title: string;
            preview?: string;
            truncated?: boolean;
            invalid?: string;
            currentRevision?: number;
        };
        TimingRecord: {
            timerSessions?: {
                id: string;
                startedAt: string;
                endedAt?: string;
                seconds: number;
                endReason?: string;
                basis?: string;
            }[];
            manualAdjustments?: {
                id: string;
                minutes: number;
                reason: string;
                at: string;
                startedAt?: string;
                endedAt?: string;
                basis?: string;
            }[];
            adjustments?: {
                minutes: number;
                reason: string;
                at: string;
                startedAt?: string;
                endedAt?: string;
            }[];
        };
        StorageStatus: {
            checkedAt: string;
            dataDir: string;
            items: {
                name: string;
                label: string;
                description: string;
                path: string;
                state: string;
            }[];
            disk: {
                available: boolean;
                totalBytes?: string;
                freeBytes?: string;
                notice?: string;
            };
            indexNotice: string;
            diskNotice: string;
        };
        CompletionCondition: {
            id: string;
            /** @constant */
            kind: "evidence";
            /** @constant */
            required: true;
            description: string;
        };
        ConditionTask: {
            id: string;
            planVersion?: number;
            minutes: number;
            requirement: string;
            completionConditions?: components["schemas"]["CompletionCondition"][];
            repeat: string;
        };
        SupervisionRecapEntry: {
            id: string;
            title: string;
            status: string;
            seconds: number;
            timing: boolean;
            minimumSeconds: number | null;
            conditions: {
                id: string;
                description: string;
            }[];
            evidence: string;
            skipReason: string;
            scheduledDueAt: string | null;
            snoozedUntil: string | null;
            references: {
                id?: string;
                title: string;
                revision?: number;
                invalid: boolean;
                invalidReason?: string | null;
                content: string;
            }[];
        };
        SupervisionRecapSnapshot: {
            day: string;
            signature: string;
            items: components["schemas"]["SupervisionRecapEntry"][];
            totals: {
                planned: number;
                completed: number;
                skipped: number;
                pending: number;
                seconds: number;
                minimumSeconds: number;
                unknownRequirements: number;
            };
            recap: components["schemas"]["SupervisionRecap"] | null;
        };
        TaskLibraryReference: components["schemas"]["LibraryLocation"] & {
            available: boolean;
            issue: string;
            sourcePath: string;
        };
        TodoUpgradeRequest: {
            opId: string;
            revision: number;
            minutes: number;
            repeat: "once" | "daily";
            startTime: string;
            time: string;
            conditions: {
                id: string;
                /** @constant */
                kind: "evidence";
                /** @constant */
                required: true;
                description: string;
            }[];
        };
        AudioNote: components["schemas"]["Note"];
        TranscriptionState: {
            note: components["schemas"]["AudioNote"];
            capability: {
                available: boolean;
                diarizationAvailable: boolean;
                model: string;
            };
            job: {
                id: string;
                state: string;
                error: string | null;
                progress: {
                    stage: string;
                    processedMs?: number;
                    durationMs?: number;
                } | null;
            } | null;
        };
        WorkTask: {
            id: string;
            planVersion?: number;
            minutes: number;
            requirement: string;
            completionConditions?: components["schemas"]["CompletionCondition"][];
            repeat: string;
            sourceContext?: {
                sources: (components["schemas"]["ConversationReference"] & {
                    quote: string;
                })[];
                summary: string;
                history: {
                    id: string;
                    query: string;
                    answer: string;
                }[];
                notice: string;
            };
            sourceResearch?: {
                taskId: string;
                artifactId: string;
            };
            sourceTodoId?: string;
            sourceTodoDay?: string;
            /** @enum {string} */
            executionMode?: "supervision";
            revision: number;
            title: string;
            goal?: string;
            status: string;
            supervisionStatus?: string;
            notice?: string;
            time?: string;
            plan: {
                goal: string;
                conditions: string;
                steps: string[];
                deliverable: string;
            };
            logs: {
                at: string;
                type: string;
                content: string;
            }[];
            outputs: string[];
        };
        WorkRun: {
            timerSessions?: {
                id: string;
                startedAt: string;
                endedAt?: string;
                seconds: number;
                endReason?: string;
                basis?: string;
            }[];
            manualAdjustments?: {
                id: string;
                minutes: number;
                reason: string;
                at: string;
                startedAt?: string;
                endedAt?: string;
                basis?: string;
            }[];
            adjustments?: {
                minutes: number;
                reason: string;
                at: string;
                startedAt?: string;
                endedAt?: string;
            }[];
            reminderJob?: {
                id: string;
                state: string;
                dueAt: string;
                attempts: number;
                error: string;
                overdue: boolean;
            } | null;
            conditionsSnapshot?: {
                minimumSeconds: number;
                conditions: {
                    id: string;
                    description: string;
                }[];
            } | null;
            snapshotNotice?: string;
            scheduledStartAt?: string;
            scheduledDueAt?: string;
            id: string;
            taskId: string;
            day: string;
            status: string;
            seconds: number;
            timerAt: string | null;
            notice?: string;
            reminded?: boolean;
            snoozedUntil?: string | null;
            evidence: string;
            assessment?: {
                id?: string;
                version?: number;
                status: string;
                reason: string;
                results?: {
                    conditionId: string;
                    status: string;
                    reason: string;
                    evidence: {
                        sourceId: string;
                        sourceTitle?: string;
                        quote: string;
                        start: number;
                        end: number;
                    }[];
                }[];
            };
            artifactId: string;
            scheduleVersion?: number;
            scheduleHistory?: {
                action: string;
                at: string;
                from?: string;
                to?: string;
                reason?: string;
            }[];
            evidenceRefs?: components["schemas"]["EvidenceReference"][];
            evidenceRevision?: number;
        };
        WorkTaskList: {
            tasks: (components["schemas"]["WorkTask"] | components["schemas"]["ResearchTask"])[];
            runs: components["schemas"]["WorkRun"][];
        };
        WorkerStatus: {
            state: string;
            checkedAt: string;
            heartbeatAt: string | null;
            lastExitAt: string | null;
            pid: number | null;
            queueReady: boolean;
            counts: {
                [key: string]: number;
            };
        };
        LibraryFile: {
            id: string;
            revision: number;
            title: string;
            sourcePath: string;
            status: string;
            tags?: string[];
            projectId?: string;
            project?: string;
            reason: string;
            parse?: {
                state: string;
                encoding?: string;
                notice?: string;
                error?: string;
                pages?: number;
            };
            index?: components["schemas"]["LibraryIndexState"];
            availableActions?: ("copy" | "skip")[];
            error?: string;
            chunks?: number;
            copyName?: string;
            content?: string;
            canonicalId?: string | null;
            duplicateOf?: string | null;
            createdAt?: string;
            updatedAt?: string;
            sourceSize?: number;
            sourceMtime?: number;
            originalName?: string;
            hash?: string;
            copiedAt?: string;
            sharedCopy?: boolean;
            previousFileId?: string;
        };
        LibraryFilePage: {
            items: components["schemas"]["LibraryFile"][];
            total: number;
            nextCursor: string | null;
        };
        ThreadDirectoryItem: {
            id: string;
            threadId?: string;
            threadTitle?: string;
            query: string;
            createdAt: string;
            project?: string;
            projectId?: string | null;
            references?: components["schemas"]["ConversationReference"][];
        };
        ThreadDirectoryPage: {
            items: components["schemas"]["ThreadDirectoryItem"][];
            total: number;
            nextCursor: string | null;
        };
        AccountingImportSummary: {
            id: string;
            revision: number;
            createdAt?: string;
            updatedAt?: string;
            status: string;
            notice: string;
            error: string;
            original: {
                name: string;
                url: string;
                mime: string;
                size: number;
                sha256: string;
            };
            notices?: string[];
            parsingStartedAt?: number;
            parsingFinishedAt?: number;
            remainingRows?: number;
            summary?: {
                dataRows: number;
                needsReview: number;
                excluded: number;
                duplicateRows: number;
            };
        };
        AccountingImportList: {
            imports: components["schemas"]["AccountingImportSummary"][];
            total: number;
            offset: number;
            limit: number;
            nextOffset: number | null;
        };
        AccountingReviewRecord: {
            id: string;
            revision: number;
            createdAt?: string;
            updatedAt?: string;
            batchId: string;
            batchRevision: number;
            status: string;
            choices: {
                rowId: string;
                decision: string;
                reason?: string;
                draft?: {
                    date: string;
                    category: string;
                    amountCents: number;
                    note: string;
                };
            }[];
            duplicates: {
                rowId: string;
                matches: {
                    kind: string;
                    id: string;
                    rowNumber?: number;
                    sheetName?: string;
                    date?: string;
                    amountCents?: number;
                    note?: string;
                    basis: string[];
                }[];
            }[];
            reviewToken: string;
            confirmedAt?: string;
            transactionIds?: string[];
        };
        ResearchTask: {
            id: string;
            planVersion?: number;
            minutes: number;
            requirement: string;
            completionConditions?: components["schemas"]["CompletionCondition"][];
            repeat: string;
            sourceContext?: {
                sources: (components["schemas"]["ConversationReference"] & {
                    quote: string;
                })[];
                summary: string;
                history: {
                    id: string;
                    query: string;
                    answer: string;
                }[];
                notice: string;
            };
            sourceResearch?: {
                taskId: string;
                artifactId: string;
            };
            sourceTodoId?: string;
            sourceTodoDay?: string;
            /** @enum {string} */
            executionMode: "research";
            revision: number;
            title: string;
            goal?: string;
            status: string;
            supervisionStatus?: string;
            notice?: string;
            time?: string;
            plan: components["schemas"]["ResearchPlan"] | null;
            logs: {
                at: string;
                type: string;
                content: string;
            }[];
            outputs: string[];
            researchBrief: components["schemas"]["ResearchBrief"];
            researchVersion?: number;
            researchAttempt?: number;
            researchReportVersion?: number;
            references: components["schemas"]["ResearchReference"][];
            externalReferences?: {
                id: string;
                revision: number;
            }[];
            researchJobId?: string;
            researchApproval?: {
                planVersion: number;
                planHash: string;
                confirmedAt: string;
            };
            candidateDecisions?: {
                [key: string]: components["schemas"]["ResearchCandidateDecision"];
            };
            handoff?: {
                id: string;
                text: string;
                state: string;
            };
            reportAcknowledgement?: {
                artifactId: string;
                artifactRevision: number;
                at: string;
            };
        };
        ThreadContext: {
            text: string;
            covered: string[];
            signatures: {
                [key: string]: string;
            };
            version: number;
            updatedAt?: string;
            /** @enum {string} */
            status: "deleted" | "building" | "stale" | "pending" | "ready";
            uncoveredCount: number;
            budgetExceeded: boolean;
            totalTurns: number;
            notice: string;
        };
        CapabilityTest: {
            ok: boolean;
            checkedAt: string;
            configRevision: string;
            durationMs: number;
            error?: string;
            detail?: {
                response?: string;
                notice?: string;
                collections?: number;
                results?: number;
                dimensions?: number;
                model?: string;
                elapsedMs?: number;
            } & {
                [key: string]: unknown;
            };
        };
        SupervisionRecap: {
            id: string;
            revision: number;
            createdAt: string;
            updatedAt: string;
            day: string;
            signature: string;
            items: {
                runId: string;
                advice: string;
            }[];
            facts: components["schemas"]["SupervisionRecapFacts"];
            /** @enum {string} */
            mode: "model";
        };
        SupervisionRecapFacts: {
            day: string;
            signature: string;
            items: components["schemas"]["SupervisionRecapEntry"][];
            totals: {
                planned: number;
                completed: number;
                skipped: number;
                pending: number;
                seconds: number;
                minimumSeconds: number;
                unknownRequirements: number;
            };
        };
        ResearchExternal: {
            id: string;
            revision: number;
            createdAt: string;
            updatedAt: string;
            taskId: string;
            handoffId: string;
            reportVersion: number;
            title: string;
            text: string;
            urls: string[];
            /** @enum {string} */
            evidenceType: "user_fill";
            /** @enum {string} */
            verificationStatus: "unverified";
            providedAt: string;
        };
        MemorySourcePreview: {
            memoryId: string;
            memoryRevision: number;
            /** @enum {string} */
            kind: "note" | "event" | "libraryFile" | "conversation";
            id: string;
            revision: number;
            title: string;
            text: string;
            truncated: boolean;
            totalCharacters: number;
        };
        LibrarySearchHit: {
            id: string;
            revision: number;
            kind?: string;
            title: string;
            text: string;
            content?: string;
            sourcePath?: string;
            score?: number;
            index?: number;
            start: number;
            end: number;
            canonicalId?: string | null;
        };
        LibrarySearch: {
            /** @enum {string} */
            mode: "keyword" | "hybrid";
            results: components["schemas"]["LibrarySearchHit"][];
            retrieval?: {
                mode?: string;
                notice?: string;
                dense?: boolean;
                sparse?: boolean;
            };
        };
        ResearchSearchPricingInput: {
            revision: number;
            /** @enum {boolean} */
            enabled: false;
        } | {
            revision: number;
            /** @enum {boolean} */
            enabled: true;
            maxCostMicros: number;
            reviewUntil: string;
            /** @enum {boolean} */
            acknowledged: true;
        };
        ResearchCreate: {
            /** @enum {string} */
            executionMode: "research";
            opId: string;
            threadId?: string;
            references?: {
                /** @enum {string} */
                kind: "note" | "event" | "libraryFile";
                id: string;
                revision: number;
            }[];
            researchBrief: {
                topic: string;
                background?: string;
                questions: string[];
                constraints?: string;
                /** @enum {string} */
                type: "learning" | "comparison" | "feasibility" | "custom";
                asOf?: string;
                expectedOutput: string;
                web?: boolean;
            };
        };
        ResearchAction: {
            /** @enum {string} */
            action: "acknowledge_report";
            opId: string;
            revision: number;
            artifactId: string;
            artifactRevision: number;
            /** @enum {boolean} */
            approved: true;
        } | {
            /** @enum {string} */
            action: "save_candidate";
            opId: string;
            revision: number;
            artifactId: string;
            artifactRevision: number;
            candidateIndex: number;
            title: string;
            description: string;
            target: {
                /** @enum {string} */
                kind: "event";
                /** @enum {string} */
                priority: "normal" | "high";
                /** @enum {string} */
                eventType: "one_off" | "long_term";
                dueAt: string;
            } | {
                /** @enum {string} */
                kind: "action";
                time: string;
                minutes: number;
            };
        } | {
            /** @enum {string} */
            action: "handoff";
            opId: string;
            revision: number;
            brief: string;
        } | {
            /** @enum {string} */
            action: "external";
            opId: string;
            revision: number;
            handoffId: string;
            text: string;
            urls: string[];
        } | {
            /** @enum {string} */
            action: "end_handoff";
            opId: string;
            revision: number;
            handoffId: string;
        } | {
            /** @enum {string} */
            action: "confirm";
            opId: string;
            revision: number;
            planVersion: number;
            planHash: string;
            /** @enum {boolean} */
            approved: true;
        } | {
            /** @enum {string} */
            action: "cancel" | "retry" | "retry_web";
            opId: string;
            revision: number;
        };
        AccountingClassifyRequest: {
            opId: string;
            revision: number;
            rows: {
                rowId: string;
                /** @enum {string} */
                type: "income" | "expense";
                note: string;
            }[];
        };
        AccountingDraftInput: {
            /** @enum {string} */
            type: "income" | "expense";
            amount?: string | number;
            amountCents?: number;
            category: string;
            date: string;
            note: string;
            /** @enum {string} */
            channel: "wechat" | "alipay" | "ocr" | "manual";
            merchant: string;
            sourceRef: string;
        };
        AccountingReviewInput: {
            opId: string;
            revision: number;
            choices: ({
                rowId: string;
                /** @enum {string} */
                decision: "include";
                draft: components["schemas"]["AccountingDraftInput"];
                acceptWarnings?: boolean;
                exclusionOverride?: string;
            } | {
                rowId: string;
                /** @enum {string} */
                decision: "skip";
                reason: string;
            })[];
        };
        AccountingCommitInput: {
            opId: string;
            revision: number;
            reviewId: string;
            reviewToken: string;
            /** @enum {boolean} */
            approved: true;
            duplicateAcknowledgements: string[];
        };
        AccountingCommitReceipt: {
            batchId: string;
            revision: number;
            imported: number;
            skipped: number;
            remainingRows: number;
            transactionIds: string[];
        };
        TransactionInput: {
            opId?: string;
            /** @enum {string} */
            type?: "income" | "expense";
            amount?: string | number;
            amountCents?: number;
            category?: string;
            date?: string;
            note?: string;
            sourceRef?: string;
            /** @enum {string} */
            source?: "manual" | "wechat" | "alipay" | "ocr";
            revision?: number;
        };
        TransactionPatch: {
            opId?: string;
            /** @enum {string} */
            type?: "income" | "expense";
            amount?: string | number;
            amountCents?: number;
            category?: string;
            date?: string;
            note?: string;
            sourceRef?: string;
            /** @enum {string} */
            source?: "manual" | "wechat" | "alipay" | "ocr";
            revision: number;
        };
        SetCategoriesRequest: {
            opId: string;
            categoryId: string;
            notes: {
                id: string;
                revision: number;
            }[];
            reason?: string;
        };
        EditMemoryProposal: {
            revision: number;
            content: string;
            /** @enum {string} */
            scope?: "通用" | "周报" | "文章";
            /** @enum {string} */
            scopeKind?: "global" | "project" | "thread";
            scopeId?: string;
        };
        ReviewMemoryBatch: {
            revision: number;
            selected: {
                index: number;
                /** @enum {string} */
                keep?: "new" | "existing";
            }[];
        };
        TranscriptHistoryVersion: {
            id: string;
            revision?: number;
            createdAt?: string;
            updatedAt?: string;
            noteId: string;
            noteRevision?: number;
            transcript: components["schemas"]["Transcript"];
        };
        QuietHours: {
            quietStart: number;
            quietEnd: number;
        };
        WorkTaskCreate: components["schemas"]["ResearchCreate"] | {
            goal: string;
            /** @enum {string} */
            executionMode?: "supervision";
            minutes?: number | string;
            time?: string;
            startTime?: string;
            requirement?: string;
            threadId?: string;
            references?: {
                id: string;
                /** @enum {string} */
                kind: "note" | "event" | "libraryFile";
                revision?: number;
            }[];
            /** @enum {string} */
            repeat?: "once" | "daily";
            web?: boolean;
        };
        WorkTaskAction: components["schemas"]["ResearchAction"] | {
            /** @enum {string} */
            action: "start" | "pause" | "cancel";
            planVersion?: number;
        } | {
            /** @enum {string} */
            action: "external";
            text: string;
        };
        WorkRunAction: {
            /** @enum {string} */
            action: "start" | "stop";
            opId?: string;
        } | {
            /** @enum {string} */
            action: "adjust";
            opId: string;
            minutes: number;
            reason: string;
            startedAt?: string;
            endedAt?: string;
        } | {
            /** @enum {string} */
            action: "evidence";
            opId: string;
            evidenceRevision: number;
            evidence: string;
            artifactId?: string;
            evidenceRefs?: components["schemas"]["EvidenceReference"][];
        } | {
            /** @enum {string} */
            action: "confirm";
            opId: string;
            evidenceRevision: number;
            assessmentId: string;
        } | {
            /** @enum {string} */
            action: "snooze";
            opId?: string;
            scheduleVersion?: number;
            until: string;
        } | {
            /** @enum {string} */
            action: "skip";
            opId?: string;
            scheduleVersion?: number;
            reason: string;
        } | {
            /** @enum {string} */
            action: "retry-reminder";
            opId: string;
            jobId: string;
        };
        EventCheckRequest: {
            opId?: string;
            revision?: number;
            occurrenceId?: string;
        };
        WorkRunActionResult: components["schemas"]["WorkRun"] | {
            id: string;
            /** @constant */
            state: "pending";
        };
        ExportAttachment: {
            id: string;
            name: string;
            size: number;
            mime: string;
        };
        ExportNote: {
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
            attachments: components["schemas"]["ExportAttachment"][];
            sourcePath?: string;
            score?: number;
            classification?: {
                state: string;
                reason?: string;
            };
            summaryStale?: boolean;
        };
        ExportEvent: {
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
            images?: components["schemas"]["ExportAttachment"][];
            reviewText?: string;
            reviewNotice?: string;
            reviewedDueAt?: string;
            createdAt: string;
            confirmedAt?: string | null;
        };
        ExportAccountingImport: {
            id: string;
            revision: number;
            createdAt?: string;
            updatedAt?: string;
            status: string;
            original: {
                name: string;
                mime: string;
                size: number;
                sha256: string;
            } | null;
            rows: components["schemas"]["AccountingImportRow"][];
            duplicateGroups?: {
                id: string;
                basis: string;
                rowIds: string[];
            }[];
            notice?: string;
            error?: string;
            summary?: {
                dataRows: number;
                needsReview: number;
                excluded: number;
                duplicateRows: number;
            };
        };
        ThreadRecord: {
            id: string;
            revision: number;
            createdAt?: string;
            updatedAt?: string;
            threadId?: string;
            status?: string;
            title?: string;
            source?: {
                kind: string;
                id: string;
            };
            deletedAt?: string;
        };
        SourceThreadMapping: {
            id: string;
            revision: number;
            createdAt?: string;
            updatedAt?: string;
            threadId: string;
            sourceKind?: string;
            sourceId?: string;
        };
        ResearchInput: {
            id: string;
            revision?: number;
            createdAt?: string;
            updatedAt?: string;
            taskId: string;
            sources: {
                id: string;
                kind: string;
                revision: number;
                title: string;
                content: string;
            }[];
            context: {
                id: string;
                revision: number;
                query: string;
                answer: string;
            }[];
            contextSummary?: {
                text: string;
                version: number;
                sources: {
                    id: string;
                    signature: string;
                }[];
            } | null;
        };
        BusinessExport: {
            /** @constant */
            version: 2;
            exportedAt: string;
            exportNotice: string;
            coverage: {
                [key: string]: number;
            };
            notes: components["schemas"]["ExportNote"][];
            events: components["schemas"]["ExportEvent"][];
            eventOccurrences: components["schemas"]["EventCheck"][];
            todos: components["schemas"]["Todo"][];
            transactions: components["schemas"]["LedgerTransaction"][];
            accountingBudget: components["schemas"]["AccountingBudget"][];
            accountingImports: components["schemas"]["ExportAccountingImport"][];
            accountingReviews: components["schemas"]["AccountingReviewRecord"][];
            accountingClassifications: components["schemas"]["AccountingClassification"][];
            accountingChecks: components["schemas"]["AccountingCheck"][];
            tasks: components["schemas"]["Task"][];
            memories: components["schemas"]["Memory"][];
            artifacts: components["schemas"]["Artifact"][];
            conversations: components["schemas"]["Conversation"][];
            workTasks: (components["schemas"]["WorkTask"] | components["schemas"]["ResearchTask"])[];
            workRuns: components["schemas"]["WorkRun"][];
            library: components["schemas"]["LibraryFile"][];
            audioTranscriptVersions: components["schemas"]["TranscriptHistoryVersion"][];
            projects: components["schemas"]["Project"][];
            noteCategories: components["schemas"]["Category"][];
            classificationCorrections: components["schemas"]["ClassificationCorrection"][];
            threads: components["schemas"]["ThreadRecord"][];
            sourceThreads: components["schemas"]["SourceThreadMapping"][];
            supervisionRecaps: components["schemas"]["SupervisionRecap"][];
            supervisionEvidenceChecks: components["schemas"]["EvidenceHistoryDetail"][];
            researchInputs: components["schemas"]["ResearchInput"][];
            researchExternal: components["schemas"]["ResearchExternal"][];
        };
        ClassificationCorrectionRecord: {
            id: string;
            revision: number;
            sourceTitle?: string;
            sourceRevision: number;
            oldCategoryName?: string | null;
            newCategoryName?: string;
            classifierRevision: number;
            model: string | null;
            promptVersion: string | null;
            reason: string;
            status: "open" | "resolved";
            resolution?: string;
            createdAt: string;
            history?: {
                status: string;
                resolution: string;
                at: string;
            }[];
        };
        ChatWebPolicy: {
            webSearch: boolean;
            revision: number;
        };
        ChatThreadRequest: {
            /** Format: uuid */
            id: string;
        };
        ChatThreadCreated: {
            threadId: string;
        };
        ChatRun: {
            id: string;
            threadId: string;
            /** @enum {string} */
            status: "running" | "completed" | "stopped";
            phase: string;
            notice: string;
            calls: number;
            costMicros: number;
            elapsedMs: number;
            totalCalls: number;
            totalCostMicros: number;
            canContinue: boolean;
            steps: {
                at: string;
                text: string;
                notice?: string;
            }[];
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
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ResearchSearchPricing"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": components["schemas"]["ResearchSearchPricingInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ResearchSearchPricing"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": components["schemas"]["ResearchCreate"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ResearchTask"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ResearchExternal"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ResearchDetail"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": components["schemas"]["ResearchAction"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ResearchTask"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            query?: {
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                cursor?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                limit?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                q?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                kind?: "note" | "event" | "libraryFile";
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: components["schemas"]["ResearchReference"][];
                        total: number;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SourceThread"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            query?: {
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                cursor?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                limit?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThreadDirectoryPage"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    postThreads: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ChatThreadRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatThreadCreated"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            query?: {
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                cursor?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                limit?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: components["schemas"]["Conversation"][];
                        total: number;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StorageStatus"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BackupReceipt"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/zip": string;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RestoreReceipt"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: components["schemas"]["Capability"][];
                    };
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": components["schemas"]["EmptyRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CapabilityTest"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeviceCapabilities"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeviceSession"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        classifications: components["schemas"]["AccountingClassification"][];
                    };
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": components["schemas"]["AccountingClassifyRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AccountingClassification"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": components["schemas"]["AccountingReviewInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AccountingReviewPreview"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": components["schemas"]["AccountingCommitInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AccountingCommitReceipt"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        reviews: components["schemas"]["AccountingReviewRecord"][];
                    };
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            query?: {
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                offset?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                limit?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AccountingImportList"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    opId: string;
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AccountingImportPage"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            query?: {
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                offset?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                limit?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AccountingImportPage"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": {
                    opId: string;
                    revision: number;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AccountingImportPage"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "*/*": string;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": {
                    revision: number;
                    amount?: string | number;
                    amountCents?: number;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AccountingBudget"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        current: components["schemas"]["AccountingCheck"] | null;
                        history: components["schemas"]["AccountingCheck"][];
                    };
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": {
                    day: string;
                    /** @enum {boolean} */
                    confirmed: true;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AccountingCheck"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            query: {
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                period?: "all" | "today" | "week" | "month" | "custom";
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                kind?: "all" | "income" | "expense";
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                category?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                start?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                end?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                search?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                rankMonth: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                chartYear: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AccountingView"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            query: {
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                kind: "event" | "workTask";
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                q?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                excludeId?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                offset?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                limit?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: {
                            id: string;
                            title: string;
                            revision: number;
                            status?: string;
                        }[];
                        total: number;
                    };
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            query?: {
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                cursor?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                limit?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                q?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LibraryTaskPage"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": {
                    opId: string;
                    taskId: string;
                    taskRevision: number;
                    sourceRevision: number;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkTask"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: components["schemas"]["TaskLibraryReference"][];
                        revision: number;
                        editable: boolean;
                    };
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": {
                    revision: number;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkTask"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            query?: {
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                summary?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LibraryStatus"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            query?: {
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                status?: "" | "ready" | "pending" | "copied" | "queued" | "copying" | "failed" | "skipped" | "duplicate" | "archived";
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                projectId?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                project?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                directory?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                extension?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                dateFrom?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                dateTo?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                cursor?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                limit?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LibraryFilePage"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": {
                    path?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LibraryStatus"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    action: "pause" | "resume";
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LibraryStatus"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": {
                    opId: string;
                    /** @enum {string} */
                    action: "copy" | "skip" | "retry";
                    items: {
                        id: string;
                        revision: number;
                    }[];
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {boolean} */
                        ok: true;
                        /** @enum {string} */
                        action: "copy" | "skip";
                        items: {
                            id: string;
                            revision: number;
                            status: string;
                        }[];
                    };
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    action: "copy" | "skip" | "retry";
                    revision?: number;
                    opId?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LibraryStatus"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            query?: {
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                status?: "" | "ready" | "pending" | "copied" | "queued" | "copying" | "failed" | "skipped" | "duplicate" | "archived";
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                projectId?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                project?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                directory?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                extension?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                dateFrom?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                dateTo?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                q?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LibrarySearch"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": {
                    opId: string;
                    revision: number;
                    title: string;
                    tags: string[];
                    projectId: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        file: components["schemas"]["LibraryFile"];
                        savedRevision: number;
                    };
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LibraryIndexState"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": {
                    revision: number;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LibraryIndexState"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LibraryFile"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": {
                    revision?: number;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LibraryStatus"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            query?: {
                download?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "*/*": string;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Category"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Category"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": components["schemas"]["SetCategoriesRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        ok: true;
                        ids: string[];
                        correctionIds: string[];
                    };
                };
            };
            /** @description Original error status and envelope */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            query?: {
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                status?: "open" | "resolved";
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                offset?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                limit?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: components["schemas"]["ClassificationCorrection"][];
                        total: number;
                    };
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": {
                    revision: number;
                    /** @enum {string} */
                    status: "open" | "resolved";
                    resolution?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClassificationCorrectionRecord"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Project"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Project"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": components["schemas"]["ProjectLink"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Note"] | components["schemas"]["EventRecord"] | components["schemas"]["LibraryFile"] | components["schemas"]["Artifact"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            query: {
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                kind: "note" | "event" | "libraryFile" | "artifact";
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                q?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                offset?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                limit?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: {
                            id: string;
                            revision: number;
                            title: string;
                            projectId: string | null;
                            projectName: string | null;
                        }[];
                        total: number;
                    };
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            query: {
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                kind: "note" | "event" | "libraryFile" | "artifact" | "memory";
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                offset?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                limit?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: (components["schemas"]["Note"] | components["schemas"]["EventRecord"] | components["schemas"]["LibraryFile"] | components["schemas"]["Artifact"] | components["schemas"]["Memory"])[];
                        total: number;
                    };
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClassificationState"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": {
                    revision: number;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Todo"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Health"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Session"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkerStatus"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Bootstrap"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Changes"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": components["schemas"]["TodoUpgradeRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        taskId: string;
                        runId: string;
                        todoId: string;
                    };
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Todo"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Todo"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": components["schemas"]["TransactionInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LedgerTransaction"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": components["schemas"]["TransactionPatch"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LedgerTransaction"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PetChatReply"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Note"];
                };
            };
            /** @description Success */
            201: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Note"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Note"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Note"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                            noteId: string | null;
                            noteRevision: number | null;
                            eventId: string | null;
                            eventRevision: number | null;
                            images: {
                                id: string;
                                name: string;
                            }[];
                            textCharacters: number;
                            usedCurrentDraft: boolean;
                        };
                        inputNotice: string;
                        removedSuggestions: {
                            id: string | null;
                            reason: string;
                        }[];
                    };
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EventRecord"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EventRecord"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                "application/json": components["schemas"]["EventCheckRequest"];
            };
        };
        responses: {
            /** @description Success */
            202: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EventRecord"];
                };
            };
            /** @description Original error status and envelope */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: components["schemas"]["EventCheck"][];
                    };
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": {
                    opId?: string;
                    revision: number;
                    dueAt: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EventRecord"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": {
                    opId?: string;
                    revision: number;
                    occurrenceId: string;
                    dueAt: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EventRecord"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": {
                    opId?: string;
                    revision: number;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EventRecord"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": {
                    opId?: string;
                    revision: number;
                    occurrenceId?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EventRecord"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            query?: {
                download?: string;
            };
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "image/*": string;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            query?: {
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                path?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                q?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ComputerFileListing"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": {
                    path: string;
                    opId?: string;
                    categoryId?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Note"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Note"];
                };
            };
            /** @description Saved note */
            201: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Note"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Note"];
                };
            };
            /** @description Saved note */
            201: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Note"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Note"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            query?: {
                download?: string;
            };
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "*/*": string;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": components["schemas"]["SearchBriefRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SearchBrief"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThreadContext"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThreadContext"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Conversation"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Conversation"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": components["schemas"]["EditMemoryProposal"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Conversation"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReviewMemoryBatch"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Conversation"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    template: "weekly" | "article";
                    /** @enum {number} */
                    days: 7 | 30 | 3650;
                    instructions?: string;
                    project?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Artifact"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Artifact"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Artifact"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "text/markdown": string;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Memory"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MemorySourcePreview"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Memory"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Settings"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {boolean} */
                        ok: true;
                        response: string;
                        configRevision: number;
                    };
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: components["schemas"]["AiLogEvent"][];
                        file: string;
                    };
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            /** @description Success */
            200: {
                headers: {
                    "Content-Disposition"?: string;
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BusinessExport"];
                };
            };
            /** @description Original error status and envelope */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            query?: {
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                offset?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        versions: components["schemas"]["TranscriptHistoryVersion"][];
                        nextOffset: number | null;
                    };
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TranscriptionState"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": {
                    revision: number;
                    /** @enum {string} */
                    action: "start" | "cancel";
                    options?: {
                        /** @enum {string} */
                        language?: "zh" | "en";
                        speakers?: number;
                    };
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": {
                    revision: number;
                    transcriptRevision: number;
                    texts: string[];
                    speakerIds?: (string | null)[];
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Note"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProcessingState"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    action: "retry" | "cancel";
                    revision: number;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PetReminderSnapshot"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            query: {
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                day: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SupervisionRecapSnapshot"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": {
                    day: string;
                    signature: string;
                    opId: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SupervisionRecap"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["QuietHours"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": components["schemas"]["QuietHours"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ok"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            query?: {
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                before?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EvidenceHistoryPage"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EvidenceHistoryDetail"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            query: {
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                kind: "note" | "libraryFile" | "artifact";
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                q?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                offset?: string;
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                limit?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: components["schemas"]["EvidenceSourceItem"][];
                        total: number;
                    };
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            query?: {
                /** @description Raw URL value. Domain validation owns normalization, ranges, calendar validity and cursor scope. */
                refs?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: components["schemas"]["EvidenceSourceItem"][];
                    };
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkTaskList"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": components["schemas"]["WorkTaskCreate"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkTask"] | components["schemas"]["ResearchTask"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "text/markdown": string;
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": {
                    opId: string;
                    planVersion: number;
                    minutes: number;
                    conditions: components["schemas"]["CompletionCondition"][];
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkTask"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": components["schemas"]["WorkTaskAction"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkTask"] | components["schemas"]["ResearchTask"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
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
        requestBody: {
            content: {
                "application/json": components["schemas"]["WorkRunAction"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkRunActionResult"];
                };
            };
            /** @description Original HTTP error status; state conflicts may include current. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getThreadsByIdWebPolicy: {
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatWebPolicy"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    patchThreadsByIdWebPolicy: {
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
                "application/json": components["schemas"]["ChatWebPolicy"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatWebPolicy"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getChatRunsById: {
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
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatRun"];
                };
            };
            /** @description Existing error envelope and HTTP status preserved. */
            default: {
                headers: {
                    /** @description Present on versioned routes; legacy routes preserve original headers. */
                    "X-Contract-Version"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
}
