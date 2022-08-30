import styled from "styled-components";

export const FooterContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    height: 70px;
    width: 100vw;
    background-color: #181818;
    color: #fff;
`
export const FooterLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    max-width: 300px;
    & img{
        height: 60px;
        width: 60px;
        margin: auto 20px;
        object-fit: contain;
    }
`
export const FooterRight = styled.div`
    flex: 0.3;
    
`
export const FooterCenter = styled.div`
    flex: 0.4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 300px;

`