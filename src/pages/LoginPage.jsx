import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import './LoginPage.css';

const User = {
  email: 'abc@naver.com',
  pw: 'System2000!!'
}

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = '로그인 페이지';
  }, []);

  const handleLogin = () => {
    if (email === User.email && pw === User.pw) {
      alert('로그인 성공');
      // 로그인 성공 후 대시보드로 이동
      window.location.href = '/dashboard';
    } else {
      setError('이메일 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
    <div className="login-page">
      <h2 className='login-header'>로그인</h2>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
      />
      <button onClick={handleLogin}>로그인</button>
      {error && <p className="error">{error}</p>}
      <Link to="/signup">회원가입</Link>
    </div>
  );
} 