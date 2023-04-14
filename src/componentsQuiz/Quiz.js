import { useState, useContext } from "react";
import { GameStateContext } from "../helperQuiz/Contexts";
import { Questions as defaultQuestions } from "../helperQuiz/Questions";
import { CSQuestions } from "../helperQuiz/CSQuestions";
import { PDQuestions } from "../helperQuiz/PDQuestions";
import { SSQuestions } from "../helperQuiz/SSQuestions";
import "../QApp.css";

function Quiz({ selectedTopic }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const { score, setScore, gameState, setGameState } = useContext(
        GameStateContext
    );

    let Questions = defaultQuestions;
    if (selectedTopic === "cs") {
        Questions = CSQuestions;
    } else if (selectedTopic === "pd") {
        Questions = PDQuestions;
    } else if (selectedTopic === "ss") {
        Questions = SSQuestions;
    }

    const chooseOption = (option) => {
        setOptionChosen(option);
    };

    const nextQuestion = () => {
        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
        }

        setCurrentQuestion(currentQuestion + 1);
        setOptionChosen("");
    };

    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
    };

    const finishQuiz = () => {
        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setGameState("finished");
    };

    return (
        <div className="Quiz">
            <div className="qHeadandScore">
                <h2>
                    {currentQuestion + 1} / {Questions.length}
                </h2>
                <h2 className="questionsAhead">
                    {Questions[currentQuestion].prompt}
                </h2>
            </div>
            <div className="questions">
                <button
                    className={`qbutton ${
                        optionChosen === "optionA" ? "selected" : ""
                    }`}
                    onClick={() => {
                        chooseOption("optionA");
                    }}
                >
                    {Questions[currentQuestion].optionA}
                </button>
                <button
                    className={`qbutton ${
                        optionChosen === "optionB" ? "selected" : ""
                    }`}
                    onClick={() => {
                        chooseOption("optionB");
                    }}
                >
                    {Questions[currentQuestion].optionB}
                </button>
                <button
                    className={`qbutton ${
                        optionChosen === "optionC" ? "selected" : ""
                    }`}
                    onClick={() => {
                        chooseOption("optionC");
                    }}
                >
                    {Questions[currentQuestion].optionC}
                </button>
                <button
                    className={`qbutton ${
                        optionChosen === "optionD" ? "selected" : ""
                    }`}
                    onClick={() => {
                        chooseOption("optionD");
                    }}
                >
                    {Questions[currentQuestion].optionD}
                </button>
            </div>

            {currentQuestion === Questions.length - 1 ? (
                <button className="qbutton qfinish" onClick={finishQuiz}>
                    Finish Quiz
                </button>
            ) : (
                <button className="qbutton qnext qb200px nextQuestion" onClick={nextQuestion}>
                    Next Question
                </button>
            )}

            <button className="qbutton qrestart" onClick={restartQuiz}>
                Restart Quiz
            </button>
        </div>
    );
}

export default Quiz;