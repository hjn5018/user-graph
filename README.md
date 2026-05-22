# User Graph

20명의 사용자와 팔로우 관계를 2D 그래프로 시각화하는 풀스택 예제 프로젝트입니다.

## 기술 스택

- 프론트엔드: React, JavaScript, Vite, Axios, React Flow, react-router-dom, plain CSS
- 백엔드: Spring Boot, Spring Web, Spring Data JPA, Lombok, H2 Database

## 폴더 구조

```text
user-graph/
├─ backend/
│  ├─ src/main/java/com/example/usergraph/
│  │  ├─ config/
│  │  ├─ controller/
│  │  ├─ dto/
│  │  ├─ entity/
│  │  ├─ repository/
│  │  └─ service/
│  └─ src/main/resources/
└─ frontend/
   └─ src/
      ├─ api/
      ├─ components/
      ├─ pages/
      └─ styles/
```

## 실행 방법

### 백엔드

```bash
cd backend
./gradlew bootRun
```

백엔드는 `http://localhost:8080`에서 실행됩니다.

Windows PowerShell에서는 아래 명령을 사용할 수 있습니다.

```powershell
cd backend
.\gradlew.bat bootRun
```

H2 콘솔은 `http://localhost:8080/h2-console`에서 확인할 수 있습니다.

- JDBC URL: `jdbc:h2:mem:usergraph`
- User Name: `sa`
- Password: 비워두기

### 프론트엔드

```bash
cd frontend
npm install
npm run dev
```

프론트엔드는 `http://localhost:5173`에서 실행됩니다.

## API

### 사용자 목록

```http
GET /api/users
```

예시 응답:

```json
[
  {
    "id": 1,
    "name": "Alex Kim",
    "bio": "데이터 시각화를 좋아하는 개발자입니다.",
    "contact": "010-1000-0001",
    "email": "alex.kim@example.com"
  }
]
```

### 팔로우 목록

```http
GET /api/follows
```

예시 응답:

```json
[
  {
    "id": 1,
    "followerId": 1,
    "followingId": 2
  }
]
```

## 주요 기능

- 전체 사용자를 그래프 노드로 표시
- 팔로우 관계를 그래프 엣지로 표시
- 노드 hover 시 연결된 노드와 엣지 강조
- 관련 없는 노드와 엣지는 흐리게 표시
- 노드 클릭 시 사용자 상세 정보 패널 표시
- `/users` 페이지에서 사용자 목록 테이블 표시
- React Router 기반 페이지 이동

## GitHub 연결 명령

```bash
git remote add origin https://github.com/hjn5018/user-graph
git branch -M main
git push -u origin main
```
