import React from 'react';
import Router from 'next/router';

class Index extends React.Component {
    render() {
        return(
            <div className="container">
                <p>hey</p>
                <style jsx>{`
                    p {
                        color: red;
                    }
                `}</style>
            </div>
        );
    }
}

export default Index;