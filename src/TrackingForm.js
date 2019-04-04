import React, { Component } from "react";
import TimeOfDay from "./Steps/TimeOfDay"; //step 1
import CallSelectSymptoms from './Steps/CallSelectSymptoms'; //step2
import SelectEmotion from './Steps/SelectEmotion'; //step 3
import Notes from './Steps/Notes'; //step 4
import TrackingFinalStep from './TrackingFinalStep'; //step 5/success page


export class TrackingForm extends Component {

    state = {
        step: 1,
        timeofday: '',
        symptoms: '',
        emotion:'',
        notes:'',
    }

    //proceed to next step
    nextStep= () => {
        const{ step } = this.state;
        this.setState({
            step: step+1
        });
    }

    //go to previous step
    prevStep= () => {
        const{ step } = this.state;
        this.setState({
            step: step-1
        });
    }

//handle all field changes
    handleChange = input => e => {

        this.setState({[input]: e.target.value});
    }

    handleSymptomChange = input => e => {   
        this.setState({symptoms: this.state.symptoms + "&symptoms=" + e.target.value});        
    }

    
    render() {
        const { step } = this.state;
        const { timeofday, symptoms,emotion,notes} = this.state;
        const values = { timeofday, symptoms,emotion,notes}

        switch(step){
            case 1:
                return (
                    <TimeOfDay
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 2:
                return (
                    <CallSelectSymptoms
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleSymptomChange={this.handleSymptomChange}
                    values={values}
                    />
                )
                
            case 3:
                return (
                    <SelectEmotion
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 4:
                return (
                    <Notes
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 5:
                return (
                    <TrackingFinalStep
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
                )
            default: return (
                <div>
                    <TrackingForm/>
                </div>
                
            )
        }


    }
}

export default TrackingForm