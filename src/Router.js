import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import AddPhoto from './routes/AddPhoto';
import Home from './routes/Home';
import Archive from './routes/Archive';
import { useRecoilValue } from 'recoil';
import { IsLoginState } from './store/atom';
import AddPhotoView from './components/AddPhotoView';

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
              <AddPhotoView />
            </Route>
          </>
        )}
        {!isLogin && <Redirect to="/" />}
      </Switch>
    </BrowserRouter>
  );
}
