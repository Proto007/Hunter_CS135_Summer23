import { useState } from "react"
import { HashLink } from 'react-router-hash-link';
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai"
import hangin from './hangin.gif'
import horrible from './horrible.jpg'
import cat from './cat.jpg'
import yeet from './yeet.jpg'
import game from './game.jpg'
import dictionary from './dictionary.txt'

export default function Project1(){
    const [expand,toggleExpand] = useState(false);
    const globalArrays = `const int MAX_WORDS = 1000;
int word_count = 0;
string words[MAX_WORDS];
string definitions[MAX_WORDS];
string pos[MAX_WORDS];`
    const taskAreadWords = `/**
@param            :   The string with the \`filename\`
@post             :   Reads the words, definitions and pos into the
                      global-arrays and set the value of \`word_count\`
                      to the number of words read
*/
void readWords(string filename);`
    const taskASampleText = `WORD POS : DEFINITION
Grumpy Adjective : bad-tempered and irritable
Professor Noun : a teacher of the highest rank in a college or university
Does Verb : perform (an action, often of unspecified nature)
Nothing Adverb : not at all`
    const taskAExample = `MAX_WORDS: 1000

word_count: 5

words: ["WORD", "Grumpy", "Professor", "Does", "Nothing"]

pos: ["POS", "Adjective", "Noun", "Verb", "Adverb"]

definitions: [
    "DEFINITION",
    "bad-tempered and irritable", 
    "a teacher of the highest rank in a college or university", 
    "perform (an action, often of unspecified nature)", 
    "not at all"
]`
    const taskBIndex = `/**
    @param            :   The string with a query word
    @return           :   Integer index of the word in
                          \`words\` global-array. Returns
                          -1 if the word is not found
    @post             :   Find the index of given \`word\`
                          in the \`words\` array. Return -1
                          if word is not in the array
*/
int getIndex(string word);`
    const taskBDefinition = `/**
    @param            :   The string with a query word
    @return           :   Return the string definition of
                          the word from  \`definitions\`
                          global-array. Return "NOT_FOUND" if
                          word doesn't exist in the dictionary
    @post             :   Find the definition of the given \`word\`
                          Return "NOT_FOUND" otherwise
*/
string getDefinition(string word);`
    const taskBPos = `/**
    @param            :   The string with a query word
    @return           :   Return the string part-of-speech(pos) 
                          from the \`pos\` global-array. Return
                          "NOT_FOUND" if the word doesn't exist
                          in the dictionary.
    @post             :   Find the pos of the given \`word\`
                          Return "NOT_FOUND" otherwise
*/
string getPOS(string word);`
    const taskBPrefix = `/**
    @param            :   The string prefix of a word (the prefix
                          can be of any length)
    @return           :   Integer number of words found that starts
                          with the given \`prefix\`
    @post             :   Count the words that start with the given
                          \`prefix\`
*/
int countPrefix(string prefix);`
    const taskCAdd = `/**
    @param new_word         :   The string with a new word
    @param new_definition   :   The string with the definition of the
                                \`new_word\`
    @param new_pos          :   The string with the pos of the \`new_word\`
    @return                 :   return \`true\` if the word is
                                successfully added to the dictionary
                                return \`false\` if failed (word already
                                exists or dictionary is full)
    @post                   :   Add the given \`new_word\`, \`new_definition\`, 
                                \`new_pos\` to the end of the respective
                                global-arrays.
                                The word should not be added to the
                                global-arrays if it already exists 
                                or if the array reached maximum 
                                capacity(\`MAX_WORDS\`).
                                Update \`word_count\` if the word is
                                successfully added
*/
bool addWord(string new_word, string new_definition, string new_pos);`
    const taskCEdit = `/**
    @param word             :   The string with the word that is to
                                be edited
    @param new_definition   :   The string with the new definition of 
                                the \`word\`
    @param new_pos          :   The string with the new pos of the \`word\`
    @return                 :   return \`true\` if the word is successfully
                                edited, return \`false\` if the \`word\`
                                doesn't exist in the dictionary
    @post                   :   Replace the given \`word\`'s  definition
                                and pos with the given \`new_definition\` and
                                \`new_pos\` (by modifying global-arrays
                                \`definitions\` and \`pos\`).
                                The modification will fail if the word
                                doesn't exist in the dictionary
*/
bool editWord(string word, string new_definition, string new_pos);`
    const taskCRemove = `/**
    @param            :   The string with the word that is to
                          be removed
    @return           :   return \`true\` if the word is successfully
                          removed from the dictionary return \`false\`
                          if the word doesn't exist in the dictionary
    @post             :   Remove the given \`word\`, \`word\`'s
                          definition and \`word\`'s pos from the
                          respective global-arrays if the word
                          exists.  
                          Update \`word_count\` if the word is
                          successfully removed
*/
bool removeWord(string word);`
    const taskDGameLoop = `/**     
    @post   :       The game-loop for Hangman   
*/
void gameLoop() {
    int difficulty, tries;
    string word, current;
    char letter;
    while (true) {
        cout << "Welcome to Hangman!" << endl;
        cout <<  "0. easy\\n1. normal\\n2. hard\\n3. exit\\nChoose a difficulty: ";
        cin >> difficulty;
        while (difficulty < 0 || difficulty > 3) {
            cout <<  "Enough horseplay >_< !\\n0. easy\\n1. normal\\n2. hard\\n3. exit\\nChoose a difficulty: ";
            cin >> difficulty;
        }
        if (difficulty == 3) {
            cout << "If you're hangry, go grab a bite! See what I did there?" << endl;
            break;
        }
        word = getRandomWord();
        current = maskWord(word);
        tries = getTries(difficulty);
        while (tries != 0) {
            cout << "Life: ";
            printAttempts(tries, difficulty);
            cout << endl << "Word: "<< current << endl;
            cout << "Enter a letter: ";
            cin >> letter;
            
            if (!revealLetter(word, letter, current)) {
                tries--;
            }
            if (current == word) {
                break;
            }
            if (tries == 2) {
                cout << "The part of speech of the word is "<< getPOS(word) << endl;
            }
            if (tries == 1) {
                cout << "Definition of the word: " << getDefinition(word) << endl;
            }
        }
        if (tries == 0) {
            cout << "The word is \\"" << word << "\\". Better luck next time! You're getting the ..ahem.. hang of it." << endl;
        }
        else {
            cout << "Congrats!!!" << endl;
        }
    }
}`
    const taskDRandom = `// MAKE SURE YOU INCLUDE THIS LIBRARY!
#include <stdlib.h>

string getRandomWord() {
    srand((unsigned) time(NULL));
    int index = rand() % g_word_count;
    return g_words[index];
}`
    const taskDMask = `/**
    @param            :   The string with a word from the dictionary 
    @return           :   string of "_" based on the number of
                          characters in the given \`word\` 
    @post             :   Return string of "_" based on the length
                          of the given \`word\`.
                          For example, if the word is "game", then
                          the function would return "____". In other
                          words, a string of four "_"s.
*/
string maskWord(string word);`
    const taskDTries = `/**
    @param            :   The integer for the difficulty of the game
                          (0 for easy, 1 for normal, and 2 for hard) 
    @return           :   The number of tries given the \`difficulty\`
                          (9 for easy, 7 for normal, and 5 for hard)
    @post             :   Return the number of tries based on given
                          difficulty (0-easy: 9 tries, 1-normal: 7
                          tries, 2-Hard: 5 tries) 
*/
int getTries(int difficulty);`
    const taskDAttempts = `/*
    @param tries      :   The integer for remaining tries 
    @param difficulty :   The integer for the difficulty of the game 
                          (0 for easy, 1 for normal, and 2 for hard) 
    @post             :   prints the number of lives left and number
                          of lives used using "O" and "X". DO NOT
                          PRINT AN ENDLINE

    For example : calling \`printAttemps(2, 1)\` would print "OOXXXXX". 
                  Based on given \`difficulty\`, we know the total tries
                  is 7 (from \`getTries(1)\`). Also, the player has 2
                  \`tries\` remaining based on the given parameter.
                  Therefore, the function prints two "O"s to indicate
                  the remaining tries and 5 "X"s to indicate the tries
                  that have been used (7-2=5)          
*/
void printAttempts(int tries, int difficulty);`
    const taskDReveal = `/*
    @param word       :   The string word from the dictionary
    @param letter     :   The char letter that that will be revealed
    @param(&) current :   The string representing a masked word
    @return           :   \`true\` if the \`letter\` exists in \`word\`,
                          otherwise return \`false\`  
    @post             :   If the given \`letter\` exists in \`word\`
                          reveal the \`letter\` in \`current\` masked word
                          and return \`true\`. Otherwise, return \`false\`

    For example : Let's say we have the following main function:
                  int main(){
                      string w = "g___";
                      cout << revealLetter("good", 'o', "g___") << endl;
                      cout <<  w << endl;
                  }
                  The first \`cout\` will print 1 because the letter 'o'
                  exists in "good". Thus, the function returned \`true\`.
                  The second \`cout\` will print "goo_". The variable \`w\`
                  has been modified by the function to reveal all the
                  \`o\`s in "good" resulting in "goo_"           
*/
bool revealLetter(string word, char letter, string &current)`
    return(
        <div className="flex flex-row h-screen">
            <div className="flex flex-col py-10 px-2 bg-black text-white items-center text-center">
                <button className="hover:opacity-75" onClick={() => toggleExpand(!expand)}>
                    { expand ? <AiOutlineDoubleLeft size={35}/> : <AiOutlineDoubleRight size={35}/> }
                </button>
                {
                expand ?  
                    <div className="grow flex flex-col py-5 px-2 font-semibold justify-center items-center text-center bg-black text-white lg:text-2xl overline">   
                        <HashLink to="#introduction" className="hover:opacity-75">Introduction</HashLink>
                        <HashLink to="#taskA" className="mt-10 hover:opacity-75">Task A</HashLink>
                        <HashLink to="#taskB" className="mt-10 hover:opacity-75">Task B</HashLink>
                        <HashLink to="#taskC" className="mt-10 hover:opacity-75">Task C</HashLink>
                        <HashLink to="#taskD" className="mt-10 hover:opacity-75">Task D</HashLink>
                    </div>
                :
                    <div className="grow flex flex-col py-5 px-2 font-mono justify-center items-center text-center bg-black text-white">   
                        <HashLink to="#introduction" className="px-3 rounded-md border-white border-2 text-2xl hover:bg-gradient-to-b hover:from-red-100 hover:via-green-100 hover:to-blue-100 hover:text-black">i</HashLink>
                        <HashLink to="#taskA" className="mt-10 px-3 rounded-md border-white border-2 text-2xl hover:bg-gradient-to-b hover:from-red-100 hover:via-green-100 hover:to-blue-100 hover:text-black">A</HashLink>
                        <HashLink to="#taskB" className="mt-10 px-3 rounded-md border-white border-2 text-2xl hover:bg-gradient-to-b hover:from-red-100 hover:via-green-100 hover:to-blue-100 hover:text-black">B</HashLink>
                        <HashLink to="#taskC" className="mt-10 px-3 rounded-md border-white border-2 text-2xl hover:bg-gradient-to-b hover:from-red-100 hover:via-green-100 hover:to-blue-100 hover:text-black">C</HashLink>
                        <HashLink to="#taskD" className="mt-10 px-3 rounded-md border-white border-2 text-2xl hover:bg-gradient-to-b hover:from-red-100 hover:via-green-100 hover:to-blue-100 hover:text-black">D</HashLink>
                    </div>
                }
            </div>
            <div className="overflow-y-scroll bg-slate-50 snap-y snap-mandatory">
                <div className="text-center bg-gradient-to-b from-red-100 via-green-100 to-blue-100 hover:bg-gradient-to-t hover:from-red-100 hover:via-green-100 hover:to-blue-100 text-black lg:snap-start">
                    <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl p-5 font-mono">Project 1 - Hang in there!</h1>
                    <p className="px-5 pb-5 font-serif text-sm lg:text-base tracking-wide">You must start working on the projects as soon as they are assigned to detect any problems and to address them with us well before the deadline so that we have time to get back to you before the deadline. There will be no extensions and no negotiation about project grades after the submission deadline with respect to the lateness policy.</p>
                    <hr className="drop-shadow-xl border-black"/>
                </div>

                <div id="introduction" className="grid grid-flow-row grid-cols-2 gap-x-5 justify-center h-screen lg:snap-start">
                    <h1 className="row-span-1 col-span-2 px-10 pt-5 font-mono text-xl md:text-2xl lg:text-3xl font-bold text-center">Introduction</h1>
                    <h1 className="row-span-1 col-span-2 px-10 font-serif font-semibold text-md md:text-lg lg:text-xl text-center italic">Welcome students! You've been working on the labs and homeworks so far. Its time to take it up a notch. Use everything you've learned so far and hang in there!</h1>
                    <img src={hangin} alt="sadab" className="col-span-2 xl:col-span-1 row-span-1 hidden xl:block m-5 brightness-125 rounded-md ring-2 ring-black drop-shadow-xl object-fill w-full overflow-hidden"></img>
                    <div className="col-span-2 xl:col-span-1 row-span-1 overflow-y-auto p-5 font-serif tracking-wider sm-text-sm md:text-md lg:text-lg h-full">
                        Using what we've learned so far, we will create a dictionary. Later, we will implement Hangman using the dictionary.Hangman is a guessing game for two or more players. One player thinks of a word, phrase or sentence and the other(s) tries to guess it by suggesting letters within a certain number of guesses. Originally a Paper-and-pencil game, there are <a className="text-blue-700 font-semibold" href="https://hangmanwordgame.com/" target="_blank">now electronic versions</a>.<br/><br/> 
                        Things you need to know for this project:<br/><br/>
                        <div className="grid lg:grid-cols-4 divide-x w-full mb-5 pb-5">
                            <a className="text-center flex justify-center items-center hover:text-white text-md rounded-l-md bg-gradient-to-b from-red-100 via-green-100 to-blue-100 text-black text-base ring-black ring-1 hover:bg-gradient-to-b hover:from-black hover:to-black" target="_blank" href="https://www.geeksforgeeks.org/c-arrays/">
                                Arrays
                            </a>
                            <a className="text-center flex justify-center items-center hover:text-white text-md bg-gradient-to-b from-red-100 via-green-100 to-blue-100 text-black text-base ring-black ring-1 hover:bg-gradient-to-b hover:from-black hover:to-black" target="_blank" href="https://www.geeksforgeeks.org/functions-in-cpp/">
                                Functions
                            </a>
                            <a className="text-center flex justify-center items-center hover:text-white text-md bg-gradient-to-b from-red-100 via-green-100 to-blue-100 text-black text-base ring-black ring-1 hover:bg-gradient-to-b hover:from-black hover:to-black" target="_blank" href="https://www.geeksforgeeks.org/scope-of-variables-in-c/">
                                Global-Variables
                            </a>
                            <a className="text-center flex justify-center items-center hover:text-white text-md rounded-r-md bg-gradient-to-b from-red-100 via-green-100 to-blue-100 text-black text-base ring-black ring-1 hover:bg-gradient-to-b hover:from-black hover:to-black" target="_blank" href="https://www.geeksforgeeks.org/substring-in-cpp/">
                                String-Manipulation
                            </a>
                        </div>
                        Work through the tasks sequentially (implement and test). Only move on to a new task when you are positive that the previous one has been completed correctly. Remember that the function <p className="inline text-red-700 font-bold">prototypes and global-variables must be exactly as specified in this project specification</p>. Lastly, <p className="inline text-red-700 font-bold">do not use EOF(End of File), vector, or any library that we haven't learned yet in class</p>. If you don't understand this project specification and its requirements, ask for clarification before you proceed. Test your code locally before submitting on gradescope.
                        <p className="text-center text-red-700 font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl py-14 animate-pulse">DON'T WAIT FOR THE LAST MINUTE!!!</p>
                    </div>
                </div>
                <hr className="mt-10"/>
                <div id="taskA" className="grid grid-flow-row grid-cols-2 gap-5 justify-center h-screen lg:snap-start">
                    <h1 className="row-span-1 col-span-2 px-10 pt-5 font-mono text-xl md:text-2xl lg:text-3xl font-bold text-center">Task A - Dictionary using Arrays</h1>
                    <img src={horrible} alt="krabs" className="col-span-2 xl:col-span-1 row-span-1 hidden xl:block m-5 brightness-125 rounded-md ring-2 ring-black drop-shadow-xl object-fill w-full overflow-hidden"></img>
                    <div className="col-span-2 xl:col-span-1 row-span-1 overflow-y-auto p-5 font-serif tracking-wider sm-text-sm md:text-md lg:text-lg h-full">
                        A regular dictionary contains the words and the definitions. In addition to the words and the definitions, we will also store the part-of-speech (pos). The words, definitions and pos are going to be stored in Arrays. Copy these global-variables in your code outside <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">main()</p> function:
                        <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="rounded-md my-5 select-all" >
                            {globalArrays}
                        </SyntaxHighlighter>
                        Create a C++ file and add the following function:
                        <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="rounded-md my-5 select-all">
                            {taskAreadWords}
                        </SyntaxHighlighter>
                        Here's an example text file:
                        <SyntaxHighlighter language="plaintext" style={tomorrowNightBlue} className="rounded-md my-5 select-all">
                            {taskASampleText}
                        </SyntaxHighlighter>
                        Example: <br/><br/>
                        Calling <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">readWords()</p> on the above text file will modify the global variables like this:
                        <SyntaxHighlighter language="plaintext" style={tomorrowNightBlue} className="rounded-md my-5 select-all">
                            {taskAExample}
                        </SyntaxHighlighter>
                        Hint: <p className="inline text-gray-500 hover:text-white bg-gray-500">Which lab was this covered in again?</p><br/><br/>
                        <a className=" block italic text-blue-700 text-center" href="https://www.gradescope.com/courses/545354/assignments/2918836/" target="_blank">Only submit single `.cpp` file to gradescope</a>
                    </div>
                </div>
                <hr className="mt-10"/>
                <div id="taskB" className="grid grid-flow-row grid-cols-2 gap-5 justify-center h-screen lg:snap-start">
                    <h1 className="row-span-1 col-span-2 px-10 pt-5 font-mono text-xl md:text-2xl lg:text-3xl font-bold text-center">Task B: Dictionary Operations</h1>
                    <img src={cat} alt="catto" className="col-span-2 xl:col-span-1 hidden xl:block row-span-1 m-5 brightness-125 rounded-md ring-2 ring-black drop-shadow-xl object-fill w-full overflow-hidden"></img>
                    <div className="col-span-2 xl:col-span-1 row-span-1 overflow-y-auto p-5 font-serif tracking-wider sm-text-sm md:text-md lg:text-lg h-full">
                        Now that we have the words stored, it is time to provide functions that allow users to use our dictionary. Add and implement the following functions:
                        <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="rounded-md my-5 select-all">
                            {taskBIndex}
                        </SyntaxHighlighter>
                        <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="rounded-md my-5 select-all">
                            {taskBDefinition}
                        </SyntaxHighlighter>
                        <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="rounded-md my-5 select-all">
                            {taskBPos}
                        </SyntaxHighlighter>
                        <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="rounded-md my-5 select-all">
                            {taskBPrefix}
                        </SyntaxHighlighter>
                        Remember to test each function before moving on to implement the next one.<br/><br/>
                        <a className=" block italic text-blue-700 text-center" href="https://www.gradescope.com/courses/545354/assignments/2918828/" target="_blank">Only submit single `.cpp` file to gradescope including all functions from previous tasks</a>
                    </div>
                </div>
                <hr className="mt-10"/>
                <div id="taskC" className="grid grid-flow-row grid-cols-2 gap-5 justify-center h-screen lg:snap-start">
                    <h1 className="row-span-1 col-span-2 px-10 pt-5 font-mono text-xl md:text-2xl lg:text-3xl font-bold text-center">Task C: Dictionary Admin Operations</h1>
                    <img src={yeet} alt="catto" className="col-span-2 xl:col-span-1 row-span-1 hidden xl:block m-5 brightness-125 rounded-md ring-2 ring-black drop-shadow-xl object-fill w-full overflow-hidden xl:h-4/6"></img>
                    <div className="col-span-2 xl:col-span-1 row-span-1 overflow-y-auto p-5 font-serif tracking-wider sm-text-sm md:text-md lg:text-lg h-full">
                    Languages evolve constantly. Hundreds of new English words are added to the English dictionary each year. Definitions of words change. Thus, we should be able to modify, add and remove words in our dictionary. Besides, don't you want to use your own words for hangman? Add and implement the following functions to your <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">.cpp</p> file:
                        <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="rounded-md my-5 select-all">
                            {taskCAdd}
                        </SyntaxHighlighter>
                        <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="rounded-md my-5 select-all">
                            {taskCEdit}
                        </SyntaxHighlighter>
                        <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="rounded-md my-5 select-all">
                            {taskCRemove}
                        </SyntaxHighlighter>
                        Hint: <p className="inline text-gray-500 hover:text-white bg-gray-500">For the <p className="inline font-mono">removeWord()</p> function, the order of the global-arrays doesn't matter. An empty string array is full of empty-strings("").</p><br/><br/>

                        You can use the functions you wrote previously within the implementation of Task C functions. The <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">getIndex()</p> function is extremely useful!<br/><br/>
                        <a className=" block italic text-blue-700 text-center" href="https://www.gradescope.com/courses/545354/assignments/2918837/" target="_blank">Only submit single `.cpp` file to gradescope including all functions from previous tasks</a>
                    </div>
                </div>
                <hr className="mt-10"/>
                <div id="taskD" className="grid grid-flow-row grid-cols-2 gap-5 justify-center h-screen lg:snap-start">
                    <h1 className="row-span-1 col-span-2 px-10 pt-5 font-mono text-xl md:text-2xl lg:text-3xl font-bold text-center">Task D: Hangman</h1>
                    <img src={game} alt="catto" className="col-span-2 xl:col-span-1 row-span-1 hidden xl:block m-5 brightness-125 rounded-md ring-2 ring-black drop-shadow-xl object-fill w-full overflow-hidden xl:h-4/6"></img>
                    <div className="col-span-2 xl:col-span-1 row-span-1 overflow-y-scroll p-5 font-serif tracking-wider sm-text-sm md:text-md lg:text-lg h-full w-full">
                        Now we are ready to make Hangman! Oh and <a className="text-blue-700" href={dictionary} download="dictionary.txt">here is a dictionary you can use</a>.<br/><br/>
                        The game-loop is a sequence of processes that run continuously as long as the game is running. The three main processes that occur in the game-loop are input, update, and render. Lucky for you, we have provided the game-loop. Make sure to include the following function in your program:
                        <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="rounded-md my-5 select-all flex-none overflow-x-scroll">
                            {taskDGameLoop}
                        </SyntaxHighlighter>
                        The game-loop uses some helper functions that are not implemented yet. You will implement most of them. One of the helper function is <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">getRandomWord()</p>. In the game-loop, we are going to choose a random word from the dictionary. Use this function to get a random word from your dictionary:
                        <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="rounded-md my-5 select-all">
                            {taskDRandom}
                        </SyntaxHighlighter>
                        Now that we have a random word from our dictionary, let's create some other functions that will be used in the game-loop. Add and implement the following functions to your <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">.cpp</p> file:
                        <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="rounded-md my-5 select-all">
                            {taskDMask}
                        </SyntaxHighlighter>
                        <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="rounded-md my-5 select-all">
                            {taskDTries}
                        </SyntaxHighlighter>
                        <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="rounded-md my-5 select-all">
                            {taskDAttempts}
                        </SyntaxHighlighter>
                        <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="rounded-md my-5 select-all">
                            {taskDReveal}
                        </SyntaxHighlighter>
                        Implement and test each function before moving on to the next. Once you have all the functions implemented correctly, try out your game by running <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">gameLoop()</p> from <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">main()</p> function.<br/><br/>

                        <p className=" font-semibold">If you haven't done Task A and B, don't include the gameLoop() function in your submission to gradescope. Your program will fail. Ignore this message if you've completed Task A and B already.</p><br/>
                        <a className=" block italic text-blue-700 text-center" href="https://www.gradescope.com/courses/545354/assignments/2918852/" target="_blank">Only submit single `.cpp` file to gradescope including all functions from previous tasks</a>
                    </div>
                </div>
                <hr className="mt-10"/>
                <div id="taskD" className="grid grid-flow-row gap-5 justify-center lg:snap-start">
                    <h1 className="row-span-1 px-10 pt-5 font-mono text-xl md:text-2xl lg:text-3xl font-bold text-center">Endnote</h1>
                    <div className="col-span-1 row-span-1 py-2 font-mono text-xs md:text-sm lg-text-md h-full px-5">
                        Every project starts somewhere. While the hangman game is functional, it can be improved significantly. For example: we can prevent users from entering letters that have been entered already, we can add a GUI to make the experience more user-friendly and the list goes on. You can add your own rules to the game to make something unique that you can put in your Portfolio to impress your friends and potential recruiters.
                    </div>
                    <div className="col-span-1 row-span-1 overflow-y-scroll p-2 font-serif tracking-wider text-lg h-full text-center italic text-black/50">
                        Credits: Sadab Hafiz, Ryan Vaz, Yoomin Song
                    </div>
                </div>
            </div>
        </div>
    )
}
