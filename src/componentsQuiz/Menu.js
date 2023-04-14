import "../QApp.css";
import { useContext, useState } from "react";
import { GameStateContext } from "../helperQuiz/Contexts";
import Quiz from "./Quiz";

function Menu() {
    const { gameState, setGameState, userName, setUserName } = useContext(
        GameStateContext
    );

    const [selectedTopic, setSelectedTopic] = useState("");

    const handleSelectTopic = (event) => {
        setSelectedTopic(event.target.value);
    };

    const startQuiz = () => {
        setGameState("playing");
    };

    return (
        <div className="Menu">
            <div>
                <h1 id="quizhead">Quiz App</h1>
                <div>
                    <label className="qmenulabel">Enter Your Name :</label>
                    <input
                        type="text"
                        placeholder="Ex. John Smith"
                        onChange={(event) => {
                            setUserName(event.target.value);
                        }}
                        style={{ paddingLeft: "15px" }}
                    />
                    <label className="qmenulabel">Choose a Topic :</label>
                    <select onClick={handleSelectTopic}>
                        <option value="">General</option>
                        <option value="cs">Communication Skills</option>
                        <option value="pd">Personality Development</option>
                        <option value="ss">Soft Skills</option>
                    </select>
                    <br />
                    <button className="qbutton" onClick={startQuiz}>
                        Start Quiz
                    </button>
                </div>
            </div>
            { (
                <Quiz selectedTopic={selectedTopic} />
            )}
        </div>
    );
}
export default Menu;
