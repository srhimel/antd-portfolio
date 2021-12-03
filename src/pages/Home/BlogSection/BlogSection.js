import React from 'react';
import Fade from 'react-reveal/Fade';
import { SecSubTitle, SecTitle } from '../../../components/styles/element.styled';
const BlogSection = () => {
    return (
        <div>
            <Fade bottom>
                <SecTitle>Blogs</SecTitle>
                <SecSubTitle>Follow my blogs and be a part.</SecSubTitle>
            </Fade>
        </div>
    );
};

export default BlogSection;