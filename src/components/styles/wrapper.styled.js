import { Drawer } from 'antd';
import styled from 'styled-components';
export const HeaderWrapper = styled.div`

    background-color: ${props => props.theme === "dark" ? '#001529' : '#F0F0F0'};
    transition: background-color 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
    
.main{
    display: flex;
    align-items: center;
    .logo{
        width: 200px;
        img{
            width: 130px;
        }
    }
    padding: 8px 0;
    .desk-menu{
        width: calc(100%-200px);
        margin-left: auto;
        .ant-menu-horizontal{
            border-color: transparent !important;
        }
        .ant-menu{
            background: ${props => props.theme === "dark" ? '#001529' : '#F0F0F0'};
            transition: background 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
        }
        @media (max-width:992px){
            display: none;
        }
    }
    .mobile-menu{
        margin-left: 20px;
        @media (min-width:993px){
            display: none;
            margin-left: 0;
        }
    }
    
        .theme-switch{
            margin-left: auto;
            @media (min-width:993px){
                margin-left: 20px;
            }
        }
}
    
`

export const DrawerStyled = styled(Drawer)`
.ant-drawer-header,
.ant-drawer-content{
    background-color: ${props => props.theme === "dark" ? '#001529' : '#F0F0F0'};
    transition: background-color 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
}
.ant-drawer-close{
    color: ${props => props.theme === "dark" ? '#fff' : '#222'};
    transition: color 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
}
.ant-drawer-header{
    border-color: transparent;
}
`


export const HeroWrapper = styled.div`
    display: flex;
    gap: 30px ;
    flex-direction: column;
    height: 90vh;
    align-items: center;
    justify-content: center;
    position: relative;
    h1{
        margin-top: -80px;
        font-size: 6rem;
        margin-bottom: -30px;
        @media (min-width:1400px){
            font-size: 8rem;
        }
        @media (max-width:992px){
            font-size: 5rem;
        }
        @media (max-width:720px){
            font-size: 4rem;
            margin-bottom: 0px;
        }
        @media (max-width:600px){
            font-size: 3rem;
            margin-bottom: 0px;
        }
        @media (max-width:450px){
            font-size: 2rem;
            margin-top: 0px;
            margin-bottom: 0px;
        }
    }
    .my-name h1 div:nth-child(2){
        .react-reveal span{
            color: #E01545 !important;
        }
        
    }
    .my-info{
        max-width: 600px;
        text-align: center;
        font-size: 1.1rem;
        @media (max-width:600px){
            font-size: 14px;
        }
    }
    .social-links{
        position: absolute;
        bottom: 50px;
        
    }
    .cta-button{
        .ant-space-item:nth-child(1) button span,
        .ant-space-item:nth-child(1) button svg path{
            color: #fff !important;
        }
        .ant-space-item:nth-child(2) button span,
        .ant-space-item:nth-child(2) button svg path{
            color: #262626 !important;
        }
    }
    .type-effect{
        font-size: 2.3rem;
        margin-top: -10px;
        text-transform: uppercase;
        @media (max-width:720px){
            font-size: 1.5rem;
        }
        @media (max-width:600px){
            font-size: 1.2rem;
        }
        
    }
`