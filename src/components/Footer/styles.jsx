import styled from "styled-components";

export const FooterContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    height: 90px;
    width: 100vw;
    background-color: #181818;
    color: #fff;
    & .MuiSlider-thumb{
        display: none;
    }
`
export const FooterLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    min-width: 300px;
    color: #b2b2b2;
    transition: 300ms color ease-in;

    & .MuiSvgIcon-root{
        margin: auto 8px;
        font-size: 18px;
        cursor: pointer;
        &:hover{
            color: #fff;
        }
    }
    & div{
        margin-right: 17px;
    }
    & h4{
        color: #fff;
    }
`
export const FooterRight = styled.div`
    flex: 0.3;
    display: flex;
    & .MuiSlider-root{
        min-width: 90px;
        font-size: 1px;
        color: #fff;
        margin: 0px 20px 0px -10px;
        margin-right: 20px;
        &:hover{
            color: #00ff00;
            & .MuiSlider-thumb{
                height: 10px;
                width: 10px;
                color: #fff;
                display: block;
            }
        }
    }
    & .MuiSvgIcon-root{
        font-size: 22px;
        cursor: pointer;
        color: #b2b2b2;
        margin: -3px;
        padding: 0px;
        &:hover{
            color: #fff;
            transition: 300ms color ease-in;
        }
    }
    & .MuiGrid-root{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
    }
`
export const FooterCenter = styled.div`
    flex: 0.4;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 300px;
    max-width: 100%;
    color: #b2b2b2;
    & .MuiGrid-root{
        padding-top: 12px;
        display: flex;
        max-width: 300px;
        min-width: 100%;
        justify-content: space-evenly;
        display: flex;
        align-items: center;
        & p{
            font-size: 12px;
        }
    }
    & .MuiSlider-root{
        width: 80%;
        font-size: 1px;
        margin: auto 0px;
        color: #fff;
        &:hover{
            color: #00ff00;
            & .MuiSlider-thumb{
                height: 10px;
                width: 10px;
                color: #fff;
                display: block;
            }
        }
    }
`
export const OptionsPlay = styled.div`
    padding: 12px 0px 0px;
    display: flex;
    max-width: 300px;
    min-width: 40%;
    justify-content: space-evenly;
    align-items: center;
    & .MuiSvgIcon-root{
        margin: 0px -10px;
        font-size: 22px;
        cursor: pointer;
        &:hover{
            color: #fff;
            transition: 300ms color ease-in;
        }
        &:active{
            color: #b2b2b2;
            transition: none;
        }
    }
`