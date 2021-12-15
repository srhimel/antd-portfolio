import React from 'react';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import { SectionLight } from '../../components/styles/element.styled';
import { Container } from '../../components/styles/layout.styled';
import useThemeContext from '../../hooks/useThemeContext';

const Projects = () => {
    const { theme } = useThemeContext();
    return (
        <div>
            <SectionLight theme={theme} padding="80px 0">
                <Container>
                    <ProjectsSection />
                </Container>
            </SectionLight>
        </div>
    );
};

export default Projects;