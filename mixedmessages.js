/*
  mixedmessages.js

  Generates a random news headline

  Copyright 2021, Paul Lockyer
*/

// Main message object
const mixedMessage = {
  // Store words used to generate the mixedmessage headline
  _words: {
    entities: [],             // This could be people or groups
    actions: [],
    subjects: [],
  },

  // Getter and setters
  get entities(){
    return this._words["entities"];
  },
  set entities(entity){
    this._words["entities"].push(entity);
  },

  get actions(){
    return this._words["actions"];
  },
  set actions(action){
    this._words["actions"].push(action);
  },

  get subjects(){
    return this._words["subjects"];
  },
  set subjects(subject){
    this._words["subjects"].push(subject);
  },

  // grab a random word from an array
  randomWord(word_array){
    let len = this._words[word_array].length;
    if(len > 0){
      return this._words[word_array][Math.floor(Math.random() * len)];
    }
  },

  // create the news headline and return it
  createMessage(){
    const entity = this.randomWord('entities');
    const action = this.randomWord('actions');
    const subject = this.randomWord('subjects');
    return `${entity} was ${action} today due to ${subject}`;
  },

};

console.log('Tests');
console.log('1. Add some words ( 3 entries per array )')
mixedMessage["entities"] = 'Nasa';
mixedMessage["entities"] = 'Donald Trump';
mixedMessage["entities"] = 'Alien Overlord';
console.log(mixedMessage["entities"]);
mixedMessage["actions"] = 'arrested';
mixedMessage["actions"] = 'discovered';
mixedMessage["actions"] = 'rehabilitated';
console.log(mixedMessage["actions"]);
mixedMessage["subjects"] = 'due to covid.';
mixedMessage["subjects"] = 'due to bad parenting.';
mixedMessage["subjects"] = 'as a consequence of money laundering.';
console.log(mixedMessage["subjects"]);

console.log('2. Randomly select words - 1 random word per array');
console.log(mixedMessage.randomWord('entities'));
console.log(mixedMessage.randomWord('actions'));
console.log(mixedMessage.randomWord('subjects'));
