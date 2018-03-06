// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import style_iphone from '../button/style_iphone';
import style_iphoneTwo from '../buttonTwo/style_iphoneTwo';
// import jquery for API calls
import $ from 'jquery';
// import the Button component
import Button from '../button';
import ButtonTwo from '../buttonTwo';
import { cube, foo } from './customFunction.js';


// for testing purposes - changes milliseconds for timers
const timer = 1000;
var actualDate = Date.now()
//const testDate = 'March 13, 02:08:20';

const testDate = actualDate;

export default class Iphone extends Component {

	// a constructor with initial set states
	constructor(props){
		console.log(" ** CONSTRUCTOR INIT **")
		super(props);
		// temperature state
		this.state.temp = "";
		this.setState({
				display: true,
				dataLoaded: false,
				fadeOut : false,
				showScreen : false,
			});
		this.fetchWeatherData();
		//this.testStore(); // for testing purposes
		this.FadeInMain();
	}

	// a call to fetch weather data via wunderground
	fetchWeatherData = () => {
		console.log(" ** FETCH WEATHER DATA INIT **")
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
		var url = "http://api.wunderground.com/api/085c577ee7a035da/conditions/q/UK/London.json";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
		// once the data grabbed, hide the button
		//this.setState({ display: false});
	}

	parseResponse = (parsed_json) => {
		console.log(" ** PARSE RESPONSE INIT **")
		var hourNow = new Date(testDate);
		var location = parsed_json['current_observation']['display_location']['city'];
		var temp_c = parsed_json['current_observation']['temp_c'];
		var conditions = parsed_json['current_observation']['weather'];

		var tempInt = Math.round(temp_c);
		var weatherPic = '';
		var mascotPic = '';
		var decisionAdvice = '';

		//Conditions for weather picture
		if (hourNow.getHours() > 17 || hourNow.getHours() < 5) {
			console.log(" ** NIGHT MODE TRIGGERED **");
			weatherPic = "../../assets/weather/moon.png";
		} else if(conditions.includes("Snow") || conditions.includes("Blizzard") || conditions.includes("Ice")) {
			console.log(" ** CONDITION IS SNOW **")
			weatherPic = "../../assets/weather/snow.jpg";
		} else if (conditions.includes("Rain") || conditions.includes("Showers") || conditions.includes("Thunder")) {
			console.log(" ** CONDITION IS RAIN **")
			weatherPic = "../../assets/weather/rain.png";
		} else if (conditions.includes("Cloud") || conditions.includes("Showers") || conditions.includes("Thunder")) {
			console.log(" ** CONDITION IS RAIN **")
			weatherPic = "../../assets/weather/sun-cloud.jpg";
		} else {
			console.log(" ** CONDITION IS CLEAR **")
			weatherPic = "../../assets/weather/sun.png";
		}

		//Conditions for weather picture
		if (hourNow.getHours() > 17 || hourNow.getHours() < 5) {
			console.log(" ** NIGHT MODE TRIGGERED **");
			mascotPic = "../../assets/mascot/bed.png";
			decisionAdvice = "Its time for bed!";
		} else if (conditions.includes("Rain") || conditions.includes("Showers") || conditions.includes("Thunder")) {
			console.log(" ** MASCOT IS RAIN CLOTHES ** ")
			mascotPic = "../../assets/mascot/rain-bear.jpg";
			decisionAdvice = "Its raining! Wear a Mac and take an umbrella if you go outside";
		} else if (temp_c <= 12) {
			console.log(" ** MASCOT IS WARM CLOTHES ** ")
			mascotPic = "../../assets/mascot/cold-bear.png";
			decisionAdvice = "Its cold! Wrap up warm with a coat and a wooly hat";
		} else if (temp_c > 12 && temp_c <= 20) {
			console.log(" ** MASCOT IS NORMAL CLOTHES ** ")
			mascotPic = "../../assets/mascot/plain-bear.jpg";
			decisionAdvice = "Nice even weather! Best wear jumper and trousers";
		} else {
			console.log(" ** MASCOT IS COOL CLOTHES ** ")
			mascotPic = "../../assets/mascot/hot-bear.png";
			decisionAdvice = "Its hot! Wear shorts and t-shirts to stay cool";
		}

		this.setState({
			locate: location,
			temp: tempInt,
			weathPic : weatherPic,
			mascPic : mascotPic,
			advice : decisionAdvice,
		});
	}

	//parseResponse for testing purposes
	testStore = () => {
		console.log(" ** TEST MODE INIT **")
		var hourNow = new Date(testDate);
		var location = "London"; // shows location
		var temp_c = 21; //
		var conditions = "Clear";

		var tempInt = Math.round(temp_c);
		var weatherPic = '';
		var mascotPic = '';
		var decisionAdvice = '';

		//Conditions for weather picture
		if (hourNow.getHours() > 17 || hourNow.getHours() < 5) {
			console.log(" ** NIGHT MODE TRIGGERED **");
			weatherPic = "../../assets/weather/moon.png";
		} else if(conditions.includes("Snow") || conditions.includes("Blizzard") || conditions.includes("Ice")) {
			console.log(" ** CONDITION IS SNOW **")
			weatherPic = "../../assets/weather/snow.jpg";
		} else if (conditions.includes("Rain") || conditions.includes("Showers") || conditions.includes("Thunder")) {
			console.log(" ** CONDITION IS RAIN **")
			weatherPic = "../../assets/weather/rain.png";
		} else if (conditions.includes("Cloud") || conditions.includes("Showers") || conditions.includes("Thunder")) {
			console.log(" ** CONDITION IS RAIN **")
			weatherPic = "../../assets/weather/sun-cloud.jpg";
		} else {
			console.log(" ** CONDITION IS CLEAR **")
			weatherPic = "../../assets/weather/sun.png";
		}

		//Conditions for weather picture
		if (hourNow.getHours() > 17 || hourNow.getHours() < 5) {
			console.log(" ** NIGHT MODE TRIGGERED **");
			mascotPic = "../../assets/mascot/bed.png";
			decisionAdvice = "Its time for bed!";
		} else if (conditions.includes("Rain") || conditions.includes("Showers") || conditions.includes("Thunder")) {
			console.log(" ** MASCOT IS RAIN CLOTHES ** ")
			mascotPic = "../../assets/mascot/rain-bear.jpg";
			decisionAdvice = "Its raining! Wear a Mac and take an umbrella if you go outside";
		} else if (temp_c <= 12) {
			console.log(" ** MASCOT IS WARM CLOTHES ** ")
			mascotPic = "../../assets/mascot/cold-bear.png";
			decisionAdvice = "Its cold! Wrap up warm with a coat and a wooly hat";
		} else if (temp_c > 12 && temp_c <= 20) {
			console.log(" ** MASCOT IS NORMAL CLOTHES ** ")
			mascotPic = "../../assets/mascot/plain-bear.jpg";
			decisionAdvice = "Nice even weather! Best wear jumper and trousers";
		} else {
			console.log(" ** MASCOT IS COOL CLOTHES ** ")
			mascotPic = "../../assets/mascot/hot-bear.png";
			decisionAdvice = "Its hot! Wear shorts and t-shirts to stay cool";
		}

		this.setState({
			locate: location,
			temp: tempInt,
			weathPic : weatherPic,
			mascPic : mascotPic,
			advice : decisionAdvice,
		});
	}

	/*
	empty = () => {
		console.log("SHIT");
		console.log(cube(3));
		console.log(foo);
		cube(7);
	}

	<div >
		<Button />
	</div>

	<div >
		<ButtonTwo/>
	</div>
	*/

	HomeScreen = () => {
		// 'March 13, 08 08:20'
		var hourNow = new Date(testDate);
		const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
		return (
			<div class = {  (hourNow.getHours() > 17 || hourNow.getHours() < 5) ? style.containerNight : style.container }>

			<div >
				<Button />
			</div>

			<div >
				<ButtonTwo/>
			</div>

				<div class = { (this.state.fadeInMainInformation) ? style.cityContainer : style.cityContainerFade  }>
					<div class = {style.city}> {this.state.locate } </div>
				</div>

				<div class = { (this.state.fadeInMainInformation) ? style.temperatureContainer : style.temperatureContainerFade }>
					<div class={ tempStyles }>{ this.state.temp }</div>
				</div>

				<div class = {(this.state.fadeInMainInformation) ? style.weathPicContainer  : style.weathPicContainerFade }>
						<img src = {this.state.weathPic} class={style.weathPic} />
				</div>

				<div class = { (this.state.fadeInMainInformation) ? style.mascPicContainer : style.mascPicContainerFade  }>
						<img src = {this.state.mascPic} class={style.mascPic} />
				</div>

				<div class = { (this.state.fadeInMainInformation) ? style.adviceContainer : style.adviceContainerFade  }>
					<div class = {style.advice}> {this.state.advice } </div>
				</div>

			</div>
		)
	}

	FadeInMain = () => {
		var that = this;
		setTimeout(function() {
				that.setState({
					fadeInMainInformation : true
				})
		}, (timer*3.5))
	}

	SplashPage = () => {
		var hourNow = new Date(testDate);
		return (
				<div>
					<div class={ (this.state.fadeOut) ? style.containerfade : style.containerLoad }>

					</div>
					<div class={ (hourNow.getHours() > 17 || hourNow.getHours() < 5) ? style.fakeContainerNight : style.fakeContainer  }> </div>
				</div>
		)
	}

	// Unloads splash screen after 3secs
	TimeOut = () => {
		var that = this;
		// trigger deloading splash page
		setTimeout(function() {
				console.log("dataLoaded: true")
				that.setState({
					dataLoaded : true
				})
		}, (timer*3))
		// trigger fade out
		setTimeout(function() {
			console.log("fadeOut: true")
			console.log("showScreen: true")
				that.setState({
					fadeOut : true,
					showScreen : true
				})
		}, (timer*2))
	}

	// Transferring from splash to home screen
	StartApp = () => {
		if (this.state.dataLoaded == false) {
			console.log("Splash Screen initialised")
			this.TimeOut();
			return <this.SplashPage />;
		} else if (this.state.showScreen == true) {
			console.log("Splash Screen closed")
			console.log("Main page rendered")
			return <this.HomeScreen/>;
		}
	}

	// the main render method
	render() {
			return (
					<this.StartApp/>
			);
	}
}
