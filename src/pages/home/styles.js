import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100vh;
    width: 80%;

    header{
        display: flex;
        flex-direction: column;
    }

    section{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        border: 1px solid #61dafb;
        width: 100%;
        height: 200px;
    }

    @media (min-width: 700px){
        header{
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            input{
                height: 45px;
            }
        }

        section{
            flex-direction: row;
        }
    }
`