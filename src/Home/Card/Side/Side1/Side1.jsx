import s from "./Side1.module.css";
import {GoVerified} from "react-icons/go";
import { UilClock } from '@iconscout/react-unicons';
import {GoLocation} from "react-icons/go";
import { UilCalender } from '@iconscout/react-unicons';

export default function Side1 (){

    return(
        <div className={s.side1}>
            <h2 className={s.subTitle}>Información de la concesionaria</h2>
            <div className={s.medium}>
                <h3>Espacio Auto</h3>
                <GoVerified className={s.iconVerified}/>
            </div>
            <span className={s.downTitle}>Empresa</span>
            <div className={s.time}>
                <UilClock className={s.clock}/>
                <div className={s.text}>
                    <span>Tiempo vendiendo en Mercado Libre</span>
                    <span className={s.years}>9 años</span>
                </div>
            </div>
            <div className={s.time}>
                <UilCalender className={s.clock}/>
                <div className={s.text}>
                    <span>Horario de atención</span>
                    <span className={s.years}>Lunes a viernes de 9 a 18hs.</span>
                </div>
            </div>
            <div className={s.time}>
                <GoLocation className={s.clock}/>
                <div className={s.text}>
                    <span>Ubicación del vehículo</span>
                    <span className={s.years}>Caballito - Capital Federal - Capital Federal</span>
                </div>
            </div>
            <span className={s.tel}>Ver Telefono</span>
        </div>
    )

}