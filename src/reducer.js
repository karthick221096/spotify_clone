export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item : null,
    discover_weekly: null,
    //token : "BQCo4CRI4ndnT3Crwxnpm2PeC1V6nReHHgn8foEH0bDfNpLBF4sQRXVF695svcpjFfPdpxWomU69G80d_iIOegdTSd3-babIv8097pAvZrfU_TX2R92HCN_fl8MNJ46m523gnPjm8a-BXyXt2Pu78LzJmgr_ll6PkNJby3iOArV5i9obrC0Gw_09UGJf_9UVxnQllDcU3LsiPXeIEpOI"
};

const reducer = (state , action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return{
                ...state,
                user : action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token : action.token
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists : action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly : action.discover_weekly
            }
        default:
            return state;
    }
}


export default reducer;