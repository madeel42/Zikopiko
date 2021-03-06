import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, { useContext, useEffect } from "react";
import Home from './pages/Home';
import MarketPlace from "./pages/MarketPlace";
import GasMarket from "./pages/GasMarket";
import HelpCenter from "./pages/HelpCenter";
import Partners from "./pages/Partners";
import PlatformStatus from "./pages/PlatformStatus";
import StatusActivities from "./pages/StatusActivities";
import StatsRanking from "./pages/StatsRangking";
import Suggetion from "./pages/Suggetion";
import NFTform from "./components/NFTform/NFT";
import { Nftitem } from "./components/NFTform/Item/Nftitem";
import { globalContext } from './context/GlobalState'
import Nftdetails from './components/market-place/nftdetails'
const App = () => {
  const [{ web3, accounts, nftContract, nftList }, dispatch] = useContext(globalContext)
  

  //  console.log(Nftitem,web3,'NftItem');

  useEffect(() => {
    console.log('Global state in App.js', web3, nftContract, accounts, nftList);
  }, [web3, accounts, nftList]);
  return (
    <Router>
      <Switch>
        <Route path="/suggetions">
          <Suggetion />
        </Route>
        <Route path="/status-ranking">
          <StatsRanking />
        </Route>
        <Route path="/status-activities">
          <StatusActivities />
        </Route>
        <Route path="/platform-status">
          <PlatformStatus />
        </Route>
        <Route path="/partners">
          <Partners />
        </Route>
        <Route path="/help-center">
          <HelpCenter />
        </Route>
        <Route path="/gas-market">
          <GasMarket />
        </Route>
        <Route path="/market-place">
          <MarketPlace />
        </Route>
        <Route path="/nftform">
          <NFTform />
        </Route>
        <Route path="/nftitem/:id">
          <Nftitem />
        </Route>
        <Route path="/nftdetails/:id">
          <Nftdetails />
        </Route>
        <Route exact={true} path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
