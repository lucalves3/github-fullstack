import SearchSectionSTL from './searchSectionSTL.styled';
import searchIcon from '../../images/searchIcon.svg';

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
      </section>
    </SearchSectionSTL>
  );
};

export default SearchSection;
