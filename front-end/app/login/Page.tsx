"use client"
import LogIn from '@/components/LogIn'
import React, { useEffect, useState } from 'react'

const userData = {
  'john': { username: 'username', company: 'Company A', email: 'john@companya.com', bin: 'BIN123' },
  'jane': { username: 'username', company: 'Company B', email: 'jane@companyb.com', bin: 'BIN456' },
  // Add more users as needed
}

export default function LoginPage() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profile, setProfile] = useState<{ username: string; company: string; email: string; bin: string }>({ username: '', company: '', email: '', bin: '' });

  useEffect(() => {
    if (username in userData) {
      setProfile(userData[username]);
    }
  }, [username]);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const getNavigationPath = () => {
    if (username.length >= 4 && password.length >= 4) {
      return('/home');
    }
    return ('/login');
  }

  return (
    <>
      <LogIn username={username} password={password} handleUsernameChange={handleUsernameChange} handlePasswordChange={handlePasswordChange} navigationPath={getNavigationPath}/>
    </>
  )
}