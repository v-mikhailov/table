import { RowItem } from "../interfaces";

export const START_LOADING_DATA = 'START_LOADING_DATA';
export const GET_TABLE_DATA_SUCCESS = 'GET_TABLE_DATA_SUCCESS';
export const GET_TABLE_DATA_ERROR = 'GET_TABLE_DATA_ERROR';
export const DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS';

interface StartLoadingData {
    type: typeof START_LOADING_DATA,
}

interface GetTableDataSuccess {
    type: typeof GET_TABLE_DATA_SUCCESS,
    payload: RowItem[];
}

interface DeleteDataSuccess {
    type: typeof DELETE_DATA_SUCCESS;
    payload: number; 
}


export type ActionTypes =  GetTableDataSuccess | DeleteDataSuccess | StartLoadingData;

export const getTableData = () => {
    return async (dispatch: any) => {
        try {
            dispatch(startLoadingData())
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const tableData = await response.json();
            dispatch(getTableDataSuccess(tableData));
        } catch(e) {
            console.error(e)
        }
    }
}

export const deleteData = (id: number) => {
    return async (dispatch: any) => {
        try {
            await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE',
            });
            dispatch(deleteDataSuccess(id))
        } catch(e) {
            console.error(e)
        }
    }
}

const startLoadingData = (): StartLoadingData => ({
    type: START_LOADING_DATA,
})

const getTableDataSuccess = (tableData: RowItem[]): GetTableDataSuccess => ({
    type: GET_TABLE_DATA_SUCCESS,
    payload: tableData
})

const deleteDataSuccess = (id: number): DeleteDataSuccess =>({
    type: DELETE_DATA_SUCCESS,
    payload: id
})