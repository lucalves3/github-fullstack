import { useEffect, useState } from 'react';
import RepositoriesCard from "./repositoriesCard/repositoriesCard";
import RepositoriesSectionSTL from "./repositoriesSectionSTL.styled";
import searchIcon from '../../images/searchIcon.svg';
import reposImage from '../../images/reposImage.svg';
import api from '../../services/api';

const RepositoriesSection = () => {
  const [getName, setGetName] = useState('');
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function getApiSearch() {
      const { data } = await api.get(`/${userName}/repos`);
      if (data) {
        setUserData( data?.model?.data)
      }
    }
    getApiSearch()
  }, [userName])

  return (
    <RepositoriesSectionSTL>
      <section>
          <form className='search-container'>
            <input type="search" className="search-bar" placeholder='Search for a user' onBlur={(e) => setGetName(e.target.value)} />
            <img src={searchIcon} alt="search icon" className='icon-img' onClick={() => setUserName(getName)}/>
          </form>
          <div style={{ display: 'flex', width: '100%', height: '100%', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around' }}>
          { userData.length !== 0 ? userData.map((element) => (
            <RepositoriesCard
            id={element.id}
            size={element.size}
            visibility={element.visibility}
            language={element.language}
            name={element.name}
            />
            ))
            :
          <img src={reposImage} alt="search" className='searchImage' />
        }
        </div>
      </section>
    </RepositoriesSectionSTL>
  );
};

export default RepositoriesSection;