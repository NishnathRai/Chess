import {Link} from "react-router-dom";
import OpenC from "./OpenC.jsx";

function Home() {



    return (<>
        <div className="outer" >
             <div className="upper-text" >Welcome to <span className="gg" >Chess Game! </span> </div>
             <p className="para" > I am excited to share this personal project with you, crafted using React and other technologies. Whether you're a beginner or a seasoned player, this game is designed to provide an engaging and enjoyable chess experience. Dive into the world of strategy and tactics, and challenge yourself in every move!</p>
            <Link  to="/play"  className="butt" >Explore </Link>
        </div>
            { qAndA.map( (obj,index) => < OpenC key={index+200} que={obj.que} ans={obj.ans} /> ) }
        </>
    );
}

export default Home;



const qAndA = [
    { que: "What is the primary framework used for this project?", ans: "React is the primary framework used for building the user interface." },
    { que: "Which build tool was used in this project?", ans: "Vite was used for fast development and build optimization." },
    { que: "How did you manage global state in this project?", ans: "React Context was used to manage global state across components." },
    { que: "Which CSS technique did you implement in this project?", ans: "Plain CSS was used to style the components and layout." },
    { que: "How does this project implement search or traversal algorithms?", ans: "The DFS (Depth-First Search) algorithm is used for logic implementation." },
    { que: "Which scripting language did you use to implement functionality?", ans: "JavaScript was used to implement the logic and interactivity." },
    { que: "What file format is used for writing React components?", ans: "React components were written using the JSX (JavaScript XML) file format." },
    { que: "How does Vite benefit this project compared to other tools?", ans: "Vite provides faster development and better hot-reload performance." },
    { que: "What is the purpose of DFS in your project?", ans: "DFS is used for validation of move" },
    { que: "How did you structure your project to optimize performance?", ans: "React, Vite, and DFS ensure fast, efficient rendering and computations." }
];
