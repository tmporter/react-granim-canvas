import React from 'react';
import PropsType from 'prop-types';
import Granim from 'granim';

export default class GranimCanvas extends React.Component {
	// static validDirections = new Array("diagonal", 'left-right', 'top-bottom', 'radial');
	// static propsType = {
	// 	direction: PropsType.oneOf(validDirections),
	// 	opacity: PropsType.arrayOf(PropsType.number),
	// 	isPausedWhenNotInView: PropsType.bool,
	// 	stateTransitionSpeed: PropsType.number,
	// 	defaultStateName: PropsType.string,
	// 	onStart: PropsType.func,
	// 	onGradientChange: PropsType.func,
	// 	onEnd: PropsType.func
	// }

	get defaultProps() {
		return {
			direction: 'diagonal',
			element: '#granim-canvas',
			opacity: [1, 1],
			states: {
				"default-state": {
					gradients: [
						['#834D9B', '#D04ED6'],
						['#1CD8D2', '#93EDC7']
					],
					transitionSpeed: 2000
				}
			}
		};
	}

	get style() {
		return {
			width: '100%',
			height: '100%',
			position: 'absolute',
			top: 0,
			left: 0,
			zIndex: -1
		}
	}

	constructor(props) {
		super(props);
		this.state = {
			granim: undefined
		}
	}

	componentDidMount() {
		this.setState({
			granim: new Granim(Object.assign({}, this.defaultProps, this.props))
		});
	}
	render() {
		return (
			<canvas id="granim-canvas" style={Object.assign({}, this.style, this.props.style)}></canvas>
		);
	}
}