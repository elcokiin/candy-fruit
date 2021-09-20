import React from "react";
import styled from 'styled-components';

import colegio from "../assets/images/colegio.png";
import sena from "../assets/images/sena.png";

const Footer = () => {
    return (
        <Container id="contact">
            <div>
                <SubTitle>Dirrección:</SubTitle>
                <Into>
                    <Text>Carrera 6 °N 4-27</Text>
                </Into>
            </div>
            <div>
                <SubTitle>Telefonos:</SubTitle>
                <Into>
                    <ul>
                        <li><Text>3197293579</Text></li>
                        <li><Text>3207318994</Text></li>
                        <li><Text>3108759387</Text></li>
                    </ul>
                </Into>
            </div>
            <div>
                <SubTitle>Email:</SubTitle>
                <Into>
                    <Text>contacto.candyfruit@gmail.com</Text>
                </Into>
            </div>
            <div>
                <SubTitle>Instituciónes colaboradoras:</SubTitle>
                <ContainerImgs>
                    <a href="http://ietejocava.com.co/pagina/" target="_blanck">
                        <img src={colegio} alt="José Cayetano Vasquez"/>
                    </a>
                    <a href="http://oferta.senasofiaplus.edu.co" target="_blanck">
                        <img src={sena} alt="SENA" />
                    </a>
                </ContainerImgs>
            </div>
        </Container>
    )
}

export default Footer;

const Container = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background: #FDD2F5;
    padding-top: 25px;

    div {
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: start;
        background: #FDD2F5;
    }
`

const SubTitle = styled.h3`
    margin-left: 20px;
`


const Into = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
`

const Text = styled.p`
    font-family: sans-serif;
    padding-bottom: 10px;
`

const ContainerImgs = styled.figure`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
        object-fit: cover;
        border-radios: 4px;
    }
`