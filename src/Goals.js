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
			<ProgressArc 
				height={300}
				width={300}
				innerRadius={80}
				outerRadius={110}
				id="d3-arc"
				backgroundColor="#e6e6e6"
				foregroundColor="#cce1e3"
				percentComplete={0.3}
			/>
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
			</div>
		)
	}
}

export default Goals;