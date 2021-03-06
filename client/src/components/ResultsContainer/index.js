import React from 'react';
import Results from '../Results';
import './style.css';


function ResultsContainer(props) {
	if (props.path === '/') {
		return (
			<div id="resultsContainer">
				<h3>Results Found</h3>
				{props.bookData.map(book => {
					const bookInfo = book.volumeInfo;
					return (
						<Results
							title={bookInfo.title}
							subtitle={bookInfo.subtitle}
							authors={bookInfo.authors}
							description={bookInfo.description}
							link={bookInfo.canonicalVolumeLink}
							img={bookInfo.imageLinks}
							path={props.path}
							key={book.id} 
						/>
					);
				})}
			</div>
		);
	} else if (props.path === '/saved') {
		if (props.savedBooks.length > 0) {
			return (
				<div id="resultsContainer">
					<h3>Saved Books</h3>
					{props.savedBooks.map(book => {
						return (
							<Results
								title={book.title}
								subtitle={book.subtitle}
								authors={book.authors}
								description={book.description}
								link={book.link}
								img={book.img}
								id={book._id}
								path={props.path}
								key={book._id}
							/>
						);
					})}
				</div>
			);
		} else {
			return (
				<div id="resultsContainer">
					<h3>Saved Books</h3>
					<p>No saved books.</p>
				</div>
			);
		}
	}
}

export default ResultsContainer;
