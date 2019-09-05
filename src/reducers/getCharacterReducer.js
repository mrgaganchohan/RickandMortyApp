const initialState = {
    allCharacters: [],
    currentPage: 1
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'current_Page':
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state;
    }
}