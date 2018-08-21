import React, { Component } from 'react';
import "./Goals.css";
import moment from 'moment';
import Goal from "./Goal";

const goalData = require('./goalData.json');
const today = moment().format("dddd, MMMM Do");

class Goals extends Component {
	render(){
		return(
			<div className="goals">
			<h1>{today}</h1>
			{
				goalData.map((item,index) => {
					return(
						<Goal 
						goal={item.goal} 
						goalPercentage={item.goalPercentage} 
						yesterdaysPercentage={item.yesterdaysPercentage}
						key={index} 
						/>
					)
				})
			}
			</div>
		)
	}
}


export default Goals;