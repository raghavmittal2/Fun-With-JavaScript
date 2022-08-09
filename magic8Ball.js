/* the user asks a question based on which the magic 8 ball spits out a 
random answer each time the program is run */
let userName = '';
(userName) ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = "Will I learn to code?";
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eigthBall = 'It is decided so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eigthBall = 'Cannot predict now.';
    break;
  case 4:
      eightBall = 'Do not count on it';
      break;
  case 5:
      eightBall = 'My sources say no';
      break;
    case 6:
      eightBall = '\'Outlook\' not so good';
      break;
    case 7:
      eightBall = 'Signs point to yes';
      break;
    default:
      eightBall = 'Try again dumbass';
      break;
}

console.log(`Magic 8 Ball says: ${eightBall}`);