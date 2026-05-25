import React from 'react';

/**
 * 데이터베이스에 존재하는 모든 사용자 목록을 정형화된 표(Table) 형식으로 보여주는 컴포넌트입니다.
 * 
 * @param {Array} users 표시할 사용자 리스트 배열
 */
function UserTable({ users }) {
  return (
    <div className="table-wrap">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Bio</th>
            <th>Contact</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {/* 사용자 목록 배열을 순회하며 테이블 행(tr) 생성 */}
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.bio}</td>
              <td>{user.contact}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;

