export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    // remove after finished developing
    //token: "BQBCq9cSqRAUJrJ31rCB_AMA5lrMGQnv9wHeQ1ElPZKzWuY_-WQJZI_E7CMkgY-PBOkNj6no9Zpu_Yw_62voA7tmQLUG96R8m52Fx2sueiVJriVtgnE-kuAPjdwjn_JYtQWzBiyd2eo6UcSXq0t1Um20aYV0FmboSb5X7lOM8GlVTbXR"
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

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
}

export default reducer;