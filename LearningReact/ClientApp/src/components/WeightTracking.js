import React, { Component } from 'react';
import SadFace from '../VibeChecker/sad.png'
import HappyFace from '../VibeChecker/smile.jpg'
import AngryFace from '../VibeChecker/angry.jpg'
import NeutralFace from '../VibeChecker/neutral.jpg'
export class VibeChecker extends Component {
    static displayName = VibeChecker.name;

    constructor(props) {
        super(props);
        this.state = {
            currentCount: 0,
            value: '',
            vibeSubmitted: false,
            allVibes: [{}]
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }


    render() {
        

    }


    async pullVibeData() {
        const response = await fetch("vibes", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        var DataTest = await response.json();

        await this.setState({ allVibes: DataTest });
        this.setState({ vibeSubmitted: true });
    }

    async addVibe(vibeLevel) {

        var newVibe = { VibeLevel: vibeLevel };
        newVibe.VibeLevel = vibeLevel;
        const response = await fetch("vibes", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "VibeLevel": vibeLevel,
                "VibeDetails": this.state.value
            })
        });

        this.pullVibeData();
    }
}
