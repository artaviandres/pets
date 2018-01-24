import React from 'react';

class Input extends React.Component {
    render() {
        return (
            <div className="input__container">
                <div className="input__logo">
                    <span>
                        {this.props.icon}
                    </span>
                </div>
                <div className="input__text">
                    <input
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        required={this.props.required}
                    />
                </div>
                <style jsx>{`
                    .input__container {
                        width: 99.5%;
                        height: 50px;
                        border: 1px solid #EAEAEA;
                        margin-top: 10px;                        
                    }
                    .input__logo {
                        width: 10%;
                        height: 100%;
                        float: left;
                        background-color: #EAEAEA;
                    }

                    .input__logo span {
                        display: block;
                        margin: 30% 0 0 30%;
                    }
                    .input__text {
                        width: 89.5%;
                        height: 100%;
                        float: left;
                    }
                    input {
                        width: 98.8%;
                        height: 100%;
                        font-size: 12px;
                        padding: 0 0 0 10px;
                        border: 0;
                    }

                    input:focus {
                        outline-width: 0;
                    }
                `}</style>
            </div>
        );
    }
}

export default Input;