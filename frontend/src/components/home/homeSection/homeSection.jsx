import { useContext, useEffect, useState } from 'react';
import api from '../../../services/api';
import HomeCards from '../homeCards/homeCards';
import HomeSectionSTL from './homeSectionSTL.styled';
import { Context } from '../../../context/contex';

const HomeSection = () => {
  const [usersData, setUsersData] = useState([]);
  const { pagination, setPagination, setPreviousPagination } = useContext(Context);

  useEffect(() => {
    async function getApi() {
      try {
        const { data } = await api.get(`/api/users?since=${pagination}`);
        if (data) {
          setPreviousPagination(usersData?.models?.firstIdUser);
          setUsersData(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getApi();
  }, [pagination, setPreviousPagination, usersData?.models?.firstIdUser]);
 
  console.log(usersData?.models);

  return (
    <>
      <div style={{backgroundColor: '#2D3047', width: '100%', display: 'flex', justifyContent: 'space-around'}}>
        <button onClick={() => setPagination(0)} style={{backgroundColor: '#43DAEF', border: 'none', borderRadius: '4px', width: '100px', cursor: 'pointer', margin: '10px', height: '30px'}}>First Page</button>
        <button onClick={() => setPagination(usersData?.models?.next_page)} style={{backgroundColor: '#43DAEF', border: 'none', borderRadius: '4px', width: '100px', cursor: 'pointer', margin: '10px', height: '30px'}}>Next</button>
      </div>
    <HomeSectionSTL>
      {usersData &&
        usersData?.models?.data.map((user, index) => (
          <HomeCards id={user.id} image={user.avatar_url} login={user.login} />
        ))}
    </HomeSectionSTL>
    </>
  );
};

export default HomeSection;
