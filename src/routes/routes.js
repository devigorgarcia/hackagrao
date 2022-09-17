import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { GamePage1 } from '../pages/GamePage1'
import { PlayerPage } from '../pages/playerPage'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={'/playerPage'}>
        <PlayerPage/>
      </Route>
      <Route path={'/game1'}>
        <GamePage1/>
      </Route>
    </Switch>
  )
}

//barterfacil/ gerenciador de ofertas / clicou, fechou/ gdvip/ negociação 5 estrelas / gestão de contratos / contratos digitais / inteligencia de mercado / serviços financeiros / 