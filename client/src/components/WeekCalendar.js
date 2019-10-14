import React, { Component } from 'react';
import axios from 'axios';
export default class WeekCalendar extends Component {
	state = {
		bgColor: '',
		content: 'available',
		number: 1
	};

	componentWillMount() {
		axios.get(`http://localhost:5000/read/groomer/${'5da478786b0d84a504022fb2'}`).then((groomer) => {
			this.setState({
				groomer: groomer.data
			});
		});
	}

	nextWeek = () => {
		console.log('next');
		if (this.state.number != 52) {
			let n = this.state.number + 1;
			this.setState({
				number: n
			});
		}
	};

	modalOpen = (e) => {
		console.log(e.target);
	};

	previousWeek = () => {
		console.log('previous');

		if (this.state.number != 1) {
			let n = this.state.number - 1;
			this.setState({
				number: n
			});
		}
	};

	Monday = (n) => {
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
			console.log(Monday[i]);
			arr.push(
				<tr className="headcol" data-toggle="modal" data-target="#myModall">
					<td>{Monday[i].time}</td>
					<td value={Monday[i]._id} onClick={this.modalOpen}>
						{}
					</td>
					<td onClick={this.modalOpen}>{Tuesday[i]._id}</td>
					<td onClick={this.modalOpen}>{Wednesday[i]._id}</td>
					<td onClick={this.modalOpen}>{Thursday[i]._id}</td>
					<td onClick={this.modalOpen}>{Friday[i]._id}</td>
					<td onClick={this.modalOpen}>{Saturday[i]._id}</td>
					<td onClick={this.modalOpen}>{Sunday[i]._id}</td>
				</tr>
			);
		}

		console.log(arr);
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
					</div>
				</div>

				<div className="modal fade" id="myModall" role="dialog">
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
									<div className="custom">
										<select defaultValue="default">
											<option value="DEFAULT" disabled>
												Select dog
											</option>
											<option value="1"> (NAME)</option>
											<option value="3"> (NAME)</option>
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
