import React, { Component } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

class Knowmore extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
            <div>
                <Component1></Component1>
                <Component2></Component2>
                <Component3></Component3>
            </div>
            </>
        )
    }
}

export default Knowmore
