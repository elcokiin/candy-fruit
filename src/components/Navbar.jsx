import React, { useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Logo from '../assets/images/logo.svg';

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const changeMenu = () => {
        setOpenMenu(!openMenu);
    }
    return (
        <ContainerNav>
            <LogoImg>
                <img src={Logo} alt="Candy Fruit"></img>
            </LogoImg>
            <Menu>
                <FontAwesomeIcon icon={faBars} />
                <span onClick={changeMenu}>Menu</span>
            </Menu>
            <BurgerNav show={openMenu}>
                <CloseWrapper>
                    <button onClick={changeMenu}>x</button>
                </CloseWrapper>
                <li><a href='#home'>Inicio</a></li>
                <li><a href='#cards'>Tarjetas de presentacion</a></li>
                <li><a href='#map'>Localizanos</a></li>
            </BurgerNav>
        </ContainerNav>
    )
}

export default Navbar;

// Styles

const ContainerNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    margin-right: 5%;

    span {
        margin-left: 5px;
    }
    &:hover {
        transform: scale(1.3);
        opacity: 0.95;
    }
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #f9f9f9;
    width: 300px;
    z-index: 12;
    padding: 20px;
    list-style: none;
    display: flex;
    flex-direction: column;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform .2s;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
    }
    a {
        text-decoration: none;
        font-weight: 500;
        font-family: Arial, Helvetica, sans-serif;
    }
`
const CloseWrapper  = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;

    button {
        cursor: pointer;
        width: 40px;
        height: 35px;
        background: none;
        border: none;
        transition: 250ms all;
        &:hover {
            background: rgba(0, 0, 0, 0.1);
        }
    }
`