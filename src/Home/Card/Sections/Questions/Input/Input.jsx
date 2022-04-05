
import s from "./Input.module.css";
import { useState } from "react";

export default function Input({setQuestions}){

    const [question, setQuestion] = useState("");

    function handleChange(e){
        setQuestion(e.target.value);
    }

    function addQuestion(){
        setQuestions(data => [...data,question]);
    }

    return(
        <div className={s.inputContainer}>
            <span>Preguntale al vendedor</span>
            <div className={s.box}>
                <input className={s.qInput} value={question} onChange={handleChange} placeholder="Escribí tu pregunta" type="text" />
                <button className={s.qButton} onClick={addQuestion} type="button">
                    Preguntar
                </button>
            </div> 
        </div>
    )
}