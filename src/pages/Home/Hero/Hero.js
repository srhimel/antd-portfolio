import { CloudDownloadOutlined, FacebookFilled, GithubFilled, LinkedinFilled, MediumSquareFilled, TwitterSquareFilled } from '@ant-design/icons';
import { Button, Space } from 'antd';
import React from 'react';
import { Typography } from 'antd';

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { FlexBox } from '../../../components/styles/layout.styled';
import { HeroWrapper } from '../../../components/styles/wrapper.styled';
import Typewriter from 'typewriter-effect';

const { Link } = Typography;
const Hero = () => {
    return (
        <HeroWrapper>
            <div className="my-name">
                <h1 style={{ display: 'flex', gap: '1rem' }}><Zoom left cascade collapse>
                    Shahamar
                </Zoom> <Zoom right cascade collapse>
                        Rahman
                    </Zoom> </h1>
            </div>
            <div className="my-info">
                <Fade bottom delay={500}>
                    I'm a React UI/UX Developer based in Dhaka, Bangladesh.
                    I strives to build immersive & beautiful web applications using modern technologies
                </Fade>
            </div>
            <div className="type-effect">
                <Fade bottom delay={800}>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString('I work on <strong style="color: #E01545;">React JS</strong>')
                                .pauseFor(2500)
                                .deleteChars(8)
                                .typeString('<strong style="color: #E01545;">UI/UX Development</strong>')
                                .pauseFor(2500)
                                .deleteChars(17)
                                .typeString('<strong style="color: #E01545;">MERN Stack Development</strong>')
                                .pauseFor(2500)
                                .deleteAll()
                                .start()
                                .typeString('And also on <strong style="color: #E01545;">React Native Development</strong>')
                                .pauseFor(2500)
                                .deleteAll()
                                .start()

                        }}
                    />
                </Fade>
            </div>



            <div className="cta-button">
                <Fade bottom delay={1100}>
                    <Space size="middle" align="center" wrap style={{ justifyContent: 'center', marginTop: 30 }}>
                        <Button type="primary" shape="round" size="large" icon={<CloudDownloadOutlined />}>Download Resume</Button>
                        <Button type="default" shape="round" size="large" icon={<LinkedinFilled />}>Visit Linkedin</Button>
                    </Space>

                </Fade>
            </div>
            <div className="social-links">
                <Fade bottom delay={1400}>
                    <FlexBox>
                        <Space size="middle" align="center">
                            <Link style={{ fontSize: '1.4rem' }} ><FacebookFilled /></Link>
                            <Link style={{ fontSize: '1.4rem' }} ><LinkedinFilled /></Link>
                            <Link style={{ fontSize: '1.4rem' }} ><GithubFilled /></Link>
                            <Link style={{ fontSize: '1.4rem' }} ><TwitterSquareFilled /></Link>
                            <Link style={{ fontSize: '1.4rem' }} ><MediumSquareFilled /></Link>
                        </Space>
                    </FlexBox>
                </Fade>
            </div>

        </HeroWrapper>
    );
};

export default Hero;