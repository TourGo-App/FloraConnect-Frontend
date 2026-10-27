# FloraConnect Frontend ? Development Issue Backlog

23 issue drafts based on FloraConnect project scope v1.0.

**[Open Frontend GitHub Issues](https://github.com/TourGo-App/FloraConnect-Frontend/issues)**

**Publication status:** These are local drafts, not published GitHub Issues. Planning IDs below are not GitHub issue numbers. Issue creation was blocked by the connected integration permissions.

Each task includes its scope, priority, relative size, dependencies, acceptance criteria and verification expectations. Request maintainer assignment before starting work. Existing foundation work is identified for validation rather than reimplementation.

## Issue index

| ID | Task | Phase | Priority | Size |
| --- | --- | --- | --- | --- |
| [INF-02](#inf-02) | Initialize React + Vite + TypeScript | 1 | P0 | S |
| [INF-04](#inf-04) | Create shared design system | 1 | P0 | M |
| [INF-06](#inf-06) | API client and environment configuration | 1 | P0 | S |
| [INF-08](#inf-08) | Frontend CI and test baseline | 1 | P0 | M |
| [AUTH-03](#auth-03) | Registration and login pages | 2 | P0 | M |
| [AUTH-06](#auth-06) | Member profile and account settings | 2 | P0 | M |
| [ASC-03](#asc-03) | Association discovery pages | 2 | P0 | M |
| [ASC-05](#asc-05) | Membership application and status UI | 2 | P0 | M |
| [ASC-06](#asc-06) | Association staff management dashboard | 2 | P0 | L |
| [FLW-04](#flw-04) | Flower listing creation and editing | 2 | P0 | L |
| [FLW-05](#flw-05) | Public flower catalogue | 2 | P0 | M |
| [FLW-07](#flw-07) | Catalogue search and filtering UI | 2 | P0 | M |
| [ANN-02](#ann-02) | Announcement feed and management UI | 2 | P0 | M |
| [EVT-02](#evt-02) | Events discovery and organizer pages | 3 | P1 | M |
| [EVT-04](#evt-04) | Event registration and attendance UI | 3 | P1 | M |
| [COM-02](#com-02) | Community discussion pages | 3 | P1 | L |
| [NOT-02](#not-02) | Notification center | 3 | P1 | M |
| [MKT-02](#mkt-02) | Buyer and seller inquiry dashboards | 4 | P1 | L |
| [ADM-02](#adm-02) | Platform administration dashboard | 4 | P1 | L |
| [ADM-04](#adm-04) | Association and platform analytics UI | 4 | P2 | M |
| [QLT-01](#qlt-01) | Accessibility and keyboard navigation audit | 5 | P1 | M |
| [QLT-03](#qlt-03) | Performance and bundle optimization | 5 | P2 | M |
| [QLT-05](#qlt-05) | Sinhala and Tamil localization foundation | 5 | P2 | L |

P0 = MVP critical ? P1 = Important ? P2 = Enhancement. S/M/L are relative sizes, not delivery dates.

## Detailed issue drafts

<a id="inf-02"></a>

### [INF-02] Initialize React + Vite + TypeScript

#### Objective
Validate and document the existing frontend starter and deployed sample homepage.

#### Planning metadata
- Planning ID: **INF-02** (scope v1.0; not a GitHub issue number)
- Repository: **TourGo-App/FloraConnect-Frontend**
- Phase: **1**
- Priority: **P0** (MVP critical)
- Relative size: **S** — not a fixed duration; split large work into reviewable PRs.
- Current status: **Implemented baseline — validation and contributor handoff remain**

#### Acceptance criteria
- [ ] Confirm React 19, Vite, strict TypeScript and Tailwind compile from npm ci.
- [ ] Run lint and production build; verify the homepage renders at desktop and mobile sizes.
- [ ] Verify Vercel uses the Vite preset, npm run build and dist output; preserve explicit vercel.json.
- [ ] Document src/main.tsx, src/App.tsx and the distinction between local sample profiles and live backend health.

#### Dependencies
- No feature dependency; start from the current repository baseline.

#### Verification and PR evidence
- Include automated tests appropriate to the behavior and important failure/permission cases; explain any test gaps.
- Run the repository's existing checks and include results plus setup/migration/API-contract changes in the PR.
- Include desktop/mobile screenshots and keyboard verification for UI changes; mock APIs in isolated tests and verify the integration against the paired backend.

#### Scope and contributor workflow
- Follow FloraConnect scope v1.0: Sri Lankan growers, nurseries, associations and enthusiasts; modular REST API and the existing React/Vite or Express/TypeScript stack.
- Preserve backend-enforced roles, ownership, association/chapter scope and private member data. Frontend visibility is not authorization.
- Initial releases exclude online payments/order fulfillment, shipping, automatic government integration or endorsement, AI diagnosis, native mobile apps and advanced real-time chat.
- Request maintainer assignment before starting; no contributor is assigned by this issue. Use a focused branch and link this issue in the PR. Maintainer review and passing CI precede merge.
- Do not change repository ownership/license notices or grant access to private TourGo repositories as part of this task.


---

<a id="inf-04"></a>

### [INF-04] Create shared design system

#### Objective
Extract the botanical sample design into reusable accessible UI primitives.

#### Planning metadata
- Planning ID: **INF-04** (scope v1.0; not a GitHub issue number)
- Repository: **TourGo-App/FloraConnect-Frontend**
- Phase: **1**
- Priority: **P0** (MVP critical)
- Relative size: **M** — not a fixed duration; split large work into reviewable PRs.
- Current status: **Not started**

#### Acceptance criteria
- [ ] Define shared colors, spacing, typography and responsive layout tokens.
- [ ] Provide Button, Input, Select, Textarea, Card, Badge, dialog and loading/error/empty states.
- [ ] Support labels, descriptions, validation messages, visible focus and keyboard interaction.
- [ ] Demonstrate components on a local development example and check mobile/tablet/desktop layouts.

#### Dependencies
- **INF-02** — Initialize React + Vite + TypeScript (Frontend).

#### Verification and PR evidence
- Include automated tests appropriate to the behavior and important failure/permission cases; explain any test gaps.
- Run the repository's existing checks and include results plus setup/migration/API-contract changes in the PR.
- Include desktop/mobile screenshots and keyboard verification for UI changes; mock APIs in isolated tests and verify the integration against the paired backend.

#### Scope and contributor workflow
- Follow FloraConnect scope v1.0: Sri Lankan growers, nurseries, associations and enthusiasts; modular REST API and the existing React/Vite or Express/TypeScript stack.
- Preserve backend-enforced roles, ownership, association/chapter scope and private member data. Frontend visibility is not authorization.
- Initial releases exclude online payments/order fulfillment, shipping, automatic government integration or endorsement, AI diagnosis, native mobile apps and advanced real-time chat.
- Request maintainer assignment before starting; no contributor is assigned by this issue. Use a focused branch and link this issue in the PR. Maintainer review and passing CI precede merge.
- Do not change repository ownership/license notices or grant access to private TourGo repositories as part of this task.


---

<a id="inf-06"></a>

### [INF-06] API client and environment configuration

#### Objective
Extend the existing health connection into a reusable typed API layer.

#### Planning metadata
- Planning ID: **INF-06** (scope v1.0; not a GitHub issue number)
- Repository: **TourGo-App/FloraConnect-Frontend**
- Phase: **1**
- Priority: **P0** (MVP critical)
- Relative size: **S** — not a fixed duration; split large work into reviewable PRs.
- Current status: **Health fetch, environment override and retry already implemented — shared feature API layer remains**

#### Acceptance criteria
- [ ] Preserve production/backend defaults and VITE_API_BASE_URL override; normalize URL joining and validate configuration.
- [ ] Centralize JSON requests, cancellation, timeouts, response validation and user-safe errors; use Axios and TanStack Query for feature APIs.
- [ ] Define cookie credential handling with the backend contract and add the query provider; never put secrets in VITE variables.
- [ ] Test success, non-JSON/error responses, timeout/cancellation and retry; preserve the working footer health status.

#### Dependencies
- **INF-02** — Initialize React + Vite + TypeScript (Frontend).
- **INF-05** — API standards and OpenAPI specification (Backend).

#### Verification and PR evidence
- Include automated tests appropriate to the behavior and important failure/permission cases; explain any test gaps.
- Run the repository's existing checks and include results plus setup/migration/API-contract changes in the PR.
- Include desktop/mobile screenshots and keyboard verification for UI changes; mock APIs in isolated tests and verify the integration against the paired backend.

#### Scope and contributor workflow
- Follow FloraConnect scope v1.0: Sri Lankan growers, nurseries, associations and enthusiasts; modular REST API and the existing React/Vite or Express/TypeScript stack.
- Preserve backend-enforced roles, ownership, association/chapter scope and private member data. Frontend visibility is not authorization.
- Initial releases exclude online payments/order fulfillment, shipping, automatic government integration or endorsement, AI diagnosis, native mobile apps and advanced real-time chat.
- Request maintainer assignment before starting; no contributor is assigned by this issue. Use a focused branch and link this issue in the PR. Maintainer review and passing CI precede merge.
- Do not change repository ownership/license notices or grant access to private TourGo repositories as part of this task.


---

<a id="inf-08"></a>

### [INF-08] Frontend CI and test baseline

#### Objective
Provide repeatable frontend quality gates for onboarding PRs.

#### Planning metadata
- Planning ID: **INF-08** (scope v1.0; not a GitHub issue number)
- Repository: **TourGo-App/FloraConnect-Frontend**
- Phase: **1**
- Priority: **P0** (MVP critical)
- Relative size: **M** — not a fixed duration; split large work into reviewable PRs.
- Current status: **Not started**

#### Acceptance criteria
- [ ] Add PR/main CI using npm ci, lint, typecheck, component tests and production build.
- [ ] Configure Vitest, React Testing Library and mocked API responses without depending on production uptime.
- [ ] Test health connected/loading/failure/retry and grower filter behavior.
- [ ] Add a Playwright smoke path for the homepage and document how to run/report checks locally.

#### Dependencies
- **INF-02** — Initialize React + Vite + TypeScript (Frontend).
- **INF-06** — API client and environment configuration (Frontend).

#### Verification and PR evidence
- Include automated tests appropriate to the behavior and important failure/permission cases; explain any test gaps.
- Run the repository's existing checks and include results plus setup/migration/API-contract changes in the PR.
- Include desktop/mobile screenshots and keyboard verification for UI changes; mock APIs in isolated tests and verify the integration against the paired backend.

#### Scope and contributor workflow
- Follow FloraConnect scope v1.0: Sri Lankan growers, nurseries, associations and enthusiasts; modular REST API and the existing React/Vite or Express/TypeScript stack.
- Preserve backend-enforced roles, ownership, association/chapter scope and private member data. Frontend visibility is not authorization.
- Initial releases exclude online payments/order fulfillment, shipping, automatic government integration or endorsement, AI diagnosis, native mobile apps and advanced real-time chat.
- Request maintainer assignment before starting; no contributor is assigned by this issue. Use a focused branch and link this issue in the PR. Maintainer review and passing CI precede merge.
- Do not change repository ownership/license notices or grant access to private TourGo repositories as part of this task.


---

<a id="auth-03"></a>

### [AUTH-03] Registration and login pages

#### Objective
Build accessible registration, login and logout journeys.

#### Planning metadata
- Planning ID: **AUTH-03** (scope v1.0; not a GitHub issue number)
- Repository: **TourGo-App/FloraConnect-Frontend**
- Phase: **2**
- Priority: **P0** (MVP critical)
- Relative size: **M** — not a fixed duration; split large work into reviewable PRs.
- Current status: **Not started**

#### Acceptance criteria
- [ ] Add React Router routes and React Hook Form + Zod validation matching backend requirements.
- [ ] Submit through the shared client using cookies; never store JWTs in browser storage.
- [ ] Show field/server errors, pending states and session-expired feedback; prevent duplicate submissions.
- [ ] Restore the current user on refresh, support safe in-app return paths and test success, failure and logout.

#### Dependencies
- **INF-04** — Create shared design system (Frontend).
- **INF-06** — API client and environment configuration (Frontend).
- **AUTH-01** — User registration API (Backend).
- **AUTH-02** — Login, logout and session management (Backend).

#### Verification and PR evidence
- Include automated tests appropriate to the behavior and important failure/permission cases; explain any test gaps.
- Run the repository's existing checks and include results plus setup/migration/API-contract changes in the PR.
- Include desktop/mobile screenshots and keyboard verification for UI changes; mock APIs in isolated tests and verify the integration against the paired backend.

#### Scope and contributor workflow
- Follow FloraConnect scope v1.0: Sri Lankan growers, nurseries, associations and enthusiasts; modular REST API and the existing React/Vite or Express/TypeScript stack.
- Preserve backend-enforced roles, ownership, association/chapter scope and private member data. Frontend visibility is not authorization.
- Initial releases exclude online payments/order fulfillment, shipping, automatic government integration or endorsement, AI diagnosis, native mobile apps and advanced real-time chat.
- Request maintainer assignment before starting; no contributor is assigned by this issue. Use a focused branch and link this issue in the PR. Maintainer review and passing CI precede merge.
- Do not change repository ownership/license notices or grant access to private TourGo repositories as part of this task.


---

<a id="auth-06"></a>

### [AUTH-06] Member profile and account settings

#### Objective
Let members view and update their own profile.

#### Planning metadata
- Planning ID: **AUTH-06** (scope v1.0; not a GitHub issue number)
- Repository: **TourGo-App/FloraConnect-Frontend**
- Phase: **2**
- Priority: **P0** (MVP critical)
- Relative size: **M** — not a fixed duration; split large work into reviewable PRs.
- Current status: **Not started**

#### Acceptance criteria
- [ ] Build protected profile/settings pages backed by GET/PATCH /api/users/me.
- [ ] Validate editable display/contact/growing fields and clearly separate public from private information.
- [ ] Handle pending, successful save, validation, expired sessions and unsaved edits.
- [ ] Test that role changes are unavailable in the UI and unauthorized API responses are handled; hiding controls must not be the authorization boundary.

#### Dependencies
- **AUTH-03** — Registration and login pages (Frontend).
- **AUTH-02** — Login, logout and session management (Backend).
- **INF-04** — Create shared design system (Frontend).

#### Verification and PR evidence
- Include automated tests appropriate to the behavior and important failure/permission cases; explain any test gaps.
- Run the repository's existing checks and include results plus setup/migration/API-contract changes in the PR.
- Include desktop/mobile screenshots and keyboard verification for UI changes; mock APIs in isolated tests and verify the integration against the paired backend.

#### Scope and contributor workflow
- Follow FloraConnect scope v1.0: Sri Lankan growers, nurseries, associations and enthusiasts; modular REST API and the existing React/Vite or Express/TypeScript stack.
- Preserve backend-enforced roles, ownership, association/chapter scope and private member data. Frontend visibility is not authorization.
- Initial releases exclude online payments/order fulfillment, shipping, automatic government integration or endorsement, AI diagnosis, native mobile apps and advanced real-time chat.
- Request maintainer assignment before starting; no contributor is assigned by this issue. Use a focused branch and link this issue in the PR. Maintainer review and passing CI precede merge.
- Do not change repository ownership/license notices or grant access to private TourGo repositories as part of this task.


---

<a id="asc-03"></a>

### [ASC-03] Association discovery pages

#### Objective
Help visitors find associations and regional chapters.

#### Planning metadata
- Planning ID: **ASC-03** (scope v1.0; not a GitHub issue number)
- Repository: **TourGo-App/FloraConnect-Frontend**
- Phase: **2**
- Priority: **P0** (MVP critical)
- Relative size: **M** — not a fixed duration; split large work into reviewable PRs.
- Current status: **Not started**

#### Acceptance criteria
- [ ] Add public directory/detail routes with searchable paginated associations and chapter information.
- [ ] Use API data, query-backed navigation and loading/error/empty states.
- [ ] Provide responsive accessible cards and safe rendering of association descriptions.
- [ ] Offer context-appropriate sign-in/application links and test deep-link navigation and API failure.

#### Dependencies
- **ASC-02** — Association directory and detail APIs (Backend).
- **INF-04** — Create shared design system (Frontend).
- **INF-06** — API client and environment configuration (Frontend).

#### Verification and PR evidence
- Include automated tests appropriate to the behavior and important failure/permission cases; explain any test gaps.
- Run the repository's existing checks and include results plus setup/migration/API-contract changes in the PR.
- Include desktop/mobile screenshots and keyboard verification for UI changes; mock APIs in isolated tests and verify the integration against the paired backend.

#### Scope and contributor workflow
- Follow FloraConnect scope v1.0: Sri Lankan growers, nurseries, associations and enthusiasts; modular REST API and the existing React/Vite or Express/TypeScript stack.
- Preserve backend-enforced roles, ownership, association/chapter scope and private member data. Frontend visibility is not authorization.
- Initial releases exclude online payments/order fulfillment, shipping, automatic government integration or endorsement, AI diagnosis, native mobile apps and advanced real-time chat.
- Request maintainer assignment before starting; no contributor is assigned by this issue. Use a focused branch and link this issue in the PR. Maintainer review and passing CI precede merge.
- Do not change repository ownership/license notices or grant access to private TourGo repositories as part of this task.


---

<a id="asc-05"></a>

### [ASC-05] Membership application and status UI

#### Objective
Let members apply and understand their membership state.

#### Planning metadata
- Planning ID: **ASC-05** (scope v1.0; not a GitHub issue number)
- Repository: **TourGo-App/FloraConnect-Frontend**
- Phase: **2**
- Priority: **P0** (MVP critical)
- Relative size: **M** — not a fixed duration; split large work into reviewable PRs.
- Current status: **Not started**

#### Acceptance criteria
- [ ] Add validated association/chapter application form and own-application status page.
- [ ] Display pending, approved, rejected and other supported states with permitted follow-up actions.
- [ ] Prevent duplicate submissions and refresh relevant queries after changes.
- [ ] Test sign-in redirect, conflict responses, rejection feedback and inaccessible applications.

#### Dependencies
- **ASC-03** — Association discovery pages (Frontend).
- **ASC-04** — Membership application workflow (Backend).
- **AUTH-03** — Registration and login pages (Frontend).

#### Verification and PR evidence
- Include automated tests appropriate to the behavior and important failure/permission cases; explain any test gaps.
- Run the repository's existing checks and include results plus setup/migration/API-contract changes in the PR.
- Include desktop/mobile screenshots and keyboard verification for UI changes; mock APIs in isolated tests and verify the integration against the paired backend.

#### Scope and contributor workflow
- Follow FloraConnect scope v1.0: Sri Lankan growers, nurseries, associations and enthusiasts; modular REST API and the existing React/Vite or Express/TypeScript stack.
- Preserve backend-enforced roles, ownership, association/chapter scope and private member data. Frontend visibility is not authorization.
- Initial releases exclude online payments/order fulfillment, shipping, automatic government integration or endorsement, AI diagnosis, native mobile apps and advanced real-time chat.
- Request maintainer assignment before starting; no contributor is assigned by this issue. Use a focused branch and link this issue in the PR. Maintainer review and passing CI precede merge.
- Do not change repository ownership/license notices or grant access to private TourGo repositories as part of this task.


---

<a id="asc-06"></a>

### [ASC-06] Association staff management dashboard

#### Objective
Provide scoped membership review for administrators and coordinators.

#### Planning metadata
- Planning ID: **ASC-06** (scope v1.0; not a GitHub issue number)
- Repository: **TourGo-App/FloraConnect-Frontend**
- Phase: **2**
- Priority: **P0** (MVP critical)
- Relative size: **L** — not a fixed duration; split large work into reviewable PRs.
- Current status: **Not started**

#### Acceptance criteria
- [ ] Build role-aware dashboard with assigned association/chapter context and paginated/filterable requests.
- [ ] Support approve/reject confirmation, reason capture and clear success/error feedback.
- [ ] Handle concurrent decisions and stale rows with refetch/invalidation.
- [ ] Test association/region scope, denied responses and keyboard workflows; the backend remains authoritative.

#### Dependencies
- **ASC-04** — Membership application workflow (Backend).
- **ASC-05** — Membership application and status UI (Frontend).
- **AUTH-05** — Role-based authorization (Backend).

#### Verification and PR evidence
- Include automated tests appropriate to the behavior and important failure/permission cases; explain any test gaps.
- Run the repository's existing checks and include results plus setup/migration/API-contract changes in the PR.
- Include desktop/mobile screenshots and keyboard verification for UI changes; mock APIs in isolated tests and verify the integration against the paired backend.

#### Scope and contributor workflow
- Follow FloraConnect scope v1.0: Sri Lankan growers, nurseries, associations and enthusiasts; modular REST API and the existing React/Vite or Express/TypeScript stack.
- Preserve backend-enforced roles, ownership, association/chapter scope and private member data. Frontend visibility is not authorization.
- Initial releases exclude online payments/order fulfillment, shipping, automatic government integration or endorsement, AI diagnosis, native mobile apps and advanced real-time chat.
- Request maintainer assignment before starting; no contributor is assigned by this issue. Use a focused branch and link this issue in the PR. Maintainer review and passing CI precede merge.
- Do not change repository ownership/license notices or grant access to private TourGo repositories as part of this task.


---

<a id="flw-04"></a>

### [FLW-04] Flower listing creation and editing

#### Objective
Build grower listing forms and a listing management view.

#### Planning metadata
- Planning ID: **FLW-04** (scope v1.0; not a GitHub issue number)
- Repository: **TourGo-App/FloraConnect-Frontend**
- Phase: **2**
- Priority: **P0** (MVP critical)
- Relative size: **L** — not a fixed duration; split large work into reviewable PRs.
- Current status: **Not started**

#### Acceptance criteria
- [ ] Create owner listing dashboard plus create/edit forms with category, description, location and availability validation.
- [ ] Integrate signed image uploads with preview, order/removal and size/count feedback.
- [ ] Support drafts/submission for review and show moderation status; preserve edits on recoverable errors.
- [ ] Test upload failure, duplicate submit, expired login and unauthorized edits using mocked API contracts.

#### Dependencies
- **FLW-02** — Flower listing CRUD API (Backend).
- **FLW-03** — Secure image upload integration (Backend).
- **AUTH-03** — Registration and login pages (Frontend).
- **INF-04** — Create shared design system (Frontend).

#### Verification and PR evidence
- Include automated tests appropriate to the behavior and important failure/permission cases; explain any test gaps.
- Run the repository's existing checks and include results plus setup/migration/API-contract changes in the PR.
- Include desktop/mobile screenshots and keyboard verification for UI changes; mock APIs in isolated tests and verify the integration against the paired backend.

#### Scope and contributor workflow
- Follow FloraConnect scope v1.0: Sri Lankan growers, nurseries, associations and enthusiasts; modular REST API and the existing React/Vite or Express/TypeScript stack.
- Preserve backend-enforced roles, ownership, association/chapter scope and private member data. Frontend visibility is not authorization.
- Initial releases exclude online payments/order fulfillment, shipping, automatic government integration or endorsement, AI diagnosis, native mobile apps and advanced real-time chat.
- Request maintainer assignment before starting; no contributor is assigned by this issue. Use a focused branch and link this issue in the PR. Maintainer review and passing CI precede merge.
- Do not change repository ownership/license notices or grant access to private TourGo repositories as part of this task.


---

<a id="flw-05"></a>

### [FLW-05] Public flower catalogue

#### Objective
Replace sample catalogue flows with public published-listing browsing.

#### Planning metadata
- Planning ID: **FLW-05** (scope v1.0; not a GitHub issue number)
- Repository: **TourGo-App/FloraConnect-Frontend**
- Phase: **2**
- Priority: **P0** (MVP critical)
- Relative size: **M** — not a fixed duration; split large work into reviewable PRs.
- Current status: **Not started**

#### Acceptance criteria
- [ ] Add catalogue and listing detail routes using typed API responses and stable URLs.
- [ ] Show images, category, grower public profile, location and availability without leaking private contact fields.
- [ ] Handle loading, unavailable listings, empty lists and fetch failures responsively.
- [ ] Test visitor access, unpublished/missing listings, image fallback and accessible navigation.

#### Dependencies
- **FLW-02** — Flower listing CRUD API (Backend).
- **INF-06** — API client and environment configuration (Frontend).
- **INF-04** — Create shared design system (Frontend).

#### Verification and PR evidence
- Include automated tests appropriate to the behavior and important failure/permission cases; explain any test gaps.
- Run the repository's existing checks and include results plus setup/migration/API-contract changes in the PR.
- Include desktop/mobile screenshots and keyboard verification for UI changes; mock APIs in isolated tests and verify the integration against the paired backend.

#### Scope and contributor workflow
- Follow FloraConnect scope v1.0: Sri Lankan growers, nurseries, associations and enthusiasts; modular REST API and the existing React/Vite or Express/TypeScript stack.
- Preserve backend-enforced roles, ownership, association/chapter scope and private member data. Frontend visibility is not authorization.
- Initial releases exclude online payments/order fulfillment, shipping, automatic government integration or endorsement, AI diagnosis, native mobile apps and advanced real-time chat.
- Request maintainer assignment before starting; no contributor is assigned by this issue. Use a focused branch and link this issue in the PR. Maintainer review and passing CI precede merge.
- Do not change repository ownership/license notices or grant access to private TourGo repositories as part of this task.


---

<a id="flw-07"></a>

### [FLW-07] Catalogue search and filtering UI

#### Objective
Make catalogue search state shareable and navigable.

#### Planning metadata
- Planning ID: **FLW-07** (scope v1.0; not a GitHub issue number)
- Repository: **TourGo-App/FloraConnect-Frontend**
- Phase: **2**
- Priority: **P0** (MVP critical)
- Relative size: **M** — not a fixed duration; split large work into reviewable PRs.
- Current status: **Not started**

#### Acceptance criteria
- [ ] Add category/region/availability filters, text search, sorting and pagination using URL query parameters.
- [ ] Debounce search, cancel obsolete requests and reset pagination when filters change.
- [ ] Provide clear filters, result count and accessible empty/error states.
- [ ] Test browser back/forward, deep links, stale response races and small-screen controls.

#### Dependencies
- **FLW-05** — Public flower catalogue (Frontend).
- **FLW-06** — Catalogue search, filters and pagination (Backend).

#### Verification and PR evidence
- Include automated tests appropriate to the behavior and important failure/permission cases; explain any test gaps.
- Run the repository's existing checks and include results plus setup/migration/API-contract changes in the PR.
- Include desktop/mobile screenshots and keyboard verification for UI changes; mock APIs in isolated tests and verify the integration against the paired backend.

#### Scope and contributor workflow
- Follow FloraConnect scope v1.0: Sri Lankan growers, nurseries, associations and enthusiasts; modular REST API and the existing React/Vite or Express/TypeScript stack.
- Preserve backend-enforced roles, ownership, association/chapter scope and private member data. Frontend visibility is not authorization.
- Initial releases exclude online payments/order fulfillment, shipping, automatic government integration or endorsement, AI diagnosis, native mobile apps and advanced real-time chat.
- Request maintainer assignment before starting; no contributor is assigned by this issue. Use a focused branch and link this issue in the PR. Maintainer review and passing CI precede merge.
- Do not change repository ownership/license notices or grant access to private TourGo repositories as part of this task.


---

<a id="ann-02"></a>

### [ANN-02] Announcement feed and management UI

#### Objective
Show authorized notices and let scoped staff manage announcements.

#### Planning metadata
- Planning ID: **ANN-02** (scope v1.0; not a GitHub issue number)
- Repository: **TourGo-App/FloraConnect-Frontend**
- Phase: **2**
- Priority: **P0** (MVP critical)
- Relative size: **M** — not a fixed duration; split large work into reviewable PRs.
- Current status: **Not started**

#### Acceptance criteria
- [ ] Add member feed/detail with association/chapter filters and pagination.
- [ ] Provide scoped staff create/edit/publish/archive forms with visibility labels.
- [ ] Render content safely and handle empty/error/unauthorized states without displaying cached private content after logout.
- [ ] Test public/member visibility, role-aware actions, validation and query invalidation after publishing.

#### Dependencies
- **ANN-01** — Association announcement API (Backend).
- **AUTH-03** — Registration and login pages (Frontend).
- **ASC-06** — Association staff management dashboard (Frontend).

#### Verification and PR evidence
- Include automated tests appropriate to the behavior and important failure/permission cases; explain any test gaps.
- Run the repository's existing checks and include results plus setup/migration/API-contract changes in the PR.
- Include desktop/mobile screenshots and keyboard verification for UI changes; mock APIs in isolated tests and verify the integration against the paired backend.

#### Scope and contributor workflow
- Follow FloraConnect scope v1.0: Sri Lankan growers, nurseries, associations and enthusiasts; modular REST API and the existing React/Vite or Express/TypeScript stack.
- Preserve backend-enforced roles, ownership, association/chapter scope and private member data. Frontend visibility is not authorization.
- Initial releases exclude online payments/order fulfillment, shipping, automatic government integration or endorsement, AI diagnosis, native mobile apps and advanced real-time chat.
- Request maintainer assignment before starting; no contributor is assigned by this issue. Use a focused branch and link this issue in the PR. Maintainer review and passing CI precede merge.
- Do not change repository ownership/license notices or grant access to private TourGo repositories as part of this task.


---

<a id="evt-02"></a>

### [EVT-02] Events discovery and organizer pages

#### Objective
Provide accessible event browsing and scoped organizer editing.

#### Planning metadata
- Planning ID: **EVT-02** (scope v1.0; not a GitHub issue number)
- Repository: **TourGo-App/FloraConnect-Frontend**
- Phase: **3**
- Priority: **P1** (Important)
- Relative size: **M** — not a fixed duration; split large work into reviewable PRs.
- Current status: **Not started**

#### Acceptance criteria
- [ ] Add list/detail routes with date/location filters and visible timezone information.
- [ ] Build organizer create/edit/publish/cancel forms with field and server validation.
- [ ] Display eligibility, registration window, capacity and cancelled states.
- [ ] Test responsive layouts, inaccessible/unpublished events and date/time conversion.

#### Dependencies
- **EVT-01** — Events and exhibitions API (Backend).
- **INF-04** — Create shared design system (Frontend).
- **INF-06** — API client and environment configuration (Frontend).

#### Verification and PR evidence
- Include automated tests appropriate to the behavior and important failure/permission cases; explain any test gaps.
- Run the repository's existing checks and include results plus setup/migration/API-contract changes in the PR.
- Include desktop/mobile screenshots and keyboard verification for UI changes; mock APIs in isolated tests and verify the integration against the paired backend.

#### Scope and contributor workflow
- Follow FloraConnect scope v1.0: Sri Lankan growers, nurseries, associations and enthusiasts; modular REST API and the existing React/Vite or Express/TypeScript stack.
- Preserve backend-enforced roles, ownership, association/chapter scope and private member data. Frontend visibility is not authorization.
- Initial releases exclude online payments/order fulfillment, shipping, automatic government integration or endorsement, AI diagnosis, native mobile apps and advanced real-time chat.
- Request maintainer assignment before starting; no contributor is assigned by this issue. Use a focused branch and link this issue in the PR. Maintainer review and passing CI precede merge.
- Do not change repository ownership/license notices or grant access to private TourGo repositories as part of this task.


---

<a id="evt-04"></a>

### [EVT-04] Event registration and attendance UI

#### Objective
Implement member event registration and organizer attendance workflows.

#### Planning metadata
- Planning ID: **EVT-04** (scope v1.0; not a GitHub issue number)
- Repository: **TourGo-App/FloraConnect-Frontend**
- Phase: **3**
- Priority: **P1** (Important)
- Relative size: **M** — not a fixed duration; split large work into reviewable PRs.
- Current status: **Not started**

#### Acceptance criteria
- [ ] Show eligible registration/cancellation and the member's current participation state.
- [ ] Handle full events, closed windows, concurrent capacity changes and duplicate actions.
- [ ] Provide scoped organizer attendee view with accessible attendance controls.
- [ ] Test end-to-end registration/cancellation and handle expired authentication without losing context.

#### Dependencies
- **EVT-02** — Events discovery and organizer pages (Frontend).
- **EVT-03** — Event registration and capacity handling (Backend).
- **AUTH-03** — Registration and login pages (Frontend).

#### Verification and PR evidence
- Include automated tests appropriate to the behavior and important failure/permission cases; explain any test gaps.
- Run the repository's existing checks and include results plus setup/migration/API-contract changes in the PR.
- Include desktop/mobile screenshots and keyboard verification for UI changes; mock APIs in isolated tests and verify the integration against the paired backend.

#### Scope and contributor workflow
- Follow FloraConnect scope v1.0: Sri Lankan growers, nurseries, associations and enthusiasts; modular REST API and the existing React/Vite or Express/TypeScript stack.
- Preserve backend-enforced roles, ownership, association/chapter scope and private member data. Frontend visibility is not authorization.
- Initial releases exclude online payments/order fulfillment, shipping, automatic government integration or endorsement, AI diagnosis, native mobile apps and advanced real-time chat.
- Request maintainer assignment before starting; no contributor is assigned by this issue. Use a focused branch and link this issue in the PR. Maintainer review and passing CI precede merge.
- Do not change repository ownership/license notices or grant access to private TourGo repositories as part of this task.


---

<a id="com-02"></a>

### [COM-02] Community discussion pages

#### Objective
Let members read and contribute growing advice and discussions.

#### Planning metadata
- Planning ID: **COM-02** (scope v1.0; not a GitHub issue number)
- Repository: **TourGo-App/FloraConnect-Frontend**
- Phase: **3**
- Priority: **P1** (Important)
- Relative size: **L** — not a fixed duration; split large work into reviewable PRs.
- Current status: **Not started**

#### Acceptance criteria
- [ ] Build feed, discussion detail, new post and comment forms using shared API/query state.
- [ ] Show guidelines, author public metadata, timestamps and owner actions.
- [ ] Safely render user content; support loading/empty/error/deleted states and accessible threaded navigation.
- [ ] Test create/edit/delete permissions, pagination and session failure; no advanced real-time chat.

#### Dependencies
- **COM-01** — Community posts and comments API (Backend).
- **AUTH-03** — Registration and login pages (Frontend).
- **INF-04** — Create shared design system (Frontend).

#### Verification and PR evidence
- Include automated tests appropriate to the behavior and important failure/permission cases; explain any test gaps.
- Run the repository's existing checks and include results plus setup/migration/API-contract changes in the PR.
- Include desktop/mobile screenshots and keyboard verification for UI changes; mock APIs in isolated tests and verify the integration against the paired backend.

#### Scope and contributor workflow
- Follow FloraConnect scope v1.0: Sri Lankan growers, nurseries, associations and enthusiasts; modular REST API and the existing React/Vite or Express/TypeScript stack.
- Preserve backend-enforced roles, ownership, association/chapter scope and private member data. Frontend visibility is not authorization.
- Initial releases exclude online payments/order fulfillment, shipping, automatic government integration or endorsement, AI diagnosis, native mobile apps and advanced real-time chat.
- Request maintainer assignment before starting; no contributor is assigned by this issue. Use a focused branch and link this issue in the PR. Maintainer review and passing CI precede merge.
- Do not change repository ownership/license notices or grant access to private TourGo repositories as part of this task.


---

<a id="not-02"></a>

### [NOT-02] Notification center

#### Objective
Expose personal notifications without private cross-account caching.

#### Planning metadata
- Planning ID: **NOT-02** (scope v1.0; not a GitHub issue number)
- Repository: **TourGo-App/FloraConnect-Frontend**
- Phase: **3**
- Priority: **P1** (Important)
- Relative size: **M** — not a fixed duration; split large work into reviewable PRs.
- Current status: **Not started**

#### Acceptance criteria
- [ ] Add accessible unread indicator, notification list and read/unread actions supported by the API.
- [ ] Navigate to safe in-app targets and handle deleted/inaccessible referenced content.
- [ ] Invalidate unread counts after reads and clear member notification caches on logout/account change.
- [ ] Test empty/loading/error states, keyboard usage and recipient-specific behavior.

#### Dependencies
- **NOT-01** — In-app notification system (Backend).
- **INF-06** — API client and environment configuration (Frontend).
- **AUTH-03** — Registration and login pages (Frontend).

#### Verification and PR evidence
- Include automated tests appropriate to the behavior and important failure/permission cases; explain any test gaps.
- Run the repository's existing checks and include results plus setup/migration/API-contract changes in the PR.
- Include desktop/mobile screenshots and keyboard verification for UI changes; mock APIs in isolated tests and verify the integration against the paired backend.

#### Scope and contributor workflow
- Follow FloraConnect scope v1.0: Sri Lankan growers, nurseries, associations and enthusiasts; modular REST API and the existing React/Vite or Express/TypeScript stack.
- Preserve backend-enforced roles, ownership, association/chapter scope and private member data. Frontend visibility is not authorization.
- Initial releases exclude online payments/order fulfillment, shipping, automatic government integration or endorsement, AI diagnosis, native mobile apps and advanced real-time chat.
- Request maintainer assignment before starting; no contributor is assigned by this issue. Use a focused branch and link this issue in the PR. Maintainer review and passing CI precede merge.
- Do not change repository ownership/license notices or grant access to private TourGo repositories as part of this task.


---

<a id="mkt-02"></a>

### [MKT-02] Buyer and seller inquiry dashboards

#### Objective
Support inquiry creation and private buyer/seller inboxes.

#### Planning metadata
- Planning ID: **MKT-02** (scope v1.0; not a GitHub issue number)
- Repository: **TourGo-App/FloraConnect-Frontend**
- Phase: **4**
- Priority: **P1** (Important)
- Relative size: **L** — not a fixed duration; split large work into reviewable PRs.
- Current status: **Not started**

#### Acceptance criteria
- [ ] Add listing inquiry form plus paginated/filterable buyer and seller dashboards.
- [ ] Show conversation/status and seller response actions allowed by the server.
- [ ] Handle unavailable listings, expired sessions, validation and duplicate sends.
- [ ] Test participant isolation and accessible mobile interaction; no payment or order-fulfillment UI.

#### Dependencies
- **MKT-01** — Buyer inquiry and seller response APIs (Backend).
- **FLW-05** — Public flower catalogue (Frontend).
- **AUTH-03** — Registration and login pages (Frontend).

#### Verification and PR evidence
- Include automated tests appropriate to the behavior and important failure/permission cases; explain any test gaps.
- Run the repository's existing checks and include results plus setup/migration/API-contract changes in the PR.
- Include desktop/mobile screenshots and keyboard verification for UI changes; mock APIs in isolated tests and verify the integration against the paired backend.

#### Scope and contributor workflow
- Follow FloraConnect scope v1.0: Sri Lankan growers, nurseries, associations and enthusiasts; modular REST API and the existing React/Vite or Express/TypeScript stack.
- Preserve backend-enforced roles, ownership, association/chapter scope and private member data. Frontend visibility is not authorization.
- Initial releases exclude online payments/order fulfillment, shipping, automatic government integration or endorsement, AI diagnosis, native mobile apps and advanced real-time chat.
- Request maintainer assignment before starting; no contributor is assigned by this issue. Use a focused branch and link this issue in the PR. Maintainer review and passing CI precede merge.
- Do not change repository ownership/license notices or grant access to private TourGo repositories as part of this task.


---

<a id="adm-02"></a>

### [ADM-02] Platform administration dashboard

#### Objective
Expose scoped moderation queues and audit inspection.

#### Planning metadata
- Planning ID: **ADM-02** (scope v1.0; not a GitHub issue number)
- Repository: **TourGo-App/FloraConnect-Frontend**
- Phase: **4**
- Priority: **P1** (Important)
- Relative size: **L** — not a fixed duration; split large work into reviewable PRs.
- Current status: **Not started**

#### Acceptance criteria
- [ ] Build protected user/association/listing moderation views with filters, pagination and confirmation/reason dialogs.
- [ ] Provide early MVP listing approval/rejection workflow once its backend slice is available.
- [ ] Show audit history only for authorized roles and render safe change summaries.
- [ ] Test denied access, stale decisions, destructive-action confirmation and accessible table alternatives on mobile.

#### Dependencies
- **ADM-01** — Platform moderation and audit logs (Backend).
- **AUTH-03** — Registration and login pages (Frontend).
- **INF-04** — Create shared design system (Frontend).

#### Verification and PR evidence
- Include automated tests appropriate to the behavior and important failure/permission cases; explain any test gaps.
- Run the repository's existing checks and include results plus setup/migration/API-contract changes in the PR.
- Include desktop/mobile screenshots and keyboard verification for UI changes; mock APIs in isolated tests and verify the integration against the paired backend.

#### Scope and contributor workflow
- Follow FloraConnect scope v1.0: Sri Lankan growers, nurseries, associations and enthusiasts; modular REST API and the existing React/Vite or Express/TypeScript stack.
- Preserve backend-enforced roles, ownership, association/chapter scope and private member data. Frontend visibility is not authorization.
- Initial releases exclude online payments/order fulfillment, shipping, automatic government integration or endorsement, AI diagnosis, native mobile apps and advanced real-time chat.
- Request maintainer assignment before starting; no contributor is assigned by this issue. Use a focused branch and link this issue in the PR. Maintainer review and passing CI precede merge.
- Do not change repository ownership/license notices or grant access to private TourGo repositories as part of this task.


---

<a id="adm-04"></a>

### [ADM-04] Association and platform analytics UI

#### Objective
Show understandable scoped metrics and reports.

#### Planning metadata
- Planning ID: **ADM-04** (scope v1.0; not a GitHub issue number)
- Repository: **TourGo-App/FloraConnect-Frontend**
- Phase: **4**
- Priority: **P2** (Enhancement)
- Relative size: **M** — not a fixed duration; split large work into reviewable PRs.
- Current status: **Not started**

#### Acceptance criteria
- [ ] Add role-aware analytics pages with date filters and visible metric definitions/time ranges.
- [ ] Provide accessible charts plus equivalent tabular summaries.
- [ ] Handle loading, no-data, partial failure and permission errors.
- [ ] Test aggregates against API fixtures, narrow screens and keyboard/screen-reader navigation.

#### Dependencies
- **ADM-03** — Aggregated analytics APIs (Backend).
- **ADM-02** — Platform administration dashboard (Frontend).

#### Verification and PR evidence
- Include automated tests appropriate to the behavior and important failure/permission cases; explain any test gaps.
- Run the repository's existing checks and include results plus setup/migration/API-contract changes in the PR.
- Include desktop/mobile screenshots and keyboard verification for UI changes; mock APIs in isolated tests and verify the integration against the paired backend.

#### Scope and contributor workflow
- Follow FloraConnect scope v1.0: Sri Lankan growers, nurseries, associations and enthusiasts; modular REST API and the existing React/Vite or Express/TypeScript stack.
- Preserve backend-enforced roles, ownership, association/chapter scope and private member data. Frontend visibility is not authorization.
- Initial releases exclude online payments/order fulfillment, shipping, automatic government integration or endorsement, AI diagnosis, native mobile apps and advanced real-time chat.
- Request maintainer assignment before starting; no contributor is assigned by this issue. Use a focused branch and link this issue in the PR. Maintainer review and passing CI precede merge.
- Do not change repository ownership/license notices or grant access to private TourGo repositories as part of this task.


---

<a id="qlt-01"></a>

### [QLT-01] Accessibility and keyboard navigation audit

#### Objective
Audit MVP journeys against WCAG 2.2 AA and track remaining fixes.

#### Planning metadata
- Planning ID: **QLT-01** (scope v1.0; not a GitHub issue number)
- Repository: **TourGo-App/FloraConnect-Frontend**
- Phase: **5**
- Priority: **P1** (Important)
- Relative size: **M** — not a fixed duration; split large work into reviewable PRs.
- Current status: **Not started**

#### Acceptance criteria
- [ ] Run automated checks plus manual keyboard/screen-reader review of login, profile, membership, catalogue and announcements.
- [ ] Fix labels, focus order/visibility, contrast, form errors, dialogs and touch targets.
- [ ] Document tested viewports, assistive technology, failures and verification evidence; do not claim automated checks prove compliance.
- [ ] Add regression coverage for critical findings; apply essential accessibility during each feature rather than deferring all work to Phase 5.

#### Dependencies
- **INF-04** — Create shared design system (Frontend).
- **AUTH-03** — Registration and login pages (Frontend).
- **ASC-05** — Membership application and status UI (Frontend).
- **FLW-05** — Public flower catalogue (Frontend).
- **ANN-02** — Announcement feed and management UI (Frontend).

#### Verification and PR evidence
- Include automated tests appropriate to the behavior and important failure/permission cases; explain any test gaps.
- Run the repository's existing checks and include results plus setup/migration/API-contract changes in the PR.
- Include desktop/mobile screenshots and keyboard verification for UI changes; mock APIs in isolated tests and verify the integration against the paired backend.

#### Scope and contributor workflow
- Follow FloraConnect scope v1.0: Sri Lankan growers, nurseries, associations and enthusiasts; modular REST API and the existing React/Vite or Express/TypeScript stack.
- Preserve backend-enforced roles, ownership, association/chapter scope and private member data. Frontend visibility is not authorization.
- Initial releases exclude online payments/order fulfillment, shipping, automatic government integration or endorsement, AI diagnosis, native mobile apps and advanced real-time chat.
- Request maintainer assignment before starting; no contributor is assigned by this issue. Use a focused branch and link this issue in the PR. Maintainer review and passing CI precede merge.
- Do not change repository ownership/license notices or grant access to private TourGo repositories as part of this task.


---

<a id="qlt-03"></a>

### [QLT-03] Performance and bundle optimization

#### Objective
Measure and improve the client without weakening functionality.

#### Planning metadata
- Planning ID: **QLT-03** (scope v1.0; not a GitHub issue number)
- Repository: **TourGo-App/FloraConnect-Frontend**
- Phase: **5**
- Priority: **P2** (Enhancement)
- Relative size: **M** — not a fixed duration; split large work into reviewable PRs.
- Current status: **Not started**

#### Acceptance criteria
- [ ] Record reproducible baseline routes, devices/network profiles, bundle sizes and Core Web Vitals.
- [ ] Set reviewed measurable budgets and apply justified code splitting, image optimization and query-cache improvements.
- [ ] Measure before/after with repeatable tooling; verify no accessibility or core journey regression.
- [ ] Add practical CI budget checks and document remaining bottlenecks rather than inventing achieved performance numbers.

#### Dependencies
- **INF-08** — Frontend CI and test baseline (Frontend).
- **FLW-07** — Catalogue search and filtering UI (Frontend).

#### Verification and PR evidence
- Include automated tests appropriate to the behavior and important failure/permission cases; explain any test gaps.
- Run the repository's existing checks and include results plus setup/migration/API-contract changes in the PR.
- Include desktop/mobile screenshots and keyboard verification for UI changes; mock APIs in isolated tests and verify the integration against the paired backend.

#### Scope and contributor workflow
- Follow FloraConnect scope v1.0: Sri Lankan growers, nurseries, associations and enthusiasts; modular REST API and the existing React/Vite or Express/TypeScript stack.
- Preserve backend-enforced roles, ownership, association/chapter scope and private member data. Frontend visibility is not authorization.
- Initial releases exclude online payments/order fulfillment, shipping, automatic government integration or endorsement, AI diagnosis, native mobile apps and advanced real-time chat.
- Request maintainer assignment before starting; no contributor is assigned by this issue. Use a focused branch and link this issue in the PR. Maintainer review and passing CI precede merge.
- Do not change repository ownership/license notices or grant access to private TourGo repositories as part of this task.


---

<a id="qlt-05"></a>

### [QLT-05] Sinhala and Tamil localization foundation

#### Objective
Lay a maintainable Sinhala/Tamil/English UI localization foundation.

#### Planning metadata
- Planning ID: **QLT-05** (scope v1.0; not a GitHub issue number)
- Repository: **TourGo-App/FloraConnect-Frontend**
- Phase: **5**
- Priority: **P2** (Enhancement)
- Relative size: **L** — not a fixed duration; split large work into reviewable PRs.
- Current status: **Not started**

#### Acceptance criteria
- [ ] Introduce message catalogs, language switching, fallback and persisted language preference.
- [ ] Translate a reviewed pilot set of navigation/auth/catalogue labels; mark remaining translation work explicitly.
- [ ] Support Unicode search/input, locale-aware dates/numbers and layout/font behavior for Sinhala and Tamil.
- [ ] Test switching, missing keys and narrow layouts; user-generated content is not automatically translated.

#### Dependencies
- **INF-04** — Create shared design system (Frontend).
- **INF-08** — Frontend CI and test baseline (Frontend).

#### Verification and PR evidence
- Include automated tests appropriate to the behavior and important failure/permission cases; explain any test gaps.
- Run the repository's existing checks and include results plus setup/migration/API-contract changes in the PR.
- Include desktop/mobile screenshots and keyboard verification for UI changes; mock APIs in isolated tests and verify the integration against the paired backend.

#### Scope and contributor workflow
- Follow FloraConnect scope v1.0: Sri Lankan growers, nurseries, associations and enthusiasts; modular REST API and the existing React/Vite or Express/TypeScript stack.
- Preserve backend-enforced roles, ownership, association/chapter scope and private member data. Frontend visibility is not authorization.
- Initial releases exclude online payments/order fulfillment, shipping, automatic government integration or endorsement, AI diagnosis, native mobile apps and advanced real-time chat.
- Request maintainer assignment before starting; no contributor is assigned by this issue. Use a focused branch and link this issue in the PR. Maintainer review and passing CI precede merge.
- Do not change repository ownership/license notices or grant access to private TourGo repositories as part of this task.


---
