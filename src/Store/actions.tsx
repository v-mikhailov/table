import { Action } from "redux";
import { RowItem } from "../interfaces";

export const GET_TABLE_DATA_SUCCESS = 'GET_TABLE_DATA_SUCCESS';
export const GET_TABLE_DATA_ERROR = 'GET_TABLE_DATA_ERROR';

interface AppAction extends Action { 
    payload?: any;
}

interface GetTableDataSuccess extends AppAction {
    type: typeof GET_TABLE_DATA_SUCCESS,
    payload: RowItem[];
    //исправить
}


export type ActionTypes =  GetTableDataSuccess;

export const getTableData = () => {
    return async (dispatch: any)=> {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const tableData = await response.json();
            dispatch(getTableDataSuccess(tableData));
        } catch {
            console.log('ошибка');
        }
    }
}

const getTableDataSuccess = (tableData: RowItem[]): GetTableDataSuccess => ({
    type: GET_TABLE_DATA_SUCCESS,
    payload: tableData
})