import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import './styles/global.css';
import 'reactflow/dist/style.css';

/**
 * React 프런트엔드 애플리케이션의 엔트리 포인트(시작점) 파일입니다.
 * - StrictMode: 개발 중 잠재적인 문제를 감지하기 위한 엄격 모드 적용
 * - ErrorBoundary: 렌더링 중 발생하는 예기치 못한 에러를 방지하고 에러 폴백 UI 제공
 * - BrowserRouter: React Router를 활성화하여 페이지 주소 기반 라우팅 수행
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);

