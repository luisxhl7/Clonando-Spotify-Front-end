import { ArrowDropDown, Search } from "@mui/icons-material"
import { Avatar } from "@mui/material"
import { HeaderContainer, HeaderLeft, HeaderRight } from "./styles"

export const Header = ()=>{
    return(
        <HeaderContainer>
            <HeaderLeft>
                <Search/>
                <input type="text" name="" id="" placeholder="¿Qué quieres escuchar?"/>
            </HeaderLeft>
            <HeaderRight>
                <Avatar/>
                <h4>lucho</h4>
                <ArrowDropDown/>
            </HeaderRight>
        </HeaderContainer>
    )
}