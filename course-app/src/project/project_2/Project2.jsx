import { useState } from "react"
import { HashLink } from 'react-router-hash-link';
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai"
import catchemall from './gotta-catch-em-all.gif'
import csdep from './csdep.png'
import sadab from './sadsmile.gif'
import testmain from './main_TaskA.txt'
import profedex from './profedex.png'

export default function Project2(){
    const [expand,toggleExpand] = useState(false);
    const skillData = `- The name of the skill
- The description of the skill
- The total number of times the skill can be used 
- An integer that represents the specialty of the skill (0, 1 or 2)`
    const skillDefConstructor = `/**
    @post       :   Initializes the name and description of the skill as
                    "Undefined". Initializes the total uses of the skill
                    and the skill specialty as -1.
*/  
Skill();`
    const skillParamConstructor = `/**
    @post       :   Parameterized constructor sets the corresponding
                    data members equal to the respective parameters.
*/
Skill(std::string name, std::string description, int specialty, int uses);`
    const skillNameGetter = `/**
    @return     :   name of the skill.
*/
std::string getName();`
    const skillDescGetter = `/**
    @return     :   description of the skill.
*/
std::string getDescription();`
    const skillUsesGetter = `/**
    @return     :   total uses of the skill.
*/
int getTotalUses();`
    const skillSpecGetter = `/**
    @return     :   specialty of the skill.
*/
int getSpecialty();`
    const skillNameSetter = `/**
    @post       :   set the name of the skill equal to the given parameter.
*/
bool setName(std::string name);`
    const skillDescSetter = `/**
    @return     :   return \`true\` if the given \`description\` is atleast 25
                    characters long, otherwise return \`false\`.
    @post       :   set the description of the skill equal to the given
                    \`description\` parameter if it is long enough.
*/
bool setDescription(std::string description);`
    const skillUsesSetter = `/**
    @return     :   return \`false\` if the given \`uses\` is greater than 50,
                    otherwise return \`true\`.
    @post       :   set the total uses of the skill equal to the given
                    parameter if the parameter is less than or equal to 50.
*/
bool setTotalUses(int uses);`
    const skillSpecSetter = `/**
    @return     :   Return \`true\` if the given parameter is 0, 1 or 2.
                    Otherwise, return \`false\`.
    @post       :   set the specialty of the skill equal to the given
                    parameter only if the given parameter is valid (0,1,2).
*/
bool setSpecialty(int specialty);`
    const profemonData = `- The name of the profémon
- The level of the profémon
- The required experience to level up
- The current experience
- The maximum health level
- The specialty of the profémon
- A \`Skill\` array of size 3 containing skills learned by the profémon`
    const profemonDefConstructor = `/**
    @post       :   Initializes the name of the profémon as "Undefined".
*/  
Profemon();`
    const profemonParamConstructor = `/**
    @post       :   Initializes the name, max health and specialty as the
                    corresponding parameters. Set the required experience
                    equal to 50. Initializes the current experience and 
                    level as 0.
*/
Profemon(std::string name, double max_health, Specialty specialty);`
    const profemonNameGetter = `/**
    @return     :   name of the profémon.
*/
std::string getName();`
    const profemonSpecGetter = `/**
    @return     :   specialty of the profémon.
*/
Specialty getSpecialty();`
    const profemonLevelGetter = `/**
    @return     :   level of the profémon.
*/
int getLevel();`
    const profemonHealthGetter = `/**
    @return     :   maximum health of the profémon.
*/
double getMaxHealth();`
    const profemonSkillGetter = `/**
    @param      :   the skill slot or index.
    @return     :   Skill object stored at \`slot\` index of learned skills
                    data-member array
*/
Skill getSkill(int slot);`
    const profemonNameSetter = `/**
    @return     :   return \`true\` if the parameter is alphabetic and starts
                    with an upper-case alphabet.
    @post       :   set the name of the skill equal to the given parameter
                    if the parameter starts with an upper-case alphabet
                    and all the characters are alphabetic.
*/
bool setName(std::string name);`
    const profemonLevelUp = `/**
    @param      :   experience points earned by the profémon.
    @post       :   Increase the profémon's level based on the given \`exp\`.
                    The profémon will level up if it reaches the required
                    experience. Depending on the profémon's specialty,
                    the required experience goes up by a certain amount 
                    everytime the profémon levels up. \`ML\` required
                    experience goes up by 10, \`SOFTWARE\` goes up by 15,
                    and \`HARDWARE\` goes up by 20. Make sure to update the
                    required, current experience and level private data
                    members accordingly. The given \`exp\` can result in
                    the profémon leveling up multiple times.
  
  For example   :   starting at lvl 0, calling \`levelUp(115)\` on different
                    types of profémon would result in the following:

                    ML:
                      - new level: 2
                      - current exp: 5
                      - required exp: 70

                    SOFTWARE:
                      - new level: 2
                      - current exp: 0
                      - required exp: 80

                    HARDWARE:
                      - new level: 1
                      - current exp: 65
                      - required exp: 70

                    As stated above, each specialty has a different speed of
                    leveling up
*/
void levelUp(int exp);`
    const profemonLearnSkill = `/**
    @param      :   the skill slot or index.
    @param      :   the new skill to be learned.
    @return     :   return \`true\` if the skill has been successfully learned.
                    Return \`false\` if \`slot\` parameters is not within the
                    valid range(0,1,2) or the specialty of the \`skill\` does
                    not match the specialty of the profémon. 
    @post       :   if the given slot is valid(0,1,2) and the skill
                    specialty matched with the profémon, add the \`skill\`
                    to the \`slot\` index of the learned skills array                
*/
bool learnSkill(int slot, Skill skill);`
    const profemonPrint = `/**
    @param      :   bool indicating whether or not the profémon's skills
                    should be printed
    @post       :   Prints the profémon's information in a specific format.
                    Additionally, lists the profémon's skills if the given 
                    \`print_skills\` parameter is true. Only print the skills
                    that are not "Undefined"
Format:
(ProfemonName) ((Specialty)) | LVL (Level) | EXP (CurrentExp)/(RequiredExp) | HP (MaxHP)
    (SkillNameSlot0) ((Uses)) : (description of skill in slot 0)
    (SkillNameSlot1) ((Uses)) : (description of skill in slot 1)
    (SkillNameSlot2) ((Uses)) : (description of skill in slot 2)

For example:
Maryash (SOFTWARE) | LVL 2 | EXP 30/80 | HP 13500
    OOP (30) : a programming paradigm based on the concept of objects
    Vector (30) : a c++ dynamic array library
    Pointer (10) : a pointer stores a memory address

Note: There are four spaces before the each line of skills. The last line
      prints an endline.
*/
void printProfemon(bool print_skills);`
    const trainerData = `- A vector of profémons which represents a profedéx
- A profémon array of size 4 which represents the trainer's current team
- A pointer to a profémon which is currently selected from the team`
    const trainerDefConstructor = `/**
    @post       :   Initializes the pointer to the currently selected
                    profémon as \`nullptr\`.
*/
Trainer();`
    const trainerParamConstructor = `/**
    @param      :   a vector of profémons.
    @post       :   Adds the profémons from given parameter vector to the
                    team and the profédex. If the team is full, add the
                    profémons to the profedéx. Maintain the order of the 
                    given \`profemons\` vector. Assume that the parameter
                    vector has atleast one item. Select the profémon at 0
                    index of the team array to accompany the trainer.
*/
Trainer(std::vector<Profemon> profemons);`
    const trainerContains = `/**
    @param      :   the name of a profémon.
    @return     :   \`true\` if profémon with given name is in the team or
                    profedex, otherwise \`false\`   
    @post       :   return \`true\` if the profémon with the name same as the
                    given parameter is found either in current team, or in
                    the profédex. Return \`false\` if the profémon is
                    not found.
*/
bool contains(std::string name);`
    const trainerAdd = `/**
    @param      :   a profémon that is to be added.
    @return     :   boolean indicating successful add operation.
    @post       :   Add the given parameter profémon to the team or the
                    profedex. Only add the profemon to profédex if the
                    current team is full. If the profémon is being added
                    to the team, add it to the smallest index possible.
                    The profémon can't be added if another profémon with the
                    same name already exists in the team or the profédex.
*/
bool addProfemon(Profemon profemon);`
    const trainerRem = `/**
    @param      :   the name of the profémon that is to be removed.
    @return     :   boolean indicating successful remove operation.
    @post       :   remove the profémon with the given name from the current
                    team or the profédex. If the profémon is removed from
                    the profédex, make sure the order of the remaining
                    profémons is maintained. If the profémon is on the team,
                    it should be swapped with an empty profémon object. The
                    profémon cannot be removed if no profémon with the given 
                    name exists in the team or the profédex.

    Hint        :   What is the default value of the profémons in an empty
                    array of \`Profemon\` objects?
*/
bool removeProfemon(std::string name);`
    const trainerTeamSetter = `/**
    @param      :   integer representing a slot in the team (0,1,2 or 3).
    @param      :   name of the profémon that is to be added to the team.
    @post       :   assuming that a profémon with the given \`name\` exists
                    in the profédex and given \`slot\` is valid (0,1,2,3), add
                    the profémon to the team at the given \`slot\`. If the slot
                    already contains a profémon, swap the profémon with the
                    profémon that is being added to the team. If the \`slot\`
                    doesn't contain a profémon, move the profémon from the
                    profédex to the \`slot\` index.

For example :
    Let's suppose,
        Team: ["Mark", "Undefined", "Ko", "Undefined"]
        Profédex: ["Sadab", "Yoomin", "Zilola", "Ryan"]

    If we call \`setTeamMember(1,"Yoomin")\`, the team and profédex becomes:
        Team: ["Mark", "Yoomin", "Ko","Undefined"]
        Profédex: ["Sadab", "Zilola", "Ryan"]
    The profémon is moved to the team's empty slot (Undefined means empty).

    However, if we call 'setTeamMember(0,"Zilola")':
        Team: ["Zilola", "Undefined", "Ko", "Undefined"]
        Profédex: ["Sadab", "Yoomin", "Mark", "Ryan"]
    The profémon is swapped with the profémon in slot 0.
*/
void setTeamMember(int slot, std::string name);`
    const trainerChoose = `/**
    @param      :   integer representing a slot in the team (0,1,2 or 3).
    @return     :   \`true\` if the profémon at given slot is successfully
                    chosen. Otherwise, return \`false\`.
    @post       :   choose a profemon to accompany the Trainer from the team
                    (refers to the pointer \`Profemon\` data-member). The
                    profémon cannot be chosen if the given \`slot\`
                    doesn't contain a profémon. Assume that the given \`slot\`
                    is valid(0,1,2,3).

    Hint        :   What is the name of the objects in an empty profémon
                    array?
*/
bool chooseProfemon(int slot);`
    const trainerCurrGetter = `/**
    @return     :   profémon that is currently accompanying the trainer.
*/
Profemon getCurrent();`
    const trainerProfedexGetter = `/**
    @return     :   vector data-member representing the profedex.
*/
vector<Profemon> getProfedex();`
    const trainerProfedexPrint = `/**
    @post       :   prints profémons in the profédex in a specific format.

Format :
(Profemon1Name) ((Specialty)) | LVL (Level) | EXP (CurrentExp)/(RequiredExp) | HP (MaxHP)
(empty line)
(Profemon2Name) ((Specialty)) | LVL (Level) | EXP (CurrentExp)/(RequiredExp) | HP (MaxHP)
(empty line)
. . . PRINT ALL THE PROFEMONS IN THE PROFEDEX . . .
(LastProfemonName) ((Specialty)) | LVL (Level) | EXP (CurrentExp)/(RequiredExp) | HP (MaxHP)
(empty line)

For example:
Maryash (SOFTWARE) | LVL 2 | EXP 30/80 | HP 13500

Saad (HARDWARE) | LVL 3 | EXP 20/110 | HP 15000

Raja (ML) | LVL 1 | EXP 10/60 | HP 35000


Hint : The format looks familiar from Task A print doesn't it?
*/
void printProfedex();`
    const trainerTeamPrint = `/*
    @post       :   prints profémons in the team in a specific format.
                    Do not print "Undefined" profémons.

Format :
(Profemon1Name) ((Specialty)) | LVL (Level) | EXP (CurrentExp)/(RequiredExp) | HP (MaxHP)
    (SkillNameSlot0) ((Uses)) : (description of skill in slot 0)
    (SkillNameSlot1) ((Uses)) : (description of skill in slot 1)
    (SkillNameSlot2) ((Uses)) : (description of skill in slot 2)
(empty line)
(Profemon2Name) ((Specialty)) | LVL (Level) | EXP (CurrentExp)/(RequiredExp) | HP (MaxHP)
    (SkillNameSlot0) ((Uses)) : (description of skill in slot 0)
    (SkillNameSlot1) ((Uses)) : (description of skill in slot 1)
    (SkillNameSlot2) ((Uses)) : (description of skill in slot 2)
(empty line)
(Profemon3Name) ((Specialty)) | LVL (Level) | EXP (CurrentExp)/(RequiredExp) | HP (MaxHP)
    (SkillNameSlot0) ((Uses)) : (description of skill in slot 0)
    (SkillNameSlot1) ((Uses)) : (description of skill in slot 1)
    (SkillNameSlot2) ((Uses)) : (description of skill in slot 2)
(empty line)
(Profemon4Name) ((Specialty)) | LVL (Level) | EXP (CurrentExp)/(RequiredExp) | HP (MaxHP)
    (SkillNameSlot0) ((Uses)) : (description of skill in slot 0)
    (SkillNameSlot1) ((Uses)) : (description of skill in slot 1)
    (SkillNameSlot2) ((Uses)) : (description of skill in slot 2)
(empty line)
*/
void printTeam();`
    const departmentHeader = `// This is an introductory comment
#ifndef DEPARTMENT
#define DEPARTMENT

#include "trainer.hpp"

class MLDepartment: public Trainer{
    public:
        MLDepartment(std::vector&lt;Profemon&gt; profemons);
        bool addProfemon(Profemon profemon);
};

class SoftwareDepartment: public Trainer{
    public:
        SoftwareDepartment(std::vector&lt;Profemon&gt; profemons);
        bool addProfemon(Profemon profemon);
};

class HardwareDepartment: public Trainer{
    public:
        HardwareDepartment(std::vector&lt;Profemon&gt; profemons);
        bool addProfemon(Profemon profemon);
};

#endif`
    return(
        <div className="flex flex-row h-screen">
            <div className="hidden md:flex flex-col py-10 px-2 bg-black text-white items-center text-center">
                <button className="hover:opacity-75" onClick={() => toggleExpand(!expand)}>
                    { expand ? <AiOutlineDoubleLeft size={35}/> : <AiOutlineDoubleRight size={35}/> }
                </button>
                {
                expand ?  
                    <div className="grow flex flex-col py-5 px-2 font-semibold justify-center items-center text-center bg-black text-white lg:text-2xl overline">   
                        <HashLink to="#introduction" className="hover:opacity-75">Introduction</HashLink>
                        <HashLink to="#taskA" className="mt-10 hover:opacity-75">Task A</HashLink>
                        <HashLink to="#taskB" className="mt-10 hover:opacity-75">Task B</HashLink>
                    </div>
                :
                    <div className="grow flex flex-col py-5 px-2 font-mono justify-center items-center text-center bg-black text-white">   
                        <HashLink to="#introduction" className="px-3 rounded-md border-white border-2 text-2xl hover:bg-gradient-to-b hover:from-red-100 hover:via-green-100 hover:to-blue-100 hover:text-black">i</HashLink>
                        <HashLink to="#taskA" className="mt-10 px-3 rounded-md border-white border-2 text-2xl hover:bg-gradient-to-b hover:from-red-100 hover:via-green-100 hover:to-blue-100 hover:text-black">A</HashLink>
                        <HashLink to="#taskB" className="mt-10 px-3 rounded-md border-white border-2 text-2xl hover:bg-gradient-to-b hover:from-red-100 hover:via-green-100 hover:to-blue-100 hover:text-black">B</HashLink>
                    </div>
                }
            </div>
            <div className="overflow-y-scroll bg-slate-50 snap-y snap-mandatory">
                <div className="text-center bg-gradient-to-b from-red-100 via-green-100 to-blue-100 hover:bg-gradient-to-t hover:from-red-100 hover:via-green-100 hover:to-blue-100 text-black snap-start">
                    <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl p-5 font-mono">Project 3: Profémon!</h1>
                    <p className="px-5 pb-5 font-serif text-sm lg:text-base tracking-wide">You must start working on the projects as soon as they are assigned to detect any problems and to address them with us well before the deadline so that we have time to get back to you before the deadline. There will be no extensions and no negotiation about project grades after the submission deadline with respect to the lateness policy.</p>
                    <hr className="drop-shadow-xl border-black"/>
                </div>

                <div id="introduction" className="grid grid-flow-row grid-cols-2 gap-x-5 justify-center h-screen snap-start">
                    <h1 className="row-span-1 col-span-2 px-10 pt-5 font-mono text-xl md:text-2xl lg:text-3xl font-bold text-center">Introduction</h1>
                    <h1 className="row-span-1 col-span-2 px-10 font-serif font-semibold text-md md:text-lg lg:text-xl text-center italic">Well done! You've made it to the final project of the semester! Time to take the stage with your Profémons and prepare for the final battle!</h1>
                    <a href="https://www.youtube.com/watch?v=q9Vjfi0Slbw">
                        <img src={catchemall} alt="pokemon" className="col-span-2 xl:col-span-1 h-5/6 row-span-1 hidden xl:block m-5 brightness-125 rounded-md ring-2 ring-black drop-shadow-xl object-fill w-full overflow-hidden"></img>
                    </a>
                    <div className="col-span-2 xl:col-span-1 row-span-1 overflow-y-auto p-5 font-serif tracking-wider sm-text-sm md:text-md lg:text-lg h-full">
                        Classes can offer so much more than simply grouping data together. This project will test your knowledge about classes through the application of object-oriented programming.<br/><br/> 
                        Things you need to know for this project:<br/><br/>
                        <div className="grid lg:grid-cols-3 divide-x w-full mb-5 pb-5">
                            <a className="text-center flex justify-center items-center hover:text-white text-md lg:rounded-tl-md bg-gradient-to-b from-red-100 via-green-100 to-blue-100 text-black text-base ring-black ring-1 hover:bg-gradient-to-b hover:from-black hover:to-black" target="_blank" href="https://maryash.github.io/135/slides/9.1-2%20Object%20Oriented%20Programming%20_%20Implementing%20a%20Simple%20Class.pdf">
                                Classes
                            </a>
                            <a className="text-center flex justify-center items-center hover:text-white text-md bg-gradient-to-b from-red-100 via-green-100 to-blue-100 text-black text-base ring-black ring-1 hover:bg-gradient-to-b hover:from-black hover:to-black" target="_blank" href="https://maryash.github.io/135/slides/Enums.pdf">
                                Enums
                            </a>
                            <a className="text-center flex justify-center items-center hover:text-white text-md lg:rounded-tr-md bg-gradient-to-b from-red-100 via-green-100 to-blue-100 text-black text-base ring-black ring-1 hover:bg-gradient-to-b hover:from-black hover:to-black" target="_blank" href="https://maryash.github.io/135/slides/9.6%20Constructors.pdf">
                                Constructors
                            </a>
                            <a className="text-center flex justify-center items-center hover:text-white text-md lg:rounded-bl-md bg-gradient-to-b from-red-100 via-green-100 to-blue-100 text-black text-base ring-black ring-1 hover:bg-gradient-to-b hover:from-black hover:to-black" target="_blank" href="https://maryash.github.io/135/slides/10.1%20Inheritance%20Hierarchies.pdf">
                                Inheritence
                            </a>
                            <a className="text-center flex justify-center items-center hover:text-white text-md bg-gradient-to-b from-red-100 via-green-100 to-blue-100 text-black text-base ring-black ring-1 hover:bg-gradient-to-b hover:from-black hover:to-black" target="_blank" href="https://maryash.github.io/135/slides/10.2%20Implementing%20Derived%20Classes.pdf">
                                Derived-Classes
                            </a>
                            <a className="text-center flex justify-center items-center hover:text-white text-md lg:rounded-br-md bg-gradient-to-b from-red-100 via-green-100 to-blue-100 text-black text-base ring-black ring-1 hover:bg-gradient-to-b hover:from-black hover:to-black" target="_blank" href="https://maryash.github.io/135/slides/9.9%20Separate%20Compilation.pdf">
                                Separate-Compilation
                            </a>
                        </div>
                        Work through the tasks sequentially (implement and test). Only move on to a new task when you are positive that the previous one has been completed correctly. Remember that the function <p className="inline text-red-700 font-bold">prototypes and global-variables must be exactly as specified in this project specification</p>. Lastly, <p className="inline text-red-700 font-bold">do not use EOF(End of File), vector, or any library that we haven't learned yet in class</p>. If you don't understand this project specification and its requirements, ask for clarification before you proceed. Test your code locally before submitting on gradescope.
                        <p className="text-center text-red-700 font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl py-14 animate-pulse">DON'T WAIT FOR THE LAST MINUTE!!!</p>
                    </div>
                </div>
                <hr className="mt-10"/>
                <div id="taskA" className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 divide-x-2 gap-2 justify-center h-screen snap-start overflow-y-auto lg:overscroll-y-none">
                    <h1 className="row-span-1 lg:col-span-2 px-10 pt-5 font-mono text-xl md:text-2xl lg:text-3xl font-bold text-center">Task A: Gotta Catch Em' All</h1>
                    <a 
                    className="h-full flex items-center justify-center"
                    target="_blank"
                    href="http://proto007.pythonanywhere.com/"
                    >
                        <img src={sadab} alt="sadcat" className="row-span-1 lg:hidden m-5 brightness-125 rounded-md ring-2 ring-black drop-shadow-xl w-5/6 overflow-show"></img>
                    </a>
                    <div className="row-span-1 lg:col-span-2 px-10 font-mono text-md md:text-lg lg:text-xl text-center">
                        Define and implement the <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">Skill</p> and <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">Profemon</p> class with a header and a source file (from now on, when you implement a class, assume you will implement two files: <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">.hpp</p> and <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">.cpp</p>).
                    </div><hr className="lg:col-span-2"/>
                    <div className="row-span-1 lg:col-span-1 lg:overflow-y-auto p-5 font-serif tracking-wider sm-text-sm md:text-md lg:text-lg h-full">
                        <h1 className="font-mono text-lg md:text-xl lg:text-2xl font-bold text-center mb-2">Skill</h1>
                        The <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">Skill</p> class must have the following information stored in their private member variables:
                        <SyntaxHighlighter language="plaintext" style={tomorrowNightBlue} className="rounded-md my-2 select-all">
                            {skillData}
                        </SyntaxHighlighter>
                        Define and implement the <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">Skill</p> and <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">Profemon</p> class with a header and a source file (from now on, when you implement a class, assume you will implement two files: <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">.hpp</p> and <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">.cpp</p>).<br/><br/>
                        The <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">Skill</p> class must have the following in it's <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">public</p> access modifier:
                        <div className="flex flex-col border-black border-2 p-1 mt-5">
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="rounded-md select-all">
                                {skillDefConstructor}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {skillParamConstructor}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {skillNameGetter}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {skillDescGetter}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {skillUsesGetter}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {skillSpecGetter}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {skillNameSetter}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {skillDescSetter}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {skillUsesSetter}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {skillSpecSetter}
                            </SyntaxHighlighter>
                        </div> 
                    </div>
                    <div className="row-span-1 lg:col-span-1 lg:overflow-y-auto p-5 font-serif tracking-wider sm-text-sm md:text-md lg:text-lg h-full">
                        <h1 className="font-mono text-lg md:text-xl lg:text-2xl font-bold text-center mb-2">Profemon</h1>
                        The header file of the <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">Profemon</p> class must have an enumeration type called "Specialty" with three possible values: <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">ML</p>, <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">SOFTWARE</p>, and <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">HARDWARE</p> in this exact order. The <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">enum</p> should be defined outside the class.<br/><br/>
                        The <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">Profemon</p> class must have the following information stored in their private member variables:
                        <SyntaxHighlighter language="plaintext" style={tomorrowNightBlue} className="rounded-md my-2 select-all">
                                {profemonData}
                        </SyntaxHighlighter>
                        The <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">Profemon</p> class must have the following in it's <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">public</p> access modifier:
                        <div className="flex flex-col border-black border-2 p-1 mt-5">
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="rounded-md select-all">
                                {profemonDefConstructor}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {profemonParamConstructor}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {profemonNameGetter}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {profemonSpecGetter}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {profemonLevelGetter}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {profemonHealthGetter}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {profemonSkillGetter}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {profemonNameSetter}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {profemonLevelUp}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {profemonLearnSkill}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {profemonPrint}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <hr className="lg:col-span-2"/>
                    <div className="row-span-1 lg:col-span-2 px-10 pt-5 font-mono text-md md:text-lg lg:text-xl text-center pb-5">
                        You will submit these files to <a className="text-blue-700" target="_blank" href="https://www.gradescope.com/courses/545354/assignments/2918881">gradescope</a>:
                        <div className="flex flex-col md:flex-row divide-y-2 divide-x-2 text-sm md:text-md lg:text-lg items-center justify-center">
                            <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">profemon.hpp</p>
                            <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">profemon.cpp</p>
                            <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">skill.hpp</p>
                            <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">skill.cpp</p>
                        </div>
                        <a href={testmain} download="main.cpp">
                            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold  px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Here is a sample main file. Make sure to add your own code to test all functions!
                            </button>
                        </a>
                        <div className="flex flex-col md:flex-row divide-y-2 divide-x-2 text-sm md:text-md lg:text-lg items-center justify-center">
                            <p>Compile your code locally using:</p>
                            <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">g++ skill.cpp profemon.cpp main.cpp</p>
                        </div>
                        
                    </div>
                </div>
                <hr className="mt-10"/>
                <div id="taskB" className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 divide-x-2 gap-2 justify-center h-screen snap-start overflow-y-auto lg:overscroll-y-none">
                    <h1 className="row-span-1 lg:col-span-2 px-10 pt-5 font-mono text-xl md:text-2xl lg:text-3xl font-bold text-center">Task B: Profémon Trainers</h1>
                    <div className="row-span-1 lg:col-span-1 lg:overflow-y-auto p-5 font-serif tracking-wider sm-text-sm md:text-md lg:text-lg h-full">
                        <a 
                        className="hidden lg:flex justify-center h-3/5"
                        target="_blank"
                        href="https://www.hunter.cuny.edu/csci/people/faculty"
                        >
                            <img src={profedex} alt="profedex" className="row-span-1 m-5 brightness-125 rounded-md ring-2 ring-black drop-shadow-xl w-4/5 overflow-show"></img>
                        </a>
                        <h1 className="font-mono text-lg md:text-xl lg:text-2xl font-bold text-center mb-2">Trainer</h1>
                        In the world of Profémon, trainers are always busy training their beloved profémons for the battles to come. They are looking to challenge departments to a profémon battle and gain a degree. Departments are trainers who specialize in a single type of profémon. Since we have a working profémon class, it's time to implement the <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">Trainer</p> class and some department classes which will inherit from the <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">Trainer</p> class.<br/><br/>
                        Each trainer has a team of four profémons and a profédex. The profédex serves as a storage for all the profémons collected by the trainer. Each trainer also has a profémon which they choose to accompany them on their adventures!<br/><br/>
                        Since the Department classes will inherit from the <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">Trainer</p>, the <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">Trainer</p> class should have the following <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">protected</p> data members:
                        <SyntaxHighlighter language="plaintext" style={tomorrowNightBlue} className="rounded-md my-2 select-all">
                            {skillData}
                        </SyntaxHighlighter>
                        Define and implement the <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">Skill</p> and <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">Profemon</p> class with a header and a source file (from now on, when you implement a class, assume you will implement two files: <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">.hpp</p> and <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">.cpp</p>).<br/><br/>
                        The <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">Trainer</p> class must have the following in it's <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">public</p> access modifier:
                        <div className="flex flex-col border-black border-2 p-1 mt-5">
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="rounded-md select-all">
                                {trainerDefConstructor}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {trainerParamConstructor}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {trainerContains}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {trainerAdd}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {trainerRem}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {trainerTeamSetter}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {trainerChoose}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {trainerCurrGetter}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {trainerProfedexGetter}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {trainerProfedexPrint}
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="mt-1 rounded-md select-all">
                                {trainerTeamPrint}
                            </SyntaxHighlighter>
                        </div> 
                    </div>
                    <div className="row-span-1 lg:col-span-1 lg:overflow-y-auto p-5 font-serif tracking-wider sm-text-sm md:text-md lg:text-lg h-full">
                        <a 
                        className="hidden lg:flex justify-center h-3/5"
                        target="_blank"
                        href="https://www.hunter.cuny.edu/csci/people/faculty"
                        >
                            <img src={csdep} alt="csdep" className="row-span-1 m-5 brightness-125 rounded-md ring-2 ring-black drop-shadow-xl w-4/5 overflow-show"></img>
                        </a>
                        <h1 className="font-mono text-lg md:text-xl lg:text-2xl font-bold text-center mb-2">Department</h1>
                        Since you've been working so hard on this project, we will gift you the header file for the departments! Copy the following in <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">department.hpp</p>:
                        <SyntaxHighlighter language="c" style={tomorrowNightBlue} className="rounded-md select-all my-2">
                                {departmentHeader}
                        </SyntaxHighlighter>
                        Use a single <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">.cpp</p> file to implement all the department classes' functions and constructors. For each of the derived classes, you need to change the implementation of the constructors and the <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">addProfemon()</p> function so that only the profémons of that particular specialty is added. For example: the <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">MLDepartment</p> can only have profémons of  <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">ML</p> specialty. For the parameterized constructor, the given parameter vector can have profémons of all specialties. Add only the specialty that the Department specializes in. You can assume that the parameter vector will have atleast one profémon of correct specialty.
                    </div>
                    <hr className="lg:col-span-2"/>
                    <div className="row-span-1 lg:col-span-2 px-10 pt-5 font-mono text-md md:text-lg lg:text-xl text-center pb-5">
                        You will submit these files to <a className="text-blue-700" target="_blank" href="https://www.gradescope.com/courses/545354/assignments/2918866">gradescope</a>:
                        <div className="flex flex-col lg:flex-row divide-y-2 divide-x-2 text-sm md:text-md lg:text-lg items-center justify-center flex-shrink">
                            <p className="bg-gray-500 text-white font-mono rounded-md px-2">profemon.hpp</p>
                            <p className="bg-gray-500 text-white font-mono rounded-md px-2">profemon.cpp</p>
                            <p className="bg-gray-500 text-white font-mono rounded-md px-2">skill.hpp</p>
                            <p className="bg-gray-500 text-white font-mono rounded-md px-2">skill.cpp</p>
                            <p className="bg-gray-500 text-white font-mono rounded-md px-2">trainer.hpp</p>
                            <p className="bg-gray-500 text-white font-mono rounded-md px-2">trainer.cpp</p>
                            <p className="bg-gray-500 text-white font-mono rounded-md px-2">department.hpp</p>
                            <p className="bg-gray-500 text-white font-mono rounded-md px-2">department.cpp</p>
                        </div>
                        <a href={testmain} download="main.cpp">
                            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold  px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Modify the main file from Task A to test your classes.
                            </button>
                        </a>
                        <div className="flex flex-col md:flex-row divide-y-2 divide-x-2 text-sm md:text-md lg:text-lg items-center justify-center">
                            <p>Compile your code locally using:</p>
                            <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">g++ skill.cpp profemon.cpp trainer.cpp department.cpp main.cpp</p>
                        </div>
                    </div>
                </div>
                <hr className="mt-10"/>
                <div id="outro" className="grid grid-flow-row gap-5 justify-center snap-start">
                    <h1 className="row-span-1 px-10 pt-5 font-mono text-xl md:text-2xl lg:text-3xl font-bold text-center">Endnote</h1>
                    <div className="col-span-1 row-span-1 py-2 font-mono text-xs md:text-sm lg-text-md h-full px-5 text-center">
                        Don't wait for the last minute. Take advantage of tutoring and recitation to ask questions and get help with the project as soon as possible. Read the instructions carefully and ask questions if you are not sure what you need to do. Test your code locally and don't rely on gradescope to test it for you. Send me an email if you are stuck with any of the tasks.
                    </div>
                    <div className="col-span-1 row-span-1 p-2 font-serif tracking-wider text-lg h-full text-center italic text-black/50">
                        Credits: Sadab Hafiz, Ryan Vaz, Yoomin Song
                    </div>
                </div>
            </div>
        </div>
    )
}
