// console.log("ahoy ye salty dog");
// this execution context = under what banner were these things executed, which object?

// var a = 3;

function foo() {
	console.log("this a", this.a);
}

function doFoo(fn) {
	return fn();
}

var obj = {
	a: 2,
	foo: foo
}

var bar = obj.foo;

var a = "oops, Global!";

doFoo( obj.foo );

