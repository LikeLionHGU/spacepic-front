import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './routes/Main';
import AddPhoto from './routes/AddPhoto';
import Home from './routes/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <Route exact path="/main">
            <Main />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/addphoto">
            <AddPhoto />
          </Route>
        </>
      </Switch>
    </BrowserRouter>
  );
}
