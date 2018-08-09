import React, { Component } from 'react';
import "./Goals.css";

let goalData = [{
  "id": 1,
  "goalName": "Activity",
  "goal": "Gym - 4 times a week.",
  "goalMet": 3
}, {
  "id": 2,
  "goalName": "Water",
  "goal": "110oz a day",
  "goalMet": 25
}, {
  "id": 3,
  "goalName": "Sleep",
  "goal": "7 hours of sleep",
  "goalMet": 15
}]

let goal = goalData.map( (item,index) => {
	return(
		<div className="goalItem">
			<h2>{item.goalName}</h2>
			<p>{item.goal}</p>
			<p>{item.goalMet}</p>
			<strong>add more stuff</strong>
		</div>
	)
})

class Goals extends Component {
	render(){
		return(
			<div>
				<h1>Today</h1>
				<div className="goals">
					{goal}
				</div>
			</div>
		)
	}
}

export default Goals;