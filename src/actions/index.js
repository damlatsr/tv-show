// actions
export const RECEIVE_NEW_SEARCH = 'RECEIVE_NEW_SEARCH'
export const RESULT_READY = 'RESULT_READY'




// action creators
export const receiveNewSearch = searchMessage =>  ({
    type: RECEIVE_NEW_SEARCH,
    searchMessage
})


export const resultReady = results =>  ({
    type: RESULT_READY,
    results
})


//reducere gidecek