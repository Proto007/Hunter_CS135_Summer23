export default function Schedule(midterm){
    return(
        <div className="overflow-auto w-10/12"><table className="border-separate border border-slate-500 font-mono w-full">
            <thead>
                <tr className="bg-black text-white">
                    <th className="border border-slate-600 p-3">Date</th>
                    <th className="border border-slate-600 p-3">Topics</th>
                    <th className="border border-slate-600 p-3">Slides</th>
                    <th className="border border-slate-600 p-3">Labs</th>
                </tr>
            </thead>
            {!midterm.midterm && <tbody>
                <tr>
                    <td className="border border-slate-700 p-2 text-center">05/31/2023</td>
                    <td className="border border-slate-700 p-2 text-center">
                            Linux/Compilation/IDE<br/>
                            Variables<br/>
                            Input/Output<br/>
                            Syntax/Style<br/> 
                            Error Messages<br/>
                    </td>
                    <td className="border border-slate-700 p-2 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://maryash.github.io/135/slides/1.5%20Analyzing%20Your%20First%20Program.pdf">Analyzing Your First Program</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/1.6%20Errors.pdf">Errors</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/1.7%20PS%20Algorithm%20Design.pdf">Algorithm Design</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/2.1%20Variables.pdf">Variables</a>
                    </td>
                    <td className="border border-slate-700 p-1 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://maryash.github.io/135/labs/lab_01.html">Lab 1</a><br/>
                        <a target="_blank" href="/Hunter_CS135_Summer23/recitation_slides/Lab_1.pdf">Slides</a><br/>
                    </td>
                </tr>
                <tr>
                    <td className="border border-slate-700 p-2 text-center">06/05/2023</td>
                    <td className="border border-slate-700 p-2 text-center">
                            Math operators<br/>
                            Input/Output<br/>
                            Strings and Numbers<br/>
                            Conditionals
                    </td>
                    <td className="border border-slate-700 p-2 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://maryash.github.io/135/slides/2.2%20Arithmetic.pdf">Arithmetic</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/2.3%20Input%20and%20Output%20_%202.4%20PS%20First%20Do%20It%20By%20Hand.pdf">Input and Output</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/2.5%20Strings.pdf">Strings</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/3.1%20The%20IF%20Statement.pdf">If-Statements</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/3.2%20Comparing%20Numbers%20and%20Strings.pdf">Comparing Numbers and Strings</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/3.3%20Multiple%20Alternatives%20_%203.4%20Nested%20Branches.pdf">Multiple Alternatives</a>
                    </td>
                    <td className="border border-slate-700 p-1 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://maryash.github.io/135/labs/lab_02.html">Lab 2</a><br/>
                        <a target="_blank" href="/Hunter_CS135_Summer23/recitation_slides/Lab_2.pdf">Slides</a><br/>
                    </td>
                </tr>
                <tr>
                    <td className="border border-slate-700 p-2 text-center">06/07/2023</td>
                    <td className="border border-slate-700 p-2 text-center">
                        Boolean Datatype<br/>
                        Input Validation<br/>
                        Different Loops<br/>
                        Loop Algorithms
                    </td>
                    <td className="border border-slate-700 p-2 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://maryash.github.io/135/slides/3.7%20Boolean%20Variables%20and%20Operators.pdf">Boolean Datatype and Operators</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/3.8%20Application_%20Input%20Validation.pdf">Input Validation</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/4.1%20The%20WHILE%20Loop.pdf">While Loops</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/4.2%20PS%20Hand-Tracing%20_%204.3%20The%20FOR%20Loop.pdf">For Loops</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/4.4%20The%20DO%20Loop%20_%204.5%20Processing%20Input.pdf">Do-While Loops</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/4.6%20PS%20Storyboards%20_%204.7%20Common%20Loop%20Algorithms%20_%204.8%20Nested%20Loops.pdf">Loop Algorithms</a>
                    </td>
                    <td className="border border-slate-700 p-1 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://maryash.github.io/135/labs/lab_03.html">Lab 3</a><br/>
                        <a target="_blank" href="/Hunter_CS135_Summer23/extra_content/Current_Reservoir_Levels.tsv">Datafile</a><br/>
                        <a target="_blank" href="/Hunter_CS135_Summer23/recitation_slides/Lab_3.pdf">Slides</a><br/>
                    </td>
                </tr>
                <tr>
                    <td className="border border-slate-700 p-2 text-center">06/12/2023</td>
                    <td className="border border-slate-700 p-2 text-center">
                        Nested Loops<br/>
                        Random<br/>
                        Functions
                    </td>
                    <td className="border border-slate-700 p-2 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://maryash.github.io/135/slides/4.6%20PS%20Storyboards%20_%204.7%20Common%20Loop%20Algorithms%20_%204.8%20Nested%20Loops.pdf">Nested Loops</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/4.9%20PS%20Solve%20a%20Simpler%20Problem%20First%20_%204.10%20Random%20Numbers%20and%20Simulations.pdf">Random Numbers and Simulations</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/5.1%20Functions%20as%20Black%20Boxes%20_%205.2%20Implementing%20Functions%20_%205.3%20Parameter%20Passing.pdf">Functions</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/5.4%20Return%20Values%20_%205.5%20Functions%20without%20Return%20Values%20_%205.6%20Reusable%20Functions.pdf">Returning from a function</a><br/>

                    </td>
                    <td className="border border-slate-700 p-1 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://maryash.github.io/135/labs/lab_04.html">Lab 4</a><br/>
                        <a target="_blank" href="/Hunter_CS135_Summer23/recitation_slides/Lab_4.pdf">Slides</a><br/>
                    </td>
                </tr>
                <tr>
                    <td className="border border-slate-700 p-2 text-center">06/14/2023</td>
                    <td className="border border-slate-700 p-2 text-center">
                        Breaking Down Complex Problems<br/>
                        Variable Scopes<br/>
                        Pass by Reference
                    </td>
                    <td className="border border-slate-700 p-2 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://maryash.github.io/135/slides/5.7%20Stepwise%20Refinement.pdf">Stepwise Refinement</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/5.8%20Variable%20Scope%20and%20Globals.pdf">Variable Scopes</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/Static%20Variables.pdf">Static Variables</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/5.9%20Reference%20Parameters.pdf">Reference Parameters</a><br/>
                    </td>
                    <td className="border border-slate-700 p-1 text-center text-blue-700 font-bold">
                        <a target="_blank" href="/#/Project_1">Project 1</a><br/>
                    </td>
                </tr>
                <tr>
                    <td className="border border-slate-700 p-2 text-center">06/21/2023</td>
                    <td className="border border-slate-700 p-2 text-center">
                        Arrays<br/>
                        Array Algorithms(<a className="text-blue-700 font-bold" href="/Hunter_CS135_Summer23/extra_content/arrays.cpp" download>code</a>)<br/>
                        2D Arrays
                    </td>
                    <td className="border border-slate-700 p-2 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://maryash.github.io/135/slides/6.1%20Arrays.pdf">Arrays</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/6.2%20Common%20Array%20Algorithms.pdf">Common Arrays Algorithms</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/6.3%20Arrays%20and%20Functions.pdf">Arrays and Functions</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/6.4%20PS%20Adapting%20Algorithms%20_%206.5%20Discovering%20Algorithms.pdf">Adapting Algorithms</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/6.6%202D%20Arrays.pdf">2D Arrays</a><br/>
                    </td>
                    <td className="border border-slate-700 p-1 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://maryash.github.io/135/labs/lab_05.html">Lab 5</a><br/>
                        <a target="_blank" href="/Hunter_CS135_Summer23/recitation_slides/Lab_5.pdf">Slides</a><br/>
                    </td>
                </tr>
                <tr>
                    <td className="border border-slate-700 p-2 text-center">06/26/2023</td>
                    <td className="border border-slate-700 p-2 text-center">
                        Pointers<br/>
                        File Streams
                    </td>
                    <td className="border border-slate-700 p-2 text-center text-blue-700 font-bold">
                        {/* <a target="_blank" href="https://maryash.github.io/135/slides/MyPointers.pdf">Intro to Pointers</a><br/> */}
                        <a target="_blank" href="https://maryash.github.io/135/slides/7.1%20Defining%20and%20Using%20Pointers.pdf">Pointers</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/7.2%20Arrays%20and%20Pointers.pdf">Arrays and Pointers</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/8.1%20Reading%20and%20Writing%20Text%20Files.pdf">Streams</a><br/>
                    </td>
                    <td className="border border-slate-700 p-1 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://maryash.github.io/135/labs/lab_06.html">Lab 6</a><br/>
                        <a target="_blank" href="/Hunter_CS135_Summer23/recitation_slides/Lab_6.pdf">Slides</a><br/>
                    </td>
                </tr>
                <tr>
                    <td className="border border-slate-700 p-2 text-center">06/28/2023</td>
                    <td className="border border-slate-700 p-2 text-center">
                        Midterm Review<br/>
                    </td>
                    <td className="border border-slate-700 p-2 text-center text-blue-700 font-bold">
                        <a target="_blank" href="/Hunter_CS135_Summer23/extra_content/midterm_review.pdf">Midterm Review</a><br/>
                        <a target="_blank" href="/Hunter_CS135_Summer23/extra_content/midterm_format.pdf">Exam Format</a><br/>
                    </td>
                    <td className="border border-slate-700 p-1 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://maryash.github.io/135/labs/lab_07.html">Lab 7</a><br/>
                        <a target="_blank" href="/Hunter_CS135_Summer23/recitation_slides/Lab_7.pdf">Slides</a><br/>
                    </td>
                </tr>
                <tr>
                    <td className="border border-slate-700 p-2 text-center text-red-700 font-bold">07/03/2023</td>
                    <td className="border border-slate-700 p-2 text-center text-red-700 font-bold">
                        MIDTERM EXAM<br/>
                    </td>
                    <td className="border border-slate-700 p-2 text-center text-red-700 font-bold">
                        MIDTERM EXAM
                    </td>
                    <td className="border border-slate-700 p-1 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://maryash.github.io/135/labs/lab_08.html">Lab 8</a><br/>
                        <a target="_blank" href="/Hunter_CS135_Summer23/recitation_slides/Lab_8.pdf">Slides</a><br/>
                    </td>
                </tr>
            </tbody>}
            {midterm.midterm && <tbody>
                <tr>
                    <td className="border border-slate-700 p-2 text-center text-red-700 font-bold">07/03/2023</td>
                    <td className="border border-slate-700 p-2 text-center text-red-700 font-bold">
                        MIDTERM EXAM<br/>
                    </td>
                    <td className="border border-slate-700 p-2 text-center text-red-700 font-bold">
                        MIDTERM EXAM
                    </td>
                    <td className="border border-slate-700 p-1 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://maryash.github.io/135/labs/lab_08.html">Lab 8</a><br/>
                        <a target="_blank" href="/Hunter_CS135_Summer23/recitation_slides/Lab_8.pdf">Slides</a><br/>
                    </td>
                </tr>
                <tr>
                    <td className="border border-slate-700 p-2 text-center">07/05/2023</td>
                    <td className="border border-slate-700 p-2 text-center">
                        Dynamic Memory Allocation<br/>
                        Dynamic Arrays(<a className="text-blue-700 font-bold" href="/Hunter_CS135_Summer23/extra_content/dynamic.cpp" download>code</a>)<br/>
                        Pointer Arrays(<a className="text-blue-700 font-bold" target="_blank" href="https://is.gd/00MNC7">code</a>)<br/>
                        Introduction to Classes
                    </td>
                    <td className="border border-slate-700 p-2 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://maryash.github.io/135/slides/7.4%20Dynamic%20Memory%20Allocation.pdf">Dynamic Memory</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/7.5-6%20Arrays%20of%20Pointers%20_%20PS%20Draw%20a%20Picture.pdf">Arrays of Pointers</a><br/>
                        <a target="_blank" href="https://www.youtube.com/watch?v=3m4bxse2JEQ">Galton Board</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/7.7-8%20Classes%20of%20Objects%20_%20Pointers%20and%20Objects.pdf">Classes</a><br/>
                    </td>
                    <td className="border border-slate-700 p-1 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://maryash.github.io/135/labs/lab_09.html">Lab 9</a><br/>
                        <a target="_blank" href="/Hunter_CS135_Summer23/recitation_slides/Lab_9.pdf">Slides</a><br/>
                    </td>
                </tr>
                <tr>
                    <td className="border border-slate-700 p-2 text-center">07/10/2023</td>
                    <td className="border border-slate-700 p-2 text-center">
                        Object-Oriented-Programming<br/>
                        Separate Compilation<br/>
                        Enums
                    </td>
                    <td className="border border-slate-700 p-2 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://maryash.github.io/135/slides/9.1-2%20Object%20Oriented%20Programming%20_%20Implementing%20a%20Simple%20Class.pdf">OOP</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/9.3-5%20Specifying%20the%20Public%20Interface%20_%20Designing%20the%20Data%20Representation%20_%20Member%20Functions.pdf">Access Specifiers</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/9.6%20Constructors.pdf">Constructors</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/9.9%20Separate%20Compilation.pdf">Separate Compilation</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/Enums.pdf">Enums</a><br/>
                    </td>
                    <td className="border border-slate-700 p-1 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://maryash.github.io/135/labs/lab_10.html">Lab 10</a><br/>
                        <a target="_blank" href="/Hunter_CS135_Summer23/recitation_slides/Lab_10.pdf">Slides</a><br/>
                    </td>
                </tr>
                <tr>
                    <td className="border border-slate-700 p-2 text-center">07/12/2023</td>
                    <td className="border border-slate-700 p-2 text-center">
                        OOP Example(<a className="text-blue-700 font-bold" href="/Hunter_CS135_Summer23/extra_content/dictionary.zip" download>code</a>)<br/>
                        Inheritance(<a className="text-blue-700 font-bold" href="/Hunter_CS135_Summer23/extra_content/inheritance.zip" download>code</a>)<br/>
                        Vectors<br/>
                    </td>
                    <td className="border border-slate-700 p-2 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://maryash.github.io/135/slides/6.7%20Vectors.pdf">Vectors</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/10.1%20Inheritance%20Hierarchies.pdf">Inheritance</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/10.2%20Implementing%20Derived%20Classes.pdf">Derived Classes</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/10.3%20Overriding%20Member%20Functions.pdf">Overriding</a><br/>
                    </td>
                    <td className="border border-slate-700 p-1 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://maryash.github.io/135/labs/lab_11.html">Lab 11</a><br/>
                        <a target="_blank" href="/Hunter_CS135_Summer23/recitation_slides/Lab_11.pdf">Slides</a><br/>
                    </td>
                </tr>
                <tr>
                    <td className="border border-slate-700 p-2 text-center">07/17/2023</td>
                    <td className="border border-slate-700 p-2 text-center">
                        Vector and Classes(<a className="text-blue-700 font-bold" href="/Hunter_CS135_Summer23/extra_content/vector_example.zip" download>code</a>)<br/>
                        Virtual Classes<br/>
                        Recursion<br/>
                    </td>
                    <td className="border border-slate-700 p-2 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://maryash.github.io/135/slides/10.4%20Virtual%20Functions%20and%20Polymorphism.pdf">Virtual Classes</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/5.10%20Recursive%20Functions.pdf">Recursive Function</a><br/>
                    </td>
                    <td className="border border-slate-700 p-1 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://maryash.github.io/135/labs/lab_12.html">Lab 12</a><br/>
                        <a target="_blank" href="/Hunter_CS135_Summer23/recitation_slides/Lab_12.pdf">Slides</a><br/>
                    </td>
                </tr>
                <tr>
                    <td className="border border-slate-700 p-2 text-center">07/19/2023</td>
                    <td className="border border-slate-700 p-2 text-center">
                        Templated Functions(<a className="text-blue-700 font-bold" href="/Hunter_CS135_Summer23/extra_content/templates.cpp" download>code</a>)<br/>
                        Templated Classes<br/>
                        Linked List(<a className="text-blue-700 font-bold" href="/Hunter_CS135_Summer23/extra_content/linkedlist.zip" download>code</a>)<br/>
                        Operator Overloading<br/>
                    </td>
                    <td className="border border-slate-700 p-2 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://www.geeksforgeeks.org/templates-cpp/">Templates</a><br/>
                        <a target="_blank" href="https://www.geeksforgeeks.org/data-structures/linked-list/">Linked List</a><br/> 
                        <a target="_blank" href="https://learn.microsoft.com/en-us/cpp/standard-library/overloading-the-output-operator-for-your-own-classes?view=msvc-170">Operator Overloading</a><br/> 
                    </td>
                    <td className="border border-slate-700 p-1 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://maryash.github.io/135/labs/lab_13.html">Lab 13</a><br/>
                        <a target="_blank" href="/Hunter_CS135_Summer23/recitation_slides/Lab_13.pdf">Slides</a><br/>
                    </td>
                </tr>
                <tr>
                    <td className="border border-slate-700 p-2 text-center">07/24/2023</td>
                    <td className="border border-slate-700 p-2 text-center">
                        Final Exam Review<br/>
                    </td>
                    <td className="border border-slate-700 p-2 text-center text-blue-700 font-bold">
                        <a target="_blank" href="/Hunter_CS135_Summer23/extra_content/final_format.pdf">Exam Format</a><br/>
                        <a target="_blank" href="/Hunter_CS135_Summer23/extra_content/final_review.pdf">Final Review</a><br/>
                    </td>
                    <td className="border border-slate-700 p-1 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://docs.github.com/en/get-started/quickstart/hello-world">Github and Git</a><br/>
                        <a target="_blank" href="https://www.techinterviewhandbook.org/grind75">Leetcode</a><br/>
                        <a target="_blank" href="https://devpost.com/hackathons">Hackathons</a><br/>
                        <a target="_blank" href="https://www.hackthebox.com/hacker/ctf">CTF</a><br/>
                        <a target="_blank" href="https://itch.io/jams">Game Jams</a><br/>
                        <a target="_blank" href="https://github.com/practical-tutorials/project-based-learning/tree/master">Projects</a><br/>
                        <a target="_blank" href="https://www.hostinger.com/tutorials/web-developer-portfolio">Portfolios</a><br/>
                        <a target="_blank" href="https://www.youtube.com/playlist?list=PLfYUBJiXbdtSvpQjSnJJ_PmDQB_VyT5iU">Deep Learning</a><br/>
                        <a target="_blank" href="https://www.kaggle.com/">ML Datasets</a><br/>
                    </td>
                </tr>
                <tr>
                    <td className="border border-slate-700 p-2 text-center text-red-700 font-bold">07/26/2023</td>
                    <td className="border border-slate-700 p-2 text-center text-red-700 font-bold">
                        FINAL EXAM<br/>
                    </td>
                    <td className="border border-slate-700 p-2 text-center text-red-700 font-bold">
                        FINAL EXAM
                    </td>
                    <td className="border border-slate-700 p-1 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://www.youtube.com/watch?v=tg2PD-dwsIw">Finally</a><br/>
                    </td>
                </tr>
            </tbody>}
        </table></div>
    )
}
