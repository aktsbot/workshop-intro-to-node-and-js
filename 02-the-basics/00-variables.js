var greetings = "Hello World";

// let greetings = "Bye World";

// const greetings = "I'm still here!";

// why var is bad
var name = "invalid";
if (name == "invalid") {
  var message = "Invalid name";
}

console.log(message); // C would be mad - leaking!
