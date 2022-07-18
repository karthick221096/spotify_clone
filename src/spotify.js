export const authEndpoint = "https://accounts.spotify.com/authorize"

//i got the client Id from spotify developer page
const clientId = "16e6699504cb4bec98113ff701839c24";

const redirectUri = "http://localhost:3000/";


//defining the scope for spotify user
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "playlist-read-collaborative",
    "playlist-read-private"
];

//get the acces token from url 
export const getTokenFromUrl = () => {
    return window.location.hash
       .substring(1)
       .split("&")
       .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
      }, {});
  };

//the below code will create a link to hit/redirect spotify login page 
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;