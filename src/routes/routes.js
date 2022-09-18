import React from "react";
import { Switch, Route } from "react-router-dom";
import { ContextPage } from "../pages/ContextPage";
import { FeedbackPage } from "../pages/FeedbackPage";
import { GamePage1 } from "../pages/GamePage1";
import { GamePage2 } from "../pages/GamePage2";
import { GamePage3 } from "../pages/GamePage3";
import { GamePage4 } from "../pages/GamePage4";
import { InitialPage } from "../pages/InitialPage";
import { GamePageGD1 } from "../pages/GamePageGD1";
import { GamePageGD2 } from "../pages/GamePageGD2";
import { GamePageGD3 } from "../pages/GamePageGD3";
import { GamePageGD4 } from "../pages/GamePageGD4";
import { ObjectivePage } from "../pages/ObjectivePage";
import { PlayerPage } from "../pages/playerPage";
import { RecommendationPage } from "../pages/RecommendationPage";
import { TutorialPage } from "../pages/TutorialPage";
import { RankingPage } from "../pages/RankingPage";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <InitialPage />
      </Route>
      <Route path={"/objective"}>
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
      <Route path={"/feedback"}>
        <FeedbackPage />
      </Route>
      <Route path={"/gamePageGD1"}>
        <GamePageGD1 />
      </Route>
      <Route path={"/gamePageGD2"}>
        <GamePageGD2 />
      </Route>
      <Route path={"/gamePageGD3"}>
        <GamePageGD3 />
      </Route>
      <Route path={"/gamePageGD4"}>
        <GamePageGD4 />
      </Route>
      <Route path={"/ranking"}>
        <RankingPage />
      </Route>
    </Switch>
  );
};

//barterfacil/ gerenciador de ofertas / clicou, fechou/ gdvip/ negociação 5 estrelas / gestão de contratos / contratos digitais / inteligencia de mercado / serviços financeiros /
