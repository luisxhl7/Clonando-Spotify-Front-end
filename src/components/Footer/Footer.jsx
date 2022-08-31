import { AspectRatio, FavoriteBorder, PlaylistPlay, Shuffle, VolumeDown } from "@mui/icons-material";
import { SkipPrevious } from "@mui/icons-material";
import { PlayCircleOutline } from "@mui/icons-material";
import { SkipNext } from "@mui/icons-material";
import { Repeat } from "@mui/icons-material";
import { Grid, Slider } from "@mui/material";
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
                <FavoriteBorder/>
                <AspectRatio/>
            </FooterLeft>
            <FooterCenter>
                <Shuffle/>
                <SkipPrevious/>
                <PlayCircleOutline/>
                <SkipNext/>
                <Repeat/>
            </FooterCenter>
            <FooterRight>
                <Grid container spacing={2}>
                    <Grid item><PlaylistPlay /></Grid>
                    <Grid item><VolumeDown /></Grid>
                    <Grid item xs><Slider /></Grid>
                </Grid>
            </FooterRight>
        </FooterContainer>
    )
}
