# Test

## Test Library

    - Scaffolding = Temporary Framework.
    - Jasmine
    - Jest
    - Mocha

## Assertion Library

    - Jasmine
    - Jest
    - Chai (usually paired with Mocha)

## Test runner

    - Jasmine
    - Jest
    - Mocha
    - Karma

## Mock, Spy, Stub

    - Jasmine
    - Jest
    - Sinon.js

## Code Coverage

    - Istanbul
    - Jest

## Unit Test

    - Unit test should cover all small pure functions of an application
    - Small pure functions: take an input and return an output that do one thing really well, one thing at a time.
    - Pure function is a function that has no side effects
    - ** Unit Test: ** Test input and output.
    - Deterministic: Same input -> Same output

    - Unit tests don't test the contract.
    - Contract is the connection between things ie. server and DB, sign in fuction and load fuction.

## Integration Test

    - Cross communication between different units of code.
    - Test the connection between them.
    - Might use Spys from a mocking library to ensure expected side effects, instead of just asserting an output.

    - Expensive, Slow.

## Aumotation Test

    - UI tests that are always running inside a browser or a browser like environment.
    - Need to simulate user behaviour in these environment such as clicking, typing, scrolling.
    - Make sure that these scenarios actually work from the point of view of an end user.

### Fetch

    - won't work in Node.
    - Fetch is implemented by browsers, on the window object.
    - in Node, no window object.
