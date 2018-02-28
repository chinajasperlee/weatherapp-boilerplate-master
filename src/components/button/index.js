// import preact
import { h, render, Component } from 'preact';
//import style_iphone from '../button/style_iphone';
import style_iphone from '../button/style_iphone';

export default class Button extends Component {

	constructor(props){
		console.log(" ** BUTTON INIT **")
		super(props);
		this.setState({
				showSearchFeature : false,
				showSearchButton : true,
				fadeInMainInformation : false,
				fadeInScreen : false,
			});
			this.FadeInMain();

	}

	FadeInMain = () => {
		var that = this;
		console.log("TIMER ACTUALLY WORKED");
		setTimeout(function() {
				that.setState({
					fadeInMainInformation : true
				})
		}, 500);
	}

	closeButton = () => {
		console.log("CLOSE BUTTON");
		var that = this;
		this.setState({
			showSearchFeature : true,
			showSearchButton : false,
		})
		setTimeout(function() {that.setState({fadeInScreen : true})}, 500);
	}

	closeSearchWindow = () => {
		console.log(" ** CLOSE SEARCH WINDOW ** ");
		this.setState({
			showSearchFeature : false,
			showSearchButton : true,
			fadeInScreen: false,
		})
	}

	showSearchFunction = () => {
		console.log(" ** SHOW SEARCH FUNCTION ** ");
		return (
			<div>
					<div class = {(this.state.fadeInScreen) ? style_iphone.forecastContainerTest : style_iphone.forecastContainerTestFade}>
						<button class = {style_iphone.forecastContainerButtonTest} onClick={this.closeSearchWindow}>
							SEARCH FUNCTION GOES HERE
							</button>
					</div>
				<div class={style_iphone.footerLeft}>
					<button class = {style_iphone.footerLeftButton} onClick={this.closeSearchWindow}>
						Search City
					</button>
				</div>
			</div>
		)
	}

	buttonTwo = () => {
		return (
			<div class={ (this.state.fadeInMainInformation) ? style_iphone.container : style_iphone.containerFade} >
				<button onClick={this.closeButton}>
					Search City
				</button>
			</div>
		)
	}

	nextDayRender = () => {
		if (this.state.showSearchButton) {
			console.log(" ** BUTTON ONE SHOWING ** ")
			return<this.buttonTwo />
		} else if (this.state.showSearchFeature) {
			console.log(" ** SEARCH FEATURE IS SHOWING ** ")
			return <this.showSearchFunction />
		}
	}

	// rendering a function when the button is clicked
	render() {
		return (
			<this.nextDayRender />
		);
	}
}
