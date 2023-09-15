import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddPhoto from './routes/AddPhoto';
import Home from './routes/Home';
import Finished from './routes/Finished';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/addphoto">
            <AddPhoto />
          </Route>
          <Route exact path="/finished">
            <Finished />
          </Route>
        </>
      </Switch>
    </BrowserRouter>
  );
}
