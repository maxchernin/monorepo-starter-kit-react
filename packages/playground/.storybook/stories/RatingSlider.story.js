import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { RatingSlider } from 'common-ui/dist'


let fieldMock = {
    page: 0,
    value: 0,
    mandatory: "false",
    editable: "true",
    instruct: "insturctur",
    name: "rating slider"
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
  
  storiesOf('Rating Sliders', module)
    .add('Basic', () => (
       <RatingSlider field={fieldMock} branding={branding} store={storemock}/>
    ))
    .add('more complex', () => (
      <div>complex here</div>
    ));