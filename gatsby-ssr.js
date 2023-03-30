import React from "react";
export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <script
      id="cookieyes"
      type="text/javascript"
      src="https://cdn-cookieyes.com/client_data/ea00e6c3adef26c13ab4dacd/script.js"
    ></script>,
  ]);
}
