import React, { useState } from 'react';
import { RowItem } from '../../interfaces';

import Row from '../Row/Row';
import './Table.css';

interface Props {
    data: RowItem[];
    rowCount: number;
    step: number;
}

const Table: React.FC<Props> = ({data, rowCount, step}: Props): JSX.Element => {
    const [rowCounter, setRowCounter] = useState(rowCount);
    const [inputValue, setInputValue] = useState('');

    const showMoreRows = (): void => {
        setRowCounter(rowCounter + step);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return (
            <div className="table-container">
                <input type="text" placeholder="Поиск" className="search-input" value={inputValue} onChange={handleChange}/>
                <div className="row-container">
                <div className="row">
                    <div className="cell cell-header">Id</div>
                    <div className="cell cell-header">Title</div>
                    <div className="cell cell-header">Body</div>
                    <div className="cell cell-header">User id</div>
                    <div className="cell cell-header"></div>
                </div>
                {
                    data.length > 0 && data.slice(0, rowCounter)
                    .filter((item) => `${item.body}${item.id}${item.title}${item.userId}`.includes(inputValue))
                    .map((rowData, index) => <Row key={index} data={rowData} />)
                }
                </div>
                <button className="button" onClick={showMoreRows} disabled={rowCounter >= data.length}>Показать еще</button>
            </div>
        
    )
}

export default Table;