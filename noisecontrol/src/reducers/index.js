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

