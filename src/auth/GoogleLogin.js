// eslint-disable-next-line no-unused-vars
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { IsLoginState, MemberIdState } from '../store/atom';
import axiosInstance from '../axios';

export default function GoogleButton({ onClose }) {
  const setLogin = useSetRecoilState(IsLoginState);
  const setMemberId = useSetRecoilState(MemberIdState);

  let history = useHistory();

  const onSuccess = async (credentialResponse) => {
    const decodedToken = jwtDecode(credentialResponse.credential);
    console.log(decodedToken);

    try {
      const response = await axiosInstance.post(`/api/user/login`, {
        userId: decodedToken.sub,
        email: decodedToken.email,
        name: decodedToken.name,
      });
      if (response.status === 200) {
        const memberId = response.data;
        console.log('Member ID:', memberId);
        setLogin(true);
        setMemberId(memberId);
        onClose();
        history.push('/');
      } else {
        throw new Error('API request failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) => onSuccess(credentialResponse)}
        onFailure={(error) => console.log(`${error}`)}
        useOneTap
      />
    </>
  );
}
