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
    this._words["subjects"].push(subjects);
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

console.log(mixedMessage);
