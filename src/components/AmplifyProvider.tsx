'use client';
import { useEffect, useState } from 'react';
import '../components/amplify-hosted-config';

interface AmplifyProviderProps {
  children: React.ReactNode;
}

export default function AmplifyProvider({ children }: AmplifyProviderProps) {
  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    setIsConfigured(true);
  }, []);

  if (!isConfigured) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
} 