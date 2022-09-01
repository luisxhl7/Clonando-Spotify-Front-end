import { AddBox, Favorite, Home } from '@mui/icons-material';
import { Search } from '@mui/icons-material';
import { LibraryMusic } from '@mui/icons-material';
import { SiderbarChoice } from "./SiderbarChoice"
import {  SidebarContainer } from "./styles"

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="logo" className="logo" />
      <SiderbarChoice title="Inicio" Icon={Home} />
      <SiderbarChoice title="Buscar" Icon={Search} />
      <SiderbarChoice title="Tu Biblioteca" Icon={LibraryMusic} />
      <hr className='separator1'/>
      <SiderbarChoice title="Crear Playlist" Icon={AddBox} />
      <SiderbarChoice title="Tus me gusta" Icon={Favorite} />
      <hr className='separator2'/>
      <SiderbarChoice title="Reggeton" />
      <SiderbarChoice title="DanceHall" />
    </SidebarContainer>
  )
}