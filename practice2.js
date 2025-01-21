let courseName = "JavaScript"; //This is global scope

function practiceScope() {
  // Function scope
  let topic = "Variables";
  console.log(courseName + " - " + topic); //This is acees beacause here two scopes are combines 1.global scope(courseName) 2.function scope(topic)

  if (true) {
    // Block scope
    let detail = "Exploring scopes";
    console.log(detail);
  }
  console.log(details); //This is not working because of details variable is inside the block so the error will bw comming
}
practiceScope(); // If we didt call the function the output is not getting beacause we declare all scopes in function so first we call that then all scopes are given output
