﻿import React, { Component } from 'react';
import SadFace  from  '../VibeChecker/sad.png'
import HappyFace  from  '../VibeChecker/smile.jpg'
import AngryFace  from  '../VibeChecker/angry.jpg'
import NeutralFace from '../VibeChecker/neutral.jpg'
export class VibeChecker extends Component {
    static displayName = VibeChecker.name;

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            weightSubmitted: false,
            allWeights: [{}]};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    render() {
        if (!this.state.weightSubmitted) {
            return (
                <div>
                    <row>
                        <img height="250" width="250" src={HappyFace} alt="HappyVibes" onClick={() => this.addVibe("1")} />
                        <img height="250" width="250" src={NeutralFace} alt="NeutralVibes" onClick={() => this.addVibe("0")} />
                        <img height="250" width="250" src={SadFace} alt="SadVibes" onClick={() => this.addVibe("-1")} />
                        <img height="250" width="250" src={AngryFace} alt="BadVibes" onClick={() => this.addVibe("-2")} />
                    </row>
                    <row>
                    <div class="form-group">
                        <label for="vibeDetails">So how was you're day?</label>
                        <textarea class="form-control" id="vibeDetails" row="2" onChange={this.handleChange} ></textarea>
                        </div>
                    </row>
                    <row>
                        <div class="button" onClick={() => this.addWeight()} />
                    </row>

                        

                </div>
            );
        }
        else {
            return (
                <div>
                    <table class="table table-striped table-bordered  table-hover">
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

    renderTableData() {

        return this.state.allVibes.map(vibe => {
            return (
                <tr key={vibe.id}>
                    <td>{vibe.vibeLevel}</td>
                    <td>{vibe.vibeDetails}</td>
                    <td>{vibe.dateRecorded}</td>
                </tr>
            )
        })
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

    async addWeight() {
        const response = await fetch("weight", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    "Pounds": this.state.value
            })
        });
    }
}
