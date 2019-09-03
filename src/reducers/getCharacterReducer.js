const initialState = {
    allCharacters: [],
    currentPage: 1
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'current_Page':
            console.log("kjhasd" + action.payload)
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state;
    }
}