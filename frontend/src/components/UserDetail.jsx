import React from 'react';

/**
 * 선택된 사용자의 세부 정보(소개, 연락처, 이메일 등)를 우측 사이드 패널 형태로 표시하는 컴포넌트입니다.
 * 
 * @param {Object} user 선택된 사용자 정보 객체 (선택되지 않은 경우 null)
 */
function UserDetail({ user }) {
  // 선택된 사용자가 없을 때 안내 메시지 표시
  if (!user) {
    return (
      <aside className="detail-panel empty-detail">
        <h2>사용자 상세 정보</h2>
        <p>그래프에서 노드를 클릭하면 상세 정보가 여기에 표시됩니다.</p>
      </aside>
    );
  }

  // 선택된 사용자가 존재할 때 정보 목록 표시
  return (
    <aside className="detail-panel">
      <h2>{user.name}</h2>
      <dl>
        <div>
          <dt>소개</dt>
          <dd>{user.bio}</dd>
        </div>
        <div>
          <dt>연락처</dt>
          <dd>{user.contact}</dd>
        </div>
        <div>
          <dt>이메일</dt>
          <dd>{user.email}</dd>
        </div>
      </dl>
    </aside>
  );
}

export default UserDetail;

