import React, { Component } from 'react';
import * as d3 from "d3";


class ProgressArc extends Component {
	componentDidMount() {
		const context = this.setContext();
		this.setBackground(context);
		this.setForeground(context);
	}

	//create SVG canvas to draw visualization
	setContext() {
		return d3.select(this.refs.arc)
			.append('svg')
			.attr('height','300px')
			.attr('width', '300px')
			.attr('id', 'd3-arc')
			.append('g')
			.attr('transform',`translate(150,150)`);
	}

	//append background on top of context
	setBackground(context){
		return context.append('path')
		.datum({ endAngle: this.tau })
		.style('fill','#e6e6e6')
		.attr('d',this.arc());
	}


	//append foreground
	setForeground(context){
		return context.append('path')
			.datum({ endAngle: this.tau * 0.3})
			.style('fill','#00ff00')
			.attr('d',this.arc());
	}

	// tau is 2*pi because that is the circumference of any circle
	// tau ~ full circle
	// tau * 0.5 ~ half circle

	tau = Math.PI * 2;

	arc(){
		return d3.arc()
			.innerRadius(80)
			.outerRadius(110)
			.startAngle(0)
	}


	render(){
		return(
			<div ref="arc"></div>
		)
	}
}

export default ProgressArc;