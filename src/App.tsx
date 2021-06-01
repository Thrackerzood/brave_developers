import React from 'react'
import {Main} from './components/main'
import {Footer} from './components/footer'
import {propType} from './types/types'

const App: React.FC = () => {
  const operators:propType[] =  [
    {id: 1, name: 'МТС',img: 'https://sigmatravel.by/assets/templates/modxhost/img/logo_mts.png'},
    {id: 2, name: 'Билайн', img: 'https://static.beeline.ru/upload/images/mobile-apps-landing/logo.png'},
    {id: 3, name: 'Мегафон', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/MegaFon_logo_without_text.svg/2048px-MegaFon_logo_without_text.svg.png'}
  ]
  return (<>
            <Main operators={operators}/>
            <Footer/>
          </>)
}

export default App;
