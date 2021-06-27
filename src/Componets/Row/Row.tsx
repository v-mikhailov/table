import React from 'react';
import { RowItem } from '../../interfaces';
import './Row.css';

interface Props {
    data: RowItem;
}

const Row: React.FC<Props> = ({data}: Props): JSX.Element => {
    const {id, title, body, userId} = data;

    
    return (
        <div className="row">
            <div className="cell">{id}</div>
            <div className="cell">{title}</div>
            <div className="cell">{body}</div>
            <div className="cell">{userId}</div>
        </div>
    )
}

export default Row;