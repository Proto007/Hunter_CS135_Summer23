export default function Schedule(){
    return(
        <table className="border-collapse border border-slate-500 font-mono w-10/12">
            <thead>
                <tr className="bg-black text-white">
                    <th className="border border-slate-600 p-3">Date</th>
                    <th className="border border-slate-600 p-3">Topics</th>
                    <th className="border border-slate-600 p-3">Slides</th>
                    <th className="border border-slate-600 p-3">Labs</th>
                </tr>
            </thead>
            <tbody>
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
                        <a target="_blank" href="https://maryash.github.io/135/slides/2.1%20Variables.pdf">Variables</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/2.2%20Arithmetic.pdf">Arithmetic</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/2.3%20Input%20and%20Output%20_%202.4%20PS%20First%20Do%20It%20By%20Hand.pdf">Input and Output</a><br/>
                        <a target="_blank" href="https://maryash.github.io/135/slides/2.5%20Strings.pdf">Strings</a><br/>
                    </td>
                    <td className="border border-slate-700 p-0 text-center text-blue-700 font-bold">
                        <a target="_blank" href="https://maryash.github.io/135/labs/lab_01.html">Lab 1</a><br/>
                        <a target="_blank" href="/Hunter_CS135_Summer23/recitation_slides/Lab_1.pdf">Slides</a><br/>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}