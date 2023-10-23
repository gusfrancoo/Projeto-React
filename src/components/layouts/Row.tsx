import styles from "./Row.module.css";
import {ReactNode} from 'react';

interface RowProps{
    children: ReactNode
}

function Row({children}: RowProps){
    return(
        <div className={`row ${styles.row}`}>
            {children}
        </div>
    )
}
export default Row;