import HeaderCardsSTL from "./homeCardSTL.styled";

const HomeCards = ({login, image, id}) => {
  return (
    <HeaderCardsSTL>
      <section>
        <img src={image} alt={`user ${login}`} />
        <div>
          <p>User: {login}</p>
          <p>User id: {id}</p>
        </div>
      </section>
    </HeaderCardsSTL>
  )
};

export default HomeCards;