You are a senior full-stack engineer.

Build a full-stack social relationship visualization project using React and Spring Boot.

# Goal

Create a web application that visualizes follow relationships between 20 users as a 2D graph.

Users should be displayed as nodes.
Follow relationships should be displayed as edges.

When hovering a node:
- connected nodes and edges should be highlighted
- unrelated nodes and edges should fade

When clicking a node:
- a detail panel should appear
- display user information:
  - name
  - bio
  - contact
  - email

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

Add:
- CORS configuration for React frontend

## Frontend

Create:
- graph visualization page
- detail panel component
- user list page
- navigation bar

Use React Flow.

Implement:
- node hover highlight interaction
- edge highlight interaction
- node click interaction

The graph should:
- render all users
- render all follow relationships

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
- route: /
- displays the React Flow relationship graph
- includes hover highlight interaction
- includes node click detail panel

2. User List Page
- route: /users
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

-------------------------------------------------
| Navigation Bar                                |
-------------------------------------------------
|                 Graph Area                    |
|                                               |
|                                               |
|-----------------------------------------------|
| Detail Panel                                  |
-------------------------------------------------

The detail panel should update when a node is clicked.

# Styling

Use plain CSS only.

Add:
- hover animations
- smooth transitions
- node highlight effect
- faded opacity effect
- responsive layout

# Project Structure

Create separate folders:

/backend
/frontend

Use clean folder organization.

Recommended structure:

frontend/src/
 ├── pages/
 │    ├── GraphPage.jsx
 │    └── UserListPage.jsx
 │
 ├── components/
 │    ├── GraphView.jsx
 │    ├── UserDetail.jsx
 │    ├── UserTable.jsx
 │    └── Navbar.jsx
 │
 ├── api/
 ├── styles/
 └── App.jsx

backend/src/main/java/
 ├── controller/
 ├── service/
 ├── repository/
 ├── entity/
 ├── dto/
 └── config/

# Git Requirements

Initialize git repository:

- run git init

Create .gitignore.

The .gitignore must include:

Frontend:
- node_modules/
- dist/
- .env

Backend:
- build/
- target/
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
- feat: add dummy user data
- feat: implement react flow graph
- feat: implement hover interaction
- feat: implement user detail panel
- feat: add user list page
- feat: add react router navigation
- style: improve ui styling
- docs: add README

Use clear conventional commit messages.

# GitHub Requirements

Connect remote repository:

https://github.com/hjn5018/user-graph

Push all commits to:
- main branch

Commands should include:
- git remote add origin
- git branch -M main
- git push -u origin main

# Deliverables

Generate:
1. complete backend code
2. complete frontend code
3. package installation commands
4. run instructions
5. folder structure
6. sample API responses
7. README.md
8. .gitignore

# Constraints

- Keep implementation beginner-friendly
- Keep code readable
- Avoid unnecessary abstraction
- Avoid overengineering
- Use comments for important logic

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

- Spring Boot server runs successfully
- React frontend runs successfully
- graph renders correctly
- hover highlight works
- click detail panel works
- user table page works
- routing works correctly
- navigation works correctly
- API integration works
- H2 database stores users and follows
- git commits are properly created
- GitHub repository is successfully pushed