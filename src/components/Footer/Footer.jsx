import { AspectRatio, CreateOutlined, FavoriteBorder, PhonelinkOutlined, PlaylistPlay, Shuffle, VolumeUpOutlined } from "@mui/icons-material";
import { SkipPrevious } from "@mui/icons-material";
import { PlayCircle } from "@mui/icons-material";
import { SkipNext } from "@mui/icons-material";
import { Repeat } from "@mui/icons-material";
import { Grid, Slider } from "@mui/material";
import { turn } from "./animation";
import { FooterCenter, FooterContainer, FooterLeft, FooterRight, OptionsPlay } from "./styles";
import './styles.css'
export const Footer = () => {

    return (
        <FooterContainer>
            <FooterLeft>
                <img src="https://static.posters.cz/image/750/buque-costero/coldplay-parachutes-album-cover-i56853.jpg" alt="cover" className="disk1" id="disk1"/>
                <div>
                    <h4>november rain</h4>
                    <p>Guns of rose</p>
                </div>
                <FavoriteBorder/>
                <AspectRatio/>
            </FooterLeft>
            <FooterCenter>
                <OptionsPlay>
                    <Shuffle/>
                    <SkipPrevious id="buttonSkip"/>
                    <PlayCircle id="buttonPlay" onClick={()=>{turn()}}/>
                    <SkipNext id="buttonReturn"/>
                    <Repeat/>
                </OptionsPlay>
                <Grid container spacing={2}>
                    <p>2:32</p>
                    <Slider item xs/>
                    <p>1:28</p>
                </Grid>
            </FooterCenter>
            <FooterRight>
                <Grid container spacing={2}>
                    <Grid item><CreateOutlined/></Grid>
                    <Grid item><PlaylistPlay /></Grid>
                    <Grid item><PhonelinkOutlined/></Grid>
                    <Grid item><VolumeUpOutlined /></Grid>
                    <Grid item s><Slider /></Grid>
                </Grid>
            </FooterRight>
        </FooterContainer>
    )
}

