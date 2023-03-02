import React from 'react'
import styled from "styled-components"
import { Search } from "@material-ui/icons"
import Badge from "@material-ui/core/Badge/Badge"
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { mobile } from "../responsive"
import { useSelector,useDispatch } from "react-redux"
import {logout } from "../redux/userRedux"
import { Link } from 'react-router-dom';
import { clearProduct } from '../redux/cartRedux';


const Container = styled.div`
    height:60px;
   ${mobile({ height: "50px" })}

`
const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    ${mobile({ padding: "10px 0" })}

`
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`

const Language = styled.span`
    cursor:pointer;
    font-size:15px;
    ${mobile({ display: "none" })}

`
const SearchContainer = styled.div`
    border:0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
`

const Input = styled.input`
    border:none;
    ${mobile({ width: "50px" })}

`
const Logo = styled.h1`
    font-weight:bold;
    ${mobile({ fontSize: "24px" })}

`

const Center = styled.div`
    flex:1;
    text-align:center;
`

const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}

`

const MenuItem = styled.div`
    font-size:17px;
    cursor:pointer;
    margin-left:25px;
    font-weight:500;
    text-decoration:none;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}


`

const Navbar = () => {

    const quantity = useSelector(state => state.cart.quantity)
    const user = useSelector(state => state.user?.currentUser?.username);
    
    const dispatch=useDispatch();
    const handleClick=(e)=>{
        dispatch(logout());
        console.log(user);
        dispatch(clearProduct());
    }

    return (

        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='search' />
                        <Search style={{ color: "gray", fontSize: 17 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Link style={{ textDecoration: "none", color: 'black' }} to="/">

                        <Logo>SIGMA</Logo>
                    </Link>
                </Center>
                <Right>
                    {user ? <>

                        <h3>{user}</h3>
                        <Link style={{ textDecoration: "none" }} to="/">

                            <MenuItem onClick={handleClick}>LOGOUT</MenuItem>
                        </Link>
                    </>
                        : <>
                            <Link style={{ textDecoration: "none" }} to="/register">

                                <MenuItem>REGISTER</MenuItem>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/login">

                                <MenuItem>SIGN IN</MenuItem>
                            </Link>
                        </>
                    }
                    <Link style={{ textDecoration: "none" }} to="/cart">

                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </MenuItem>
                    </Link>

                </Right>
            </Wrapper>
        </Container>

    )
}

export default Navbar