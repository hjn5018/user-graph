import { useEffect, useState } from 'react';
import { getFollows, getUsers } from '../api/client.js';
import GraphView from '../components/GraphView.jsx';
import UserDetail from '../components/UserDetail.jsx';

function GraphPage() {
  const [users, setUsers] = useState([]);
  const [follows, setFollows] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchGraphData = async () => {
      try {
        const [userData, followData] = await Promise.all([getUsers(), getFollows()]);
        setUsers(userData);
        setFollows(followData);
      } catch (requestError) {
        setError('그래프 데이터를 불러오지 못했습니다. 백엔드 서버가 실행 중인지 확인해주세요.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchGraphData();
  }, []);

  if (isLoading) {
    return <div className="state-message">그래프 데이터를 불러오는 중입니다.</div>;
  }

  if (error) {
    return <div className="state-message error-message">{error}</div>;
  }

  return (
    <section className="graph-page">
      <GraphView users={users} follows={follows} onSelectUser={setSelectedUser} />
      <UserDetail user={selectedUser} />
    </section>
  );
}

export default GraphPage;
