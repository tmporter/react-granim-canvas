var React = require('react');
var ReactDOM = require('react-dom');
var ReactGranimCanvas = require('react-granim-canvas');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactGranimCanvas />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
