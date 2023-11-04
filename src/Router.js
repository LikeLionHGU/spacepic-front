import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddPhoto from './routes/AddPhoto';
import Home from './routes/Home';
import Archive from './routes/Archive';
import { useRecoilValue } from 'recoil';
import { IsLoginState } from './store/atom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

export default function Router() {
  const isLogin = useRecoilValue(IsLoginState);
  return (
    <BrowserRouter>
      <Switch>
        <>
          <Route exact path="/">
            <Home />
          </Route>
          {isLogin ? (
            <>
              <Route exact path="/archive">
                <Archive />
              </Route>
              <Route exact path="/addphoto">
                <AddPhoto />
              </Route>
            </>
          ) : (
            <Redirect to="/" />
          )}
        </>
      </Switch>
    </BrowserRouter>
  );
}
