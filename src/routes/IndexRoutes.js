import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/orgnanisms/Header';
import NotfoundPage from '../components/orgnanisms/NotfoundPage';
import Details from '../components/pages/Details';
import Home from '../components/pages/Home';

const IndexRoutes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:code" component={Details} />
        <Route path="*" component={NotfoundPage} />
      </Switch>
    </Router>
  );
};

export default IndexRoutes;
