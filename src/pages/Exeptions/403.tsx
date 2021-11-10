import { Location } from 'history';
import React from 'react';
import { useLocation } from 'react-router-dom';

interface StateType {
  from: string;
}

export default function NotFound() {
  console.log('403');
  const location: Location<StateType> = useLocation();
  return (
    <div className="403">
      <h2>403 page</h2>
      <b>Permission denied!</b>
    </div>
  );
}
