import { Location } from 'history';
import React from 'react';
import { useLocation } from 'react-router-dom';

interface StateType {
  from: string;
}

export default function NotFound() {
  const location: Location<StateType> = useLocation();
  const { pathname } = location;
  const from = location.state?.from || '';
  return (
    <div className="404">
      <h2>404 page</h2>
      <b>Can not found {pathname !== '404' ? pathname : from}</b>
    </div>
  );
}
