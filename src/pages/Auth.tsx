
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const Auth = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // For now, just redirect to upload page
    navigate('/upload');
  };

  return (
    <Layout>
      <div className="container mx-auto max-w-md py-12 px-4">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold text-center mb-6">Welcome to MagicMoments</h1>
          
          <div className="flex flex-col gap-4">
            <Button 
              onClick={handleSignIn}
              className="w-full"
            >
              Sign In
            </Button>
            
            <p className="text-center text-sm text-gray-500">
              Click Sign In to continue to the dashboard
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Auth;
