import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RowItem } from '../interfaces';
import { State } from '../Store/reducer';

import Row from './Row';

interface Props {
    data: RowItem[];
    rowCount: number;
    step: number;
}

const Table: React.FC<Props> = ({data, rowCount, step}: Props): JSX.Element => {
    const [rowCounter, setRowCounter] = useState(rowCount);
    const [inputValue, setInputValue] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const [isNotFound, setIsNotFound] = useState(false);
    const isLoading = useSelector((state: State) => state.isLoading);

    useEffect(() => {
        setFilteredData(data.slice(0, rowCounter));

        if (inputValue) {
            setIsNotFound(false);
            setFilteredData(filteredData => {
               const newData = filteredData.filter((item) => `${item.body}${item.id}${item.title}${item.userId}`
                .includes(inputValue));

                if (newData.length === 0) {
                    setIsNotFound(true);
                }
                return newData
            })
        }
    }, [data, rowCounter, inputValue])

    const showMoreRows = (): void => {
        setRowCounter(rowCounter + step);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);

        if (e.target.value === '') {
            setRowCounter(rowCount);
        }
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
                isLoading ? <span className="message">Загрузка</span> 
                    : !isNotFound ? filteredData.map((rowData, index) => <Row key={index} data={rowData} />) 
                        : <span className="message">Совпадений не найдено</span>
            }
            </div>
            <button className="button" onClick={showMoreRows} disabled={rowCounter >= data.length}>Показать еще</button>
        </div>
    )
}

export default Table;