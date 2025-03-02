import React from 'react';
import Button from 'antd/es/button';
import { useNavigate } from 'react-router-dom';

const JohnDoe: React.FC = () => {
  const navigate = useNavigate();

  return (    
    <div style={{ textAlign: 'center', marginTop: 50 }}>      
      <h1>John Doe</h1>      
      <p>This is the John Doe page.</p>    
      <Button type="primary" onClick={() => navigate('/')}>
        Go Back
      </Button>
    </div>  
  );
}

export default JohnDoe;
