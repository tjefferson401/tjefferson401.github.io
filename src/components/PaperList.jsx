import { Paper } from "./Paper"

export const PaperList = () => {


    return (
        <div className="paper-list">
            <h1>Papers</h1>
            <Paper
                authors={"T. Jefferson, C. Gregg, C. Piech"}
                title={"PyodideU: Unlocking Python Entirely in a Browser for CS1"}
                conference={"SIGCSE 2024"}
                picUrl={"paper1.png"}
             />
            <Paper
                authors={"A. Malik*, J. Woodrow*, B. Capoor, T. Jefferson, M. Li, S. Wang, P. Wei, D. Demszky, J. Langer-Osuna, J. Zelenski, M. Sahami, C. Piech"}
                title={"Code in Place 2023: Understanding Learning and Teaching at Scale through a Massive Global Classroom"}
                picUrl={"cookies.png"}
                url={"https://piechlab.stanford.edu/assets/papers/codeinplace2023.pdf"}
             />
        </div>
    )

}