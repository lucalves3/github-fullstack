import styled from 'styled-components';

const SearchSectionSTL = styled.main`
background-color: #2D3047;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;

form {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
}

.search-bar {
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: #464B70;
  color: #43DAEF;
}

.icon-img {
  z-index: 1;
  width: 20px;
  margin-left: -30px;
  cursor: pointer;
}
`;

export default SearchSectionSTL;