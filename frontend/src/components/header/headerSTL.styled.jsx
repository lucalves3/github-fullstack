import styled from "styled-components";

const HeaderSTL = styled.header.attrs((props) => ({
  history: props.history,
}))`
background-color: #464B70;
width: 100%;
padding: 0;
height: 70px;
align-items: center;

section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

img {
  width: 50px;
}

div {
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  display: flex;
  align-items: center;
}

label {
  display: flex;
  text-decoration: none;
  flex-direction: column;
  justify-content: space-evenly;
}

p {
  color: white;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
}

.tagHeaderTrue {
  text-decoration: none;
  color: #43DAEF;
}

.tagHeaderFalse {
  text-decoration: none;
  color: white;
}

.dashHeaderTrue {
  background-color: #43DAEF;
  border-radius: 8px;
  margin-bottom: -8px;
  width: auto;
  height: 5px;
}

.dashHeaderFalse {
  background-color: inherit ;
  border-radius: 8px;
  margin-bottom: -8px;
  width: auto;
  height: 5px;
}

`;

export default HeaderSTL;