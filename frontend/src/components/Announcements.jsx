import styled from "styled-components";
import { mobile } from "../responsive";

const Container=styled.div`
    height:30px;
    background-color:orange;
    color:white;
    display:flex;
    justify-content:center;
    font-size:15px;
    align-items:center;
    font-weight:500;
    letter-spacing:2px;
    ${mobile({padding:"8px"})}

`

const Announcements = () => {
  return (
    <Container>Super Deal! Free Shipping on Orders Over ₹ 3500</Container>
  )
}

export default Announcements