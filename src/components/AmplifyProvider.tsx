'use client';
import { useEffect, useState } from 'react';
import '../components/amplify-hosted-config';

interface AmplifyProviderProps {
  children: React.ReactNode;
}

export default function AmplifyProvider({ children }: AmplifyProviderProps) {
  const [isConfigured, setIsConfigured] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Set a minimum loading time of 3 seconds to ensure loader animation completes
    const minLoadingTime = 3000;
    const startTime = Date.now();

    const configureAmplify = async () => {
      // Simulate Amplify configuration (or actual configuration logic)
      setIsConfigured(true);
      
      // Calculate remaining time to meet minimum loading duration
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
      
      // Wait for remaining time before hiding loader
      setTimeout(() => {
        setShowLoader(false);
      }, remainingTime);
    };

    configureAmplify();
  }, []);

  if (showLoader) {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        {/* Logo/Brand Section */}
        <div style={{ 
          marginBottom: '40px', 
          textAlign: 'center' 
        }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginBottom: '8px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Online Consultant
          </h1>
          <p style={{ 
            fontSize: '1.1rem', 
            opacity: '0.9',
            fontWeight: '300'
          }}>
            Your Gateway to Global Education
          </p>
        </div>

        {/* Loader Container */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '40px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <div className="loader">
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div style={{ 
          marginTop: '30px', 
          textAlign: 'center' 
        }}>
          <p style={{ 
            fontSize: '18px', 
            fontWeight: '500',
            marginBottom: '8px',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
          }}>
            Initializing your experience...
          </p>
          <p style={{ 
            fontSize: '14px', 
            opacity: '0.8',
            fontWeight: '300'
          }}>
            Setting up secure authentication and loading your dashboard
          </p>
        </div>

        {/* Progress Indicator */}
        <div style={{
          marginTop: '30px',
          width: '200px',
          height: '4px',
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '2px',
          overflow: 'hidden'
        }}>
          <div style={{
            height: '100%',
            background: 'linear-gradient(90deg, #fff, #f0f0f0)',
            borderRadius: '2px',
            animation: 'progress 2s ease-in-out infinite'
          }}></div>
        </div>

        <style jsx>{`
          .loader {
            width: 112px;
            height: 112px;
          }

          .box1,
          .box2,
          .box3 {
            border: 16px solid #ffffff;
            box-sizing: border-box;
            position: absolute;
            display: block;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }

          .box1 {
            width: 112px;
            height: 48px;
            margin-top: 64px;
            margin-left: 0px;
            animation: abox1 4s 1s forwards ease-in-out infinite;
          }

          .box2 {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 0px;
            animation: abox2 4s 1s forwards ease-in-out infinite;
          }

          .box3 {
            width: 48px;
            height: 48px;
            margin-top: 0px;
            margin-left: 64px;
            animation: abox3 4s 1s forwards ease-in-out infinite;
          }

          @keyframes progress {
            0% { width: 0%; }
            50% { width: 70%; }
            100% { width: 100%; }
          }

          @keyframes abox1 {
            0% {
              width: 112px;
              height: 48px;
              margin-top: 64px;
              margin-left: 0px;
            }

            12.5% {
              width: 48px;
              height: 48px;
              margin-top: 64px;
              margin-left: 0px;
            }

            25% {
              width: 48px;
              height: 48px;
              margin-top: 64px;
              margin-left: 0px;
            }

            37.5% {
              width: 48px;
              height: 48px;
              margin-top: 64px;
              margin-left: 0px;
            }

            50% {
              width: 48px;
              height: 48px;
              margin-top: 64px;
              margin-left: 0px;
            }

            62.5% {
              width: 48px;
              height: 48px;
              margin-top: 64px;
              margin-left: 0px;
            }

            75% {
              width: 48px;
              height: 112px;
              margin-top: 0px;
              margin-left: 0px;
            }

            87.5% {
              width: 48px;
              height: 48px;
              margin-top: 0px;
              margin-left: 0px;
            }

            100% {
              width: 48px;
              height: 48px;
              margin-top: 0px;
              margin-left: 0px;
            }
          }

          @keyframes abox2 {
            0% {
              width: 48px;
              height: 48px;
              margin-top: 0px;
              margin-left: 0px;
            }

            12.5% {
              width: 48px;
              height: 48px;
              margin-top: 0px;
              margin-left: 0px;
            }

            25% {
              width: 48px;
              height: 48px;
              margin-top: 0px;
              margin-left: 0px;
            }

            37.5% {
              width: 48px;
              height: 48px;
              margin-top: 0px;
              margin-left: 0px;
            }

            50% {
              width: 112px;
              height: 48px;
              margin-top: 0px;
              margin-left: 0px;
            }

            62.5% {
              width: 48px;
              height: 48px;
              margin-top: 0px;
              margin-left: 64px;
            }

            75% {
              width: 48px;
              height: 48px;
              margin-top: 0px;
              margin-left: 64px;
            }

            87.5% {
              width: 48px;
              height: 48px;
              margin-top: 0px;
              margin-left: 64px;
            }

            100% {
              width: 48px;
              height: 48px;
              margin-top: 0px;
              margin-left: 64px;
            }
          }

          @keyframes abox3 {
            0% {
              width: 48px;
              height: 48px;
              margin-top: 0px;
              margin-left: 64px;
            }

            12.5% {
              width: 48px;
              height: 48px;
              margin-top: 0px;
              margin-left: 64px;
            }

            25% {
              width: 48px;
              height: 112px;
              margin-top: 0px;
              margin-left: 64px;
            }

            37.5% {
              width: 48px;
              height: 48px;
              margin-top: 64px;
              margin-left: 64px;
            }

            50% {
              width: 48px;
              height: 48px;
              margin-top: 64px;
              margin-left: 64px;
            }

            62.5% {
              width: 48px;
              height: 48px;
              margin-top: 64px;
              margin-left: 64px;
            }

            75% {
              width: 48px;
              height: 48px;
              margin-top: 64px;
              margin-left: 64px;
            }

            87.5% {
              width: 48px;
              height: 48px;
              margin-top: 64px;
              margin-left: 64px;
            }

            100% {
              width: 112px;
              height: 48px;
              margin-top: 64px;
              margin-left: 0px;
            }
          }
        `}</style>
      </div>
    );
  }

  if (isConfigured) {
    return <>{children}</>;
  }
} 