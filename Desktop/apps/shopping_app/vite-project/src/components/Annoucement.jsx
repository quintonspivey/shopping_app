import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
height: 30px;
background-color: teal;
font-size: 14px;
display: flex;
font-weight: 500;
align-items: center;
justify-content: center;
`;

function Annoucement() {
    return (
        <Container>
            New Discount! Free Shipping on orders over $50
        </Container>
    )
}

export default Annoucement

