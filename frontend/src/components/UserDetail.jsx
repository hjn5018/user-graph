function UserDetail({ user }) {
  if (!user) {
    return (
      <aside className="detail-panel empty-detail">
        <h2>사용자 상세 정보</h2>
        <p>그래프에서 노드를 클릭하면 상세 정보가 여기에 표시됩니다.</p>
      </aside>
    );
  }

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
