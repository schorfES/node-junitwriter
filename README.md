# JUnitWriter

A junit reporter for node.

[![CI Status](https://github.com/schorfES/node-junitwriter/actions/workflows/ci.yml/badge.svg)](https://github.com/schorfES/node-junitwriter/actions)

## Installation

This package is available on [npm](https://www.npmjs.com/package/junitwriter/)
as: `junitwriter`

``` sh
	npm install junitwriter
```

## API Documentation

### `Writer`

#### `new Writer()`

Creates an instance of the junit reporter. When creating an instance a
`Testsuites` root node is created internally which can be accessed through the
function `getTestsuites()`.

#### `.getTestsuites()`

Returns the `Testsuites` root node.

#### `.addTestsuite(name)`

Adds and returns a testsuite node inside the testsuites root node.

#### `.save(destination, callback)`

This function saves the content of the report to a file at the given
`destination`.

### `Testsuites`

#### `.addTestsuite(name)`

Adds and returns a `Testsuite` node inside the `Testsuites` root node.

#### `.incDisabled(amount)`

Increases the disabled test count by the given amount.

#### `.incErrors(amount)`

Increases the error count by the given amount.

#### `.incFailures(amount)`

Increases the failure count by the given amount.

#### `.incTests(amount)`

Increases the test count by the given amount.

#### `.setTime(seconds)`

Sets the total execution time in seconds.

#### `.setName(name)`

Sets the name attribute.

#### `.setSystemOut(out)`

Sets the system-out element with the given output.

#### `.setSystemError(err)`

Sets the system-err element with the given error output.

#### `.showIds()`

Shows id attributes on all testsuites.

#### `.hideIds()`

Hides id attributes on all testsuites.

### `Testsuite`

Testsuite can appear multiple times as a child element of `Testsuites`.

#### `.addTestcase(name, classname)`

Adds and returns a `Testcase` node with the given name and classname.

#### `.incDisabled(amount)`

Increases the disabled test count by the given amount.

#### `.incErrors(amount)`

Increases the error count by the given amount.

#### `.incFailures(amount)`

Increases the failure count by the given amount.

#### `.incTests(amount)`

Increases the test count by the given amount.

#### `.setTime(seconds)`

Sets the execution time in seconds.

#### `.setTimestamp(timestamp)`

Sets the timestamp attribute with a Date object.

#### `.setName(name)`

Sets the name attribute.

#### `.setSystemOut(out)`

Sets the system-out element with the given output.

#### `.setSystemError(err)`

Sets the system-err element with the given error output.

#### `.setHostname(hostname)`

Sets the hostname attribute.

#### `.setPackage(package)`

Sets the package attribute.

#### `.setSkipped(skipped)`

Marks the testsuite as skipped when true, unmarks when false.

#### `.isSkipped()`

Returns whether the testsuite is marked as skipped.

#### `.showId()`

Shows the id attribute.

#### `.hideId()`

Hides the id attribute.

#### `.addProperty(name, value)`

Adds a property with the given name and value.

#### `.removeProperty(name)`

Removes the property with the given name.

#### `.updateProperty(name, value)`

Updates the property value for the given name.

#### `.addError(message, type)`

Adds an error notification with the given message and type.

#### `.addFailure(message, type)`

Adds a failure notification with the given message and type.

### `Testcase`

Testcase can appear multiple times as a child element of a `Testsuite`.

#### `.setName(name)`

Sets the name attribute.

#### `.setClassname(classname)`

Sets the classname attribute.

#### `.setAssertions(assertions)`

Sets the number of assertions.

#### `.setTime(seconds)`

Sets the execution time in seconds.

## License

[LICENSE (MIT)](https://github.com/schorfES/node-junitwriter/blob/master/LICENSE)
