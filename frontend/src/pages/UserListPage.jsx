import React, { useEffect, useState } from 'react';
import { getUsers } from '../api/client.js';
import UserTable from '../components/UserTable.jsx';

/**
 * 전체 사용자 데이터를 가져와 테이블 형태로 일괄 조회하는 목록 페이지 컴포넌트입니다.
 */
function UserListPage() {
  const [users, setUsers] = useState([]);          // 사용자 목록 정보 상태
  const [isLoading, setIsLoading] = useState(true); // 데이터 로딩 상태
  const [error, setError] = useState('');           // API 에러 상태 메시지

  // 컴포넌트 마운트 시 사용자 목록 API 조회 호출
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await getUsers();
        setUsers(userData);
      } catch (requestError) {
        setError('사용자 목록을 불러오지 못했습니다. 백엔드 서버가 실행 중인지 확인해주세요.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // 데이터를 불러오는 중일 때의 렌더링
  if (isLoading) {
    return <div className="state-message">사용자 목록을 불러오는 중입니다.</div>;
  }

  // 에러 발생 시의 렌더링
  if (error) {
    return <div className="state-message error-message">{error}</div>;
  }

  return (
    <section className="users-page">
      <div className="section-heading">
        <h1>사용자 목록</h1>
        <p>백엔드 API에서 가져온 20명의 사용자 정보입니다.</p>
      </div>
      {/* 사용자 목록 테이블 컴포넌트 호출 */}
      <UserTable users={users} />
    </section>
  );
}

export default UserListPage;

