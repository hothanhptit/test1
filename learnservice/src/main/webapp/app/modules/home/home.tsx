import React, { useEffect } from 'react';
import { useAppSelector } from 'app/config/store';
import { REDIRECT_URL } from 'app/shared/util/url-utils';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);
  useEffect(() => {
    const redirectURL = localStorage.getItem(REDIRECT_URL);
    if (redirectURL) {
      localStorage.removeItem(REDIRECT_URL);
      location.href = `${location.origin}${redirectURL}`;
    }
  });

  return (
    <div className="text-sky-50 bg-slate-400 py-20">
      this is learning
    </div>
  );
};

export default Home;
