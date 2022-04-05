import s from "./Grid.module.css";


export default function Grid() {

    return (
        <section className={s.sectionCharacters}>
            <h2 className={s.title}>Características principales</h2>
            <table className={s.andesTable}>
                <tbody>
            <tr>
                <th className={s.tableTh}>Marca</th>
                <td className={s.tableTd}>Audi</td>
            </tr>
            <tr>
                <th className={s.tableThColor}>Modelo</th>
                <td className={s.tableTdColor}>A3</td>
            </tr>
            <tr>
                <th className={s.tableTh}>Año</th>
                <td className={s.tableTd}>2012</td>
            </tr>
            <tr>
                <th  className={s.tableThColor}>Color</th>
                <td  className={s.tableTdColor}>Blanco</td>
            </tr>
            <tr>
                <th className={s.tableTh}>Tipo de combustible</th>
                <td className={s.tableTd}>Nafta</td>
            </tr>
            <tr>
                <th className={s.tableThColor}>Puertas</th>
                <td className={s.tableTdColor}>3</td>
            </tr>
            <tr>
                <th className={s.tableTh}>Transmisión</th>
                <td className={s.tableTd}>Manual</td>
            </tr>
            <tr>
                <th className={s.tableThColor}>Motor</th>
                <td className={s.tableTdColor}>1.4</td>
            </tr>
            <tr>
                <th className={s.tableTh}>Tipo de carrocería</th>
                <td className={s.tableTd}>Hatchback</td>
            </tr>
            <tr>
                <th className={s.tableThColor}>Kilómetros</th>
                <td className={s.tableTdColor}>88000 km</td>
            </tr>
            </tbody>
            </table>
        </section>
    )
}