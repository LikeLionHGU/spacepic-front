import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './routes/Main';
import AddPhoto from './routes/AddPhoto';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/addphoto">
            <AddPhoto />
          </Route>
        </>
      </Switch>
    </BrowserRouter>
  );
}
