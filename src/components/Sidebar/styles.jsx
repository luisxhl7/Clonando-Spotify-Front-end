import styled from "styled-components";

export const SidebarContainer = styled.div`
    font-size: 0.875rem;
    flex: 0.1;
    height: 100vh;
    background-color: #000000;
    min-width: 240px;
    color: #fff;
    & img{
        height: 45px;
        padding: 22px 10px 10px 16px;
        margin: auto auto 10px;
    }
    & .separator1{
        border: 1px solid #000000;
        width: 90%;
        margin: 10px auto;
    }
    & .separator2{
        border: 0.1px solid #fff;
        width: 90%;
        margin: 10px auto;    }
    & .MuiSvgIcon-root{
        font-size: 31px;
        padding: 0px 10px 0px 0px;
    }
`
export const ChoiceOptions = styled.div`
    display: flex;
    align-items: center;
    color: #b2b2b2;
    height: 44px;
    transition: 300ms color ease-in;
    cursor: pointer;
    padding: 0px 0px 0px 20px;
    &:hover{
        color: #fff;
    }
    & h5{
        margin: 10px 0px 0px 5px;
    }
`