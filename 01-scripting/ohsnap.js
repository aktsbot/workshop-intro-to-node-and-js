// func definitions
function runAfter2Sec() {
  setTimeout(function() {
    console.log("I ran after 2 seconds");
  }, 2000);
}

function runAfter5Sec() {
  setTimeout(function() {
    console.log("I ran after 5 seconds");
  }, 5000);
}

function runImmediately() {
  console.log("I ran immediatley");
}

// invoking / calling
runImmediately();
runAfter5Sec();
runAfter2Sec();

// go ahead run these in the browser dev tools
