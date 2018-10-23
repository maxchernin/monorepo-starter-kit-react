import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {NotFound} from 'common-ui/dist'
import {exampleNavigationJson} from 'common-data';
import {regexBase} from 'common-data';

class App extends Component {
  render() {
    console.log(exampleNavigationJson);
    console.log(regexBase);
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Monorepo is awesome.
            lets make it happen.
            notfound 404 component comes from common-ui package.
            regex and examplemission are coming from from common-data package
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <NotFound/>
      </div>
    );
  }
}

export default App;
