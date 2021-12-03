
import React from 'react';
import About from '../../components/About/About';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import { HeroSection, Section, SectionLight } from '../../components/styles/element.styled';
import { Container } from '../../components/styles/layout.styled';
import useThemeContext from '../../hooks/useThemeContext';
import BlogSection from './BlogSection/BlogSection';
import Hero from './Hero/Hero';

const Home = () => {
    const { theme } = useThemeContext();
    return (
        <div>
            <HeroSection theme={theme} padding="40px 0" mobile="10px 0">
                <Container>
                    <Hero />
                </Container>
            </HeroSection>
            <SectionLight theme={theme} padding="80px 0">
                <Container>
                    <ProjectsSection />
                </Container>
            </SectionLight>
            <Section theme={theme} padding="80px 0">
                <Container>
                    <About />

                </Container>
            </Section>
            <SectionLight theme={theme} padding="80px 0">
                <Container>
                    <BlogSection />
                </Container>
            </SectionLight>
        </div>
    );
};

export default Home;