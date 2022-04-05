import s from "./Side2.module.css";
import { UilTrophy } from '@iconscout/react-unicons';

export default function Side2 (){
    
    return(
        <div className={s.side2}>
            <h2 className={s.subTitle}>Reservalo Online</h2>
            <div className={s.time}>
                <span className={s.clock}>1</span>
                <div className={s.text}>
                    <span>Pagás $ 25.000 para reservar el vehículo</span>
                    <span className={s.years}>Podés hacerlo antes o después de verlo.</span>
                </div>
            </div>
            <div className={s.time}>
                <span className={s.clock}>2</span>
                <div className={s.text}>
                    <span>Acordás el resto con el vendedor</span>
                    <span className={s.years}>Coordinás las condiciones del pago restante y la fecha de entrega del vehículo.</span>
                </div>
            </div>
            <p className={s.parrafo}>
                <span className={s.bold}>Tu reserva está protegida con Mercado Pago. </span>
                Si te arrepentís o tenés algún problema, te devolvemos tu dinero.
            </p>
            <button className={s.reserveButton}>Reservar</button>
            <div className={s.pointsContainer}>
                <UilTrophy className={s.cupIcon}/>
                <span>Sumás 250 Mercado Puntos con tu reserva.</span>
            </div>
        </div>
    )

}