import inquirer from 'inquirer';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "input",
        name: "input_type",
        message: "What is your name",
        default: "Iron Man"
    },
    {
        type: "list",
        name: "list_question",
        message: "What programing language do you like?",
        choices: ["javascript", "Java", "Python"],
        default: "javascript"
    },
    {
        type: "checkbox",
        name: "checkbox",
        message: "How many programming languages do you know?",
        choices: ["javascript", "Java", "Python"],
        default: "javascript"
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });