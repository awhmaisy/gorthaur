#!/usr/bin/env node
const inquirer = require('inquirer');
const CliFrames = require('cli-frames');
const cards = require('./cards');
const chalk = require('chalk');

const asciiloader = [
  '( •_•)︻デ═一',
  '( -_•)︻デ═一',
  '( •_•)︻デ═一',
  '( -_•)︻デ═一 ---- ˖✧',
  '( -_•)︻デ═一 ---- ✧˖°',
  '( -_•)︻デ═一 ---- ˖✧⋆ﾟ⊹',
  '( -_•)︻デ═一 ---- ✧˖°⋆ﾟ⊹',
  '( -_•)︻デ═一 ---- ˖✧⋆ﾟ⊹⁎⁺˳✧༚',
  '( -_•)︻デ═一 ---- ✧˖°⋆ﾟ⊹⁎⁺˳✧༚♡',
];

const loader = new CliFrames({
  frames: asciiloader,
  autostart: false, 
  delay: 500 
});

const { deck } = cards;
const customPrefix = chalk.hex('#fdb2ff')('♱'); 

const exit = [
  {
    type: 'confirm',
    name: 'exit',
    message: chalk.hex('#fdb2ff')('have you seen enough?'),
    default: true,
    prefix: customPrefix, 
    transformer: (input) => chalk.hex('#fdb2ff')(input)
  }
];

function displayCard(card) {
  const cardInfo = `${card.title}\n${card.meaning && card.meaning.description ? card.meaning.description : 'Description is missing.'}`;
  const cardDisplay = `${card.card}`;
  
  console.log(`${cardInfo} ${cardDisplay}`);
  console.log('\n♱ °˖✧◝(⁰▿⁰)◜✧˖° ♱\n');
}

function pickCard(numCards) {
  const drawnCards = [];
  for (let i = 0; i < numCards; i++) {
    const cards = deck ? Object.keys(deck) : [];
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    const isReversed = Math.random() < 0.5;
    drawnCards.push({
      name: randomCard,
      ...deck[randomCard][isReversed ? 'reversed' : 'upright']
    });
  }
  return drawnCards;
}

function end(userName) {
  inquirer.prompt(exit).then(answers => {
    if (answers.exit) {
      loader.start();
      setTimeout(function() {
        (async () => {
          try {
              const boxen = await import('boxen');
              console.log('\x1b[38;2;234;154;229m' + await boxen.default(`goodbye, see you on the other side ${userName} <3`, {
                padding: 0.5,
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
      }, 1000);
    } else { 
      //i want the console to clear if restarted, so i clear it
      console.clear();
      //loader.start begins the ascii loader
      loader.start();
      setTimeout(function() {
        run();
      }, 1000);
    }
  });
}

function run() {
  const customPrefix = chalk.hex('#fdb2ff')('♱');
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: chalk.white('what is your name?'),
        default: 'hobbit',
        prefix: customPrefix,
        transformer: (input) => chalk.hex('#fdb2ff')(input)
      },
      {
        type: 'list',
        name: 'cardCount',
        message: chalk.white('how many cards would you like to pull today?'),
        choices: [
          { name: '1', value: 1 },
          { name: '2', value: 2 },
          { 
            name: '3', 
            value: 3, 
            titles: ['past card', 'present card', 'future card'],
            displayTitles: true
          }
        ],
        prefix: customPrefix,
        transformer: (input) => chalk.hex('#fdb2ff')(input),
        cursor: '♱'
      }
    ])  
    .then((answers) => {
      const numCards = parseInt(answers.cardCount);
      const drawnCards = pickCard(numCards);

      console.log('\nyour cards:\n');
      drawnCards.forEach((card, index) => {
        let cardTitle;
        if (numCards === 3) {
          const titles = ['past card', 'present card', 'future card'];
          cardTitle = titles[index];
        } else {
          cardTitle = `𓈒 ⭒ ݁ . card ${index + 1} ⋆·˚`;
        }
        console.log(`\n${cardTitle}`);
        displayCard(card);
      });

      end(answers.name);
    });
}

run();
