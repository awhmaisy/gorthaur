#!/usr/bin/env node
const inquirer = require('inquirer');
const CliFrames = require('cli-frames');
const tarotDeck = require('./cards');

const asciiloader = [
    '♡⋅˖+⟡✧⟡+˖✧⟡+˖✧*:･ﾟ✧',
    '⋅♡˖+⟡✧⟡+˖𓈒⭒',
    '⋅˖♡+⟡✧⟡+˖݁.⋆·˚',
    '⋅˖+♡⟡✧⟡+˖✧*:･ﾟ✧',
    '⋅˖+⟡♡✧⟡+˖𓈒⭒',
    '⋅˖+⟡✧♡⟡+˖݁.⋆·˚',
    '⋅˖+⟡✧⟡♡+˖✧*:･ﾟ✧',
    '⋅˖+⟡✧⟡+♡˖𓈒⭒',
    '⋅˖+⟡✧⟡+˖♡݁.⋆·˚',
    '⋅˖+⟡✧⟡+˖✧♡:･ﾟ✧',
    '⋅˖+⟡✧⟡+˖𓈒♡⭒',
    '⋅˖+⟡✧⟡+˖݁.⋆·♡'
];

// Start the loader animation
const loader = new CliFrames();
loader.load(asciiloader);
loader.start();

const greeting = `\x1b[38;2;234;154;229m
┌───────────┐
│           │
│    hi♡    │
│           │
└───────────┘\x1b[0m`;
console.log(greeting);

function drawRandomCard() {
  const cards = Object.keys(tarotDeck);
  const randomCard = cards[Math.floor(Math.random() * cards.length)];
  const isReversed = Math.random() < 0.5;
  return {
    name: randomCard,
    ...tarotDeck[randomCard][isReversed ? 'reversed' : 'upright']
  };
}

// Example inquirer prompts
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      default: 'User'
    },
    {
      type: 'confirm',
      name: 'readyForFuture',
      message: 'Are you ready to see your future?',
      default: true
    },
    {
      type: 'list',
      name: 'cardCount',
      message: 'How many cards would you like to draw?',
      choices: ['1', '2', '3'],
      when: (answers) => answers.readyForFuture
    }
  ])
  .then((answers) => {
    if (answers.readyForFuture) {
      const numCards = parseInt(answers.cardCount);
      const drawnCards = [];
      
      for (let i = 0; i < numCards; i++) {
        drawnCards.push(drawRandomCard());
      }

      console.log('\nYour cards:');
      drawnCards.forEach((card, index) => {
        console.log(`\nCard ${index + 1}: ${card.title}`);
        console.log(card.card);
        console.log(`${card.meaning.keywords.join(', ')}. ${card.meaning.description}`);
      });
    }
    
    // The boxen output
    (async () => {
      try {
          const boxen = await import('boxen');
          console.log('\x1b[38;2;234;154;229m' + await boxen.default(`welcome to the \nmatrix,\n${answers.name}!`, {
            padding: 1,
            borderStyle: {
              topLeft: '♡',
              topRight: '♡', 
              bottomLeft: '♡',
              bottomRight: '♡',
              horizontal: '─',
              vertical: '│'
            }
          }) + '\x1b[0m');
      } catch (error) {
          console.error('Error creating boxed output:', error);
      }
    })();
  });
