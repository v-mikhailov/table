import React, { useState } from 'react';
import { RowItem } from '../../interfaces';

import Row from '../Row/Row';
import './Table.css';

interface Props {
    data: RowItem[];
    rowCount: number;
}

const Table: React.FC<Props> = ({data, rowCount}: Props): JSX.Element => {
    const [rowCounter, setRowCounter] = useState(rowCount);

    const showMoreRows = (): void => {
        setRowCounter(rowCounter + 10);
    }

    return (
        <React.Fragment>
            <div className="table-container">
                <div className="row">
                    <div className="cell">id</div>
                    <div className="cell">title</div>
                    <div className="cell">body</div>
                    <div className="cell">userId</div>
                </div>
                {
                    data.length > 0 && data.map((rowData, index) => {
                        if (index < rowCounter) {
                            return <Row key={index} data={rowData} />
                        } else {
                            return <></>
                        }
                        
                    })
                }
            </div>
            <button className="button" onClick={showMoreRows} disabled={rowCounter >= data.length}>Показать еще</button>
        </React.Fragment>
    )
}

export default Table;