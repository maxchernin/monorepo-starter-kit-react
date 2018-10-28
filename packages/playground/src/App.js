import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {PageSpacing, NotFound, RatingSlider } from 'common-ui/dist'
import {exampleNavigationJson} from 'common-data';
import {regexBase} from 'common-data';

class App extends Component {
  render() {
    console.log(exampleNavigationJson);
    console.log(regexBase);
    let fieldMock = {
      page: 0,
      value: 0,
      mandatory: "false",
      editable: "true",
      instruct: "insturctur"
    };
    let brand = {
      cfFieldRequiredMessage: "field is required."
    };
    let storemock = {
      fieldsRefs: []
    };
    // console.log(paths);
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
        <PageSpacing spaces={35}/>
        <div style={{width: '50%'}}>
        <RatingSlider field={fieldMock} branding={brand} store={storemock}/>
        </div>
      </div>
    );
  }
}

export default App;
