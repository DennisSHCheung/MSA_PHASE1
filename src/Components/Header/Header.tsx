import * as React from 'react'
import './Header.css'

interface IProp {
	headerColor:string
}

export default class Header extends React.Component<IProp, {}> {

	public render() {
		const style = {color: this.props.headerColor };
		return (
	        <div className="header">
	            <h1 className='headerText' style={style}>How Old?</h1>
	        </div>
	    )
	}
    
}