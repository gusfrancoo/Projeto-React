import "./Row.css";
import {ReactNode} from 'react';

interface RowProps{
    children: ReactNode
}

function Row({children}: RowProps){
    return(
        <div className="row">
            {children}
        </div>
    )
}
export default Row;