import s from "./Side3.module.css";


export default function Side3 (){
    
    return(
        <div className={s.side3}>
            <h2 className={s.subTitle}>Consejos de seguridad</h2>
            <ul className={s.lista}>
                <li><span>Desde Mercado Libre, nunca te pediremos contraseñas, PIN o códigos de verificación a través de WhatsApp, teléfono, SMS o email.</span></li>
                <li><span>Reservá el vehículo solamente por Mercado Libre. No reserves con envíos de dinero. No recibas cupones de pago del vendedor.</span></li>
                <li><span>Mercado Libre no tiene vehículos bajo su custodia.</span></li>
                <li><p>Revisá el remitente de los email que envía Mercado Libre. Ante cualquier duda, entrá en
                <span className={s.span}>Creo que recibí un email falso</span>
                </p></li>
                <li><span>Desconfiá de ofertas debajo del precio de mercado.</span></li>
            </ul>
            <span className={s.link}>Ver más consejos de seguridad</span>
        </div>
    )
}