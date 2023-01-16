import {useLocation} from "react-router-dom";
import React from "react";

export function Alert() {

  const location = useLocation();

  let alert;

  if (location.search) {
    alert = {};

    location.search.split('?')[1].split('&').map((param) => {
      const [key, value] = param.split('=');

      alert[key] = value;
    })
  }

  return alert ? (
      <div className={`alert alert--${alert.type}`}>
        {decodeURI(alert.message)}
      </div>
  ) : (<></>)
}

export function createQueryParams(type, message) {
  return `?type=${type}&message=${message}`;
}