import s from "./Photos.module.css";
import photos from "./data";
import { useState } from "react";

export default function Photos(){

    const [hover, setHover] = useState(0);

    return(
        <div className={s.allContainer}>
                <div className={s.previewContainer}>
                    {
                        photos.map((photo,i) => (
                            <div className={s.photoBox} key={i} onMouseEnter={()=> setHover(i)} >
                                <img className={s.photos} src={photo.src} alt="car" />
                            </div>
                        ))
                    }
                </div>
                <div className={s.photoContaienr}>
                    <img className={s.bigPhoto} src={photos[hover].src} alt="" />
                </div>
        </div>
    )

}