import React, { Fragment } from 'react';

import FirstProto from  './pages/v1'

import MainTitle from './components/MainTitle'

import './assets/styles/index.css'

import inst from './assets/img/inst.png'

const App = () => {
  const location = new URL(window.location)

  return (
      <Fragment>
          <div className="main-content content">
              <main className="content">
                  <div className="content-fix">
                      <FirstProto />
                  </div>
              </main>
          </div>

          <footer className={'content content--footer has-background-info'}>
              <div className="content-fix tc">
                  © 2019-{new Date().getFullYear()} WhatNext Labs, Inc.
              </div>
          </footer>
      </Fragment>
  );
}

export default App;
