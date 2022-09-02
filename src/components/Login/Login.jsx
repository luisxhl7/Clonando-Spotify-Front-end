//import { getTokenFromURL, loginURL } from "../spotifyLogin"
import { loginURL } from "../../spotifyLogin"
import { LoginButton, LoginContainer } from "./styles"

export const Login = () => {
  return (
    <LoginContainer>
      <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="logo" />
      <LoginButton href={loginURL}>Iniciar sesion</LoginButton>
    </LoginContainer>
  )
}

