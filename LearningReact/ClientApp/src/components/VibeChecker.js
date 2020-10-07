import React, { Component } from 'react';
import SadFace  from  '../VibeChecker/sad.png'
import HappyFace  from  '../VibeChecker/smile.jpg'
import AngryFace  from  '../VibeChecker/angry.jpg'
import NeutralFace from '../VibeChecker/neutral.jpg'

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
                    <a href="#" onClick={ this.addVibe("1")}>
                        <img height="250" width="250" src={HappyFace} alt="HappyVibes" />
                    </a>
                    <img height="250" width="250" src={NeutralFace}  alt="NeutralVibes" />
                    <img height="250" width="250" src={SadFace}  alt="SadVibes" />
                    <img height="250" width="250" src={AngryFace}  alt="BadVibes" />
                </row>

                <h1>Hello World!</h1>
            </div>
        );
    }

    async addVibe(vibeLevel) {

        var newVibe = { VibeLevel: vibeLevel };
        newVibe.VibeLevel = vibeLevel;
        alert(vibeLevel);
        const response = await fetch("vibes", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    "VibeLevel": vibeLevel,
                    "VibeDetails": "good"
            })
        });
        
    }
}
