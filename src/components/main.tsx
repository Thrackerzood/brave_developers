import React from 'react'
import {propType} from '../types/types'
import {OperatorsDiv, OperatorsDivImg, OperatorsA, OperatorsP, OperatorsImg} from '../style-components/style'

interface typeOperator {
   operators: propType[]
}

export const Main: React.FC<typeOperator> = ({operators}) => 
<main>
   {operators.map(e=>
      <OperatorsDiv key={e.id}>
         <OperatorsA href={e.name} >
            <OperatorsDivImg>
            <OperatorsImg src={e.img} alt={e.name}/>
            </OperatorsDivImg>
            <OperatorsP>{e.name}</OperatorsP>
         </OperatorsA>
      </OperatorsDiv>
      )}
</main>
