import RepositoriesCardSTL from './repositoriesCardSTL.styled';

const RepositoriesCard = ({ id, visibility, following, language, name, size, bio }) => {

  return (
    <RepositoriesCardSTL>
      <div>
        <p>Name: {name}</p>
        <p>ID: {id}</p>
        <p>Size: {size}</p>
        <p>Language: {language}</p>
        <p>Visibility: {visibility}</p>
      </div>
    </RepositoriesCardSTL>
  );
};

export default RepositoriesCard;
