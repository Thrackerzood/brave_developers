import styled from 'styled-components'

export const OperatorsDiv = styled.div`
max-width: 400px;
margin: auto;
padding: 25px;
`
export const OperatorsA = styled.a`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
font-family: Courier New, monospace;
text-decoration: none;
&:hover{
   box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
}
margin:20px;
`

export const OperatorsP = styled.p`
position: relative;
padding: 10px 20px;
font-weight: 600;
font-size: calc(100vw / 90 * 1 + 100vh / 90 * 2);
color: black;
`

export const OperatorsDivImg = styled.div`
position: relative;
margin: 30px;
`

export const OperatorsImg = styled.img`
min-width: 75px;
max-width: 100%;
`