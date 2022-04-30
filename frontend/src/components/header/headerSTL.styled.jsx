import styled from "styled-components";

const HeaderSTL = styled.header.attrs((props) => ({
  historic: props.historic,
}))`
background-color: #464B70;
width: 100%;
padding: 0;
height: 70px;
display: flex;
align-items: center;
flex-direction: row;

.div {

  }
`;

export default HeaderSTL;