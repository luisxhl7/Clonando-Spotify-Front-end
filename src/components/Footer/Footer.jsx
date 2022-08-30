import { Shuffle } from "@mui/icons-material";
import { SkipPrevious } from "@mui/icons-material";
import { PlayCircleOutline } from "@mui/icons-material";
import { SkipNext } from "@mui/icons-material";
import { Repeat } from "@mui/icons-material";
import { FooterCenter, FooterContainer, FooterLeft, FooterRight } from "./styles";

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterLeft>
                <img src="https://static.posters.cz/image/750/buque-costero/coldplay-parachutes-album-cover-i56853.jpg" alt="cover" />
                <div>
                    <h4>guaracha corroncho</h4>
                    <p>el guizo</p>
                </div>
            </FooterLeft>
            <FooterCenter>
                <Shuffle/>
                <SkipPrevious/>
                <PlayCircleOutline/>
                <SkipNext/>
                <Repeat/>
            </FooterCenter>
            <FooterRight>right</FooterRight>
        </FooterContainer>
    )
}
