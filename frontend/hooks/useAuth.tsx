import { useState, useEffect, createContext, useContext } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';

interface User {
  created_at: string;
  email: string;
  id: number;
  phone_number: string;
  username: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  fetchUser: () => Promise<void>;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check for existing token on mount
    const init = async () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        try{
          await fetchUser();
          setIsAuthenticated(true);
        } catch {
          setIsAuthenticated(false);
        }
      }
      setLoading(false);
    };
    init();
  }, []);

  const login = async (username: string, password: string) => {
    try {
      setLoading(true);
      setError(null);

      const formData = new URLSearchParams();
      formData.append('username', username);
      formData.append('password', password);

      const response = await fetch('http://localhost:8000/user/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      localStorage.setItem('access_token', data.access_token);
      setIsAuthenticated(true);
      await fetchUser();
      router.push('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during login');
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const fetchUser = async () => {
    const token = localStorage.getItem('access_token');
    if (!token) throw new Error('No token');

    const response = await fetch('http://localhost:8000/user/me', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    });

    if (!response.ok) {
      throw new Error('Unauthorized');
    }

    const data: User = await response.json();
    console.log(data);
    setUser(data);
  }
  

  const logout = () => {
    localStorage.removeItem('access_token');
    setIsAuthenticated(false);
    setUser(null);
    router.push('/login');
  };

  const value = {
    isAuthenticated,
    user,
    login,
    logout,
    loading,
    error,
    fetchUser,
  };
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
