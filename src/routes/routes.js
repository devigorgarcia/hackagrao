import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { ContextPage } from '../pages/ContextPage'
import { GamePage } from '../pages/GamePage1'

import { InitialPage } from '../pages/InitialPage'
import { ObjectivePage } from '../pages/ObjectivePage'
import { RecommendationPage } from '../pages/RecommendationPage'
import { TutorialPage } from '../pages/TutorialPage'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={'/'}>
        <InitialPage/>
      </Route>
      <Route path={'/game'}>
        <GamePage/>
      </Route>
      <Route path={'/objective'}>
        <ObjectivePage/>
      </Route>
      <Route path={'/context'}>
        <ContextPage/>
      </Route>
      <Route path={'/tutorial'}>
        <TutorialPage/>
      </Route>
      <Route path={'/recommendation'}>
        <RecommendationPage/>
      </Route>
    </Switch>
  )
}

//barterfacil/ gerenciador de ofertas / clicou, fechou/ gdvip/ negociação 5 estrelas / gestão de contratos / contratos digitais / inteligencia de mercado / serviços financeiros / 