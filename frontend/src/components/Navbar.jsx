import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * 애플리케이션의 최상단 네비게이션 바 컴포넌트입니다.
 * 브랜드 로고와 주요 페이지 메뉴 이동 링크(그래프 시각화, 사용자 리스트)를 제공합니다.
 */
function Navbar() {
  return (
    <header className="navbar">
      {/* 로고 영역: 메인 페이지(그래프)로 이동 */}
      <NavLink to="/" className="brand">
        User Graph
      </NavLink>
      {/* 라우터 페이지 이동 내비게이션 링크 메뉴 */}
      <nav className="nav-links">
        <NavLink to="/">그래프</NavLink>
        <NavLink to="/users">사용자 목록</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;

