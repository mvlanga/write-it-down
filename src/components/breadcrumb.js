import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import {capitalize} from "lodash";

export function Breadcrumb() {
  const location = useLocation();
  
  let currentLink = '';

  const crumbs = location.pathname.split('/')
      .filter(crumb => crumb !== '')
      .map((crumb, i, {length}) => {
        currentLink += `/${crumb}`;

        const last = length - 1 === i;

        if (!isNaN(crumb) && last) {
          crumb = 'View'
        } else if (!isNaN(crumb)) {
          return '';
        }

        return (
            <span key={crumb}>
             {last ?
                 <span>{capitalize(crumb)}</span>
                 : <NavLink end to={currentLink}>{capitalize(crumb)}</NavLink>}
            </span>
        )
      })

  return (
      <>
        <small className="breadcrumb">{crumbs}</small>
      </>
  )
}