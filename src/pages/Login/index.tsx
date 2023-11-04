import { useState } from 'react';

import login from '@/api/login';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import useAuthStore from '@/features/auth';
import { KeyIcon, MailIcon } from '@heroicons/react/solid';
import { useMutation } from '@tanstack/react-query';
import { Card, Text, TextInput } from '@tremor/react';

function Login() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const { toast } = useToast();
  const { setUser, setToken } = useAuthStore((state) => state);

  const { mutate: loginMutation } = useMutation({
    mutationFn: login,
    onError: (error: any) => {
      console.log(error);
      toast({
        title: "Login Failed",
        description: error.message,
        variant: "destructive",
      });
      setIsLoggingIn(false);
    },
    onSuccess: (data: {
      user: { name: string; email: string };
      token: string;
    }) => {
      setUser(JSON.stringify(data.user));
      setToken(data.token);
      setIsLoggingIn(false);
    },
  });

  const handleLogin = () => {
    setIsLoggingIn(true);
    loginMutation({ email: "admin@astrokleem.in", password: "admin@123" });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-96">
        <div className="flex flex-col items-center justify-center p-6 space-y-6">
          <h1 className="text-2xl font-bold">Astrokleem</h1>
          <Text>Login</Text>
          <TextInput
            error={false}
            errorMessage="Wrong email"
            placeholder="Email"
            icon={MailIcon}
          />
          <TextInput
            error={false}
            errorMessage="Wrong password"
            type="password"
            placeholder="Password"
            icon={KeyIcon}
          />
          {/* <Callout
            className="h-12 mt-4"
            title="Incorrect password"
            icon={ExclamationIcon}
            color="rose"
          >
            Your password is incorrect. Please try again.
          </Callout> */}
          <Button
            isLoading={isLoggingIn}
            onClick={handleLogin}
            className="w-full p-2 text-white rounded bg-brand hover:bg-yellow-500"
          >
            Login
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Login;
