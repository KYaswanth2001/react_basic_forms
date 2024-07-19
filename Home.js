import React from 'react';

function Home() {
  return (
    
    
    <div style={{ 
      position: 'fixed', 
      top: 120, 
      left:0, 
      width: '100vw', 
      height: '100vh', 
      overflow: 'hidden' 
    }}>
         

      <img
        src='https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='img'
        style={{ 
          width: '100%', 
          height: '70%', 
          objectFit: 'cover', 
          
        }}
      />
      
    </div>
    
  );
}

export default Home;
