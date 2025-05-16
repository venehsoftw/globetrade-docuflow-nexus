
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

interface RedirectProps {
  target: string;
  message: string;
  delay?: number;
}

const Redirect: React.FC<RedirectProps> = ({ target, message, delay = 3000 }) => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(delay / 1000);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate(target);
    }, delay);

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(countdownInterval);
    };
  }, [navigate, target, delay]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <div className="text-center max-w-md">
          <p className="text-lg mb-2">{message}</p>
          <p className="text-sm text-gray-500">Redirecting in {countdown} seconds...</p>
        </div>
      </div>
    </Layout>
  );
};

export default Redirect;
