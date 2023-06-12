import { useState } from "react"
import { HashLink } from 'react-router-hash-link';
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai"
import hangin from './hangin.gif'
import horrible from './horrible.jpg'
import cat from './cat.jpg'

export default function Project1(){
    const [expand,toggleExpand] = useState(false);
    const globalArrays = `const int MAX_WORDS = 1000;
int word_count = 0;
string words[MAX_WORDS];
string definitions[MAX_WORDS];
string pos[MAX_WORDS];`
    const taskAreadWords = `/*
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
    const taskBIndex = `/*
    @param            :   The string with a query word
    @return           :   Integer index of the word in
                          \`words\` global-array. Returns
                          -1 if the word is not found
    @post             :   Find the index of given \`word\`
                          in the \`words\` array. Return -1
                          if word is not in the array
*/
int getIndex(string word);`
    const taskBDefinition = `/*
    @param            :   The string with a query word
    @return           :   Return the string definition of
                          the word from  \`definitions\`
                          global-array. Return "NOT_FOUND" if
                          word doesn't exist in the dictionary
    @post             :   Find the definition of the given \`word\`
                          Return "NOT_FOUND" otherwise
*/
string getDefinition(string word);`
    const taskBPos = `/*
    @param            :   The string with a query word
    @return           :   Return the string part-of-speech(pos) 
                          from the \`pos\` global-array. Return
                          "NOT_FOUND" if the word doesn't exist
                          in the dictionary.
    @post             :   Find the pos of the given \`word\`
                          Return "NOT_FOUND" otherwise
*/
string getPOS(string word);`
    const taskBPrefix = `/*
    @param            :   The string prefix of a word (the prefix
                          can be of any length)
    @return           :   Integer number of words found that starts
                          with the given \`prefix\`
    @post             :   Count the words that start with the given
                          \`prefix\`
*/
int countPrefix(string prefix);`
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
                        {/* <HashLink to="#taskC" className="mt-10 hover:opacity-75">Task C</HashLink>
                        <HashLink to="#taskD" className="mt-10 hover:opacity-75">Task D</HashLink> */}
                    </div>
                :
                    <div className="grow flex flex-col py-5 px-2 font-mono justify-center items-center text-center bg-black text-white">   
                        <HashLink to="#introduction" className="px-3 rounded-md border-white border-2 text-2xl hover:bg-gradient-to-b hover:from-red-100 hover:via-green-100 hover:to-blue-100 hover:text-black">i</HashLink>
                        <HashLink to="#taskA" className="mt-10 px-3 rounded-md border-white border-2 text-2xl hover:bg-gradient-to-b hover:from-red-100 hover:via-green-100 hover:to-blue-100 hover:text-black">A</HashLink>
                        <HashLink to="#taskB" className="mt-10 px-3 rounded-md border-white border-2 text-2xl hover:bg-gradient-to-b hover:from-red-100 hover:via-green-100 hover:to-blue-100 hover:text-black">B</HashLink>
                        {/* <HashLink to="/taskC" className="mt-10 px-3 rounded-md border-white border-2 text-2xl hover:bg-gradient-to-b hover:from-red-100 hover:via-green-100 hover:to-blue-100 hover:text-black">C</HashLink>
                        <HashLink to="/taskD" className="mt-10 px-3 rounded-md border-white border-2 text-2xl hover:bg-gradient-to-b hover:from-red-100 hover:via-green-100 hover:to-blue-100 hover:text-black">D</HashLink> */}
                    </div>
                }
            </div>
            <div className="overflow-y-scroll bg-slate-50 lg:snap-y xl:snap-mandatory">
                <div className="text-center bg-gradient-to-b from-red-100 via-green-100 to-blue-100 hover:bg-gradient-to-t hover:from-red-100 hover:via-green-100 hover:to-blue-100 text-black lg:snap-start">
                    <h1 className="font-semibold text-3xl p-5 font-mono">Project 1 - Hang in there!</h1>
                    <p className="px-5 pb-5 font-serif text-base tracking-wide">You must start working on the projects as soon as they are assigned to detect any problems and to address them with us well before the deadline so that we have time to get back to you before the deadline. There will be no extensions and no negotiation about project grades after the submission deadline with respect to the lateness policy.</p>
                    <hr className="drop-shadow-xl border-black"/>
                </div>

                <div id="introduction" className="grid grid-flow-row grid-cols-2 gap-5 justify-center h-screen lg:snap-start">
                    <h1 className="row-span-1 col-span-2 px-10 pt-5 font-mono text-3xl font-bold text-center">Introduction</h1>
                    <h1 className="row-span-1 col-span-2 px-10 font-serif font-semibold text-lg text-center italic">Welcome students! You've been working on the labs and homeworks so far. Its time to take it up a notch. Use everything you've learned so far and hang in there!</h1>
                    <img src={hangin} alt="sadab" className="col-span-1 row-span-1 m-5 brightness-125 rounded-md ring-2 ring-black drop-shadow-xl object-fill w-full overflow-hidden"></img>
                    <div className="col-span-1 row-span-1 lg:overflow-y-auto p-5 font-serif tracking-wider text-lg h-full">
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
                        <p className="text-center text-red-700 font-bold text-3xl py-14 animate-pulse">DON'T WAIT FOR THE LAST MINUTE!!!</p>
                    </div>
                </div>
                <hr className="mt-10"/>
                <div id="taskA" className="grid grid-flow-row grid-cols-2 gap-5 justify-center h-screen lg:snap-start">
                    <h1 className="row-span-1 col-span-2 px-10 pt-5 font-mono text-3xl font-bold text-center">Task A - Dictionary using Arrays</h1>
                    <img src={horrible} alt="krabs" className="col-span-1 row-span-1 m-5 brightness-125 rounded-md ring-2 ring-black drop-shadow-xl object-fill w-full overflow-hidden"></img>
                    <div className="col-span-1 row-span-1 lg:overflow-y-auto p-5 font-serif tracking-wider text-lg h-full">
                        A regular dictionary contains the words and the definitions. In addition to the words and the definitions, we will also store the part-of-speech (pos). The words, definitions and pos are going to be stored in Arrays. Copy these global-variables in your code outside <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">main()</p> function:
                        <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="rounded-md my-5 select-all">
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
                        Hint: <p className="inline text-gray-500 hover:text-white bg-gray-500">Which lab was this covered in again?</p>
                        <a className=" block italic text-blue-700 text-center" href="https://www.gradescope.com/courses/545354/assignments/2918836/" target="_blank">Only submit single `.cpp` file to gradescope.</a>
                    </div>
                </div>
                <hr className="mt-10"/>
                <div id="taskB" className="grid grid-flow-row grid-cols-2 gap-5 justify-center h-screen lg:snap-start">
                    <h1 className="row-span-1 col-span-2 px-10 pt-5 font-mono text-3xl font-bold text-center">Task B: Dictionary Operations</h1>
                    <img src={cat} alt="catto" className="col-span-1 row-span-1 m-5 brightness-125 rounded-md ring-2 ring-black drop-shadow-xl object-fill w-full overflow-hidden"></img>
                    <div className="col-span-1 row-span-1 lg:overflow-y-auto p-5 font-serif tracking-wider text-lg h-full">
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
                        Remember to test each function before moving on to implement the next one.
                        <a className=" block italic text-blue-700 text-center" href="https://www.gradescope.com/courses/545354/assignments/2918828/" target="_blank">Only submit single `.cpp` file to gradescope.</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
