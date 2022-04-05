import s from "./Nav.module.css";
import { useRef } from "react";
import Logo from "../../assets/logo.png";
import { AiOutlineSearch } from 'react-icons/ai';
import { UilMapMarker } from '@iconscout/react-unicons';
import {IoIosArrowDown} from 'react-icons/io';
import {BsCart2} from 'react-icons/bs';

export default function Nav(){

    const searchInput = useRef(null);

    function focus (){
        searchInput.current.focus();
    }


    return(
        <nav className={s.nav}>
            <div className={s.top}>
                <img className={s.logo} src={Logo} alt="Logo" />
                <div className={s.inputContainer}>
                    <input className={s.search} ref={searchInput} type="text" placeholder="Buscar productos, marcas y más..." />
                    <div onClick={focus} className={s.searchButton} >
                        <AiOutlineSearch className={s.searchIcon} />
                    </div>
                </div>
                <img className={s.imgDisney} src="https://http2.mlstatic.com/D_NQ_877425-MLA47306668299_082021-OO.webp" alt="logocompra" />
            </div>
            <div className={s.bottom} > 
                <div className={s.location}>
                    <UilMapMarker className={s.locationIcon}/>
                    <div className={s.locationBox}>
                        <span className={s.span1}>Enviar a</span>
                        <span className={s.span2}>Capital Federal</span>
                    </div>
                </div>
                <div className={s.listaContainer}>
                    <ul className={s.lista}>
                        <li><a href="/">Categorias <IoIosArrowDown className={s.iconDown}/> </a></li>
                        <li><a href="/">Ofertas</a></li>
                        <li><a href="/">Historial</a></li>
                        <li><a href="/">Supermercado</a></li>
                        <li><a href="/">Moda</a></li>
                        <li><a href="/">Vender</a></li>
                        <li><a href="/">Ayuda</a></li>
                    </ul>
                </div>
                <div className={s.buttonsContainer}>
                    <button>Creá tu cuenta</button>
                    <button>Ingresá</button>
                    <button>Mis Compras</button>
                    <BsCart2 className={s.carIcon}/>
                </div>
            </div>
        </nav>
    )

}