import React, { Component } from 'react';
import axios from 'axios';
export default class WeekCalendar extends Component {
	state = {
		bgColor: '',
		content: 'available',
		number: 1
	};

	componentDidMount() {
		console.log(this.props.user.user._id, 'inside of calendar');
		this.setState({
			groomer: this.props.data.data
		});
	}

	nextWeek = () => {
		if (this.state.number != 52) {
			let n = this.state.number + 1;
			this.setState({
				number: n
			});
		}
		return;
	};

	modalInsert = (data) => {
		return this.state.modal;
	};

	previousWeek = () => {
		if (this.state.number != 1) {
			let n = this.state.number - 1;
			this.setState({
				number: n
			});
		}
	};

	changeApp = (e) => {
		let data = {
			appID: this.state.appID,
			dogID: this.state.dogID,
			userID: this.state.customerID
		};

		axios.post('http://localhost:5000/update/appointment', data).then((app) => {});
	};

	modalOpen = (e) => {
		// INCLUDE FORM HERE
		let eArr = e.target.innerText.split(' ');
		this.setState({
			appID: eArr[0],
			time: eArr[1],
			customerID: eArr[2]
		});
		// let appID = eArr[0];
		// let time = eArr[1];
		// let customerID = eArr[2];

		let inputDisplay = {
			display: 'none'
		};
		let color = {
			color: '#518edd'
		};

		let modal = (
			<div className="modal fade" id="myModall" role="dialog">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal">
								&times;
							</button>
							<h4 className="modal-title">Book</h4>
						</div>
						<form onClick={this.changeApp}>
							<div className="modal-body">
								<div className="custom">
									<h5>Appointment at: </h5>
									<h5 style={color}>{this.state.time} </h5>
									<h5>for </h5>

									<select>
										<option>First Dog</option>
										<option>Second Dog</option>
									</select>
								</div>
								<div className="modal-footer">
									<button onClick={this.boxClick} type="submit" className="btn btn-primary">
										Submit
									</button>
									<button
										onClick={this.boxClick}
										type="button"
										className="btn btn-default"
										data-dismiss="modal"
									>
										Close
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
		this.setState({
			modal: modal
		});
	};

	Monday = (n) => {
		let pStyle = {
			opacity: 0,
			height: 40
		};

		let arr = [];
		let number = 0;
		let Monday = [
			...this.state.groomer.weeks.filter((eachweek) => eachweek.weekNumber === Number(`${n}`))[0].Monday
		];
		let Tuesday = [
			...this.state.groomer.weeks.filter((eachweek) => eachweek.weekNumber === Number(`${n}`))[0].Tuesday
		];
		let Wednesday = [
			...this.state.groomer.weeks.filter((eachweek) => eachweek.weekNumber === Number(`${n}`))[0].Wednesday
		];
		let Thursday = [
			...this.state.groomer.weeks.filter((eachweek) => eachweek.weekNumber === Number(`${n}`))[0].Thursday
		];
		let Friday = [
			...this.state.groomer.weeks.filter((eachweek) => eachweek.weekNumber === Number(`${n}`))[0].Friday
		];
		let Saturday = [
			...this.state.groomer.weeks.filter((eachweek) => eachweek.weekNumber === Number(`${n}`))[0].Saturday
		];
		let Sunday = [
			...this.state.groomer.weeks.filter((eachweek) => eachweek.weekNumber === Number(`${n}`))[0].Sunday
		];

		for (let i = 0; i < Monday.length; i++) {
			arr.push(
				<tr className="headcol" data-toggle="modal" data-target="#myModall" key={i}>
					<td>{Monday[i].time}</td>
					<td onClick={this.modalOpen}>
						<p style={pStyle}>
							{Monday[i]._id} {Monday[i].time} {this.props.user.user._id}
						</p>
					</td>
					<td onClick={this.modalOpen}>
						<p style={pStyle}>
							{Tuesday[i]._id} {Tuesday[i].time} {this.props.user.user._id}
						</p>
					</td>
					<td onClick={this.modalOpen}>
						<p style={pStyle}>
							{Wednesday[i]._id} {Wednesday[i].time} {this.props.user.user._id}
						</p>
					</td>
					<td onClick={this.modalOpen}>
						<p style={pStyle}>
							{Thursday[i]._id} {Thursday[i].time} {this.props.user.user._id}
						</p>
					</td>
					<td onClick={this.modalOpen}>
						<p style={pStyle}>
							{Friday[i]._id} {Friday[i].time} {this.props.user.user._id}
						</p>
					</td>
					<td onClick={this.modalOpen}>
						<p style={pStyle}>
							{Saturday[i]._id} {Saturday[i].time} {this.props.user.user._id}
						</p>
					</td>
					<td onClick={this.modalOpen}>
						<p style={pStyle}>
							{Sunday[i]._id} {Sunday[i].time} {this.props.user.user._id}
						</p>
					</td>
				</tr>
			);
		}

		return arr;
	};

	handleClick() {
		console.log('Click happened');
	}
	boxClick = (e) => {
		this.setState({
			bgColor: 'rgb(241, 131, 131)',
			content: 'full'
		});
	};

	render() {
		if (!this.state.groomer) {
			return (
				<div>
					<h1>Loading</h1>
				</div>
			);
		}
		return (
			<div>
				<div className="container-two">
					<header>
						<div className="calendar__title">
							<div onClick={this.previousWeek} className="icon secondary chevron_left">
								‹
							</div>
							<h1 className="">
								<span />
								<strong>Current Week</strong>{' '}
							</h1>
							<div onClick={this.nextWeek} className="icon secondary chevron_left">
								›
							</div>
						</div>
						<div />
					</header>
					<div className="outer">
						<table>
							<thead>
								<tr>
									<th className="headcol" />
									<th>Mon</th>
									<th>Tue</th>
									<th>Wed</th>
									<th>Thu</th>
									<th>Fri</th>
									<th className="secondary">Sat</th>
									<th className="secondary">Sun</th>
								</tr>
							</thead>
						</table>
						<div className="wrap">
							<table className="offset">
								<tbody>{this.Monday(this.state.number)}</tbody>
							</table>
						</div>
						{this.state.modal}
					</div>
				</div>
			</div>
		);
	}
}

// {/* <tbody>
//                 {/* <tr o>
//                   <td className="headcol"></td> */}
//                   {/* <td ></td>
//                   <td></td> */}
//                   {/* <td className="past"></td> */}
//                   {/* <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td> */}
//                 {/* </tr> */}

//                 {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
//                   <td className="headcol"></td>
//                   <td></td>
//                   <td></td>
//                   <td className="past"></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                 </tr> */}
{
	/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick}>
  <td className="headcol">7:00</td>
  <td></td>
  <td></td>
  <td className="past"></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>  */
}
//                 {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
//                   <td className="headcol"></td>
//                   <td></td>
//                   <td></td>
//                   <td className="now"></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                 </tr> */}
//                 <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick}>
//                   <td className="headcol">8:00</td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                 </tr>
//                 {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
//                   <td className="headcol"></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td><div className="event double"><input id="check" type="checkbox" className="checkbox" /><label for="check"></label>8:30–9:30 Dog Wash in Kendall</div></td>
//                   <td></td>
//                   <td></td>
//                 </tr> */}
//                 <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick}>
//                   <td className="headcol">9:00</td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                 </tr>
//                 {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
//                   <td className="headcol"></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                 </tr> */}
//                 <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick}>
//                   <td className="headcol">10:00</td>
//                   <td></td>
//                   <td></td>
//                   <td><div className="event"><input id="check" type="checkbox" className="checkbox" /><label></label>10:00–11:00 Dog Wash in Brickell</div></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                 </tr>
//                 {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
//                   <td className="headcol"></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                 </tr> */}
//                 <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick}>
//                   <td className="headcol">11:00</td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                 </tr>
//                 {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
//                   <td className="headcol"></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                 </tr> */}
//                 <tr className="test" data-toggle="modal" data-target="#myModall"  onClick={this.handleClick}>
//                   <td className="headcol">12:00</td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                 </tr>
//                 {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
//                   <td className="headcol"></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                 </tr> */}
//                 <tr className="test" data-toggle="modal" data-target="#myModall"  onClick={this.handleClick}>
//                   <td className="headcol">13:00</td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                 </tr>
//                 {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
//                   <td className="headcol"></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                 </tr> */}
//                 <tr className="test" data-toggle="modal" data-target="#myModall"  onClick={this.handleClick}>
//                   <td className="headcol">14:00</td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                 </tr>
//                 {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
//                   <td className="headcol"></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                 </tr> */}
//                 <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick}>
//                   <td className="headcol">15:00</td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                 </tr>
//                 {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
//                   <td className="headcol"></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                 </tr> */}
//                 <tr className="test" data-toggle="modal" data-target="#myModall"  onClick={this.handleClick}>
//                   <td className="headcol">16:00</td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                 </tr>
//                 {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
//                   <td className="headcol"></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                 </tr> */}
//                 <tr className="test" data-toggle="modal" data-target="#myModall"  onClick={this.handleClick}>
//                   <td className="headcol">17:00</td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                 </tr>
//                 {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
//                   <td className="headcol"></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                 </tr> */}
//                 <tr className="test" data-toggle="modal" data-target="#myModall"  onClick={this.handleClick}>
//                   <td className="headcol">18:00</td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                 </tr>
//                 {/* hello */}
//                 {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
//                   <td className="headcol"></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                 </tr> */}
//               </tbody> */}
