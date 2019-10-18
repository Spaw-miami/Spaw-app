import React, { Component } from 'react';
import Calendar from '../Calendar';
import WeekCalendar from '../WeekCalendar';
import axios from 'axios';
import Footer from '../Footer';

export default class Home extends Component {
	state = {
		groomer: false
	};

	componentWillMount = () => {
		let id = this.props.location.pathname.split('/groomerprofile/')[1];
		axios.get(`http://localhost:5000/read/groomer/${id}`).then((groomer) => {
			console.log(groomer, 'this is the groomer in the profile');
			this.setState({
				groomer: groomer
			});
		});
	};

	render() {
		if (!this.state.groomer) {
			return <div> Loading </div>;
		}
		return (
			<div>
				<div className="entire">
					<div className="containerr-two">
						{/* <div><h2>{this.state.groomer.data.username}</h2></div> */}
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
							<h4>ABOUT US</h4>
							<h4></h4>
						</div>
						<div> {this.state.groomer.data.about}</div>
					</div>

					<div className="containerr">
						<div className="avatar-flip">
							<img alt="" src={this.state.groomer.data.profilePic} height="150" width="150" />
							<img
								alt=""
								src="http://www.surgery.pitt.edu/sites/default/files/default_images/default-person.jpg"
								height="150"
								width="150"
							/>
						</div>
						<h2>{this.state.groomer.data.firstName} {this.state.groomer.data.lastName}</h2>
						<h4>{this.state.groomer.data.phoneNumber}</h4>
					<p><a href="">{this.state.groomer.data.email}</a></p>
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
							<WeekCalendar data={this.state.groomer} user={this.props} />
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
				<Footer />
			</div>
		);
	}
}
