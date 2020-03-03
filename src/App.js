import React, { Fragment } from 'react';

import FirstProto from  './pages/v1'

import './assets/styles/index.css'

const App = () => {

  return (
      <Fragment>
          <div className="main-content content">
              <main className="content">
                  <div className="content-fix">
                      <FirstProto />
                  </div>
              </main>
          </div>
          <div className="bubble bubble-1" />
          <div className="bubble bubble-2" />
          <div className="bubble bubble-3" />
          <div className="bubble bubble-4" />
          <div className="bubble bubble-5" />
      </Fragment>
  );
}

export default App;
