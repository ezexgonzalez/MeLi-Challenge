import s from "./Home.module.css";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import Card from "./Card/Card";
import Footer from "./Footer/Footer";

export default function Home (){

    return(
        <main className={s.allContainer}>
            <div className={s.top}>
                <div className={s.links}>
                    <span className={s.back}>Volver al listado</span>
                    <span className={s.link}>Autos, Motos y Otros</span>
                    <MdOutlineKeyboardArrowRight className={s.iconRight}/>
                    <span className={s.link}>Autos y Camionetas</span>
                    <MdOutlineKeyboardArrowRight className={s.iconRight}/>
                    <span className={s.link}>Audi</span>
                    <MdOutlineKeyboardArrowRight className={s.iconRight}/>
                    <span className={s.link}>A3</span>
                </div>
                <div className={s.links2}>
                    <span className={s.share}>Compartir</span>
                    <span className={s.toSell}>Vender gratis mi vehículo</span>
                </div>
            </div>
            <Card/>
            <div className={s.bottom}>
                <p className={s.bottomP}>
                  Publicacion <span className={s.number}>#1125785998</span>
                </p>
                <span className={s.report}>Denunciar</span>
            </div>
            <Footer/>
        </main>
    )

}