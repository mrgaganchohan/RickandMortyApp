const initialState = {
    allCharacters: [],
    currentPage: 1,
    lastPage:1,
    characters:{},
    SearchTerm:'',
    DisplaySearchFooter: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'current_Page':
            return {
                ...state,
                currentPage: action.payload,
                SearchTerm: action.payload != 0 && state.SearchTerm || ''
            }
        case 'characters':
            var lastPageNew = action.payload.info && action.payload.info.pages || 0;
            // MEANS THE SAME THING
            //  var lastPageNew = action.payload.info ? action.payload.info.pages : 0;


            return {
                ...state,
                characters: action.payload,
                lastPage: lastPageNew
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
        case 'DisplaySearchFooter':
            return{
                ...state,
                DisplaySearchFooter: action.payload
            }
        default:
            return state;
    }
}