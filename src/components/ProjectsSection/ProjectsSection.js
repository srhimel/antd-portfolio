import React from 'react';
import Fade from 'react-reveal/Fade';
import { SecSubTitle, SecTitle } from '../styles/element.styled';
import { Badge, Card, Col, Row, Tag } from 'antd';
import { EyeOutlined, GithubOutlined } from '@ant-design/icons';
const { Meta } = Card;
const ProjectsSection = () => {
    return (
        <div>
            <Fade bottom>
                <SecTitle>My Work</SecTitle>
                <SecSubTitle>These are some of my personal projects.</SecSubTitle>
            </Fade>

            <div className="projects" style={{ marginTop: 50 }}>
                <Row gutter={[30, 30]}>




                    <Col lg={8} md={12} sm={24} xs={24}>
                        <Fade bottom delay={100}>
                            <Badge.Ribbon text="MERN Stack" >
                                <Card
                                    size="small"
                                    style={{ background: 'transparent' }}
                                    cover={<img alt="example" src="https://srhimel.xyz/images/2.jpg" />}
                                    actions={[
                                        <a href="https://droneza-a5145.web.app/" >
                                            <EyeOutlined key="live" /><span> Live link</span></a>,
                                        <a href="https://github.com/srhimel/droneza-client">
                                            <GithubOutlined key="code" /> <span> Git Client</span></a>,
                                        <a href="https://github.com/srhimel/droneza-server">
                                            <GithubOutlined key="code" /> <span> Git Server</span></a>,
                                    ]}
                                >
                                    <Meta title="Droneza - A small eCommerce" description={
                                        <ul>
                                            <li>Advanced User/Admin Panel</li>
                                            <li>JWT & Firebase Secure Auth</li>
                                            <li>Clean and minimal design</li>
                                        </ul>

                                    } />
                                    <div style={{ lineHeight: 2.1 }}>
                                        <Tag color="#0079F2">#MUI</Tag>
                                        <Tag color="#EAD41C" style={{ color: '#000' }}>#JavaScript</Tag>
                                        <Tag color="#2db7f5">#React</Tag>
                                        <Tag color="#7CC327">#Node JS</Tag>
                                        <Tag color="#0FA24C">#MongoDb</Tag>
                                        <Tag color="#C36192">#Sass</Tag>
                                        <Tag color="#9229B3">#Express</Tag>
                                        <Tag color="#3D0091">#Heroku</Tag>
                                        <Tag color="#E97B0A">#Firebase</Tag>
                                        <Tag color="#EE0156">#JWT</Tag>

                                    </div>
                                </Card>
                            </Badge.Ribbon>
                        </Fade>
                    </Col>


                    <Col lg={8} md={12} sm={24} xs={24}>
                        <Fade bottom delay={200}>
                            <Badge.Ribbon text="MERN Stack" >
                                <Card
                                    size="small"
                                    style={{ background: 'transparent' }}
                                    cover={<img alt="example" src="https://srhimel.xyz/images/3.jpg" />}
                                    actions={[
                                        <a href="https://care-hospital-a7835.web.app/" >
                                            <EyeOutlined key="live" /><span> Live link</span></a>,
                                        <a href="https://github.com/srhimel/care-hospital">
                                            <GithubOutlined key="code" /> <span> Git Client</span></a>
                                    ]}
                                >
                                    <Meta title="iCare- Hospital Management" description={
                                        <ul>
                                            <li>Booking Management</li>
                                            <li>Service Management</li>
                                            <li>Clean and responsive design</li>
                                        </ul>

                                    } />
                                    <div style={{ lineHeight: 2.1 }}>
                                        <Tag color="#EAD41C" style={{ color: '#000' }}>#JavaScript</Tag>
                                        <Tag color="#2db7f5">#React</Tag>
                                        <Tag color="#06ADC9">#Tailwind CSS</Tag>
                                        <Tag color="#7CC327">#Node JS</Tag>
                                        <Tag color="#0FA24C">#MongoDb</Tag>
                                        <Tag color="#C36192">#Sass</Tag>
                                        <Tag color="#9229B3">#Express</Tag>
                                        <Tag color="#3D0091">#Heroku</Tag>
                                        <Tag color="#E97B0A">#Firebase</Tag>

                                    </div>
                                </Card>
                            </Badge.Ribbon>
                        </Fade>
                    </Col>
                    <Col lg={8} md={12} sm={24} xs={24}>
                        <Fade bottom delay={300}>
                            <Badge.Ribbon text="MERN Stack">
                                <Card
                                    size="small"
                                    style={{ background: 'transparent' }}
                                    cover={<img alt="example" src="https://srhimel.xyz/images/4.jpg" />}
                                    actions={[
                                        <a href="https://toitoi-guru.web.app/" >
                                            <EyeOutlined key="live" /><span> Live link</span></a>,
                                        <a href="https://github.com/srhimel/totoTravel-client">
                                            <GithubOutlined key="code" /> <span> Git Client</span></a>,
                                        <a href="https://github.com/srhimel/totoTravel-server">
                                            <GithubOutlined key="code" /> <span> Git Server</span></a>,
                                    ]}
                                >
                                    <Meta title="ToTo Travel - Hotel Booking" description={
                                        <ul>
                                            <li>Admin & User Panel</li>
                                            <li>Google Map API</li>
                                            <li>Advance Filtering and more</li>
                                        </ul>

                                    } />
                                    <div style={{ lineHeight: 2.1 }}>
                                        <Tag color="#EAD41C" style={{ color: '#000' }}>#JavaScript</Tag>
                                        <Tag color="#2db7f5">#React</Tag>
                                        <Tag color="#7CC327">#Node JS</Tag>
                                        <Tag color="#0FA24C">#MongoDb</Tag>
                                        <Tag color="#8A2BE2">#Bootstrap</Tag>
                                        <Tag color="#C36192">#Sass</Tag>
                                        <Tag color="#9229B3">#Express</Tag>
                                        <Tag color="#3D0091">#Heroku</Tag>
                                        <Tag color="#E97B0A">#Firebase</Tag>

                                    </div>
                                </Card>
                            </Badge.Ribbon>
                        </Fade>
                    </Col>
                    <Col lg={8} md={12} sm={24} xs={24}>
                        <Fade bottom delay={400}>
                            <Badge.Ribbon text="MERN Stack" >
                                <Card
                                    size="small"
                                    style={{ background: 'transparent' }}
                                    cover={<img alt="example" src="https://srhimel.xyz/images/5.jpg" />}
                                    actions={[
                                        <a href="https://icare-dental.web.app/" >
                                            <EyeOutlined key="live" /><span> Live link</span></a>,
                                        <a href="https://github.com/srhimel/doctors-potral">
                                            <GithubOutlined key="code" /> <span> Git Client</span></a>,
                                        <a href="https://github.com/srhimel/doctor-backend">
                                            <GithubOutlined key="code" /> <span> Git Server</span></a>,
                                    ]}
                                >
                                    <Meta title="Dental Care- Appointment Booking" description={
                                        <ul>
                                            <li>Interactive Calender Booking</li>
                                            <li>Stripe Payment Gateway</li>
                                            <li>Advance Filtering and more</li>
                                        </ul>

                                    } />
                                    <div style={{ lineHeight: 2.1 }}>
                                        <Tag color="#0079F2">#MUI</Tag>
                                        <Tag color="#EAD41C" style={{ color: '#000' }}>#JavaScript</Tag>
                                        <Tag color="#2db7f5">#React</Tag>
                                        <Tag color="#7CC327">#Node JS</Tag>
                                        <Tag color="#0FA24C">#MongoDb</Tag>
                                        <Tag color="#9229B3">#Express</Tag>
                                        <Tag color="#3D0091">#Heroku</Tag>
                                        <Tag color="#E97B0A">#Firebase</Tag>
                                        <Tag color="#EE0156">#JWT</Tag>
                                        <Tag color="#6772E5">#Stripe</Tag>

                                    </div>
                                </Card>
                            </Badge.Ribbon>
                        </Fade>
                    </Col>

                    <Col lg={8} md={12} sm={24} xs={24}>
                        <Fade bottom delay={500}>
                            <Badge.Ribbon text="React" color="magenta">
                                <Card
                                    size="small"
                                    style={{ background: 'transparent' }}
                                    cover={<img alt="example" src="https://srhimel.xyz/images/1.jpg" />}
                                    actions={[
                                        <a href="https://modest-mcclintock-1da3de.netlify.app/" >
                                            <EyeOutlined key="live" /><span> Live link</span></a>,
                                        <a href="https://github.com/srhimel/mihus-kitchen">
                                            <GithubOutlined key="code" /> <span> Git Client</span></a>
                                    ]}
                                >
                                    <Meta title="Mihu's Kitchen - UI" description={
                                        <ul>
                                            <li>Tailwind CSS Block</li>
                                            <li>Theme switcher</li>
                                            <li>Clean and Optimized</li>
                                        </ul>

                                    } />
                                    <div style={{ lineHeight: 2.1 }}>
                                        <Tag color="#EAD41C" style={{ color: '#000' }}>#JavaScript</Tag>
                                        <Tag color="#2db7f5">#React</Tag>
                                        <Tag color="#06ADC9">#Tailwind CSS</Tag>
                                        <Tag color="#C36192">#Sass</Tag>
                                        <Tag color="#E97B0A">#Firebase</Tag>
                                        <Tag color="#EE0156">#JWT</Tag>

                                    </div>
                                </Card>
                            </Badge.Ribbon>
                        </Fade>
                    </Col>





                    <Col lg={8} md={12} sm={24} xs={24}>
                        <Fade bottom delay={600}>
                            <Badge.Ribbon text="REACT" color="magenta">
                                <Card
                                    size="small"
                                    style={{ background: 'transparent' }}
                                    cover={<img alt="example" src="https://srhimel.xyz/images/6.jpg" />}
                                    actions={[
                                        <a href="https://dreamy-fermat-9112b4.netlify.app/" >
                                            <EyeOutlined key="live" /><span> Live link</span></a>,
                                        <a href="https://github.com/srhimel/travel-guru-react">
                                            <GithubOutlined key="code" /> <span> Git Client</span></a>
                                    ]}
                                >
                                    <Meta title="Travel Guru- UI" description={
                                        <ul>
                                            <li>Custom Slider</li>
                                            <li>Responsive Design</li>
                                            <li>Clean UI/UX</li>
                                        </ul>

                                    } />
                                    <div style={{ lineHeight: 2.1 }}>
                                        <Tag color="#EAD41C" style={{ color: '#000' }}>#JavaScript</Tag>
                                        <Tag color="#2db7f5">#React</Tag>
                                        <Tag color="#8A2BE2">#Bootstrap</Tag>
                                        <Tag color="#C36192">#Sass</Tag>
                                        <Tag color="#E97B0A">#Firebase</Tag>
                                        <Tag color="#EE0156">#JWT</Tag>

                                    </div>
                                </Card>
                            </Badge.Ribbon>
                        </Fade>
                    </Col>







                </Row>
            </div>

        </div>

    );
};

export default ProjectsSection;