import React from 'react';
import About from '../../components/About/About';
import { SectionLight } from '../../components/styles/element.styled';
import { Container } from '../../components/styles/layout.styled';
import useThemeContext from '../../hooks/useThemeContext';

const Contact = () => {
    const { theme } = useThemeContext();
    return (
        <div>
            <SectionLight theme={theme} padding="80px 0">
                <Container>
                    <About />

                </Container>
            </SectionLight>
        </div>
    );
};

export default Contact;