import React, { Component } from 'react';

export default class PageSpacing extends Component {
    constructor(props) {
        super(props);
        this.defaultSpacing = 1;
        this.state = {
            spaces: props.spaces || this.defaultSpacing
        }
    }

    componentDidMount = () => {

    }

  render() {
      let breaksHtml = [];
      for(var i=0;i<this.state.spaces;i++) {
        breaksHtml.push(<hr style={{borderWidth: '0px'}} key={i}/>)
      }
    return (
        <div>
            {breaksHtml}
        </div>
    )
  }
};
