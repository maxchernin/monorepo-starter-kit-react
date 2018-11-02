import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {PageSpacing, NotFound, RatingSlider, Eta } from 'common-ui/dist'
import {regexBase, exampleNavigationJson} from 'common-data';

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
    let branding = {
      cfFieldRequiredMessage: "field is required.",
      colors: {
        mainColor: 'purple'
      }
    };
    let storemock = {
      fieldsRefs: []
    };
    let eta = {
      label: 'On my way to',
      destinationAddress: "a random street, a random city, israel"
    }
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
        <PageSpacing spaces={5}/>
        <div style={{width: '50%'}}>
        <RatingSlider field={fieldMock} branding={branding} store={storemock}/>
        <div style={{width: '90%', marginTop: '10px', background: 'red' }}>
        <Eta branding={branding}
            isFinished={false} 
            label={eta.label}
            // cusLocation={cusLocation}
            destination={eta.destinationAddress}
            /> 
        </div>
        </div>
      </div>
    );
  }
}

export default App;
