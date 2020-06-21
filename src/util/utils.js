// Utility functions for the rest of the website.
import React from 'react';
/*
  getListElementArray: given an object, return an array of <li> HTML elements
  each containing a single text value from the object.
  Used mainly for formatting multi-line text from `../assets/text.json` file.
*/
export function getListElementArray(obj) {
  const items = []
  for (const [key, val] of Object.entries(obj)) {
    items.push(<li key={key}>{val}</li>)
  }
  return items;
}

/*
  getTextElementArray: given an object, return an array of <p> HTML elements
  each containing a single text value from the object.
*/
export function getTextElementArray(obj) {
  const items = [];
  for (const [key, val] of Object.entries(obj)) {
    items.push(<p key={key}>{val}</p>)
  }
  return items;
}

