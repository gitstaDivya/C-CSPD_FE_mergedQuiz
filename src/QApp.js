import React, { useState } from "react";
import './QApp.css'
import "./App.css";
import Menu from "./componentsQuiz/Menu";
import Quiz from "./componentsQuiz/Quiz";
import EndScreen from "./componentsQuiz/EndScreen";
import { GameStateContext } from "./helperQuiz/Contexts";
import Solutions from "./componentsQuiz/Solutions";

const QApp = () => {
    const [gameState, setGameState] = useState("menu");
    const [userName, setUserName] = useState("");
    const [score, setScore] = useState(0);

    return (
        <div className="QApp">
            <h1>Quizi App</h1>
            <GameStateContext.Provider
                value={{
                    gameState,
                    setGameState,
                    userName,
                    setUserName,
                    score,
                    setScore,
                }}
            >
                {gameState === "menu" && <Menu />}
                {gameState === "playing" && <Quiz />}
                {gameState === "finished" && <EndScreen />}
                {gameState === "solutions" && <Solutions />}

            </GameStateContext.Provider>
        </div>
    );
};

export default QApp;


