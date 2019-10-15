import React, { Component } from 'react';
import Calendar from '../Calendar';
import WeekCalendar from '../WeekCalendar';
import axios from 'axios';

export default class Home extends Component {
	state = {};

	componentWillMount = () => {
		// console.log('hello');
		// axios.get('http://localhost:5000/read/current').then((current) => {
		// 	console.log(current);
		// }, { withCredentials: true });
		// axios.get(`http://localhost:5000/read/groomer/${'5da478786b0d84a504022fb2'}`).then((groomer) => {
		// 	console.log(groomer);
		// 	this.setState({
		// 		groomer: groomer.data
		// 	});
		// 	console.log('WE HIT IT');
		// });
	};

	render() {
		// if (!this.state.groomer) {
		// 	return <div>Loading</div>;
		// }
		return (
			<div className="entire-content">
				<div className="containerr-two">
					<div>{/* <h2>{this.state.groomer.username}</h2> */}</div>
					<div id="book">
						{/* <button
							type="button"
							className="btn btn-info btn-md"
							data-toggle="modal"
							data-target="#myModal"
						>
							{this.state.groomer.firstName} {this.state.groomer.lastName}
						</button> */}
					</div>
					<br />
					<div>
						<h4>BEST GROOMER IN MIAMI</h4>
					</div>
					<div> {/* <p>{this.state.groomer.about}</p> */}</div>
				</div>

				<div className="containerr">
					<div className="avatar-flip">
						{/* <img alt="" src={this.state.groomer.profilePic} height="150" width="150" /> */}
						<img
							alt=""
							src="http://media.idownloadblog.com/wp-content/uploads/2012/04/Phil-Schiller-headshot-e1362692403868.jpg"
							height="150"
							width="150"
						/>
					</div>
					<h2>CONTACT INFO</h2>
					{/* <h4>{this.state.groomer.phoneNumber}</h4>
					<p>{this.state.groomer.email}</p> */}
					<h2>
						<em />(84% rating)
					</h2>
					<div className="star-ratings-css">
						<div className="star-ratings-css-top">
							<span>★</span>
							<span>★</span>
							<span>★</span>
							<span>★</span>
							<span>★</span>
						</div>
						<div className="star-ratings-css-bottom">
							<span>★</span>
							<span>★</span>
							<span>★</span>
							<span>★</span>
							<span>★</span>
						</div>
					</div>
					<br />
					<div className="containerr-calendar">
						<div>
							<h2>WEEK SCHEDULE</h2>
						</div>
						<br />
						<WeekCalendar />
					</div>
					<div className="modal fade" id="myModal" role="dialog">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="close" data-dismiss="modal">
										&times;
									</button>
									<h4 className="modal-title">BOOKING</h4>
								</div>
								<form>
									<div className="modal-body">
										<Calendar />
										<br />
										<div className="custom">
											<select defaultValue="default">
												<option value="" disabled>
													AVAILABLE TIMES:
												</option>
												<option value="1">9:00AM-10:00AM</option>
												<option value="3">10:00AM-11:00AM</option>
												<option value="4">11:00AM-12:00AM</option>
												<option value="5">12:00AM-1:00PM</option>
												<option value="6">1:00PM-2:00PM</option>
												<option value="7">2:00PM-3:00PM</option>
												<option value="8">3:00PM-4:00PM</option>
												<option value="9">5:00PM-6:00PM</option>
											</select>
										</div>
										<br />
										<div className="custom">
											<select defaultValue="default">
												<option value="" disabled>
													SELECT DOG
												</option>
												<option value="1">DOG ONE (NAME)</option>
												<option value="3">DOG TWO (NAME)</option>
											</select>
										</div>
									</div>
									<div className="modal-footer">
										<button type="submit" className="btn btn-primary">
											Submit
										</button>
										<button type="button" className="btn btn-default" data-dismiss="modal">
											Close
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
