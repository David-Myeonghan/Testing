const fetch = require("node-fetch");
const swapi = require("./script2");

it("calls swapi to get people", (done) => {
	expect.assertions(1); // always do assertion in asynchrounous!!
	swapi.getPeople(fetch).then((data) => {
		expect(data.count).toEqual(82);
		done(); // way 1: in asynchrounous test, we have to wait pending state to be done.
	});
});

it("calls swapi to get people", () => {
	expect.assertions(1);
	return swapi.getPeople(fetch).then((data) => {
		expect(data.count).toEqual(82);
		// way2: because of returning this, you have to wait this promise returns.
	});
});

it("calls swapi to get people with a promise", () => {
	expect.assertions(2);
	return swapi.getPeoplePromise(fetch).then((data) => {
		expect(data.count).toEqual(82);
		expect(data.results.length).toBeGreaterThan(5);
	});
});
