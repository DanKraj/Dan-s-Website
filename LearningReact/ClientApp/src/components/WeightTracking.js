import React, { Component } from 'react';
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
        <div>
            <input type='text' width='100'/>
        </div>


    }


    async pullWeightData() {
        const response = await fetch("weight", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        var DataTest = await response.json();

        await this.setState({ allWeight: DataTest });
    }

    async addWeight() {

        var newVibe = { VibeLevel: vibeLevel };
        newVibe.VibeLevel = vibeLevel;
        const response = await fetch("weight", {
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
