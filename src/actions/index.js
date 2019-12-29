// actions oluşturuldu.
export const APPEND_NEW_RESULTS = 'APPEND_NEW_RESULTS'



//tetikleniyor ve dispatch ediliyor.
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

//actions creator
export const appendNewResults = results =>  ({
    type: APPEND_NEW_RESULTS,
    results: results
})


//reducere gidecek