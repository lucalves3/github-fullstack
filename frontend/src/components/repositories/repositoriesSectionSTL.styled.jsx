import styled from "styled-components";

const RepositoriesSectionSTL = styled.section`
background-color: #2D3047;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
width: 100%;
height: 100%;

form {
  margin-top: 30px;
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
  border: 1px solid #43DAEF;
  border-radius: 10px;
  margin-left: -15px;
  margin-right: -15px;
  background-color: #464B70;
  color: #43DAEF;
}

.icon-img {
  z-index: 1;
  margin-left: -15px;
  width: 20px;
  cursor: pointer;
}

.searchImage {
  margin-top: 50px;
  width: 450px;
  /* height: 100vh; */
}
`;

export default RepositoriesSectionSTL;