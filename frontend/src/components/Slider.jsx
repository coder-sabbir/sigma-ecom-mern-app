import React, { useState } from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { sliderItems } from '../data'
import { mobile } from '../responsive'

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    position:relative;
    overflow:hidden;
    ${mobile({height:"80vh",width:"100%"})}

`
const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:white;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left:${props => props.direction === "left" && "10px"};
    right:${props => props.direction === "right" && "10px"};
    cursor:pointer;    
    margin:auto;
    opacity:0.5;
    z-index:2;
    ${mobile({height:"20px",width:"20px"})}

`

const Wrapper = styled.div`
    height:100%;
    display:flex;
    transition: all 1.5s ease;
    transform:translateX(${props=>props.slideIndex*-100}vw);
`
const Slide = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    background-color: #${props=> props.bg}
`
const ImgContainer = styled.div`
    height:100%;
    flex:1;
    position: relative;
`
const InfoContainer = styled.div`
    flex:1;
    ${mobile({position:"absolute",width:"40%",top:"170px"})}

`
const Image = styled.img`
    height:80%;
    position: absolute;
    left:150px;
    top:50px;
    ${mobile({height:"400px"})}

`
const Title=styled.h1`
    font-size:70px;
    ${mobile({fontSize:"30px"})}


`
const Desc=styled.p`
    margin:50px 0;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;
    margin-right:140px;
    ${mobile({fontSize:"15px",letterSpacing:"2px",margin:"20px 5px",marginRight:"100px"})}

    
`
const Button=styled.button`
    padding:10px;
    font-size:20px;
    background-color:transparent;
    cursor:pointer;
    ${mobile({height:"30px",width:"100px",fontSize:"13px" ,padding:"0",marginLeft:"5px",marginBottom:'0'})}

`

const Slider = () => {

    const [slideIndex,setSlideIndex]=useState(0);
    const handleClick=(direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex >0? slideIndex-1 : 2);
        }
        else{
            setSlideIndex(slideIndex <2 ? slideIndex+1 :0);
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}> {/*prop given to the styled component arrow */}
                <ArrowLeftOutlined />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>

                {sliderItems.map((item)=>(


                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img} />
                    </ImgContainer>

                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
                ))}
               
            </Wrapper>

            <Arrow direction="right"onClick={()=>handleClick("left")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider