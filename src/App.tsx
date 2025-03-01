import Button from 'antd/es/button';
import Card from 'antd/es/card';
import React from 'react';

const App: React.FC = () => {
  const handleClick = () => {
    alert('Clicked!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to React with Ant Design</h1>
      <Button type="primary" onClick={handleClick}>
        Click Me
      </Button>
      <Card title="Sample Card" style={{ marginTop: '20px', maxWidth: '300px' }}>
        <p>This is a sample card using Ant Design.</p>
      </Card>
    </div>
  );
};

export default App;