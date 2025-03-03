import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Title, Paragraph, Avatar, Card, Button } from './antdImports';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
        <Card style={{ width: 340, textAlign: 'center', margin: '15px', borderRadius: 10, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <Avatar size={140} src="/Download.jpg" />
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
    </div>
  );
};

export default Home;
