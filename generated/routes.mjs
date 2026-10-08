// Generated from openapi.json. Do not edit.
export const API_BASE = "/api/v1";
export const CONTRACT_VERSION = "0.2.0";
export const routes = [
  {
    "method": "GET",
    "legacy": "/api/research-search-settings",
    "path": "/api/v1/research-search-settings",
    "schemaPath": "/research-search-settings",
    "operationId": "getResearchSearchSettings",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/research-search-settings",
    "path": "/api/v1/research-search-settings",
    "schemaPath": "/research-search-settings",
    "operationId": "postResearchSearchSettings",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/research-tasks",
    "path": "/api/v1/research-tasks",
    "schemaPath": "/research-tasks",
    "operationId": "postResearchTasks",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/research-tasks/:id/external/:sourceId",
    "path": "/api/v1/research-tasks/:id/external/:sourceId",
    "schemaPath": "/research-tasks/{id}/external/{sourceId}",
    "operationId": "getResearchTasksByIdExternalBySourceId",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/research-tasks/:id",
    "path": "/api/v1/research-tasks/:id",
    "schemaPath": "/research-tasks/{id}",
    "operationId": "getResearchTasksById",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/research-tasks/:id/action",
    "path": "/api/v1/research-tasks/:id/action",
    "schemaPath": "/research-tasks/{id}/action",
    "operationId": "postResearchTasksByIdAction",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/research-sources",
    "path": "/api/v1/research-sources",
    "schemaPath": "/research-sources",
    "operationId": "getResearchSources",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/source-threads",
    "path": "/api/v1/source-threads",
    "schemaPath": "/source-threads",
    "operationId": "postSourceThreads",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/threads",
    "path": "/api/v1/threads",
    "schemaPath": "/threads",
    "operationId": "getThreads",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/threads/:id/turns",
    "path": "/api/v1/threads/:id/turns",
    "schemaPath": "/threads/{id}/turns",
    "operationId": "getThreadsByIdTurns",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/settings/storage",
    "path": "/api/v1/settings/storage",
    "schemaPath": "/settings/storage",
    "operationId": "getSettingsStorage",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/backups",
    "path": "/api/v1/backups",
    "schemaPath": "/backups",
    "operationId": "postBackups",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/backups/:id/download",
    "path": "/api/v1/backups/:id/download",
    "schemaPath": "/backups/{id}/download",
    "operationId": "getBackupsByIdDownload",
    "coverage": "reviewed",
    "transport": "binary"
  },
  {
    "method": "POST",
    "legacy": "/api/backups/:id/verify-restore",
    "path": "/api/v1/backups/:id/verify-restore",
    "schemaPath": "/backups/{id}/verify-restore",
    "operationId": "postBackupsByIdVerifyRestore",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/settings/capabilities",
    "path": "/api/v1/settings/capabilities",
    "schemaPath": "/settings/capabilities",
    "operationId": "getSettingsCapabilities",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/settings/capabilities/:id/test",
    "path": "/api/v1/settings/capabilities/:id/test",
    "schemaPath": "/settings/capabilities/{id}/test",
    "operationId": "postSettingsCapabilitiesByIdTest",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/mobile/v1/capabilities",
    "path": "/api/v1/devices/capabilities",
    "schemaPath": "/devices/capabilities",
    "operationId": "getDevicesCapabilities",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/mobile/v1/session",
    "path": "/api/v1/devices/session",
    "schemaPath": "/devices/session",
    "operationId": "postDevicesSession",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "DELETE",
    "legacy": "/api/mobile/v1/session",
    "path": "/api/v1/devices/session",
    "schemaPath": "/devices/session",
    "operationId": "deleteDevicesSession",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/accounting/imports/:id/classifications",
    "path": "/api/v1/accounting/imports/:id/classifications",
    "schemaPath": "/accounting/imports/{id}/classifications",
    "operationId": "getAccountingImportsByIdClassifications",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/accounting/imports/:id/classify",
    "path": "/api/v1/accounting/imports/:id/classify",
    "schemaPath": "/accounting/imports/{id}/classify",
    "operationId": "postAccountingImportsByIdClassify",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/accounting/imports/:id/review",
    "path": "/api/v1/accounting/imports/:id/review",
    "schemaPath": "/accounting/imports/{id}/review",
    "operationId": "postAccountingImportsByIdReview",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/accounting/imports/:id/commit",
    "path": "/api/v1/accounting/imports/:id/commit",
    "schemaPath": "/accounting/imports/{id}/commit",
    "operationId": "postAccountingImportsByIdCommit",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/accounting/imports/:id/reviews",
    "path": "/api/v1/accounting/imports/:id/reviews",
    "schemaPath": "/accounting/imports/{id}/reviews",
    "operationId": "getAccountingImportsByIdReviews",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/accounting/imports",
    "path": "/api/v1/accounting/imports",
    "schemaPath": "/accounting/imports",
    "operationId": "getAccountingImports",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/accounting/imports",
    "path": "/api/v1/accounting/imports",
    "schemaPath": "/accounting/imports",
    "operationId": "postAccountingImports",
    "coverage": "reviewed",
    "transport": "multipart"
  },
  {
    "method": "GET",
    "legacy": "/api/accounting/imports/:id",
    "path": "/api/v1/accounting/imports/:id",
    "schemaPath": "/accounting/imports/{id}",
    "operationId": "getAccountingImportsById",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/accounting/imports/:id/reparse",
    "path": "/api/v1/accounting/imports/:id/reparse",
    "schemaPath": "/accounting/imports/{id}/reparse",
    "operationId": "postAccountingImportsByIdReparse",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/accounting/imports/:id/original",
    "path": "/api/v1/accounting/imports/:id/original",
    "schemaPath": "/accounting/imports/{id}/original",
    "operationId": "getAccountingImportsByIdOriginal",
    "coverage": "reviewed",
    "transport": "binary"
  },
  {
    "method": "PATCH",
    "legacy": "/api/accounting/budget",
    "path": "/api/v1/accounting/budget",
    "schemaPath": "/accounting/budget",
    "operationId": "patchAccountingBudget",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/accounting/checks",
    "path": "/api/v1/accounting/checks",
    "schemaPath": "/accounting/checks",
    "operationId": "getAccountingChecks",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/accounting/checks/confirm",
    "path": "/api/v1/accounting/checks/confirm",
    "schemaPath": "/accounting/checks/confirm",
    "operationId": "postAccountingChecksConfirm",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/accounting/view",
    "path": "/api/v1/accounting/view",
    "schemaPath": "/accounting/view",
    "operationId": "getAccountingView",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/event-references",
    "path": "/api/v1/event-references",
    "schemaPath": "/event-references",
    "operationId": "getEventReferences",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/event-references/resolve",
    "path": "/api/v1/event-references/resolve",
    "schemaPath": "/event-references/resolve",
    "operationId": "postEventReferencesResolve",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/library/:id/tasks",
    "path": "/api/v1/library/:id/tasks",
    "schemaPath": "/library/{id}/tasks",
    "operationId": "getLibraryByIdTasks",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/library/:id/tasks",
    "path": "/api/v1/library/:id/tasks",
    "schemaPath": "/library/{id}/tasks",
    "operationId": "postLibraryByIdTasks",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/work-tasks/:id/library",
    "path": "/api/v1/work-tasks/:id/library",
    "schemaPath": "/work-tasks/{id}/library",
    "operationId": "getWorkTasksByIdLibrary",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "DELETE",
    "legacy": "/api/work-tasks/:id/library/:sourceId",
    "path": "/api/v1/work-tasks/:id/library/:sourceId",
    "schemaPath": "/work-tasks/{id}/library/{sourceId}",
    "operationId": "deleteWorkTasksByIdLibraryBySourceId",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/library",
    "path": "/api/v1/library",
    "schemaPath": "/library",
    "operationId": "getLibrary",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/library/files",
    "path": "/api/v1/library/files",
    "schemaPath": "/library/files",
    "operationId": "getLibraryFiles",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/library/scan",
    "path": "/api/v1/library/scan",
    "schemaPath": "/library/scan",
    "operationId": "postLibraryScan",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/library/control",
    "path": "/api/v1/library/control",
    "schemaPath": "/library/control",
    "operationId": "postLibraryControl",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/library/decisions",
    "path": "/api/v1/library/decisions",
    "schemaPath": "/library/decisions",
    "operationId": "postLibraryDecisions",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/library/:id/decision",
    "path": "/api/v1/library/:id/decision",
    "schemaPath": "/library/{id}/decision",
    "operationId": "postLibraryByIdDecision",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/library/search",
    "path": "/api/v1/library/search",
    "schemaPath": "/library/search",
    "operationId": "getLibrarySearch",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "PATCH",
    "legacy": "/api/library/:id/metadata",
    "path": "/api/v1/library/:id/metadata",
    "schemaPath": "/library/{id}/metadata",
    "operationId": "patchLibraryByIdMetadata",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/library/:id/index",
    "path": "/api/v1/library/:id/index",
    "schemaPath": "/library/{id}/index",
    "operationId": "getLibraryByIdIndex",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/library/:id/index",
    "path": "/api/v1/library/:id/index",
    "schemaPath": "/library/{id}/index",
    "operationId": "postLibraryByIdIndex",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/library/:id",
    "path": "/api/v1/library/:id",
    "schemaPath": "/library/{id}",
    "operationId": "getLibraryById",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/library/:id/analyze",
    "path": "/api/v1/library/:id/analyze",
    "schemaPath": "/library/{id}/analyze",
    "operationId": "postLibraryByIdAnalyze",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/library/:id/file",
    "path": "/api/v1/library/:id/file",
    "schemaPath": "/library/{id}/file",
    "operationId": "getLibraryByIdFile",
    "coverage": "reviewed",
    "transport": "binary"
  },
  {
    "method": "GET",
    "legacy": "/api/categories",
    "path": "/api/v1/categories",
    "schemaPath": "/categories",
    "operationId": "getCategories",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/categories",
    "path": "/api/v1/categories",
    "schemaPath": "/categories",
    "operationId": "postCategories",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "PATCH",
    "legacy": "/api/categories/:id",
    "path": "/api/v1/categories/:id",
    "schemaPath": "/categories/{id}",
    "operationId": "patchCategoriesById",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/notes/categories",
    "path": "/api/v1/notes/categories",
    "schemaPath": "/notes/categories",
    "operationId": "postNotesCategories",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/classification-corrections",
    "path": "/api/v1/classification-corrections",
    "schemaPath": "/classification-corrections",
    "operationId": "getClassificationCorrections",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "PATCH",
    "legacy": "/api/classification-corrections/:id",
    "path": "/api/v1/classification-corrections/:id",
    "schemaPath": "/classification-corrections/{id}",
    "operationId": "patchClassificationCorrectionsById",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/projects",
    "path": "/api/v1/projects",
    "schemaPath": "/projects",
    "operationId": "getProjects",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/projects",
    "path": "/api/v1/projects",
    "schemaPath": "/projects",
    "operationId": "postProjects",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "PATCH",
    "legacy": "/api/projects/:id",
    "path": "/api/v1/projects/:id",
    "schemaPath": "/projects/{id}",
    "operationId": "patchProjectsById",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/projects/:id/links",
    "path": "/api/v1/projects/:id/links",
    "schemaPath": "/projects/{id}/links",
    "operationId": "postProjectsByIdLinks",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/projects/:id/candidates",
    "path": "/api/v1/projects/:id/candidates",
    "schemaPath": "/projects/{id}/candidates",
    "operationId": "getProjectsByIdCandidates",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/projects/:id/items",
    "path": "/api/v1/projects/:id/items",
    "schemaPath": "/projects/{id}/items",
    "operationId": "getProjectsByIdItems",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/notes/:id/classification",
    "path": "/api/v1/notes/:id/classification",
    "schemaPath": "/notes/{id}/classification",
    "operationId": "getNotesByIdClassification",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/notes/:id/classification",
    "path": "/api/v1/notes/:id/classification",
    "schemaPath": "/notes/{id}/classification",
    "operationId": "postNotesByIdClassification",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/todos/:id/carry",
    "path": "/api/v1/todos/:id/carry",
    "schemaPath": "/todos/{id}/carry",
    "operationId": "postTodosByIdCarry",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/health",
    "path": "/api/v1/health",
    "schemaPath": "/health",
    "operationId": "getHealth",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/session",
    "path": "/api/v1/session",
    "schemaPath": "/session",
    "operationId": "getSession",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/login",
    "path": "/api/v1/login",
    "schemaPath": "/login",
    "operationId": "postLogin",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/settings/worker",
    "path": "/api/v1/settings/worker",
    "schemaPath": "/settings/worker",
    "operationId": "getSettingsWorker",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/logout",
    "path": "/api/v1/logout",
    "schemaPath": "/logout",
    "operationId": "postLogout",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/bootstrap",
    "path": "/api/v1/bootstrap",
    "schemaPath": "/bootstrap",
    "operationId": "getBootstrap",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/changes",
    "path": "/api/v1/changes",
    "schemaPath": "/changes",
    "operationId": "getChanges",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/search",
    "path": "/api/v1/search",
    "schemaPath": "/search",
    "operationId": "getSearch",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/todos/:id/upgrade",
    "path": "/api/v1/todos/:id/upgrade",
    "schemaPath": "/todos/{id}/upgrade",
    "operationId": "postTodosByIdUpgrade",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/todos",
    "path": "/api/v1/todos",
    "schemaPath": "/todos",
    "operationId": "postTodos",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "PATCH",
    "legacy": "/api/todos/:id",
    "path": "/api/v1/todos/:id",
    "schemaPath": "/todos/{id}",
    "operationId": "patchTodosById",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "DELETE",
    "legacy": "/api/todos/:id",
    "path": "/api/v1/todos/:id",
    "schemaPath": "/todos/{id}",
    "operationId": "deleteTodosById",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/transactions",
    "path": "/api/v1/transactions",
    "schemaPath": "/transactions",
    "operationId": "getTransactions",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/transactions",
    "path": "/api/v1/transactions",
    "schemaPath": "/transactions",
    "operationId": "postTransactions",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "PATCH",
    "legacy": "/api/transactions/:id",
    "path": "/api/v1/transactions/:id",
    "schemaPath": "/transactions/{id}",
    "operationId": "patchTransactionsById",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "DELETE",
    "legacy": "/api/transactions/:id",
    "path": "/api/v1/transactions/:id",
    "schemaPath": "/transactions/{id}",
    "operationId": "deleteTransactionsById",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/transactions/import/preview",
    "path": "/api/v1/transactions/import/preview",
    "schemaPath": "/transactions/import/preview",
    "operationId": "postTransactionsImportPreview",
    "coverage": "retired",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/transactions/import/commit",
    "path": "/api/v1/transactions/import/commit",
    "schemaPath": "/transactions/import/commit",
    "operationId": "postTransactionsImportCommit",
    "coverage": "retired",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/transactions/ocr",
    "path": "/api/v1/transactions/ocr",
    "schemaPath": "/transactions/ocr",
    "operationId": "postTransactionsOcr",
    "coverage": "retired",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/pet/chat",
    "path": "/api/v1/pet/chat",
    "schemaPath": "/pet/chat",
    "operationId": "postPetChat",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/notes",
    "path": "/api/v1/notes",
    "schemaPath": "/notes",
    "operationId": "postNotes",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "PATCH",
    "legacy": "/api/notes/:id",
    "path": "/api/v1/notes/:id",
    "schemaPath": "/notes/{id}",
    "operationId": "patchNotesById",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "DELETE",
    "legacy": "/api/notes/:id",
    "path": "/api/v1/notes/:id",
    "schemaPath": "/notes/{id}",
    "operationId": "deleteNotesById",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/notes/:id/summarize",
    "path": "/api/v1/notes/:id/summarize",
    "schemaPath": "/notes/{id}/summarize",
    "operationId": "postNotesByIdSummarize",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/events/suggest",
    "path": "/api/v1/events/suggest",
    "schemaPath": "/events/suggest",
    "operationId": "postEventsSuggest",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/events",
    "path": "/api/v1/events",
    "schemaPath": "/events",
    "operationId": "postEvents",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "PATCH",
    "legacy": "/api/events/:id",
    "path": "/api/v1/events/:id",
    "schemaPath": "/events/{id}",
    "operationId": "patchEventsById",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "DELETE",
    "legacy": "/api/events/:id",
    "path": "/api/v1/events/:id",
    "schemaPath": "/events/{id}",
    "operationId": "deleteEventsById",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/events/:id/check",
    "path": "/api/v1/events/:id/check",
    "schemaPath": "/events/{id}/check",
    "operationId": "postEventsByIdCheck",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/events/:id/checks",
    "path": "/api/v1/events/:id/checks",
    "schemaPath": "/events/{id}/checks",
    "operationId": "getEventsByIdChecks",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/events/:id/schedule",
    "path": "/api/v1/events/:id/schedule",
    "schemaPath": "/events/{id}/schedule",
    "operationId": "postEventsByIdSchedule",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/events/:id/snooze",
    "path": "/api/v1/events/:id/snooze",
    "schemaPath": "/events/{id}/snooze",
    "operationId": "postEventsByIdSnooze",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/events/:id/end",
    "path": "/api/v1/events/:id/end",
    "schemaPath": "/events/{id}/end",
    "operationId": "postEventsByIdEnd",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/events/:id/confirm",
    "path": "/api/v1/events/:id/confirm",
    "schemaPath": "/events/{id}/confirm",
    "operationId": "postEventsByIdConfirm",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/events/:id/image/:imageId",
    "path": "/api/v1/events/:id/image/:imageId",
    "schemaPath": "/events/{id}/image/{imageId}",
    "operationId": "getEventsByIdImageByImageId",
    "coverage": "reviewed",
    "transport": "binary"
  },
  {
    "method": "GET",
    "legacy": "/api/computer-files",
    "path": "/api/v1/computer-files",
    "schemaPath": "/computer-files",
    "operationId": "getComputerFiles",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/computer-files/import",
    "path": "/api/v1/computer-files/import",
    "schemaPath": "/computer-files/import",
    "operationId": "postComputerFilesImport",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/import",
    "path": "/api/v1/import",
    "schemaPath": "/import",
    "operationId": "postImport",
    "coverage": "reviewed",
    "transport": "multipart"
  },
  {
    "method": "POST",
    "legacy": "/api/notes/:id/images",
    "path": "/api/v1/notes/:id/images",
    "schemaPath": "/notes/{id}/images",
    "operationId": "postNotesByIdImages",
    "coverage": "reviewed",
    "transport": "multipart"
  },
  {
    "method": "DELETE",
    "legacy": "/api/notes/:id/images/:attachment",
    "path": "/api/v1/notes/:id/images/:attachment",
    "schemaPath": "/notes/{id}/images/{attachment}",
    "operationId": "deleteNotesByIdImagesByAttachment",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/notes/:id/file/:attachment",
    "path": "/api/v1/notes/:id/file/:attachment",
    "schemaPath": "/notes/{id}/file/{attachment}",
    "operationId": "getNotesByIdFileByAttachment",
    "coverage": "reviewed",
    "transport": "binary"
  },
  {
    "method": "POST",
    "legacy": "/api/search-brief",
    "path": "/api/v1/search-brief",
    "schemaPath": "/search-brief",
    "operationId": "postSearchBrief",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/threads/:id/context",
    "path": "/api/v1/threads/:id/context",
    "schemaPath": "/threads/{id}/context",
    "operationId": "getThreadsByIdContext",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/threads/:id/context",
    "path": "/api/v1/threads/:id/context",
    "schemaPath": "/threads/{id}/context",
    "operationId": "postThreadsByIdContext",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/ask",
    "path": "/api/v1/ask",
    "schemaPath": "/ask",
    "operationId": "postAsk",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/conversations/:id",
    "path": "/api/v1/conversations/:id",
    "schemaPath": "/conversations/{id}",
    "operationId": "getConversationsById",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "DELETE",
    "legacy": "/api/conversations/:id",
    "path": "/api/v1/conversations/:id",
    "schemaPath": "/conversations/{id}",
    "operationId": "deleteConversationsById",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "PATCH",
    "legacy": "/api/conversations/:id/memory-proposals/:index",
    "path": "/api/v1/conversations/:id/memory-proposals/:index",
    "schemaPath": "/conversations/{id}/memory-proposals/{index}",
    "operationId": "patchConversationsByIdMemoryProposalsByIndex",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/conversations/:id/memory-review",
    "path": "/api/v1/conversations/:id/memory-review",
    "schemaPath": "/conversations/{id}/memory-review",
    "operationId": "postConversationsByIdMemoryReview",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "DELETE",
    "legacy": "/api/threads/:id",
    "path": "/api/v1/threads/:id",
    "schemaPath": "/threads/{id}",
    "operationId": "deleteThreadsById",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/tasks",
    "path": "/api/v1/tasks",
    "schemaPath": "/tasks",
    "operationId": "postTasks",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/artifacts/:id",
    "path": "/api/v1/artifacts/:id",
    "schemaPath": "/artifacts/{id}",
    "operationId": "getArtifactsById",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "PATCH",
    "legacy": "/api/artifacts/:id",
    "path": "/api/v1/artifacts/:id",
    "schemaPath": "/artifacts/{id}",
    "operationId": "patchArtifactsById",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "DELETE",
    "legacy": "/api/artifacts/:id",
    "path": "/api/v1/artifacts/:id",
    "schemaPath": "/artifacts/{id}",
    "operationId": "deleteArtifactsById",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/artifacts/:id/download",
    "path": "/api/v1/artifacts/:id/download",
    "schemaPath": "/artifacts/{id}/download",
    "operationId": "getArtifactsByIdDownload",
    "coverage": "reviewed",
    "transport": "binary"
  },
  {
    "method": "POST",
    "legacy": "/api/memories",
    "path": "/api/v1/memories",
    "schemaPath": "/memories",
    "operationId": "postMemories",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/memories/:id/source-review",
    "path": "/api/v1/memories/:id/source-review",
    "schemaPath": "/memories/{id}/source-review",
    "operationId": "getMemoriesByIdSourceReview",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "PATCH",
    "legacy": "/api/memories/:id",
    "path": "/api/v1/memories/:id",
    "schemaPath": "/memories/{id}",
    "operationId": "patchMemoriesById",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "DELETE",
    "legacy": "/api/memories/:id",
    "path": "/api/v1/memories/:id",
    "schemaPath": "/memories/{id}",
    "operationId": "deleteMemoriesById",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/settings",
    "path": "/api/v1/settings",
    "schemaPath": "/settings",
    "operationId": "getSettings",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "PATCH",
    "legacy": "/api/settings",
    "path": "/api/v1/settings",
    "schemaPath": "/settings",
    "operationId": "patchSettings",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/settings/test",
    "path": "/api/v1/settings/test",
    "schemaPath": "/settings/test",
    "operationId": "postSettingsTest",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/ai/logs",
    "path": "/api/v1/ai/logs",
    "schemaPath": "/ai/logs",
    "operationId": "getAiLogs",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/export",
    "path": "/api/v1/export",
    "schemaPath": "/export",
    "operationId": "getExport",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/notes/:id/transcript-history",
    "path": "/api/v1/notes/:id/transcript-history",
    "schemaPath": "/notes/{id}/transcript-history",
    "operationId": "getNotesByIdTranscriptHistory",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/notes/:id/transcription",
    "path": "/api/v1/notes/:id/transcription",
    "schemaPath": "/notes/{id}/transcription",
    "operationId": "getNotesByIdTranscription",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/notes/:id/transcription",
    "path": "/api/v1/notes/:id/transcription",
    "schemaPath": "/notes/{id}/transcription",
    "operationId": "postNotesByIdTranscription",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "PATCH",
    "legacy": "/api/notes/:id/transcript",
    "path": "/api/v1/notes/:id/transcript",
    "schemaPath": "/notes/{id}/transcript",
    "operationId": "patchNotesByIdTranscript",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/notes/:id/processing",
    "path": "/api/v1/notes/:id/processing",
    "schemaPath": "/notes/{id}/processing",
    "operationId": "getNotesByIdProcessing",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/notes/:id/processing",
    "path": "/api/v1/notes/:id/processing",
    "schemaPath": "/notes/{id}/processing",
    "operationId": "postNotesByIdProcessing",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/pet/reminders",
    "path": "/api/v1/pet/reminders",
    "schemaPath": "/pet/reminders",
    "operationId": "getPetReminders",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/supervision/recap",
    "path": "/api/v1/supervision/recap",
    "schemaPath": "/supervision/recap",
    "operationId": "getSupervisionRecap",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/supervision/recap",
    "path": "/api/v1/supervision/recap",
    "schemaPath": "/supervision/recap",
    "operationId": "postSupervisionRecap",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/work-tasks/settings",
    "path": "/api/v1/work-tasks/settings",
    "schemaPath": "/work-tasks/settings",
    "operationId": "getWorkTasksSettings",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/work-tasks/settings",
    "path": "/api/v1/work-tasks/settings",
    "schemaPath": "/work-tasks/settings",
    "operationId": "postWorkTasksSettings",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/work-runs/:id/evidence-history",
    "path": "/api/v1/work-runs/:id/evidence-history",
    "schemaPath": "/work-runs/{id}/evidence-history",
    "operationId": "getWorkRunsByIdEvidenceHistory",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/work-runs/:id/evidence-history/:checkId",
    "path": "/api/v1/work-runs/:id/evidence-history/:checkId",
    "schemaPath": "/work-runs/{id}/evidence-history/{checkId}",
    "operationId": "getWorkRunsByIdEvidenceHistoryByCheckId",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/work-runs/:id/evidence-options",
    "path": "/api/v1/work-runs/:id/evidence-options",
    "schemaPath": "/work-runs/{id}/evidence-options",
    "operationId": "getWorkRunsByIdEvidenceOptions",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/work-runs/:id/evidence-sources",
    "path": "/api/v1/work-runs/:id/evidence-sources",
    "schemaPath": "/work-runs/{id}/evidence-sources",
    "operationId": "getWorkRunsByIdEvidenceSources",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/work-tasks",
    "path": "/api/v1/work-tasks",
    "schemaPath": "/work-tasks",
    "operationId": "getWorkTasks",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/work-tasks",
    "path": "/api/v1/work-tasks",
    "schemaPath": "/work-tasks",
    "operationId": "postWorkTasks",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "GET",
    "legacy": "/api/work-tasks/:id/artifacts/:artifactId",
    "path": "/api/v1/work-tasks/:id/artifacts/:artifactId",
    "schemaPath": "/work-tasks/{id}/artifacts/{artifactId}",
    "operationId": "getWorkTasksByIdArtifactsByArtifactId",
    "coverage": "reviewed",
    "transport": "binary"
  },
  {
    "method": "POST",
    "legacy": "/api/work-tasks/:id/conditions",
    "path": "/api/v1/work-tasks/:id/conditions",
    "schemaPath": "/work-tasks/{id}/conditions",
    "operationId": "postWorkTasksByIdConditions",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/work-tasks/:id/action",
    "path": "/api/v1/work-tasks/:id/action",
    "schemaPath": "/work-tasks/{id}/action",
    "operationId": "postWorkTasksByIdAction",
    "coverage": "reviewed",
    "transport": "json"
  },
  {
    "method": "POST",
    "legacy": "/api/work-runs/:id/action",
    "path": "/api/v1/work-runs/:id/action",
    "schemaPath": "/work-runs/{id}/action",
    "operationId": "postWorkRunsByIdAction",
    "coverage": "reviewed",
    "transport": "json"
  }
];
