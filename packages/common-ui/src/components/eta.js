import React, { Component } from 'react';
import {css} from 'emotion';
import 'react-circular-progressbar/dist/styles.css';
import CircularProgressbar from 'react-circular-progressbar';

class Eta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: 'maximillianstrasse 14',
      eta: 14, //@todo Max -
      percentage: 66 //todo max-
  }
}

  componentWillMount(){
    let self = this;
    var interval = setInterval(() => {
      if(!self.props.isFinished){
        self.setState((state, props) => {
          return {
            percentage: state.percentage - 1
          }
        })
      } 
    }, 750) //@todo Max - 
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(this.props.destination !== prevProps.destination){
      this.setState({destination: this.props.destination});
    } 
  }

  render() {
    const {destination, eta, percentage} = this.state;
    const {branding, isFinished, label} = this.props;
    const styles = {
      ellipsis: {
        base:  css`
        display: flex;
        align-items: center;
        opacity: ${isFinished ? '1' : '0.8'};
        background: white; 
        border-radius: 50px; 
        height: 58px;
        @media (min-width: 768px) {
          height: 63px;
        }
        `,
        labelDimensions: css`
          width: 85%;
          font-size: 13x;
          line-height: 13px;
          padding-left: 5%;
          text-align: ${isFinished ? 'center' : ''};
          `,
    },
    circularProgress: {
      position: css`
        width: 80px;
        position: relative;
        @media (min-width: 768px){
          left: 4px;
        }
        left: 2px;
        top: 2px
        
      `
      }
  };
    
    return (
            <div className={styles.ellipsis.base}>
              <div className={styles.ellipsis.labelDimensions}>
                <span tabIndex={0} name={!isFinished ? 'eta-text' : 'eta-end-text'}>{label} {!isFinished && destination}</span>  
              </div>
              {!isFinished && <div style={{width: '5%'}}></div>} {/*create space*/}
              {!isFinished && <div className={styles.circularProgress.position}>
                  <CustomContentProgressbar styles={{path: {stroke: branding.colors.mainColor}, background: {fill: '#3e98c7', opacity: '1'}}} 
                percentage={percentage} initialAnimation={true}> 
                <span tabIndex={0} aria-label={'time until arrival ' + eta + 'minutes'} name="eta-time-left">{eta}</span>
                <span style={{fontSize: '10px'}}>mins away</span>
                </CustomContentProgressbar> 
              </div>}
            </div>      
    );
  }
}


function CustomContentProgressbar(props) {
  const { children, ...otherProps } = props;
  const styles = {
    progressbar: {
      container: css`
        
      `,
      childContainer: css`
      position: absolute;
      left: 6px;
      top: 12px;
      text-align: center;
      display: inline-block; 
      width: 80%;     
        span {
          display: inline-block;
        }
      `
    }
  }
  return (
    <div className={styles.progressbar.container}>
        <CircularProgressbar {...otherProps} />
        <div className={styles.progressbar.childContainer}>
        This is beautiful.
          {props.children}
        </div>
    </div>
  );
}

export default Eta;
