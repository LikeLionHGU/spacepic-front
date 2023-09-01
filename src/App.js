import { ThemeProvider } from '@mui/material/styles';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './Router';
import theme from './theme';
import { RecoilRoot } from 'recoil';
// import { GoogleOAuthProvider } from '@react-oauth/google';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            {/* <GoogleOAuthProvider
              clientId={process.env.REACT_APP_CLIENT_ID as any}
            > */}
            <Router />
            <ReactQueryDevtools initialIsOpen={true} />
            {/* </GoogleOAuthProvider> */}
          </ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;
