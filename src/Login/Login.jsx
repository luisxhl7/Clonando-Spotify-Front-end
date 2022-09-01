//import { getTokenFromURL, loginURL } from "../spotifyLogin"
import { LoginButton, LoginContainer } from "./styles"

const endpoint = 'https://accounts.spotify.com/authorize';
const client_id = '9e276d6068ce414b98f162682ff28648';
const redirect_uri = 'http://127.0.0.1:5173/';
const scope = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
]
const loginURL = `${endpoint}?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scope.join("%20")}&show_dialog=true`;

const getTokenFromURL = ()=> {
  console.log(window.location.hash.substring(1).split("&")
  .reduce((initial, item) => {
    let parts = item.split("=")
    initial[parts[0]] = decodeURIComponent(parts[1])
    return initial
  },{})
  )

}

getTokenFromURL()
export const Login = () => {
  return (
    <LoginContainer>
      <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="logo" />
      <LoginButton href={loginURL}>Iniciar sesion</LoginButton>
    </LoginContainer>
  )
}

