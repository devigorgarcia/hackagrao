import React from "react";
import { Switch, Route } from "react-router-dom";
import { ContextPage } from "../pages/ContextPage";
import { GamePage1 } from "../pages/GamePage1";
import { GamePage2 } from "../pages/GamePage2";
import { GamePage3 } from "../pages/GamePage3";
import { GamePage4 } from "../pages/GamePage4";
import { ObjectivePage } from "../pages/ObjectivePage";
import { PlayerPage } from "../pages/playerPage";
import { RecommendationPage } from "../pages/RecommendationPage";
import { TutorialPage } from "../pages/TutorialPage";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <ObjectivePage />
      </Route>
      <Route path={"/context"}>
        <ContextPage />
      </Route>
      <Route path={"/tutorial"}>
        <TutorialPage />
      </Route>
      <Route exact path={"/playerPage"}>
        <PlayerPage />
      </Route>
      <Route path={"/recommendation"}>
        <RecommendationPage />
      </Route>
      <Route path={"/gamePage1"}>
        <GamePage1 />
      </Route>
      <Route path={"/gamePage2"}>
        <GamePage2 />
      </Route>
      <Route path={"/gamePage3"}>
        <GamePage3 />
      </Route>
      <Route path={"/gamePage4"}>
        <GamePage4 />
      </Route>
    </Switch>
  );
};

//barterfacil/ gerenciador de ofertas / clicou, fechou/ gdvip/ negociação 5 estrelas / gestão de contratos / contratos digitais / inteligencia de mercado / serviços financeiros /
