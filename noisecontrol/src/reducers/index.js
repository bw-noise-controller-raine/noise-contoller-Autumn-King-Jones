import {
    LOGIN,
    SUCCESS,
    FAILURE,
    FETCHING_CLASSES,
    FETCHING_SUCCESS,
    FETCHING_FAILURE
}
    from '../actions'

const initialState = {
    isLoggingIn: false,
    classes: [],
    error: null,
    fetchingData: false,
    fetchingClasses: false,
    classesFetched: false,
    savingClasses: false,
    classesSaved: false,
    updatingClasses: false,
    classesUpdated: false,
    deletingClasses: false,
    classesDeleted: false,
};

const classReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggingIn: true,
                error: ''
            };
        case SUCCESS:
            return {
                ...state,
                isLoggedIn: false
            };

        case FETCHING_CLASSES:
            return {
                ...state,
                fetchignClasses: true,
                classes: action.payload
            };

        case FETCHING_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                fetchingClasses: false,
                classes: action.payload
            };

        case FETCHING_FAILURE:
            console.log(action.payload);
            return {
                ...state,
                fetchingClasses: false,
                error: true
            }

        default:
            return state;


    }
}

export default classReducer;