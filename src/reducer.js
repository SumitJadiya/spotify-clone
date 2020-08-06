export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    // remove after finished developing
    token: 'BQCxT-vqPAs8cnCS3AGGhBILkzrgptFlD3_aPe5vk7eUeyQaTVfIRJ8pjjw5tOKfMoKMMZrA3_jU68VWB2eHah2Qytciqgh5-GBjVnyfl-gj4FnVufD5AnurZrRlJHUAzwOjUIZHLrvXczdGosgA6aRXTCksayztq33fL2n5XOeusFxk'
}

const reducer = (state, action) => {

    // first step should be console.log(action)
    console.log(action)
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        default:
            return state;
    }
}

export default reducer;