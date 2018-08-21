import React, { Component } from 'react';
import ProgressArc from "./ProgressArc";
import "./Goal.css";

class Goal extends Component {
	constructor(props) {
		super(props);	
		this.state = {
			displayPercentage: this.props.goalPercentage,
			goalPercentage: this.props.goalPercentage,
			yesterdaysPercentage: this.props.yesterdaysPercentage
		};
		console.log(this.state.displayPercentage);
		this.togglePercent = this.togglePercent.bind(this);
	}

	togglePercent() {
		console.log("clicked");
		const displayPercentage = this.state.displayPercentage === this.state.goalPercentage ? this.state.yesterdaysPercentage : this.state.goalPercentage;
		this.setState({displayPercentage});
		console.log(this.state.displayPercentage);
	}

	render(){
		return(
			<div className="goalItem">
				<h2>{this.props.goal}</h2>
				<ProgressArc 
					height={300}
					width={300}
					innerRadius={80}
					outerRadius={110}
					id="d3-arc"
					backgroundColor="#e6e6e6"
					foregroundColor="#cce1e3"
					goalPercentage={this.state.displayPercentage}
				/>
				<button onClick={this.togglePercent}>Yesterday's stats</button>
			</div>
		)
	}	
}

export default Goal;