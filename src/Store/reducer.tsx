import { RowItem } from "../interfaces";
import { ActionTypes, DELETE_DATA_SUCCESS, GET_TABLE_DATA_SUCCESS, START_LOADING_DATA } from "./actions";

export interface State {
    data: RowItem[],
    isLoading: boolean;
}

const initialState: State = {
    data: [],
    isLoading: false,
}


export const reducer = (state = initialState, action: ActionTypes): State => {
    switch(action.type) {
        case START_LOADING_DATA: 
            return {
                ...state,
                isLoading: true
            }
        case GET_TABLE_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        case DELETE_DATA_SUCCESS: 
            const filteredData = state.data.filter((item) => item.id !== action.payload)
            return {
                ...state,
                data: filteredData
            }
        default: return state;
    }
   
}