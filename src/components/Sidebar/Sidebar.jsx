import { Home } from '@mui/icons-material';
import { Search } from '@mui/icons-material';
import { LibraryMusic } from '@mui/icons-material';
import { SiderbarChoice } from "./SiderbarChoice"
import { Playlist, SidebarContainer } from "./styles"

export const Sidebar = () =>{
    return (
        <SidebarContainer>
          <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="logo" className="logo"/>
          <SiderbarChoice title="Home" Icon={Home}/>
          <SiderbarChoice title="Search" Icon={Search}/>
          <SiderbarChoice title="Library" Icon={LibraryMusic}/>
          <Playlist>PLAYLIST</Playlist>
          <hr/>
          <SiderbarChoice title="Reggeton" />
          <SiderbarChoice title="DanceHall" />
        </SidebarContainer>
    )
}