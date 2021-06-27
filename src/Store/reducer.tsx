import { ActionTypes, GET_TABLE_DATA_SUCCESS } from "./actions";

interface State {
    data: any,
    ///написать тип
    loading: boolean;
    isError: boolean;
    // написать логику
}

const initialState: State = {
    data: [],
    loading: false,
    isError: false,
}


export const reducer = (state = initialState, action: ActionTypes): State => {
    switch(action.type) {
        case GET_TABLE_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload
            }

        default: return state;
    }
   
}