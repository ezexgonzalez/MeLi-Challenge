import s from "./Questions.module.css";
import Input from "./Input/Input";
import { useState } from "react";
import Logo from "../../../../assets/list-icon.png";

export default function Questions (){

    const [questions, setQuestions] = useState([]);

    return(
        <section className={s.questions}>
            <h2>Preguntas y respuestas</h2>
            <Input setQuestions={setQuestions}/>
            <span className={s.subtitle}>Últimas realizadas</span>
            {
                questions.length > 0 ? questions.map((question,i) =>(
                    <div className={s.answerContainer} key={i}>
                            <span className={s.question}>{question}</span>
                        <div className={s.answer}>
                            <img className={s.logo} src={Logo} alt="icon" />
                            <span>Hola! como estas? Gracias por tu consulta.</span>
                        </div>
                    </div>
                )) : <span className={s.message}>Nadie hizo preguntas todavía. ¡Hacé la primera!</span>
            }
        </section>
    )
}