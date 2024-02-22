import React from 'react';
import BMIResult from './BMIResult';

class BMIApp extends React.Component {
    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 my-3">
                    <h1>BMI Calculator</h1>
                    <div className="form-group my-3">
                    <label>Weight</label>
                    <input onKeyPress={this.handleKeyPress} type="text" name="weight" id="weight" className="form-control" placeholder="" aria-describedby="helpId" autoFocus />
                    <small id="helpId" className="text-muted">kilograms</small>
                    </div>
                    <div className="form-group my-3">
                        <label>Height</label>
                        <input onKeyPress={this.handleKeyPress} type="text" name="height" id="height" className="form-control" placeholder="" aria-describedby="helpId" />
                        <small id="helpId" className="text-muted">centimetres</small>
                    </div>
                    <button onClick={this.calculateBMI} name="btnCalculate" id="btnCalculate" className="btn btn-primary" role="button">Calculate</button>&nbsp;
                    <button onClick={this.clearBMI} name="btnClear" id="btnClear" className="btn btn-secondary" role="button">Reset</button>
                </div>
            </div>

            <BMIResult bmi={this.state.bmi} />
        </div>
        );
    }

    calculateBMI = () => {
        let weight = document.getElementById("weight").value;
        let height = document.getElementById("height").value;

        let bmi = weight / (height / 100 * height / 100);
        bmi = bmi.toFixed(1);

        this.setState({ 
            bmi: bmi,
            weight: weight,
            height: height
        });
    }

    clearBMI = () => {
        document.getElementById("weight").value = "";
        document.getElementById("height").value = "";

        this.setState({
            bmi: 0,
            weight: 0,
            height: 0
        });
    }
      
    handleKeyPress = (event) => {
        if( event.key === "Enter" ) {
            const weight = document.getElementById("weight").value;
            const height = document.getElementById("height").value;

            if( weight === "" || height === "" ) {
                return;
            }

            this.calculateBMI();
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            bmi: 0,
            weight: 0,
            height: 0
        };
    }
}

export default BMIApp;