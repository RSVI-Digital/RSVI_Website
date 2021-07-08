import React, { Component } from 'react'

import SuccessImage from './SuccessImage/SuccessImage'
import Stories1 from './Stories/Stories1';
import Stories2 from './Stories/Stories2';
import Stories3 from './Stories/Stories3';
import Stories4 from './Stories/Stories4';

class SuccessChild extends Component {
    render() {
        return (
            <div>
                <SuccessImage />
                <Stories1 />
                <Stories2 />
                <Stories3 />
                <Stories4 />
            </div>
        );
    }
}

export default SuccessChild;
