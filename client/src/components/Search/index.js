import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function SearchForm(props) {
	return (
		<div id="searchContainer">
			<h3>Enter a title below to search Google Books for whatever you like</h3>
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
				<Button
					variant="outline-primary"
					type="submit"
					onClick={e => props.handleSearchClick(e)}
				>
					Search
				</Button>
			</form>
		</div>
	);
}

export default SearchForm;
