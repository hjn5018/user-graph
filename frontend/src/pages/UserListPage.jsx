import { useEffect, useState } from 'react';
import { getUsers } from '../api/client.js';
import UserTable from '../components/UserTable.jsx';

function UserListPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

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

  if (isLoading) {
    return <div className="state-message">사용자 목록을 불러오는 중입니다.</div>;
  }

  if (error) {
    return <div className="state-message error-message">{error}</div>;
  }

  return (
    <section className="users-page">
      <div className="section-heading">
        <h1>사용자 목록</h1>
        <p>백엔드 API에서 가져온 20명의 사용자 정보입니다.</p>
      </div>
      <UserTable users={users} />
    </section>
  );
}

export default UserListPage;
