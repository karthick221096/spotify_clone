export const authEndpoint = "https://accounts.spotify.com/authorize"
const redirectUri = "http://localhost:3000/";

//i got the client Id from spotify developer page
const clientId = "16e6699504cb4bec98113ff701839c24";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

//the below code will create a link to hit/redirect spotify login page 
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;