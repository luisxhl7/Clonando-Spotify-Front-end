
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
export const loginURL = `${endpoint}?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scope.join("%20")}&show_dialog=true`;
/*
export const getTokenFromURL = () => {
  return window.location.hash //retorna la parte ancla de un URL desde el #
    .substring(1) //extrae el primer caracter e imprime el resto de la cadena en este caso el # 
    .split("&") //Divide una cadena de texto en un array de cadenas mediante el &
    .reduce((initial, item) => {

      let parts = item.split("=")
      console.log(parts)
      initial[parts[0]] = decodeURIComponent(parts[1])
      return initial
    })
}

*/