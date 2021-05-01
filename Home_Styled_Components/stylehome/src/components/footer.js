import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer `
    position: fixed;
    bottom: 0;
    left: 0;
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #457667;
`
const FooterItem = styled.span `
    text-decoration: none;
    font-size: 16px;
    align-items: center;
    display: flex;
    color: #000;
    font-weight: bold;
`

export default function footer() {
    return (
        <React.Fragment>
            <Footer >
                <FooterItem>Aula Sobre Styled Components.</FooterItem>
            </Footer>
        </React.Fragment>
    );
}
