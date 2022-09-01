import styled from "styled-components";

export const BodyContainer = styled.div`
    flex: 0.9;
`
export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
    background-color: #131313;
`
export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    flex: 0.3;
    min-width: 200px;
    padding: 10px;
    background-color: #fff;
    color: #181818;
    border-radius: 30px;
    & input{
        outline: none;
        border: none;
        width: 100%;
        padding: 6px 20px 6px 10px;
    }
`
export const HeaderRight = styled.div`
    padding: 0px 5px;
    display: flex;
    align-items: center;
    color: #fff;
    border-radius: 12px;
    &:hover{
        background-color: #b3b3b3;
        cursor: pointer;
    }
    & h4{
        margin: auto 10px;
    }
`