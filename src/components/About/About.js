import React from 'react';
import { FacebookFilled, GithubFilled, LinkedinFilled, MediumSquareFilled, TwitterSquareFilled } from '@ant-design/icons';
import { Col, Row, Space } from 'antd';
import { Typography } from 'antd';
import Fade from 'react-reveal/Fade';
import { SecSubTitle, SecTitle } from '../styles/element.styled';
const { Link } = Typography;
const About = () => {
    return (
        <Row gutter={[30, 30]} align="middle">
            <Col lg={12}>
                <Fade left>
                    <img src="https://srhimel.xyz/images/image.jpg" alt="" width="100%" style={{ border: '10px solid #F0F0F0', borderRadius: 15 }} />
                </Fade>

            </Col>
            <Col lg={12}>
                <Fade right>
                    <SecTitle>About Me</SecTitle>
                    <SecSubTitle>Why hire me for your next project?</SecSubTitle>
                    <p>- It's My Pleasure to Introduce About Myself.</p>
                    <p>
                        I am a professional full-stack Developer with 4 years of practical experience in the design, development, testing of the web-based software application.

                        I am passionate, reliable, active, honest and ready at any point in time. I have teamwork experience as well as individuals managing and working on projects.
                    </p>
                    <p> I use TDD (test-driven environment).It is important for me to give clients satisfaction to build a long-term relationship and I would like to work on long-term projects. I do what I am passionate and always like to learn new technology. </p>

                    <Row>
                        <Col lg={12} xs={24}>
                            <Row>
                                <Col span={8}><strong>Name</strong></Col>
                                <Col span={16}>: Shahamar Rahman</Col>
                            </Row>
                            <Row>
                                <Col span={8}><strong>Study</strong></Col>
                                <Col span={16}>: Computer Science (B.Sc)</Col>
                            </Row>
                            <Row>
                                <Col span={8}><strong>Email</strong></Col>
                                <Col span={16}>: himusr@gmail.com</Col>
                            </Row>
                            <Row>
                                <Col span={8}><strong>Phone</strong></Col>
                                <Col span={16}>: +880-175-75120-95</Col>
                            </Row>
                        </Col>
                        <Col lg={12} xs={24}>
                            <Row>
                                <Col span={8}><strong>University</strong></Col>
                                <Col span={16}>: Gono Bishwabidyalay </Col>
                            </Row>
                            <Row>
                                <Col span={8}><strong>Age</strong></Col>
                                <Col span={16}>: 27+ </Col>
                            </Row>
                            <Row>
                                <Col span={8}><strong>Address</strong></Col>
                                <Col span={16}>: Dhamrai, Dhaka, Bangladesh</Col>
                            </Row>
                            <Row>
                                <Col span={8}><strong>Freelance</strong></Col>
                                <Col span={16}>: Available</Col>
                            </Row>
                        </Col>
                    </Row>
                    <Space size="middle" align="center" style={{ marginTop: 20 }}>
                        <Link style={{ fontSize: '1.4rem' }} ><FacebookFilled /></Link>
                        <Link style={{ fontSize: '1.4rem' }} ><LinkedinFilled /></Link>
                        <Link style={{ fontSize: '1.4rem' }} ><GithubFilled /></Link>
                        <Link style={{ fontSize: '1.4rem' }} ><TwitterSquareFilled /></Link>
                        <Link style={{ fontSize: '1.4rem' }} ><MediumSquareFilled /></Link>
                    </Space>
                </Fade>

            </Col>
        </Row>
    );
};

export default About;