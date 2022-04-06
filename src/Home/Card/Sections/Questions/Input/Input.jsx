
import s from "./Input.module.css";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Input({setQuestions}){

    const [question, setQuestion] = useState("");

    function handleChange(e){
        setQuestion(e.target.value);
    }

    function addQuestion(){
        if(question.length > 0){
            setQuestions(data => [...data,question]);
            setQuestion("");
        }else{
            Swal.fire({
                text: 'Debes escribir una pregunta!',
                timer: 3000,
                timerProgressBar: true,
                backdrop: null,
                showConfirmButton: false,
                width: "300",
                position: "bottom-start",
                background: "#fff159"
              });
        }
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