import s from "./Conditions.module.css";
import { UilVideo } from '@iconscout/react-unicons';
import {FaRegHandshake} from "react-icons/fa";
import {GiBeachBucket} from "react-icons/gi";
import {AiOutlineUser} from "react-icons/ai";
import {BsHouse} from "react-icons/bs";
import {AiOutlineDollar} from "react-icons/ai";

export default function Conditions(){

    return(
        <div className={s.mainContainer}>
            <h2>Condiciones y servicios especiales</h2>
            <div className={s.allContainer}>
                <div className={s.boxContainer}>
                    <div className={s.box}>
                        <div className={s.iconBackground}>
                            <UilVideo className={s.icon}/>
                        </div>
                        <span>Tours virtuales</span>
                    </div>
                    <div className={s.box}>
                        <div className={s.iconBackground}>
                            <FaRegHandshake className={s.icon}/>
                        </div>
                        <span>Acepta permuta</span>
                    </div>
                </div>
                <div className={s.boxContainer}>
                    <div className={s.box}>
                        <div className={s.iconBackground}>
                            <GiBeachBucket className={s.icon}/>
                        </div>
                        <span>Sanitiza el vehiculo</span>
                    </div>
                    <div className={s.box}>
                        <div className={s.iconBackground}>
                            <AiOutlineUser className={s.icon}/>
                        </div>
                        <span>Único dueño</span>
                    </div>
                </div>
                <div className={s.boxContainer}>
                    <div className={s.box}>
                        <div className={s.iconBackground}>
                            <BsHouse className={s.icon}/>
                        </div>
                        <span>Entrega a domicilio</span>
                    </div>
                    <div className={s.box}>
                        <div className={s.iconBackground}>
                            <AiOutlineDollar className={s.icon}/>
                        </div>
                        <span>Precio negociable</span>
                    </div>
                </div>
            </div>
        </div>
    )
}