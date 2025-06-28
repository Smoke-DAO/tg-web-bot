# Implementation Rules

## Architecture Documentation
1) **Consult Architecture:** Always review `ARCHITECTURE.md` before starting implementation.
2) **Implement Task:** Implement the required changes based on the request.
3) **Update Architecture:** Update `ARCHITECTURE.md` if the changes impact the design. Create `ARCHITECTURE.md` if it doesn't exist.

## Implementation Planning
1) **Create Plan:** Before coding, create `IMPLEMENTATION_PLAN.md`.
2) **Detail Steps:** Outline all implementation steps/tasks in `IMPLEMENTATION_PLAN.md`. Use checkboxes (`- [ ]`) for tasks.
3) **Confirm Plan:** Get explicit confirmation of the plan before starting implementation.
4) **Track Progress:** During implementation, mark completed tasks in `IMPLEMENTATION_PLAN.md` (`- [x]`).
5) **Remove Plan:** Once all tasks in `IMPLEMENTATION_PLAN.md` are complete, delete the file.

## Testing Policy
1) **Write Tests Only When Asked:** Do not write unit tests, integration tests, or any other form of tests unless explicitly instructed to do so in the request.
2) **Do Not Suggest Tests:** Do not include test writing tasks in the `IMPLEMENTATION_PLAN.md` unless tests were explicitly requested.

## Utility Usage
1) **Verify Existence First:** Before attempting to import or use any utility function, class, or module (e.g., loggers, helpers, date formatters), **verify its existence** within the current project codebase (e.g., using file listing/search tools). Do not assume utilities exist based on common patterns.
2) **Use Existing Utilities:** If a verified utility exists, use it.
3) **Do Not Invent Utilities:** Do not introduce new utility functions or modules unless specifically requested by the user.
4) **Confirm New Utilities:** If proposing the use or creation of a new utility (like a logger), explicitly ask for confirmation before implementing or using it.

## Code Commenting
1) **Avoid Redundant Comments:** Do not add comments that merely explain *what* the code is doing (e.g., `// increment counter`). The code must be self-explanatory.
2) **Explain the "Why":** Only add comments to explain the *reason* behind a specific implementation choice, complex logic, or workarounds, if it's not immediately obvious from the code itself.
3) **No Change Comments:** Do not add comments indicating *that* a change was made (e.g., `// Added by AI`). Version control handles the history of changes.
