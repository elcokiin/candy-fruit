import React from 'react'
import styled from 'styled-components';

import Background from '../assets/images/background-home.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

function Section() {
    return (
        <Container>
            <BackgroundImg>
                <img src={Background} alt="Background"/>
            </BackgroundImg>
            <Wrap>
                <ItemText>
                        <h1>Disfruta de tu Snack con Tranquilidad</h1>
                        <h3>Prueba Candy Fruit</h3>
                </ItemText>
                <DownArrow>
                    <FontAwesomeIcon icon={faArrowDown} />
                </DownArrow>
            </Wrap>
        </Container>
    )
}

export default Section;

const Container = styled.div`
    overflow-x: hidden;
`

const BackgroundImg = styled.figure`
    z-index: -1;
    width: 100vw;
    height: 100vh;
    position: absolute;

    img {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
    }
`

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20vh;
    text-shadow: 0 0 20px #fefefe;
    font-size: 25px;
    @media (max-width: 770px) {
        font-size: 18px;
        h1 {
            display: none;
        }
    }
`
const DownArrow = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
    margin: 20px;
    margin-right: 5%;
    font-size: 60px;
    color: #000;
    animation: animateDown infinite 1.5s;
    @media (max-width: 770px) {
        font-size: 40px;
        justify-content: center;
        margin: 5px 0;
    }
`