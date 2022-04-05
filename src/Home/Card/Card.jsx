import s from "./Card.module.css";
import Photos from "./Photos/Photos";
import { UilHeart } from '@iconscout/react-unicons';
import {GoVerified} from "react-icons/go";
import { UilTrophy } from '@iconscout/react-unicons';
import Side1 from "./Side/Side1/Side1";
import Side2 from "./Side/Side2/Side2";
import Side3 from "./Side/Side3/Side3";
import Conditions from "./Sections/Conditions";
import Grid from "./Sections/Grid/Grid";
import Description from "./Sections/Description/Description";
import Questions from "./Sections/Questions/Questions";

export default function Card(){

    return(
        <section className={s.card}>
            <div className={s.left}>
                <Photos/>
                <Conditions/>
                <Grid/>
                <Description/>
                <Questions />
            </div>
            <div className={s.right}>
                <div className={s.mainBox}>
                    <div className={s.topBox}>
                        <div className={s.mainInfo}>
                            <div className={s.subTitle}>
                                <span>2012 | 88.000 km · Publicado hace 25 días</span>
                            </div>
                            <div className={s.title}>
                                <h1>Audi A3 1.4 Tsi Mt 125cv</h1>
                                <UilHeart className={s.heartIcon}/>
                            </div>
                            <div className={s.verified}>
                                <span>Vendedor con </span>
                                <span className={s.verifiedSpan}>identidad verificada</span>
                                <GoVerified className={s.verifiedIcon}/>
                            </div>
                            <div className={s.cost}>
                                <span>U$S 12.500</span>
                            </div>
                        </div>
                        <div className={s.buttonsContainer}>
                            <button className={s.question}>Preguntar</button>
                            <button className={s.reserve}>Resevar</button>
                        </div>
                        <div className={s.pointsContainer}>
                            <UilTrophy className={s.cupIcon}/>
                            <span>Sumás 250 Mercado Puntos con tu reserva.</span>
                        </div>
                        <div className={s.problem}>
                            <span>¿Tuviste un problema con la publicación? </span>
                            <span className={s.help}>Avisanos.</span>
                        </div>
                    </div>
                </div>
                <Side1/>
                <Side2/>
                <Side3/>
            </div>
        </section>
    )

}