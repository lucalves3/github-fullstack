import SearchSectionSTL from './searchSectionSTL.styled';
import searchIcon from '../../images/searchIcon.svg';
import animationData from '../../images/searchJSON.json';
import Lottie from 'lottie-react';

const SearchSection = () => {
  return (
    <SearchSectionSTL>
      <section>
        <div>
          <form className='search-container'>
            <input type="search" className="search-bar" placeholder='Search for a user' />
            <img src={searchIcon} alt="search icon" className='icon-img' onClick={() => console.log('teile')}/>
          </form>
        </div>
        <Lottie animationData={animationData}
          background="transparent"
          speed="1"
          style={{ width: '100px', height: '100px', marginLeft: '-20px', marginRight: '-20px' }}
          autoplay />
      </section>
    </SearchSectionSTL>
  );
};

export default SearchSection;
