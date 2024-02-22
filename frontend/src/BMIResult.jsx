import React from 'react';

class BMIResult extends React.Component {
    getBMICategory(bmi) {
        let category = '';
        let colourClass = '';
        let textClass = '';

        if( bmi < 16 ) {
            category = 'Underweight (Severe thinness)';
            colourClass = 'bg-danger';
            textClass = 'text-white';
        } else if( bmi >= 16 && bmi <= 16.9 ) {
            category = 'Underweight (Moderate thinness)';
            colourClass = 'bg-warning';
            textClass = 'text-dark';
        } else if( bmi >= 17 && bmi <= 18.4 ) {
            category = 'Underweight (Mild thinness)';
            colourClass = 'bg-warning';
            textClass = 'text-dark';
        } else if( bmi >= 18.5 && bmi <= 24.9 ) {
            category = 'Normal range';
            colourClass = 'bg-success';
            textClass = 'text-white';
        } else if( bmi >= 25 && bmi <= 29.9 ) {
            category = 'Overweight (Pre-obese)';
            colourClass = 'bg-warning';
            textClass = 'text-dark';
        } else if( bmi >= 30 && bmi <= 34.9 ) {
            category = 'Obese (Class I)';
            colourClass = 'bg-warning';
            textClass = 'text-dark';
        } else if( bmi >= 35 && bmi <= 39.9 ) {
            category = 'Obese (Class II)';
            colourClass = 'bg-danger';
            textClass = 'text-white';
        } else if( bmi >= 40 ) {
            category = 'Obese (Class III)';
            colourClass = 'bg-danger';
            textClass = 'text-white';
        }

        return { category, colourClass, textClass };
    }

    render() {
        const bmi = this.props.bmi > 0 ? this.props.bmi : "";
        const { category, colourClass, textClass } = this.getBMICategory(bmi);

        return (
        <div className="row">
            <div className="col-md-6 my-3">
                {bmi && (
                <div className={`card ${textClass} ${colourClass} mb-3`}>
                    <h5 className={`card-header ${textClass}`}>BMI Result</h5>
                    <div className="card-body">
                    <h5 className={`card-title ${textClass}`}>{bmi}</h5>
                    <p className={`card-text ${textClass}`}>{category}</p>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
    }
}

export default BMIResult;