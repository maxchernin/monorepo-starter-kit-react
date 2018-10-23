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
            Monorepo is awesome.<br/>
            notfound 404 component comes from common-ui package.<br/>
            regex and examplemission are coming from from common-data package
          </p>
        </header>
        <NotFound/>
      </div>
    );
  }
}

export default App;
