import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { AppRegistry } from 'react-native';
import AppNavigator from './AppNavigator';
import { handleServerRequest } from '@react-navigation/web';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    // Handle react-navigation
    const { path, query } = req;
    const { navigation, title, options } = handleServerRequest(
      AppNavigator.router,
      path,
      query
    );

    // register the app
    AppRegistry.registerComponent('App', () => props => (
      <AppNavigator navigation={navigation} {...props} />
    ));

    // prerender the app
    const { element, getStyleElement } = AppRegistry.getApplication('App', {});
    const html = ReactDOMServer.renderToString(element);
    const css = ReactDOMServer.renderToStaticMarkup(getStyleElement());

    res.send(
      `<!doctype html>
        <html lang="">
        <head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta charSet='utf-8' />
            <title>${title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            ${css}
            ${
              process.env.NODE_ENV === 'production'
                ? `<script src="${assets.client.js}" defer></script>`
                : `<script src="${
                    assets.client.js
                  }" defer crossorigin></script>`
            }
        </head>
        <body>
            <div id="root">${html}</div>
        </body>
        </html>`
    );
  });

export default server;
