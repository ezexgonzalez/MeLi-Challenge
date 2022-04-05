import s from "./Footer.module.css";
import { UilReact } from '@iconscout/react-unicons'

export default function Footer(){

    return(
        <footer className={s.footer}>
            <nav className={s.navFooter}>
                <span>Trabajá con nosotros</span>
                <span>Términos y condiciones</span>
                <span>Cómo cuidamos tu privacidad</span>
                <span>Información al usuario financiero</span>
                <span>Ayuda</span>
                <span>Defensa del Consumidor</span>
                <span>Información sobre seguros</span>
            </nav>
            <div className={s.info}>
                <div className={s.column}>
                    <span>Copyright © 1999-2022 MercadoLibre S.R.L.</span>
                    <span>Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA</span>
                </div>
                <span className={s.copy}>Web realizada con ReactJS <UilReact className={s.reactIcon}/> </span>
                <a href="https://portfolio-ezexgonzalez.vercel.app/" rel="noreferrer" target="_blank" className={s.portfolio}>Ezequiel Gonzalez Full Stack Developer</a>
            </div>
        </footer>
    )
}