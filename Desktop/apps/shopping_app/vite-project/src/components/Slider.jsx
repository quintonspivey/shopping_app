import React from 'react'
import styled from 'styled-components';
import player from '../assets/girl.jpg';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
`;

const Wrapper = styled.div`
height= 100%;`;


const Arrow= styled.div`
width: 50px;
height:50px;
background-color: #f7eeee;
border-radius: 50%; 
display: flex;
align-items: center;
justify-content: center;
position: absolute;
cursor:pointer;
opacity: 0.5;
top:0;
bottom:0;
left: ${(props) => props.direction === "left" && "10px"};
right: ${(props) => props.direction === "right" && "10px"};
margin: auto;`;

const Slide = styled.div`
width: 100vh;
height: 100vh;
display: flex;
align-items: center;`;
const ImgContainer = styled.div`
flex:1;
height:100%`;

const Img = styled.img`
height:80%`;
const InfoContainer = styled.div`
flex:1;
padding: 50px;`;

const Title = styled.h1`
font-size: 70px;`;
const Description = styled.p`
margin: 50px 0;
font-size: 20px;`;
const Button = styled.button``;



function Slider() {
    return (
        <Container>
            <Arrow direction="left">
<ArrowLeftOutlinedIcon/>
</Arrow>
<Wrapper>
    <Slide>
    <ImgContainer><Img src={player}/></ImgContainer>
    <InfoContainer>
        <Title>FALL SALE</Title>
        <Description>Get 30% off on all new Fall Items</Description>
        </InfoContainer>
    </Slide>
</Wrapper>
<Arrow direction = "right">
<ArrowRightOutlinedIcon/>
            </Arrow>
        </Container>
    )
}

export default Slider
