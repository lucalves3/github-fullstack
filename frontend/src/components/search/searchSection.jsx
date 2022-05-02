import SearchSectionSTL from './searchSectionSTL.styled';
import searchIcon from '../../images/searchIcon.svg';
import searchImage from '../../images/searchImage.svg';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import SearchCard from './searchCard/searchCard';

const SearchSection = () => {
  const [getName, setGetName] = useState('');
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function getApiSearch() {
      const { data } = await api.get(`/${userName}/details`);
      if (data) {
        setUserData( data?.model?.data)
      }
    }
    getApiSearch()
  }, [userName])

  console.log(userData.length)

  return (
    <SearchSectionSTL>
      <section>
          <form className='search-container'>
            <input type="search" className="search-bar" placeholder='Search for a user' onBlur={(e) => setGetName(e.target.value)} />
            <img src={searchIcon} alt="search icon" className='icon-img' onClick={() => setUserName(getName)}/>
          </form>
          { userData.length !== 0 ?
          <SearchCard
          image={userData.avatar_url}
          id={userData.id}
          bio={userData.bio}
          location={userData.location}
          followers={userData.followers}
          following={userData.following}
          name={userData.name}
          repos={userData.public_repos}
          />
          :
          <img src={searchImage} alt="search" className='searchImage' />
          }
      </section>
    </SearchSectionSTL>
  );
};

export default SearchSection;
