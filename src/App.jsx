import { Player } from "./components/Player/Player";

import { useEffect, useState } from "react";
import { Login } from "./components/Login/Login";
import { getTokenFromURL } from "./spotifyLogin";

function App() {
  const [token, setToken] = useState()
  
  useEffect(()=>{
    const data = getTokenFromURL();
    //window.location.hash= "";
    const _token = data.access_token;
    setToken(_token)
    console.log("token => ",token)

  },[])

  return (
    <div>
      { 
       token ? <Player/> : <Login/>
      }
    </div>
  )
}

export default App;
