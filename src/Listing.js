import React from 'react';

export default class Listing extends React.Component {
    render() {

        return (
            <div className="card m-20 m-r-0">
                <div className="card-body">
                    <h5 className="card-title">Hola!</h5>
                    <p className="card-text">Looks like you're missing out on something awesome!</p>
                    <div className="missingOut text-center m-b-20">
                        <img src={ require('./resources/missingout.png').default } />
                    </div>
                    <div className="text-center">
                        <a href="#" className="btn btn-primary btn-sm">Login/Register now!</a>
                    </div>
                </div>
            </div>
        )
    }
}