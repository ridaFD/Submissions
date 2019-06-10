
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'exit\n') {
    quit();
  }
  else if(text === 'help\n'){
    help();
  }
  else if(text === 'lists\n'){
    tasks(lists);
  }
  else if(text.indexOf('add',0) == '0'){
    add(text)
  }
  else if(text.indexOf('remove',0) == '0'){
    remove(text)
  }
  else if(text !== `${null}\n`){
    hello(text);
  }
  else{
    unknownCommand(text);
  }
}

// The tasks list
var lists = ['Do homeWork', 'brush my teeth', 'wakeup early', 'eat fish every wed'];

function tasks(lists){
  for(var i = 0; i< lists.length; i++)
  console.log(`${i+1}- ${lists[i]}`)
}

/**
 * 
 * @param {string} x
 * @returns {void}
 */
// The add
function add(x){
  if(x.indexOf(' ',3) == 3)
  {
    splitAdd = x.substr(4,30).trim();
    var addArr = [splitAdd];
    lists.push(addArr)
  }
  else{
    console.log('error')
  }
  
}

/**
 * remove tasks from the list
 * @param {string} c 
 * @returns {void}
 */
function remove(c){
  if(c.indexOf(' ',6) == 6)
  {
    remNumber = parseInt(c.substr(7,1))
    if(remNumber > lists.length){
      console.log('does not exitst')
    }
    else{
      lists.splice(remNumber-1,1)
    }
  }
  else if(c == 'remove\n'){
    lists.pop()
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello 
 * @param {string} x
 * @returns {void}
 */
function hello(x){
  console.log(`${x.trim()}!`)
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
/**
 *  
 * presents the lists of help that can help you in use the command
 */

function help(){
  console.log('-hello	write any word like (hello) they will rewrite like(hello!).');
  console.log('-lists show the tasks.');
  console.log('-add you can add new tasks from your list');
  console.log('-remove you can remove the last task from the list');
  console.log('-remove x (x) you can choose which task you want to remove by write remove and the nubmer of task');
}

// The following line starts the application
startApp("Rida Fakherden");
