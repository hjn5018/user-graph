import React from 'react';

/**
 * 하위 컴포넌트 트리에서 발생하는 JavaScript 오류를 포착하여
 * 전체 앱이 크래시되는 대신 대체 UI를 렌더링하는 에러 경계(Error Boundary) 컴포넌트입니다.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  // 하위 컴포넌트에서 에러 발생 시 호출되어 에러 정보를 상태에 반영합니다.
  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    // 하위에서 에러가 발생한 경우 대체 UI 제공
    if (this.state.error) {
      return (
        <div className="state-message error-message">
          <h1>화면을 렌더링하지 못했습니다.</h1>
          <p>아래 오류 내용을 확인한 뒤 알려주시면 바로 이어서 고칠 수 있습니다.</p>
          <pre>{this.state.error.message}</pre>
        </div>
      );
    }

    // 에러가 없을 시 자식 컴포넌트들을 그대로 렌더링
    return this.props.children;
  }
}

export default ErrorBoundary;

