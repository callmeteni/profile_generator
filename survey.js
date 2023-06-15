// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//   rl.close();

// });

// rl.question("What's an activity you like doing? ", (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);
//     rl.close();
// })

// rl.question('What do you listen to while doing that? ', (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);
//     rl.close();
// })

// rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);
//     rl.close();
// })

// rl.question("What's your favourite thing to eat for that meal?", (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);
//     rl.close();
// })

// rl.question('Which sport is your absolute favourite?', (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);
//     rl.close();
// })

// rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);
//     rl.close();
// })

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (e.g., dinner, brunch, etc.)?",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

const answers = [];

const askQuestion = (index) => {
  rl.question(questions[index], (answer) => {
    answers.push(answer);
    if (index === questions.length - 1) {
      for (let i = 0; i < questions.length; i++) {
        console.log(`${questions[i]} ${answers[i]}`);
      }
      console.log(`Thank you for your valuable feedback`);
      rl.close();
    } else {
      askQuestion(index + 1);
    }
  });
};

askQuestion(0);

