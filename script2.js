const fetch = require("node-fetch");

// Dependency Injection!
const getPeoplePromise = (fetch) => {
	return fetch("https://swapi.dev/api/people")
		.then((response) => response.json())
		.then((data) => {
			// console.log(data); // as this is asynchronous
			return {
				count: data.count,
				results: data.results,
			};
		});
};

// getPeoplePromise(fetch);

const getPeople = async (fetch) => {
	const getRequest = await fetch("https://swapi.dev/api/people");
	const data = await getRequest.json();

	// console.log(data); // as this is asynchronous
	return {
		count: data.count,
		results: data.results,
	};
};

// getPeople(fetch);

// ES6 features here!
module.exports = {
	getPeople,
	getPeoplePromise,
};
