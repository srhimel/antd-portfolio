import React, { useState } from 'react';
import { DrawerStyled, HeaderWrapper } from '../styles/wrapper.styled';
import { Button, Menu, Switch } from 'antd';
import { Link } from 'react-router-dom';
import { Container } from '../styles/layout.styled';
import useThemeContext from '../../hooks/useThemeContext';
import { MenuFoldOutlined } from '@ant-design/icons'
const Header = () => {
    const { theme, setTheme } = useThemeContext();
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    const MenuItem = () => {
        return (
            <React.Fragment>
                <Menu.Item key="home">
                    <Link to="/">Home</Link>

                </Menu.Item>
                <Menu.Item key="projects">
                    <Link to="/projects">Projects</Link>
                </Menu.Item>
                <Menu.Item key="blogs">
                    <Link to="/blogs">Blogs</Link>

                </Menu.Item>
                <Menu.Item key="services">
                    <Link to="/services">Services</Link>

                </Menu.Item>
                <Menu.Item key="contact">
                    <Link to="/contact">Contact</Link>

                </Menu.Item>

            </React.Fragment>
        )
    }
    return (
        <HeaderWrapper theme={theme}>
            <Container>
                <div className="main">
                    <div className="logo">
                        <img src={theme === 'dark' ? 'https://srhimel.xyz/images/logo.png' : 'https://srhimel.xyz/images/logo-light.png'} alt="srhimel" />
                    </div>
                    <div className="desk-menu">
                        <Menu theme={theme} mode={"horizontal"}>
                            {MenuItem()}
                        </Menu>
                    </div>
                    <div className="theme-switch">
                        <Switch checkedChildren="dark" unCheckedChildren="light" defaultChecked onChange={() => theme === "light" ? setTheme('dark') : setTheme("light")} />
                    </div>
                    <div className="mobile-menu">
                        <Button shape="circle" type="primary" onClick={showDrawer}>
                            <MenuFoldOutlined />
                        </Button>
                        <DrawerStyled
                            width={250}
                            push={true}
                            theme={theme}
                            title={<img src={theme === 'dark' ? 'https://srhimel.xyz/images/logo.png' : 'https://srhimel.xyz/images/logo-light.png'}
                                alt="srhimel"
                                width="150px" />
                            }
                            placement="right"
                            onClose={onClose}
                            visible={visible}>
                            <Menu theme={theme} mode={"vertical"} onClick={() => setVisible(false)}>
                                {MenuItem()}
                            </Menu>
                        </DrawerStyled>
                    </div>
                </div>

            </Container>
        </HeaderWrapper>
    );
};

export default Header;