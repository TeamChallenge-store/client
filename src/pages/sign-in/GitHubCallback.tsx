import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFetchGitHubTokensMutation } from '~entities/users/api/authApi';

const GitHubCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [fetchGitHubTokens] = useFetchGitHubTokensMutation();
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const completeLogin = async () => {
      try {
        const params = new URLSearchParams(location.search);
        const code = params.get('code');
        if (!code) {
          throw new Error('No code provided');
        }
        const response = await fetchGitHubTokens({
          code,
        }).unwrap();
        sessionStorage.setItem('accessToken', response.access);
        navigate('/');
      } catch (err: any) {
        console.error('GitHub login failed:', err);
        navigate('/sign_in', { state: { error: 'GitHub login failed' } });
      }
    };
    completeLogin();
  }, [fetchGitHubTokens, navigate, location]);

  return <div>Loading...</div>;
};

export default GitHubCallback;