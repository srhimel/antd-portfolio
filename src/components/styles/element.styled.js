import styled from 'styled-components';

export const Header = styled.h3`

`
export const Footer = styled.div`
    background: ${props => props.theme === "dark" ? '#001529' : '#F0F0F0'};
    transition: all 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
    color:  ${props => props.theme === "dark" ? '#fff' : 'rgba(0, 0, 0, 0.85)'};
    padding: 40px 0;
    p,h2, a, div, label{
        color: ${props => props.theme === "dark" ? '#fff' : 'rgba(0, 0, 0, 0.85)'};
        transition: all 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
    }
    a:hover{
        color: #E01545;
    }
    h4{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    }
`
export const FooterBottom = styled.div`
    background: ${props => props.theme === "dark" ? '#001529' : '#F0F0F0'};
    transition: all 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
    padding: 15px 0;
    text-align: center;
    color:  ${props => props.theme === "dark" ? '#fff' : 'rgba(0, 0, 0, 0.85)'};
    *{
        color: ${props => props.theme === "dark" ? '#fff' : 'rgba(0, 0, 0, 0.85)'};
        transition: all 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
    }
`

export const SectionLight = styled.div`
        background: ${props => props.theme === "dark" ? '#001529f5' : '#FFF'};
        padding: ${props => props.padding || '40px 0'};
        color: ${props => props.theme === "dark" ? '#fff' : 'rgba(0, 0, 0, 0.85)'};
        transition: all 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
        p,
        h2,
        div,
        li *
        {
            color: ${props => props.theme === "dark" ? '#fff' : 'rgba(0, 0, 0, 0.85)'};
            transition: all 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
        }
        @media (max-width:992px){
            padding: ${props => props.mobile || '40px 0'};
        }
    
`
export const HeroSection = styled.div`
        background-color: ${props => props.theme === "dark" ? '#001529' : '#F1F1F1'};
        background-image: url(${props => props.theme === "dark" ? 'http://srhimel.xyz/images/hero.jpg' : 'https://srhimel.xyz/images/hero-light.jpg'});
        background-blend-mode: normal;
        background-size: cover;
        padding: ${props => props.padding || '40px 0'};
        color: ${props => props.theme === "dark" ? '#fff' : 'rgba(0, 0, 0, 0.85)'};
        transition: all 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
        p,
        h2,
        .social-links svg,
        div
        {
            color: ${props => props.theme === "dark" ? '#fff' : 'rgba(0, 0, 0, 0.85)'};
            transition: all 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
        }
        @media (max-width:992px){
            padding: ${props => props.mobile || '40px 0'};
        }
    
`
export const Section = styled.div`
        background: ${props => props.theme === "dark" ? '#001529' : '#F0F0F0'};
        padding: ${props => props.padding || '40px 0'};
        color: ${props => props.theme === "dark" ? '#fff' : 'rgba(0, 0, 0, 0.85)'};
        transition: all 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
        p,
        span,
        h2,
        div
        {
            color: ${props => props.theme === "dark" ? '#fff' : 'rgba(0, 0, 0, 0.85)'};
            transition: all 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
        }
        @media (max-width:992px){
            padding: ${props => props.mobile || '40px 0'};
        }
    
`

export const SecTitle = styled.p`
    color: #E01545 !important;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 1.2rem;
    margin-bottom: 0;
`
export const SecSubTitle = styled.h2`
    font-size: 2rem;
`