import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import GraphPage from './pages/GraphPage.jsx';
import UserListPage from './pages/UserListPage.jsx';

/**
 * 애플리케이션의 루트(Root) 레이아웃 및 라우터 구성 컴포넌트입니다.
 * 전체 구조(상단 Navbar 및 페이지 컨테이너)를 쉘 형태로 래핑하고, URL 경로에 맞게 페이지를 라우팅합니다.
 */
function App() {
  return (
    <div className="app-shell">
      {/* 상단 내비게이션 바 */}
      <Navbar />
      
      {/* 라우트에 매칭되는 실제 본문 페이지가 나타나는 영역 */}
      <main className="page-container">
        <Routes>
          {/* 메인 경로(/): 팔로우 시각화 그래프 페이지 */}
          <Route path="/" element={<GraphPage />} />
          {/* 사용자 목록 경로(/users): 전체 회원 리스트 테이블 페이지 */}
          <Route path="/users" element={<UserListPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

