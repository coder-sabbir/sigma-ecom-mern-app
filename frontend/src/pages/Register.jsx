import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "65%" })}

`;

const Form = styled.form`
    display:flex;
    flex-direction:column;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {

  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate=useNavigate();

  const handleChange = (e) => {
    const {id,value}=e.target;
    if(id==="username"){
      setUsername(value);
    }
    if(id==="password"){
      setPassword(value);
    }
    if(id==="email"){
      setEmail(value);
    }
  }

  const handleClick =async(e)=>{
    e.preventDefault();
    let obj={
      username:username,
      email:email,
      password:password
    }

    try{
      const res= await axios.post("https://sigma-mern-app.onrender.com/api/auth/register",obj)
      navigate("/login")
    }
    catch(err){
      return err;
    }

  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input type="text" id='username' placeholder="UserName" onChange={handleChange} />
          <Input type="email" placeholder='email' id='email' onChange={handleChange} />
          <Input type="password" placeholder='password' id="password" onChange={handleChange} />

          <Agreement>By Creating an account , I concent to the processing of my personal
            data in accordance with the <br /> <b>PRIVACY POLICY</b>
            <input required="true" style={{ margin: "3px" }} type="checkbox" ></input>
          </Agreement>

          <Button onClick={handleClick}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register