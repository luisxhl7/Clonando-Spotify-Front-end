import { Search } from "@mui/icons-material"
import { Avatar } from "@mui/material"
import { HeaderContainer, HeaderLeft, HeaderRight } from "./styles"

export const Header = ()=>{
    return(
        <HeaderContainer>
            <HeaderLeft>
                <Search/>
                <input type="text" name="" id="" placeholder="busca tu artista,sonido o albunes"/>
            </HeaderLeft>
            <HeaderRight>
                <Avatar/>
                <h4>lucho</h4>
            </HeaderRight>
        </HeaderContainer>
    )
}