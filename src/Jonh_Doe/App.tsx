import React from 'react';
import Typography from 'antd/es/typography';
import Avatar from 'antd/es/avatar';
// import Card from 'antd/es/card';
import Button from 'antd/es/button';

const { Title, Paragraph } = Typography;

export const Jonh: React.FC = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
    
        <Avatar size={150} src="/Download.jpg" />
        <Title level={2}>John Doe</Title>
        <Paragraph>Software Engineer | Web Developer</Paragraph>
        <Paragraph>Email: johndoe@example.com</Paragraph>
        <Paragraph>Location: New York, USA</Paragraph>
        <Paragraph>Currnet Job: Unemployee!</Paragraph>
        <Button type="primary" style={{ marginTop: 10 }}>Contact Me</Button>
     
    </div>
  );
};


