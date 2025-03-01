import React from 'react';
import Typography from 'antd/es/typography';
import Avatar from 'antd/es/avatar';
import Card from 'antd/es/card';

const { Title, Paragraph } = Typography;

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
      <Card style={{ width: 400, textAlign: 'center', borderRadius: 10, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <Avatar size={100} src="https://via.placeholder.com/100" style={{ marginBottom: 20 }} />
        <Title level={2}>John Doe</Title>
        <Paragraph>Software Engineer | Web Developer</Paragraph>
        <Paragraph>Email: johndoe@example.com</Paragraph>
        <Paragraph>Location: New York, USA</Paragraph>
      </Card>
    </div>
  );
};

export default App;
