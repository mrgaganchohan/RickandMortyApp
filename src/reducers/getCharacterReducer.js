const initialState = {
    allCharacters: [],
    currentPage: 1,
    lastPage:1,
    characters:{},
    SearchTerm:''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'current_Page':
            return {
                ...state,
                currentPage: action.payload
            }
        case 'characters':
            return {
                ...state,
                characters: action.payload
            }
            
        case 'last_Page':
            return {
                ...state,
                lastPage: action.payload
            }
        case 'SearchTerm':
            return {
                ...state,
                SearchTerm: action.payload
            }
        default:
            return state;
    }
}