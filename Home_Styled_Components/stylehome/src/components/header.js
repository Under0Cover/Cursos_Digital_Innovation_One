import React from 'react';
import styled from 'styled-components';

const Nav = styled.p `
    background-color: #457667;
    position: relative;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Item = styled.span `
    font-size: 14px;
    font-family: 'Read';
    font-weight: bold;
    color: #fff;
    margin: 0 20px;
`

export default function header() {
    return (
        <Nav>
            <Item>Home</Item>
            <Item>Contato</Item>
            <Item>Sobre</Item>
        </Nav>
    );
}