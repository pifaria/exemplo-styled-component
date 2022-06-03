import styled from 'styled-components'

export const Container = styled.button`
    width: 80%;
    background: ${(props) => (props.whiteSchema ? "#fff" : "#61dafb")};
    border: 1px solid ${(props) => (props.whiteSchema ? "#fff" : "#61dafb")};
    color: ${(props) => (props.whiteSchema ? "#61dafb" : "#fff")};
    border-radius: 4px;
    font-weight: 700;
    padding: 10px;
    cursor: pointer;

    :hover{ 
        background: ${(props) => (props.whiteSchema ? "#61dafb" : "#fff")};
        color: ${(props) => (props.whiteSchema ? "#fff" : "#61dafb")};     
    }

    @media (min-width: 700px){
        width: 40%;
        height: 60px;
    }
`