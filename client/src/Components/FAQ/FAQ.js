import React, { Component } from 'react';

import FAQImage from './FAQImage/FAQImage';
import Faqsection from './Faqsection/Faqsection';
import ToContactUs from './ToContactUs/ToContactUs';

class FAQ extends Component {
    render() {
        return (
            <div>
                <FAQImage />
                <Faqsection />
                <ToContactUs />
            </div>
        )
    }
}

export default FAQ;
