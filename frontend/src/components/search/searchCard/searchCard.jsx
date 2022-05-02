import SearchCardSTL from './searchCardSTL.styled';

const SearchCard = ({ image, id, url, followers, following, repos, name, location, bio }) => {

  return (
    <SearchCardSTL>
      <div>
        <img src={image} alt={id} />
        <p>Name: {name}</p>
        <p>Bio: {bio}</p>
        <p>ID: {id}</p>
        <p>Location: {location}</p>
        <p>Repositories: {repos}</p>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
      </div>
    </SearchCardSTL>
  );
};

export default SearchCard;
