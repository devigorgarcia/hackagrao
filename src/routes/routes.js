import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { GamePage1 } from '../pages/GamePage1'
import { GamePage2 } from '../pages/GamePage2'
import { GamePage3 } from '../pages/GamePage3'
import { GamePage4 } from '../pages/GamePage4'
import { PlayerPage } from '../pages/playerPage'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={'/playerPage'}>
        <PlayerPage/>
      </Route>
      <Route path={'/gamePage1'}>
        <GamePage1/>
      </Route>
      <Route path={'/gamePage2'}>
        <GamePage2/>
      </Route>
      <Route path={'/gamePage3'}>
        <GamePage3/>
      </Route>
      <Route path={'/gamePage4'}>
        <GamePage4/>
      </Route>
    </Switch>
  )
}

//barterfacil/ gerenciador de ofertas / clicou, fechou/ gdvip/ negociação 5 estrelas / gestão de contratos / contratos digitais / inteligencia de mercado / serviços financeiros / 