import React, { Component } from 'react';
import SadFace  from  '../VibeChecker/sad.png'
import HappyFace  from  '../VibeChecker/smile.jpg'
import AngryFace  from  '../VibeChecker/angry.jpg'
import NeutralFace from '../VibeChecker/neutral.jpg'
export class VibeChecker extends Component {
    static displayName = VibeChecker.name;

    constructor(props) {
        super(props);
        this.state = {
            currentCount: 0,
            value: '',
            vibeSubmitted: false,
            allVibes: [{}]};
        this.incrementCounter = this.incrementCounter.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    renderTableData() {

        return this.state.allVibes.map(vibe => {
            return (
                <tr key={vibe.id}>
                    <td>{vibe.id}</td>
                    <td>{vibe.vibeLevel}</td>
                    <td>{vibe.vibeDetails}</td>
                    <td>{vibe.dateRecorded}</td>
                </tr>
                )
        })
    }

    render() {
        if (!this.state.vibeSubmitted) {
            return (
                <div>
                    <row>
                        <img height="250" width="250" src={HappyFace} alt="HappyVibes" onClick={() => this.addVibe("1")} />
                        <img height="250" width="250" src={NeutralFace} alt="NeutralVibes" onClick={() => this.addVibe("0")} />
                        <img height="250" width="250" src={SadFace} alt="SadVibes" onClick={() => this.addVibe("-1")} />
                        <img height="250" width="250" src={AngryFace} alt="BadVibes" onClick={() => this.addVibe("-2")} />
                    </row>
                    <div class="form-group">
                        <label for="vibeDetails">So how was you're day?</label>
                        <textarea class="form-control" id="vibeDetails" row="2" onChange={this.handleChange} ></textarea>
                    </div>

                </div>
            );
        }
        else {
            return (
                <div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Vibe Level</th>
                                <th scope="col">Vibe Details</th>
                                <th scope="col">Date Recorded</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTableData()}
                        </tbody>

                    </table>

                </div>

            );
        }
        
    }

    async pullVibeData() {
        const response = await fetch("vibes", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        var DataTest = await response.json();

        alert(JSON.stringify(DataTest));

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
