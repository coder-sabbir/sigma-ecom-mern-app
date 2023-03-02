import { Category } from '@material-ui/icons';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { mobile } from '../responsive';

const Container = styled.div``
const Title = styled.h1`
    margin:20px;
`
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;

`
const Filter = styled.div`
    margin:20px;
    ${mobile({margin:"0px 20px", display:"flex",flexDirection:"column"})}

`

const FilterText = styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
`
const Select = styled.select`
    margin-right:20px;
    font-size:16px;
    border:1px solid black;
    padding:3px;
    ${mobile({margin:"5px"})}


`
const Option = styled.option`

`

const ProductList = () => {
    const location=useLocation();
    const cat=location.pathname.split("/")[2];
    const [filters,setFilters]=useState({});
    const [sort,setSort]=useState("newest");

    const handleFilters=(e)=>{
        const value=e.target.value;
        setFilters({
            ...filters,
            [e.target.name]:value
        })
    }


    return (
        <Container>
            <Navbar />
            <Announcements />

            <Title>{cat}</Title> 

            <FilterContainer>
                <Filter>         {/*   ----------------------------------left filter------------------------ */}
                    <FilterText>Filter Products: </FilterText>

                    <Select name="color" onChange={handleFilters}>

                        <Option disabled >COLOR</Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>yellow</Option>
                        <Option>blue</Option>
                        <Option>green</Option>
                        <Option>orange</Option>
                        <Option>pink</Option>

                    </Select>

                    <Select name="size" onChange={handleFilters}>

                        <Option disabled >SIZE</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>

                    </Select>

                </Filter>
                                {/*   ----------------------------------right filter------------------------ */}
                <Filter>
                <FilterText>Sort Products: </FilterText>
                
                <Select onChange={e=>setSort(e.target.value)}>

                        <Option value="newest" >NEWEST</Option>
                        <Option value="asc" >PRICE (ASC)</Option>
                        <Option value="desc">PRICE (DESC)  </Option>

                    </Select>
                

                </Filter>
            </FilterContainer>


            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList