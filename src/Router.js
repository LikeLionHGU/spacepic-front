import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AddPhoto from './routes/AddPhoto';
import Home from './routes/Home';
import Archive from './routes/Archive';
import { useRecoilValue } from 'recoil';
import { IsLoginState } from './store/atom';

export default function Router() {
  const isLogin = useRecoilValue(IsLoginState);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {isLogin && (
          <>
            <Route exact path="/archive">
              <Archive />
            </Route>
            <Route exact path="/addphoto">
              <AddPhoto />
            </Route>
          </>
        )}
        {!isLogin && <Redirect to="/" />}
      </Switch>
    </BrowserRouter>
  );
}
