import React from 'react';

import './index.css';

export default function Error404() {
  return (
    <div className="_404__container">
      <div className="first">404</div>
      <div className="second">Page Not Found</div>
      <div className="actions">{<a href="/">MAIN PAGE</a>}</div>
    </div>
  );
}
