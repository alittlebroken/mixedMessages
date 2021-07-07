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
}
