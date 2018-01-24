import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <div>
                <button>
                    {this.props.children}
                </button>
                <style jsx>{`
                    button {
                        width: 100%;
                        height: 60px;
                        background-color: ${this.props.color};
                        cursor: pointer;
                        border:none;
                        font-size: 16px;
                        text-transform: lowercase;
                        color: gray;
                    }
                `}</style>
            </div>
        );
    }
}

export default Button;