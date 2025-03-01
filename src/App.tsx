// import Button from 'antd/es/button';
import Card from 'antd/es/card';
import React from 'react';

const App: React.FC = () => {
  // const handleClick = () => {
  //   alert('Clicked!');
  // };

  return (
    
    <div style={{ padding: '20px' }}>
      {/* <Button type="primary" onClick={handleClick}>
        Click Me
      </Button> */}
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to React with Ant Design</h1>
      </div>
      
      <Card title="Sample Card" style={{ marginTop: '20px', textAlign: 'center', maxWidth: '3000px' }}>
        <div style={{ textAlign: 'left' }}> 
          <p>This is a sample card using Ant Design.</p>
        </div>
      </Card>
    </div>
  );
};

export default App;