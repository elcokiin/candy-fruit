import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Logo from '../assets/images/logo.svg';

function Navbar() {
    return (
        <ContainerNav>
            <LogoImg>
                <img src={Logo} alt="Candy Fruit"></img>
            </LogoImg>
            <Menu>
                <FontAwesomeIcon icon={faBars} />
                <span>Menu</span>
            </Menu>
        </ContainerNav>
    )
}

export default Navbar;

// Styles

const ContainerNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    right: 0;
    left: 0;
    z-index: 10;
`

const LogoImg = styled.figure`
    width: 180px;
    height: 150px;
    img {
        width: 100%;
        height: 100%;
        object-fit: container;
    }
`
const Menu = styled.button`
    cursor: pointer;
    background: none;
    padding: 8px;
    border-top: none;
    border-right: none;
    border-left: none;
    font-size: 15px;
    transition: 250ms;

    span {
        margin-left: 5px;
    }
    &:hover {
        transform: scale(1.3);
        opacity: 0.95;
    }
`