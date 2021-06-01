import styled from 'styled-components'

export const OperatorsDiv = styled.div
`max-width: 400px;
margin: auto;`

export const OperatorsP = styled.p
`position: relative;
padding: 10px 20px;
font-weight: 600;
color: black;
font-size: calc(100vw / 90 * 1 + 100vh / 90 * 1);`

export const OperatorsDivImg = styled.div
`position: relative;
margin: 30px;`

export const OperatorsImg = styled.img
`max-width: 100%;
max-height: 125px;`

export const OperatorsA = styled.a
`display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
font-family: Courier New, monospace;
text-decoration: none;
margin:20px;
text-decoration: none;
background: white;
border: solid 1px rgb(230,230,230);
padding: 5px;
border-radius: 20px;
box-shadow: 0px 5px 5px -3px rgba(34, 60, 80, 0.5);
&:hover{
   box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6) inset;
}
&:hover img{
   margin: 1px;
   max-width: 100%;
   max-height: 123px;
}
&:hover p{
   font-size: calc(100vw / 90 * 0.98 + 100vh / 90 * 0.98);
}`