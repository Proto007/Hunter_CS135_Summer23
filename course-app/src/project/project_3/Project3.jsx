import { HashLink } from 'react-router-hash-link'
import grades from './grades.txt'
import helper from './helper.txt'

export default function Project3(){
    return (
        <div className="p-10 font-mono bg-black text-white">
            <h1 className="text-center font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl">Project 3: Extra Credit</h1>
            <h1 className="mb-5 text-red-300 text-center text-sm md:text-md lg:text-lg xl:text-
            xl">July 26th, 2023, 11:59 PM</h1>
            <div className='mb-5 bg-gray-700 p-5 rounded-md'>
                <div id="introduction" className="font-semibold pb-2 text-md md:text-lg lg:text-xl xl:text-2xl">
                    <HashLink to="#introduction" className="hover:opacity-50"># </HashLink> 
                    <h1 className="inline hover:underline">Introduction</h1> 
                </div>
                <div className="text-sm md:text-md lg:text-lg xl:text-xl"> 
                    It is almost the end of the summer semester. Ever wonder what your final grade will be for this course or how it will be calculated? Why don't you create a program yourself to calculate your final grade? Using what you have learned so far and a few new tricks, create a C++ program to calculate your final grade given a <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">.csv</p> file. You are free to design your own program as the work you do will be graded manually. <p className='inline text-red-300'>Ask me questions if you are not sure about the instructions</p>.
                </div>
            </div>
            <div className='mb-5 bg-gray-700 p-5 rounded-md'>
                <div id="csv" className="font-semibold pb-2 text-md md:text-lg lg:text-xl xl:text-2xl">
                    <HashLink to="#csv" className="hover:opacity-50"># </HashLink> 
                    <h1 className="inline hover:underline">What is a CSV file?</h1> 
                </div>
                <div className="text-sm md:text-md lg:text-lg xl:text-xl">
                    CSV stands for comma-separated-values. It is a text file where the columns in each row are separated by comma. It is similar to a <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">.tsv</p> file that you have seen in Lab 3 except instead of tabs, the columns are separated by commas. Gradescope outputs your grades in <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">.csv</p> files which is why I require you to use this format. After cleaning the outputted file from gradescope, I have created a format which will help me calculate your final grade. This is the format that I want your program to use as well.
                </div>
            </div>
            <div className='mb-5 bg-gray-700 p-5 rounded-md'>
                <div id="format" className="font-semibold pb-2 text-md md:text-lg lg:text-xl xl:text-2xl">
                    <HashLink to="#format" className="hover:opacity-50"># </HashLink> 
                    <h1 className="inline hover:underline">CSV Format</h1>
                </div>
                <div className="text-sm md:text-md lg:text-lg xl:text-xl">
                    This <a className="text-blue-300 underline" href={grades} download="grades.csv">example csv file</a> shows you the format of the columns and what each column stands for. The column order is as follows:
                    <table className="table-auto text-center border-collapse border w-full my-2">
                        <thead>
                            <tr className='border'>
                                <th className='border'>Item</th>
                                <th className='border'># of columns</th>
                                <th className='border'>% of final grade</th>
                                <th className='border'>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border-l'>Student Information</td>
                                <td className='border-l'>4</td>
                                <td className='border-l'>N/A</td>
                                <td className='border-l'>Student's first name, last name, emplid and email</td>
                            </tr>
                            <tr>
                                <td className='border-l'>Midterm</td>
                                <td className='border-l'>1</td>
                                <td className='border-l'>20</td>
                                <td className='border-l'>Midterm grade out of 100</td>
                            </tr>
                            <tr>
                                <td className='border-l'>Final Exam</td>
                                <td className='border-l'>1</td>
                                <td className='border-l'>25</td>
                                <td className='border-l'>Final exam grade out of 100</td>
                            </tr>
                            <tr>
                                <td className='border-l'>Project 1 Tasks</td>
                                <td className='border-l'>4</td>
                                <td className='border-l'>10</td>
                                <td className='border-l'>Each task is worth 50 points</td>
                            </tr>
                            <tr>
                                <td className='border-l'>Project 1 Deduction</td>
                                <td className='border-l'>1</td>
                                <td className='border-l'>N/A</td>
                                <td className='border-l'>0.4 means 40 percent that will be deducted for plagiarism</td>
                            </tr>
                            <tr>
                                <td className='border-l'>Project 2 Tasks</td>
                                <td className='border-l'>2</td>
                                <td className='border-l'>10</td>
                                <td className='border-l'>Each task is worth 50 points</td>
                            </tr>
                            <tr>
                                <td className='border-l'>Project 2 Deduction</td>
                                <td className='border-l'>1</td>
                                <td className='border-l'>N/A</td>
                                <td className='border-l'>0.4 means 40 percent that will be deducted for plagiarism</td>
                            </tr>
                            <tr>
                                <td className='border-l'>Extra Credit Project</td>
                                <td className='border-l'>1</td>
                                <td className='border-l'>10</td>
                                <td className='border-l'>Students can get a total of 10 points</td>
                            </tr>
                            <tr>
                                <td className='border-l'>Lab Quizzes</td>
                                <td className='border-l'>13</td>
                                <td className='border-l'>5</td>
                                <td className='border-l'>Each of the quizzes are out of 2 points</td>
                            </tr>
                            <tr>
                                <td className='border-l'>Lab Tasks</td>
                                <td className='border-l'>64</td>
                                <td className='border-l'>20</td>
                                <td className='border-l'>59 lab tasks and 5 extra credit each worth 5 points</td>
                            </tr>
                            <tr>
                                <td className='border-l'>Classworks</td>
                                <td className='border-l'>10</td>
                                <td className='border-l'>5</td>
                                <td className='border-l'>Each classwork is worth 5 points</td>
                            </tr>
                            <tr>
                                <td className='border-l'>Homeworks</td>
                                <td className='border-l'>15</td>
                                <td className='border-l'>5</td>
                                <td className='border-l'>Each homework is worth 2 points</td>
                            </tr>
                        </tbody>
                    </table>
                    Notice that some of the lab tasks in the given file contains a grade that is more than 5 points. That is because of a gradescope autograder error. Anything more than 5 points will be considered 5 points. You need to address this in your code somehow.
                </div>
            </div>
            <div className='mb-5 bg-gray-700 p-5 rounded-md'>
                <div id="calculate" className="font-semibold pb-2 text-md md:text-lg lg:text-xl xl:text-2xl">
                    <HashLink to="#calculate" className="hover:opacity-50"># </HashLink> 
                    <h1 className="inline hover:underline">How can I calculate my final grade?</h1> 
                </div>
                <div className="text-sm md:text-md lg:text-lg xl:text-xl">
                   The point distribution shown above is based on the syllabus. The following table shows you how to calculate each part:
                   <table className="table-auto text-center border-collapse border w-full my-2">
                        <thead>
                            <tr className='border'>
                                <th className='border'>Item</th>
                                <th className='border text-purple-300'># of assignments</th>
                                <th className='border text-green-300'>Max Points Each</th>
                                <th className='border text-yellow-300'>% total</th>
                                <th className='border text-blue-300'>% each</th>
                                <th className='border text-red-300'>Deduction</th>
                                <th className='border text-orange-300'>Max Possible Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border-l'>Midterm</td>
                                <td className='border-l text-purple-300'>1</td>
                                <td className='border-l text-green-300'>100</td>
                                <td className='border-l text-yellow-300'>20</td>
                                <td className='border-l'><p className='inline text-orange-300'>20</p>/<p className='inline text-purple-300'>1</p> = <p className='inline text-blue-300'>20</p></td>
                                <th className='border-l text-red-300'>N/A</th>
                                <td className='border-l'>((100/<p className='inline text-green-300'>100</p>) x <p className='inline text-purple-300'>1</p>) x <p className='inline text-blue-300'>20</p> = <p className='inline text-orange-300'>20</p></td>
                            </tr>
                            <tr>
                                <td className='border-l'>Final Exam</td>
                                <td className='border-l text-purple-300'>1</td>
                                <td className='border-l text-green-300'>100</td>
                                <td className='border-l text-yellow-300'>25</td>
                                <td className='border-l'><p className='inline text-orange-300'>25</p>/<p className='inline text-purple-300'>1</p> = <p className='inline text-blue-300'>25</p></td>
                                <th className='border-l text-red-300'>N/A</th>
                                <td className='border-l'>((100/<p className='inline text-green-300'>100</p>) x <p className='inline text-purple-300'>1</p>) x <p className='inline text-blue-300'>25</p> = <p className='inline text-orange-300'>25</p></td>
                            </tr>
                            <tr>
                                <td className='border-l'>Project 1</td>
                                <td className='border-l text-purple-300'>4</td>
                                <td className='border-l text-green-300'>50</td>
                                <td className='border-l text-yellow-300'>10</td>
                                <td className='border-l'><p className='inline text-orange-300'>10</p>/<p className='inline text-purple-300'>4</p> = <p className='inline text-blue-300'>2.5</p></td>
                                <th className='border-l text-red-300'>0.0 - 0.4</th>
                                <td className='border-l'>(((50/<p className='inline text-green-300'>50</p>) x <p className='inline text-purple-300'>4</p>) x <p className='inline text-blue-300'>2.5</p>) x (1.0 - <p className='inline text-red-300'>0.0</p>) = <p className='inline text-orange-300'>10</p></td>
                            </tr>
                            <tr>
                                <td className='border-l'>Project 2</td>
                                <td className='border-l text-purple-300'>2</td>
                                <td className='border-l text-green-300'>50</td>
                                <td className='border-l text-yellow-300'>10</td>
                                <td className='border-l'><p className='inline text-orange-300'>10</p>/<p className='inline text-purple-300'>2</p> = <p className='inline text-blue-300'>5</p></td>
                                <th className='border-l text-red-300'>0.0 - 0.4</th>
                                <td className='border-l'>(((50/<p className='inline text-green-300'>50</p>) x <p className='inline text-purple-300'>2</p>) x <p className='inline text-blue-300'>5</p>) x (1.0 - <p className='inline text-red-300'>0.0</p>) = <p className='inline text-orange-300'>10</p></td>
                            </tr>
                            <tr>
                                <td className='border-l'>Project 3</td>
                                <td className='border-l text-purple-300'>1</td>
                                <td className='border-l text-green-300'>10</td>
                                <td className='border-l text-yellow-300'>10</td>
                                <td className='border-l'><p className='inline text-orange-300'>10</p>/<p className='inline text-purple-300'>1</p>  = <p className='inline text-blue-300'>10</p></td>
                                <th className='border-l text-red-300'>N/A</th>
                                <td className='border-l'>((10/<p className='inline text-green-300'>10</p>) x <p className='inline text-purple-300'>1</p>) x <p className='inline text-blue-300'>10</p> = <p className='inline text-orange-300'>10</p></td>
                            </tr>
                            <tr>
                                <td className='border-l'>Lab Quizzes</td>
                                <td className='border-l text-purple-300'>13</td>
                                <td className='border-l text-green-300'>2</td>
                                <td className='border-l text-yellow-300'>5</td>
                                <td className='border-l'><p className='inline text-orange-300'>5</p>/<p className='inline text-purple-300'>13</p>  = <p className='inline text-blue-300'>0.385</p></td>
                                <th className='border-l text-red-300'>N/A</th>
                                <td className='border-l'>((2/<p className='inline text-green-300'>2</p>) x <p className='inline text-purple-300'>13</p>) x <p className='inline text-blue-300'>0.385</p> = <p className='inline text-orange-300'>5.005</p></td>
                            </tr>
                            <tr>
                                <td className='border-l'>Labs</td>
                                <td className='border-l text-purple-300'>59 + 5</td>
                                <td className='border-l text-green-300'>5</td>
                                <td className='border-l text-yellow-300'>20</td>
                                <td className='border-l'><p className='inline text-orange-300'>20</p>/<p className='inline text-purple-300'>59</p>  = <p className='inline text-blue-300'>0.34</p></td>
                                <th className='border-l text-red-300'>N/A</th>
                                <td className='border-l'>((5/<p className='inline text-green-300'>5</p>) x (<p className='inline text-purple-300'>59 + 5</p>)) x <p className='inline text-blue-300'>0.34</p> = <p className='inline text-orange-300'>21.76</p></td>
                            </tr>
                            <tr>
                                <td className='border-l'>Classworks</td>
                                <td className='border-l text-purple-300'>10</td>
                                <td className='border-l text-green-300'>5</td>
                                <td className='border-l text-yellow-300'>5</td>
                                <td className='border-l'><p className='inline text-orange-300'>5</p>/<p className='inline text-purple-300'>10</p>  = <p className='inline text-blue-300'>0.5</p></td>
                                <th className='border-l text-red-300'>N/A</th>
                                <td className='border-l'>((5/<p className='inline text-green-300'>5</p>) x <p className='inline text-purple-300'>10</p>) x <p className='inline text-blue-300'>0.5</p> = <p className='inline text-orange-300'>5</p></td>
                            </tr>
                            <tr>
                                <td className='border-l'>Homeworks</td>
                                <td className='border-l text-purple-300'>15</td>
                                <td className='border-l text-green-300'>2</td>
                                <td className='border-l text-yellow-300'>5</td>
                                <td className='border-l'><p className='inline text-orange-300'>5</p>/<p className='inline text-purple-300'>15</p>  = <p className='inline text-blue-300'>0.334</p></td>
                                <th className='border-l text-red-300'>N/A</th>
                                <td className='border-l'>((2/<p className='inline text-green-300'>2</p>) x <p className='inline text-purple-300'>15</p>) x <p className='inline text-blue-300'>0.334</p> = <p className='inline text-orange-300'>5.01</p></td>
                            </tr>
                            <tr>
                                <td className='border'>Total</td>
                                <td className='border text-purple-300'>111</td>
                                <td className='border text-green-300'>N/A</td>
                                <td className='border text-yellow-300'>110</td>
                                <td className='border text-blue-300'>N/A</td>
                                <th className='border text-red-300'>N/A</th>
                                <td className='border text-orange-300'>111.775</td>
                            </tr>
                        </tbody>
                    </table>
                    If you find this table confusing, feel free to ask me or Ryan during recitation and tutoring.
                </div>
            </div>
            <div className='mb-5 bg-gray-700 p-5 rounded-md'>
                <div id="rubric" className="font-semibold pb-2 text-md md:text-lg lg:text-xl xl:text-2xl">
                    <HashLink to="#rubric" className="hover:opacity-50"># </HashLink> 
                    <h1 className="inline hover:underline">What will I be graded on?</h1> 
                </div>
                <div className="text-sm md:text-md lg:text-lg xl:text-xl">
                    The grading rubric for the extra credit project is as follows:
                    <table className="table-auto text-center border-collapse border w-full my-2">
                        <thead>
                            <tr className='border'>
                                <th className='border px-1'>Topic</th>
                                <th className='border px-1'>Points</th>
                                <th className='border px-1'>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border px-1'>Grades</td>
                                <td className='border px-1'>3</td>
                                <td className='border px-1'>The code is able to calculate the final grade of a student based on the student's name or emplid from the csv file.</td>
                            </tr>
                            <tr>
                                <td className='border px-1'>Letter Grades</td>
                                <td className='border px-1'>1</td>
                                <td className='border px-1'>In addition to the number grade, it is possible to calculate the letter grade of a student given their name or emplid.</td>
                            </tr>
                            <tr>
                                <td className='border px-1'>Design</td>
                                <td className='border px-1'>1</td>
                                <td className='border px-1'>Student's submission shows that they planned out their functions and classes in a manner that makes sense and is practical.</td>
                            </tr>
                            <tr>
                                <td className='border px-1'>Documentation</td>
                                <td className='border px-1'>1</td>
                                <td className='border px-1'>The code is properly documented and organized based on C++ standards. Use the same style that I used for commenting functions in project 1 and project 2 function descriptions.</td>
                            </tr>
                            <tr>
                                <td className='border px-1'>OOP</td>
                                <td className='border px-1'>2</td>
                                <td className='border px-1'>Uses Object-Oriented-Programming paradigm in the solution with classes that contain private data-members and necessary member functions.</td>
                            </tr>
                            <tr>
                                <td className='border px-1'>Testing</td>
                                <td className='border px-1'>1</td>
                                <td className='border px-1'>Student provides a main function that shows proper testing of functions and classes.</td>
                            </tr>
                            <tr>
                                <td className='border px-1'>Additional</td>
                                <td className='border px-1'>1</td>
                                <td className='border px-1'>In addition to being able to calculate one student's final grade, atleast three other functionality are added. For example: being able to calculate the mean, median, std, etc. You can add whatever you want to as long as it makes sense.</td>
                            </tr>
                            <tr>
                                <td className='border px-1'>Total</td>
                                <td className='border px-1'>10</td>
                                <td className='border px-1 text-red-300'>IT IS NECESSARY THAT YOUR CODE COMPILES. IF IT DOESN'T COMPILE, YOU WILL NOT GET ANY POINTS.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='mb-5 bg-gray-700 p-5 rounded-md'>
                <div id="tools" className="font-semibold pb-2 text-md md:text-lg lg:text-xl xl:text-2xl">
                    <HashLink to="#tools" className="hover:opacity-50"># </HashLink> 
                    <h1 className="inline hover:underline">What am I allowed to use?</h1> 
                </div>
                <div className="text-sm md:text-md lg:text-lg xl:text-xl">
                    You can use anything we learned in class to do this project. In addition, you may use the <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">string.find()</p> function and <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">stod()</p> function. I will briefly cover them in class and you can also learn about them here: <a className="text-blue-300 underline" href="https://cplusplus.com/reference/string/string/find/" target='_blank'>find</a> and <a className="text-blue-300 underline" href="https://cplusplus.com/reference/string/stod/" target='_blank'>stod</a>. Here is  <a className="text-blue-300 underline" href={helper} download="helper.cpp">a file with some helper functions</a> that can help you with the project. You are not allowed to copy and paste code from online or any AI tools. This is not a group work so your project should not be identical or extremely similar to someone else's work. <p className='inline text-red-300'>Any violation of academic integrity will result in a 0 for this assignment</p>. Tutoring will be available for the extra credit but it will be limited. The tutor is not allowed to suggest any approaches. He can help you debug your code and point out any flaws in your approach. You should only consider doing this if you already finished project 2.
                </div>
            </div>
            <div className='mb-5 bg-gray-700 p-5 rounded-md'>
                <div id="submission" className="font-semibold pb-2 text-md md:text-lg lg:text-xl xl:text-2xl">
                    <HashLink to="#submission" className="hover:opacity-50"># </HashLink> 
                    <h1 className="inline hover:underline">What do I need to submit?</h1> 
                </div>
                <div className="text-sm md:text-md lg:text-lg xl:text-xl">
                    You will submit your project on gradescope. However, there is no autograder so you won't see any grade immediately. Submit any file(s) I need to compile your project. I will use my own <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">.csv</p> file so if you created one yourself, it is not necessary to provide it. In addition to the files required to compile your code, you must submit a text file named <p className="inline bg-gray-500 text-white font-mono rounded-md px-2">readme.txt</p> which needs to have the following:<br/>
                    - Instructions to compile and run your code.<br/>
                    - Instructions to get a student's final grade given the student's emplid or name.<br/>
                    - If you implemented additional functionality, list them so that I can test them and give you credit.
                </div>
            </div>
        </div>
    )
}