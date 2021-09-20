import React from 'react';
import styled from "styled-components";

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from "./components/Footer";

function App() {
    return (
        <Container>
            <Navbar />
            <Home />
            <Footer />
        </Container>
    )
}

export default App;

const Container = styled.div`
    overflow-x: none;
`
