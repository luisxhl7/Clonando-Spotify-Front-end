import styled from "styled-components";

export const SidebarContainer = styled.div`
    flex: 0.2;
    height: 100vh;
    background-color: #000000;
    min-width: 240px;
    color: #fff;
    & img{
        height: 70px;
        padding: 10px;
        margin-right: auto;
    }
    & hr{
        border: 1px solid #979797;
        width: 90%;
        margin: 10px auto;
    }
`
export const Playlist = styled.div`
    margin: 5px 10px;
`
export const ChoiceOptions = styled.div`
    display: flex;
    align-items: center;
    color: gray;
    height: 44px;
    transition: 300ms color ease-in;
    cursor: pointer;
    &:hover{
        color: #fff;
    }
    & h5{
        margin: 10px 0px 0px 20px;
    }
`