import React from 'react';
import { useDispatch } from 'react-redux';
import { RowItem } from '../interfaces';
import { deleteData } from '../Store/actions';

interface Props {
    data: RowItem;
}

const Row: React.FC<Props> = ({data}: Props): JSX.Element => {
    const dispatch = useDispatch();
    const {id, title, body, userId} = data;

    const deleteRow = (id: number): void => {
        dispatch(deleteData(id));
    }

    return (
        <div className="row">
            <div className="cell">{id}</div>
            <div className="cell">{title}</div>
            <div className="cell">{body}</div>
            <div className="cell">{userId}</div>
            <div className="cell delete-cell" onClick={() => deleteRow(id)}>&#10006;</div>
        </div>
    )
}

export default Row;