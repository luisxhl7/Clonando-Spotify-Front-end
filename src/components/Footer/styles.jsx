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
`
export const FooterLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    min-width: 300px;
    color: #b2b2b2;
    transition: 300ms color ease-in;
    & img{
        height: 60px;
        width: 60px;
        margin: auto 20px;
        object-fit: contain;
    }
    & .MuiSvgIcon-root{
        margin: auto 8px;
        font-size: 18px;
        cursor: pointer;
    }
    & .MuiSvgIcon-root:hover{
        color: #fff;
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
    align-items: center;
    justify-content: center;
    margin-right: 35px;
    & .MuiSlider-root{
        color: #00ff00;
    }
`
export const FooterCenter = styled.div`
    flex: 0.4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 300px;

`