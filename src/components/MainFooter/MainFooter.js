import { BackTop, Col, Row } from 'antd';
import React from 'react';
import useThemeContext from '../../hooks/useThemeContext';
import { Footer, FooterBottom } from '../styles/element.styled';
import { Container } from '../styles/layout.styled';
import { List, Avatar } from 'antd';
import { Form, Input, Button, message } from 'antd';
import { SendOutlined } from '@ant-design/icons';
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  }
];

const MainFooter = () => {
  const { theme } = useThemeContext();



  const [form] = Form.useForm();

  const onFinish = (values) => {
    message.success("Message Sent Successfully!");
    form.resetFields();
  }

  const layout = {
    labelCol: {
      span: 9,
    },
    wrapperCol: {
      span: 17,
    },
  };



  return (
    <>
      <Footer theme={theme}>
        <Container>
          <Row gutter={[30, 30]}>
            <Col lg={7} md={8} sm={12} xs={12}>
              <h2>Resources</h2>
              <List>
                <List.Item style={{ border: 'none', marginBottom: -10 }}>
                  <a href="/">Ant Design - UI/UX</a>
                </List.Item>
                <List.Item style={{ border: 'none', marginBottom: -10 }}>
                  <a href="/">React JS - JavaScript Library</a>
                </List.Item>
                <List.Item style={{ border: 'none', marginBottom: -10 }}>
                  <a href="/">Next JS - React Framework</a>
                </List.Item>
                <List.Item style={{ border: 'none', marginBottom: -10 }}>
                  <a href="/">mongoDB - noSQL Database</a>
                </List.Item>
                <List.Item style={{ border: 'none', marginBottom: -10 }}>
                  <a href="/">Material UI - UI/UX </a>
                </List.Item>
                <List.Item style={{ border: 'none', marginBottom: -10 }}>
                  <a href="/">Node JS - JS Runtime</a>
                </List.Item>
              </List>
            </Col>
            <Col lg={7} md={8} sm={12} xs={12}>
              <h2>Recent Posts</h2>
              <List
                bordered={false}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                  <List.Item style={{ border: 'none' }}>
                    <List.Item.Meta
                      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                  </List.Item>
                )}
              />
            </Col>
            <Col style={{ marginLeft: 'auto' }} lg={8} md={8} sm={24} xs={24}>
              <h2>Contact Me</h2>
              <Form form={form} {...layout} name="nest-messages" onFinish={onFinish}>
                <Form.Item
                  name={['user', 'name']}
                  label="Name"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your name!'
                    },
                  ]}
                >
                  <Input placeholder="Your Name" />
                </Form.Item>
                <Form.Item
                  name={['user', 'email']}
                  label="Email"
                  rules={[
                    {
                      required: true,
                      type: 'email',
                      message: 'Please input your email!'
                    },
                  ]}
                >
                  <Input placeholder="Your email address" />
                </Form.Item>
                <Form.Item name={['user', 'message']} label="Your Message">
                  <Input.TextArea placeholder="Send me a message" />
                </Form.Item>
                <Form.Item>
                  <Button icon={<SendOutlined />} type="primary" htmlType="submit" >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>

        </Container>
      </Footer>
      <FooterBottom theme={theme}>
        Made with <span className="heart">❤</span> by Shahamar Rahamn | &copy; 2022 - All right reserved
      </FooterBottom>
      <BackTop />
    </>

  );
};

export default MainFooter;