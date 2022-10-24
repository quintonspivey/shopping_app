import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';







const Container= styled.div `
height: 80 px;
background-color: navy;`
const Wrapper= styled.div`
padding: 10px 20px;
color: white;
display: flex;
align-items: center;
justify-content: space-between;
`;
const Language = styled.span`
font-size: 14px;
cursor: pointer;`;

const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;

const Input = styled.input`
border:none;`;
const Logo = styled.h1`
font-bold: bold;`;
const MenuItems= styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;`;


const Left = styled.div`
display:flex;
align-items: center;
flex: 1;`;
const Center = styled.div`
flex: 1;
text-align: center;`;
const Right= styled.div`
flex:1;
display: flex;
justify-content: flex-end;`;

function NavBar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                        <SearchIcon style={{ color: 'gray', fontSize: 16}}/>
                    </SearchContainer>
                    </Left>
                <Center><Logo>SHOPPING</Logo></Center>
                <Right>
                    <MenuItems>Register</MenuItems>
                    <MenuItems>SignIn</MenuItems>
                    <MenuItems>Profile</MenuItems>
                    <MenuItems>
                <Badge badgeContent={4} color="primary">
      <ShoppingCartOutlinedIcon />
    </Badge>
                </MenuItems></Right>

            </Wrapper>
            
        </Container>
    )
}

export default NavBar