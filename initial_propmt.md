You are a senior full-stack engineer.

Build a full-stack social relationship visualization project using React and Spring Boot.

# Goal

Create a web application that visualizes follow relationships between 20 users as a 2D graph.

Users should be displayed as nodes.
Follow relationships should be displayed as edges.

Initial graph state:
- all users should be displayed as small dot nodes
- all follow edges should be displayed subtly with low opacity
- the graph should look simple and not visually crowded

When clicking a node for the first time:
- the clicked node should be selected
- connected nodes and connected edges should be highlighted
- unrelated nodes should fade
- unrelated edges should be hidden
- the clicked node and connected nodes should show compact name cards
- name cards should display only the user name
- the selected state should remain even when the mouse leaves the node

When clicking the same selected node one more time:
- the selected node card should expand
- display user information:
  - name
  - bio
  - contact
  - email
- connected nodes should still display only compact name cards

When clicking an empty graph area:
- reset the selected node
- reset the expanded detail card
- return to the initial graph state

# Tech Stack

Frontend:
- React
- JavaScript
- Vite
- Axios
- React Flow
- react-router-dom
- plain CSS (NO Tailwind)

Backend:
- Spring Boot
- Gradle
- Spring Web
- Spring Data JPA
- Lombok
- H2 in-memory database

# Requirements

## Backend

Create:
- User entity
- Follow entity

User fields:
- id
- name
- bio
- contact
- email

Follow fields:
- id
- followerId
- followingId

Implement:
- REST API
- GET /api/users
- GET /api/follows

Generate:
- 20 dummy users
- random follow relationships

Enable:
- H2 console

Use:
- layered architecture
  - controller
  - service
  - repository
  - entity
  - dto
  - config

Add:
- CORS configuration for React frontend
- allow both `http://localhost:5173` and `http://127.0.0.1:5173`

Use Gradle:
- create `build.gradle`
- create `settings.gradle`
- include Gradle Wrapper files
- backend should run with `./gradlew bootRun`
- on Windows, backend should run with `.\gradlew.bat bootRun`

## Frontend

Create:
- graph visualization page
- custom graph node component
- user list page
- navigation bar

Use React Flow.

Implement:
- initial subtle edge display
- click-based node selection
- selected edge highlight interaction
- selected node and connected node highlight interaction
- second-click detail card expansion
- empty graph area click reset

The graph should:
- render all users
- render all follow relationships
- display nodes as dots by default
- display compact name cards only for selected and connected nodes
- display full user details only when the selected node is clicked again

Use:
- React hooks
- functional components

Do not use:
- Redux
- Tailwind
- TypeScript

# Routing Requirements

Install and use:
- react-router-dom

Create at least 2 pages:

1. Graph Visualization Page
- route: `/`
- displays the React Flow relationship graph
- displays all edges subtly in the initial state
- supports click-based highlight interaction
- supports second-click node detail expansion
- resets selection when clicking an empty graph area

2. User List Page
- route: `/users`
- displays all users in a table format

# User List Table Requirements

The table should display:
- ID
- Name
- Bio
- Contact
- Email

Features:
- fetch users from backend API
- responsive layout
- simple clean styling using plain CSS
- hover effect on table rows

Add:
- navigation menu/header
- links to:
  - Graph Page
  - User List Page

Use:
- BrowserRouter
- Routes
- Route
- Link or NavLink

# UI Layout

Layout:

```text
-------------------------------------------------
| Navigation Bar                                |
-------------------------------------------------
|                                               |
|                 Graph Area                    |
|                                               |
|   dot nodes + subtle edges                    |
|   selected node expands inside the graph      |
|                                               |
-------------------------------------------------
```

The user detail card should appear on the selected graph node, not in a bottom panel.

# Styling

Use plain CSS only.

Add:
- smooth transitions
- compact node card style
- expanded selected node card style
- node highlight effect
- selected edge highlight effect
- faded opacity effect
- responsive layout

The graph should stay visually simple:
- use small dot nodes by default
- keep initial edges light and subtle
- do not use a minimap unless explicitly requested
- avoid oversized cards

# Project Structure

Create separate folders:

```text
/backend
/frontend
```

Use clean folder organization.

Recommended structure:

```text
frontend/src/
├─ pages/
│  ├─ GraphPage.jsx
│  └─ UserListPage.jsx
├─ components/
│  ├─ GraphView.jsx
│  ├─ ErrorBoundary.jsx
│  ├─ UserTable.jsx
│  └─ Navbar.jsx
├─ api/
│  └─ client.js
├─ styles/
│  └─ global.css
├─ App.jsx
└─ main.jsx

backend/src/main/java/com/example/usergraph/
├─ controller/
├─ service/
├─ repository/
├─ entity/
├─ dto/
└─ config/
```

# Git Requirements

Initialize git repository:
- run `git init`

Create `.gitignore`.

The `.gitignore` must include:

Frontend:
- node_modules/
- dist/
- .env
- .npm-cache/

Backend:
- build/
- target/
- .gradle/
- *.class
- *.log

IDE:
- .idea/
- .vscode/

OS:
- .DS_Store
- Thumbs.db

Obsidian:
- .obsidian/

After each major step:
- create a git commit

Example commit sequence:
- chore: initialize project structure
- feat: implement spring boot backend
- build: switch backend to gradle
- feat: add dummy user data
- feat: implement react flow graph
- feat: implement click selection highlight
- feat: show user details on second click
- feat: add user list page
- feat: add react router navigation
- style: simplify graph visualization
- docs: add README

Use clear conventional commit messages.

# GitHub Requirements

Connect remote repository:

```text
https://github.com/hjn5018/user-graph
```

Push all commits to:
- main branch

Commands should include:
- `git remote add origin https://github.com/hjn5018/user-graph`
- `git branch -M main`
- `git push -u origin main`

# Deliverables

Generate:
1. complete backend code
2. complete frontend code
3. package installation commands
4. Gradle backend run instructions
5. frontend run instructions
6. folder structure
7. sample API responses
8. README.md
9. .gitignore

# Constraints

- Keep implementation beginner-friendly
- Keep code readable
- Avoid unnecessary abstraction
- Avoid overengineering
- Use comments only for important logic

# Response Language Requirements

All explanations, comments, guides, and documentation shown to the user must be written in Korean.

Examples:
- implementation explanations
- setup instructions
- folder structure explanations
- code comments
- README content
- debugging guides

However:
- code itself should remain in English
- variable names should remain in English
- class names should remain in English
- API paths should remain in English

Use beginner-friendly Korean explanations.

# Workflow Requirements

Before writing code:
1. explain the implementation plan
2. explain folder structure
3. explain data flow
4. then start implementation

Implement incrementally.

After each completed step:
- explain what was implemented
- commit changes
- continue to next step

# Completion Criteria

The project is complete when:

- Spring Boot server runs successfully with Gradle
- React frontend runs successfully
- graph renders correctly
- initial edges are displayed subtly
- clicking a node highlights connected nodes and edges
- selected state remains after mouse leave
- second-click expands the selected node detail card
- clicking an empty graph area resets selection
- user table page works
- routing works correctly
- navigation works correctly
- API integration works
- H2 database stores users and follows
- git commits are properly created
- GitHub repository is successfully pushed
