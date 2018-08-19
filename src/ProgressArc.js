import React, { Component } from 'react';
import * as d3 from "d3";

class ProgressArc extends Component {

	displayName: 'ProgressArc';

	propTypes: {
		id: PropTypes.string,
		height: PropTypes.number,
		width: PropTypes.number,
		innerRadius: PropTypes.number,
		outerRadius: PropTypes.number,
		backgroundColor: PropTypes.string,
		foregroundColor: PropTypes.string,
		percentComplete: PropTypes.number
	}

	componentDidMount() {
		const context = this.setContext();
		this.setBackground(context);
		this.setForeground(context);
	}

	//create SVG canvas to draw visualization
	setContext() {
		const { height, width, id} = this.props;
	    return d3.select(this.refs.arc).append('svg')
	      .attr('height', height)
	      .attr('width', width)
	      .attr('id', id)
	      .append('g')
	      .attr('transform', `translate(${height / 2}, ${width / 2})`);
	}

	//append background on top of context
	setBackground(context){
		return context.append('path')
		.datum({ endAngle: this.tau })
		.style('fill', this.props.backgroundColor)
		.attr('d',this.arc());
	}


	//append foreground
	setForeground(context){
		return context.append('path')
			.datum({ endAngle: this.tau * this.props.percentComplete})
			.style('fill', this.props.foregroundColor)
			.attr('d',this.arc());
	}

	// tau is 2*pi because that is the circumference of any circle
	// tau ~ full circle
	// tau * 0.5 ~ half circle

	tau = Math.PI * 2;

	arc(){
		return d3.arc()
			.innerRadius(this.props.innerRadius)
			.outerRadius(this.props.outerRadius)
			.startAngle(0)
	}


	render(){
		return(
			<div ref="arc"></div>
		)
	}
}

export default ProgressArc;