// actions
export const APPEND_NEW_RESULTS = 'APPEND_NEW_RESULTS'




export const receiveNewSearch = searchText => {
    console.log({a:searchText})
    
    return dispatch => {
        return fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
        .then((resp) => resp.json())
        .then(function(data) {
          dispatch(appendNewResults(data)) 
    })
}
}

// action creators
export const appendNewResults = results =>  ({
    type: APPEND_NEW_RESULTS,
    results: results
})


//reducere gidecek