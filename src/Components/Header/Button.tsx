import * as React from 'react';

interface IProp {
	click: any
}

export default class Button extends React.Component<IProp, {}> {

	public render() {
		return (
			<div className="btndiv">
				<button className="btn" onClick={this.props.click}><span>Randomize </span></button>
			</div>
		)
	}
		
}