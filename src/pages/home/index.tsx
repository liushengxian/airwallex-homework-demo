import React from 'react';
import { Container } from '@mui/material';
import './index.scss';

import RequestInvite from './components/RequestInvite';

function App() {
  return (
    <div className="home">
      <Container maxWidth="sm" className="home-container">
        <h1 className='title'>A better way <br /> to enjoy every day.</h1>
        <p className='subtitle'>Be the first to know when we launch.</p>
        <RequestInvite />
      </Container>
    </div>
  );
}

export default App;
