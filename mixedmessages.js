/*
  mixedmessages.js

  Generates a random news headline

  Copyright 2021, Paul Lockyer
*/

// Main message object
const mixedMessage = {

 // Build the message to be displayed
  _message: '',

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

// Add some data into the mixedMessageobject
// People, groups, bodies
mixedMessage['entities'] = 'Boris Johnson';
mixedMessage['entities'] = 'Bono';
mixedMessage['entities'] = 'Nasa';
mixedMessage['entities'] = 'The England football team';
mixedMessage['entities'] = 'Politicians';
mixedMessage['entities'] = 'Animals';
mixedMessage['entities'] = 'The Flat Earth Society';
mixedMessage['entities'] = 'Scientists';
mixedMessage['entities'] = 'Doctors';
mixedMessage['entities'] = 'Soldiers';

// actions
mixedMessage['actions'] = 'cleared';
mixedMessage['actions'] = 'arrested';
mixedMessage['actions'] = 'discovered';
mixedMessage['actions'] = 'buried';
mixedMessage['actions'] = 'credited';
mixedMessage['actions'] = 'invaded';
mixedMessage['actions'] = 'murdered';
mixedMessage['actions'] = 'captured';
mixedMessage['actions'] = 'confirmed';
mixedMessage['actions'] = 'denied';

// subjects
mixedMessage['subjects'] = 'aliens off the coast of France.';
mixedMessage['subjects'] = 'oil fields in the middle east.';
mixedMessage['subjects'] = 'smuggling ancient artifacts.';
mixedMessage['subjects'] = 'a small group of children.';
mixedMessage['subjects'] = 'the annual gathering of cat lovers.';
mixedMessage['subjects'] = 'freedom of speech.';
mixedMessage['subjects'] = 'cure for cancer.';
mixedMessage['subjects'] = 'widespread pandemic hitting third world countries.';
mixedMessage['subjects'] = 'a passion for dance.';
mixedMessage['subjects'] = 'blackholes leading to another universe.';

// show the user the final message
console.log(mixedMessage.createMessage());

// Uncomment the below to run some Tests
/*
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
mixedMessage["subjects"] = 'covid.';
mixedMessage["subjects"] = 'bad parenting.';
mixedMessage["subjects"] = 'a consequence of money laundering.';
console.log(mixedMessage["subjects"]);

console.log('2. Randomly select words - 1 random word per array');
console.log(mixedMessage.randomWord('entities'));
console.log(mixedMessage.randomWord('actions'));
console.log(mixedMessage.randomWord('subjects'));

console.log('3. Final message generation');
console.log(mixedMessage.createMessage());
*/
