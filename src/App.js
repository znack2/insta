import React, { Fragment } from 'react';

import FirstProto from  './pages/v1'

import './assets/styles/index.css'

import inst from './assets/img/inst.png'

const App = () => {
  return (
      <Fragment>
          <div className="main-content">
              <main className="content">
                  <div className="content-fix">
                      <div className="tc" style={{
                          maxWidth: '500px',
                          fontSize: '1.56rem',
                          margin: '0 auto',
                          padding: '20px',
                          lineHeight: '1.21'
                      }}>
                          <p>
                              Автоматический подбор путешествия на основании вашего профиля
                          </p>
                          <br/>
                          <img src={inst} alt="" style={{
                              maxWidth: '100%'
                          }}/>
                      </div>
                      <FirstProto />
                  </div>
              </main>
          </div>

          <footer className={'content content--footer main-footer'}>
              <div className="content-fix tc">
                  © 2019-{new Date().getFullYear()} WhatNext Labs, Inc.
              </div>
          </footer>
      </Fragment>
  );
}

export default App;
