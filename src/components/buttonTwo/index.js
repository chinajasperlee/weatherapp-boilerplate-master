// import preact
import { h, render, Component } from 'preact';
//import style_iphone from '../button/style_iphone';
import style_iphoneTwo from '../buttonTwo/style_iphoneTwo';

export default class ButtonTwo extends Component {

	constructor(props){
		console.log(" ** BUTTON INIT **")
		super(props);
		this.setState({
				showNextDay : false,
				showButton : true,
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
			showNextDay : true,
			showButton : false,
		})
		setTimeout(function() {that.setState({fadeInScreen : true})}, 500);
	}

	closeForecastWindow = () => {
		console.log(" ** CLOSE FORECAST WINDOW ** ");
		this.setState({
			showNextDay : false,
			showButton : true,
			fadeInScreen: false,
		})
	}

	showForecast = () => {
		console.log(" ** SHOW FORECAST ** ");
		return (
			<div>
				<div class = {(this.state.fadeInScreen) ? style_iphoneTwo.forecastContainer : style_iphoneTwo.forecastContainerFade}>
					<button class = {style_iphoneTwo.forecastContainerButton} onClick={this.closeForecastWindow}>
							FORECAST DATA GOES HERE
					</button>
				</div>
				<div class={style_iphoneTwo.footerRight}>
					<button class = {style_iphoneTwo.footerRightButton} onClick={this.closeForecastWindow}>
						Tomorrow?
					</button>
				</div>
			</div>

		)
	}

	buttonTwo = () => {
		return (
			<div class={ (this.state.fadeInMainInformation) ? style_iphoneTwo.container : style_iphoneTwo.containerFade } >
				<button onClick={this.closeButton}>
					Tomorrow?
				</button>
			</div>

		)
	}

	nextDayRender = () => {
		if (!this.state.showNextDay) {
			console.log(" ** BUTTON TWO SHOWING ** ")
			return<this.buttonTwo />
		} else if (this.state.showNextDay) {
			console.log(" ** NEXT DAY IS SHOWING ** ")
			return <this.showForecast />
		}
	}

	// rendering a function when the button is clicked
	render() {
		return (
			<this.nextDayRender />
		);
	}
}
