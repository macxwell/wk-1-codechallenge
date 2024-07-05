/*set up for user interaction*/
const userInput = require("node:readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  /**
   * the below function award grades as according to the following criteria 
   * from 79 -> A
   * from 60 to 79 -> B
   * from 50 to 59 -> c
   * from 40 to 49 -> D
   * below 40 -> E
   */
  const awardGrade = (score) => {
  
    if (score > 100 || score < 0) {
      return "invalid score!";
    }
    if (score > 79) {
      return "A";
    } else if (score >= 60 && score <= 79) {
      return "B";
    } else if (score >= 50 && score <= 59) {
      return "C";
    } else if (score >= 40 && score <= 49) {
      return "D";
    } else {
      return "E";
    }
  };
  

  const askForScore = () => {
    userInput.question("input score: ", (input) => {
      const score = Number(input);
  
      if (isNaN(score) || score > 100 || score < 0) {
        console.log(" enter score.");
        askForScore();
      } else {
        const grade = awardGrade(score);
        console.log(`The grade is: ${grade}`);
        userInput.close();
      }
    });
  };
  

