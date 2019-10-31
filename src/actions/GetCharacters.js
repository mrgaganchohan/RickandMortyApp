// Setting the current page ion home page for pagination purposes
export const setCurrentPage = (current_page) => dispatch =>
{
    dispatch({ type: 'current_Page', payload: current_page })
}

export const setLastPage = (last_page) => dispatch =>
{
    dispatch({type: 'last_Page', payload: last_page})
}


export const setCharacters = (characters) => dispatch =>
{
    dispatch({type: 'characters', payload: characters})
}

export const setSearchTerm = (SearchTerm) => dispatch =>
{
    dispatch({
        type: 'SearchTerm', payload: SearchTerm
    })
}