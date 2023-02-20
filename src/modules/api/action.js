export const API_ACTIONS = {
    FETCH_START: 'FETCH_START_',
    FETCH_SUCCESS: 'FETCH_ACCESS_',
    FETCH_FAILURE: 'FETCH_FAILURE',
}

export const apiActions = {
    fetch: (endpoint, payload) => ({
        type:`${API_ACTIONS.FETCH_START}${endpoint.toUpperCase()}`,
        payload
    }),
    fetchAccess: (endpoint, payload) => ({
        type:`${API_ACTIONS.FETCH_SUCCESS}${endpoint.toUpperCase()}`,
        payload
    }),
    fetchFailure: (endpoint, payload) => ({
        type:`${API_ACTIONS.FETCH_FAILURE}${endpoint.toUpperCase()}`,
        payload
    })
    
}