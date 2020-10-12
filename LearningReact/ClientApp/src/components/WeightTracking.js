import React, { Component } from 'react';

export class WeightTracker extends Component {
    static displayName = WeightTracker.name;

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

    render() {
        if (!this.state.vibeSubmitted) {
            return (
                <div>
                    <div class="form-group">
                        <label for="vibeDetails">What is today's weigh in?</label>
                        <textarea class="form-control" id="vibeDetails" row="2" onChange={this.handleChange} ></textarea>
                    </div>
                    <div>
                        <button onClick={() => this.addWeight() } />
                    </div>


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
