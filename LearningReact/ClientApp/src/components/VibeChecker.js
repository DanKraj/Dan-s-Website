import React, { Component } from 'react';
import SadFace  from  '../VibeChecker/sad.png'
import HappyFace  from  '../VibeChecker/smile.jpg'
import AngryFace  from  '../VibeChecker/angry.jpg'
import NeutralFace  from  '../VibeChecker/neutral.jpg'
export class VibeChecker extends Component {
    static displayName = VibeChecker.name;

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    render() {
        return (
            <div>
                <row>
                    <img height="250" width="250" src={HappyFace}  alt="HappyVibes" />
                    <img height="250" width="250" src={NeutralFace}  alt="NeutralVibes" />
                    <img height="250" width="250" src={SadFace}  alt="SadVibes" />
                    <img height="250" width="250" src={AngryFace}  alt="BadVibes" />
                </row>

                <h1>Hello World!</h1>
            </div>
        );
    }
}
