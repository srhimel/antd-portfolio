import React from 'react';
import { SectionLight } from '../../components/styles/element.styled';
import { Container } from '../../components/styles/layout.styled';
import useThemeContext from '../../hooks/useThemeContext';
import BlogSection from '../Home/BlogSection/BlogSection';

const Blogs = () => {
    const { theme } = useThemeContext();
    return (
        <div>
            <SectionLight theme={theme} padding="80px 0">
                <Container>
                    <BlogSection />
                </Container>
            </SectionLight>
        </div>
    );
};

export default Blogs;