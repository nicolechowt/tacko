import React, { Component } from 'react';
import "./Goals.css";
import moment from 'moment';
import ProgressArc from "./ProgressArc";


const goalData = require('./goalData.json');

let goal = goalData.map( (item,index) => {
	return(
		<div className="goalItem" key={index}>
			<h2>{item.goalName}</h2>
			<p>{item.goal}</p>
		</div>
	)
})

const today = moment().format("dddd, MMMM Do");

class Goals extends Component {
	render(){
		return(
			<div>
				<h1>{today}</h1>
				<div className="goals">
					{goal}
				</div>
				<ProgressArc />
			</div>
		)
	}
}

export default Goals;