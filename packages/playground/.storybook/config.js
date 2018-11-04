import { configure } from '@storybook/react';

function loadStories() {
    require('./stories/index.js');
    // require('./stories/RatingSlider.story');
    // You can require as many stories as you need.
  }
  
  configure(loadStories, module);