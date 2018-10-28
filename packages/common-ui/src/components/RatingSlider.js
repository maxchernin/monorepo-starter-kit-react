import 'rc-slider/assets/index.css';

import React, { Component } from 'react';
import Slider from 'rc-slider';
import {css} from 'emotion'; 
import FrownIcon from 'react-icons/lib/fa/frown-o'; 
import SmileIcon from 'react-icons/lib/fa/smile-o';
// import ErrorBar from './ErrorBar';


const componentDefaults = {
    min: 0,
    max: 10,
    disabled: false,
    step: 1,
    value: 0
}

export default class RatingSlider extends Component {
    constructor(props) {
        super(props);
        this.inputRef = undefined;
        this.state = {
            activeStep: this.props.activeStep,
            value: props.field.value,
            label: !!this.props.field.label ? this.props.field.label : '',
            editable: JSON.parse(props.field.editable),
            instructions: props.field.instruct,
            isValid: props.field.isValid,
            fieldRequiredMsg: props.branding.cfFieldRequiredMessage,
            minValue: props.field.componentProperties && props.field.componentProperties.minValue ? props.field.componentProperties.minValue : componentDefaults.min,
            maxValue: props.field.componentProperties && props.field.componentProperties.maxValue ? props.field.componentProperties.maxValue : componentDefaults.max,
            step: props.field.componentProperties && props.field.componentProperties.step ? props.field.componentProperties.step : componentDefaults.step,
            styles: {
                componentWidth: css`
                    margin: auto;
                    width: 92%;
                    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
                    div {
                        color: #d1d1d1;
                    }
                    @media (max-width: 479px){
                        width: 91%;
                    }
                    @media (max-width: 360px){
                        width: 87%;
                    }
                `,
                gradient: css`
                .rc-slider-rail {
                    background: ${JSON.parse(props.field.editable) ? 'linear-gradient(to right, #ff0000 0%,#fcfc00 55%,#00d100 90%)' : ''};
                }
                .rc-slider-disabled {
                    background-color: transparent;
                }
                .rc-slider-track {
                        background-color: transparent;
                    }
                `,
                labelsContainer: css`
                    direction: ltr !important; //override rtl definition
                    margin-top: 15px;
                    display: flex;
    flex-direction: row;
    justify-content: space-between;
                    // div {display: inline-block; position: relative;} TODO max    
                    // p {
                    //     text-align: center;
                    //     font-size: 16px;
                    //     margin: 0;
                    // }
                    // .min-value {
                    //     left: -12px;
                    // }
                    // .max-value {
                    //     left: 92%;
                    // }
                    
                    // @media (max-width: 479px){
                    //     .max-value {
                    //         left: 87%;
                    //         }
                    //     }
                    // @media (max-width: 360px){
                    //     .max-value {
                    //         left: 84%;
                    //         }
                    //     }
                    `      
            },
            
        }
    }

    assignRef = (node) => {
        this.inputRef = node;
        Object.assign(this.inputRef, {name: this.props.field.name, validate: this.validateMandatory})
        this.props.store.fieldsRefs.push(this.inputRef);
    }

    validateMandatory = (value) => {
        if(this.state.editable){
            if(JSON.parse(this.props.field.mandatory) && (value === null || value === undefined)) {
                this.props.field.isValid = false;
                this.setState({isValid: false});
            }
        }
    }

    handleValueChange = value => {
        this.props.field.value = value;
        this.props.field.isValid = true;
        this.setState({value, isValid: true})
    }

    render () {
       const {fieldRequiredMsg, instructions, styles, value, editable, label, isValid, minValue, maxValue, step} = this.state;
       const {activeStep} = this.props;
       let isTooltipVisible = activeStep-1 === parseInt(this.props.field.page, 10);
        return(
            <div>
                <p name={this.props.field.type + "-" + this.props.field.name + "-label"} tabIndex={0} aria-label={label} style={{ marginBottom: '15px', color: (!isValid ? '#f44336' : '#757575'), fontSize: '12px' }}>{label}</p>
            <div className={styles.componentWidth}>
            <div tabIndex={0} name={this.props.field.type + "-" + this.props.field.name + "-instructions"} aria-label={label} style={{ textAlign: 'center', marginBottom: '40px', color: (!isValid ? '#f44336' : '#D1D1D1'), fontSize: '15px' }}>{instructions}</div>
            <div>
            <div name={this.props.field.type + "-" + this.props.field.name + "-value-label"} tabIndex={0} aria-label={label} style={{ marginBottom: '15px', color: (!isValid ? '#f44336' : '#D1D1D1'), fontSize: '26px' }}><p style={{textAlign: 'center'}}> {value}</p></div>
            </div>
                <Slider
                ref={this.assignRef}
                name={this.props.field.name+"-"+this.props.field.type}
                className={styles.gradient}
                min={minValue}
                max={maxValue}
                step={step}
                disabled={!editable}
                tabIndex={0}
                defaultValue={0}
                value={value}
                onChange={this.handleValueChange}
                trackStyle={{ background: '', height: 10 }}
                // handle={ props => { return handle(props, isTooltipVisible)}}
                // handle={handle}
                handleStyle={{
                height: 28,
                width: 28,
                marginLeft: -14,
                marginTop: -9,
                backgroundColor: "#eceef1",
                borderColor: "#eceef1",
                boxShadow: 'rgba(118, 118, 118, 0.48) -1px 2px 3px 1px, rgb(209, 209, 209) 0px 0px 1px 1px'
                }}
                railStyle={{ background: '', height: 10 }}
            />
            <div className={styles.labelsContainer}>
                <div name={this.props.field.type + "-" + this.props.field.name + "-min-value"} className="min-value"><p>{minValue}</p><FrownIcon style={{color: '#D1D1D1'}} size={26}/></div>
                <div name={this.props.field.type + "-" + this.props.field.name + "-max-value"} className="max-value"><p>{maxValue}</p><SmileIcon style={{color: '#D1D1D1'}} size={26}/></div>
            </div>
            </div>
            {/* {!isValid ? <ErrorBar msg={fieldRequiredMsg} style={{ marginTop: '15px' }} isValid={isValid} /> : ''} */}

          </div>
        )
    }
}
