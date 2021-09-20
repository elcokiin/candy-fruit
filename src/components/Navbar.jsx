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
            <LogoImg href="/">
                <img src={Logo} alt="Candy Fruit"></img>
            </LogoImg>
            <Menu onClick={changeMenu}>
                <FontAwesomeIcon icon={faBars} />
                <span>Menu</span>
            </Menu>
            <BurgerNav show={openMenu}>
                <CloseWrapper onClick={changeMenu}>
                    <button>x</button>
                </CloseWrapper>
                    <li><a href='#home'>Inicio</a></li>
                    <li><a href="#product">Producto</a></li>
                    <li><a href="#cards">Tarjetas de presentación</a></li>
                    <li><a href='#map'>Localizanos</a></li>
                    <li><a href='#contact'>Contactanos</a></li>
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

const LogoImg = styled.a`
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
    border: 2px solid #000;
    padding: 8px;
    font-size: 22px;
    transition: 250ms;
    margin-top: -25px;
    margin-right: 2px;

    span {
        padding-left: 8px;
        font-weight: 400;
        font-size: 22px;
    }
    &:hover {
        background: rgba(0, 0, 0, 0.1)
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
    padding: 25px;
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