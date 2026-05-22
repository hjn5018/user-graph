import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="state-message error-message">
          <h1>화면을 렌더링하지 못했습니다.</h1>
          <p>아래 오류 내용을 확인한 뒤 알려주시면 바로 이어서 고칠 수 있습니다.</p>
          <pre>{this.state.error.message}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
