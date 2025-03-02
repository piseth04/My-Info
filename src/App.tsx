import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Typography from 'antd/es/typography';
import Avatar from 'antd/es/avatar';
import Card from 'antd/es/card';
import Button from 'antd/es/button';
import JohnDoe from './JohnDoe';

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
      <Card style={{ width: 350, textAlign: 'center', borderRadius: 10, boxShadow: '0 4px 8px rgba(0,0,0,0.1)', marginTop: 50 }}>
        <Avatar size={150} src="/Download.jpg" />
        <Title level={2}>John Doe</Title>
        <Paragraph>Software Engineer | Web Developer</Paragraph>
        <Paragraph>Email: johndoe@example.com</Paragraph>
        <Paragraph>Location: New York, USA</Paragraph>
        <Paragraph>Current Job: Unemployed!</Paragraph>
        <Button type="primary" style={{ marginTop: 10 }} onClick={() => navigate('/john-doe')}>
          Contact Me
        </Button>
      </Card>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/john-doe" element={<JohnDoe />} />
      </Routes>
    </Router>
  );
};

export default App;
