import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function SearchForm(props) {
	return (
		<div id="searchContainer">
			<h3>Book Search</h3>
			<form id="bookSearch">
				<label htmlFor="bookInput" form="bookSearch"></label>
				<br></br>

				<InputGroup
					className="mb-3"
					type="text"
					name="bookInput"
					id="bookInput"
					form="bookSearch"
					onChange={e => props.handleChange(e)}
					placeholder="Enter book title to search"
					required
				>
					<InputGroup.Prepend>
						<InputGroup.Text id="inputGroup-sizing-default">
							Title:
						</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						aria-label="Default"
						aria-describedby="inputGroup-sizing-default"
					/>
				</InputGroup>
				<br></br>
				<button type="submit" onClick={e => props.handleSearchClick(e)}>
					Search
				</button>
			</form>
		</div>
	);
}

export default SearchForm;
