import React from 'react';
import API from '../../utils/API';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.css';


class BookResult extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			saved: false,
			deleted: false
		};
		this.handleSaveClick = this.handleSaveClick.bind(this);
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
	}

	handleSaveClick = function(e) {
		this.setState({ saved: true });
		const bookData = {
			title: this.props.title,
			authors: this.props.authors,
			link: this.props.link,
			img: this.props.img,
			description: this.props.description
		};
		e.preventDefault();
		API.save(bookData)
			.then(response => {
				console.log(response);
			})
			.catch(err => {
				console.log(err);
			});
	};

	handleDeleteClick(e) {
		this.setState({ deleted: true });
		e.preventDefault();
		API.delete(this.props.id)
			.then(response => {
				console.log(response);
				Router.dispatch(this.props.location, null);
			})
			.catch(err => {
				console.log(err);
			});
	}

	getInitialState() {
		return {
		  isMouseInside: false
		};
	  }
	  mouseEnter = () => {
		this.setState({ isMouseInside: true });
	  }
	  mouseLeave = () => {
		this.setState({ isMouseInside: false });
	  }

	render() {
		return (
			<div
				className="bookResultRow row"
				id={this.props.id ? this.props.id : null}
				style={{ display: this.state.deleted ? 'none' : 'block' }}
			>
				
				<div className="row">

					<div className="col" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
						{this.props.img ? (
							<img
								src={
									// if smallthubmail exists on this.props.img use that else if thumbnail exists on this.props.img use that else leave src empty
									this.props.img.smallThumbnail
										? this.props.img.smallThumbnail
										: this.props.img.thumbnail
										? this.props.img.thumbnail
										: ''
								}
								alt="book cover"
								// className="col"
							/>
						) : null}
						{this.state.isMouseInside ? <div className="btnDiv">
								{// if link to book exists include View button else do not
								this.props.link ? (
									<a
										href={this.props.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										<button type="button" name="view">
											View
										</button>
									</a>
								) : null}
								{// if this.props.path is "/" display save button else display Delete button
								this.props.path === '/' ? (
									<button
										type="button"
										name="save"
										onClick={this.handleSaveClick}
										disabled={this.state.saved}
									>
										{this.state.saved ? 'Saved' : 'Save'}
									</button>
								) : (
									<button
										type="button"
										name="Delete"
										onClick={this.handleDeleteClick}
										disabled={this.state.deleted}
									>
										Delete
									</button>
								)}
							</div> : null}

					</div> 

						<div className="col-10 aboutBook">
							<div className="aboutBookRow row">
								<h4 className="col-12">{this.props.subtitle ? this.props.title + ": " + this.props.subtitle : this.props.title} </h4>

								<p className="col-12">
									By: {this.props.authors ? this.props.authors.join(', ') : 'N/A'}
								</p>
							</div>
							
							<div className="row">
								<p className="col">{this.props.description ? this.props.description : 'No Description Available'}</p>
							</div>		
						</div>
				</div>
			</div>
		);
	}
}

export default BookResult;
