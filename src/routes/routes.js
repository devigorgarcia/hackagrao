import React from 'react'
import {Switch, Route} from 'react-router-dom'
import CenarioRandom from '../pages/cenarioRandom'
import { GamePage } from '../pages/Game'
import { InitialPage } from '../pages/InitialPage'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={'/'}>
        <InitialPage/>
      </Route>
      <Route path={'/game'}>
        <GamePage/>
      </Route>
    </Switch>
  )
}

//barterfacil/ gerenciador de ofertas / clicou, fechou/ gdvip/ negociação 5 estrelas / gestão de contratos / contratos digitais / inteligencia de mercado / serviços financeiros / 