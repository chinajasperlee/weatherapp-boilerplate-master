// import preact
import { h, render, Component } from 'preact';
import style_iphone from '../button/style_iphone';

export default class Button extends Component {

	// rendering a function when the button is clicked
	render({clickFunction}) {
		if(!clickFunction){
			clickFunction = () => {
				console.log("passed something as 'clickFunction' that wasn't a function !");
			}
		}
		return (
			<div>
				<button onClick={clickFunction}>
					Display Weather
				</button>
			</div>
		);
	}
}
