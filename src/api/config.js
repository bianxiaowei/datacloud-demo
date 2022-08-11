'use strict'

let logoutUrl, loginUrl, serveUrl,authStatus,routeHead

routeHead = process.env.NODE_ENV === 'production' ? '/bigdata-portal-web/ui' : ''
console.log(process.env.NODE_ENV)
switch (process.env.NODE_ENV) {
  case 'development':
      serveUrl = '/'
      authStatus = '/bigdata-portal-web/authStatus'
      loginUrl = `${serveUrl}login`
      break;
    default:
      serveUrl = '/bigdata-portal-web/ui/'
      authStatus = '/bigdata-portal-web/authStatus'
      loginUrl = `${serveUrl}login`
      break
 
}
 

export {
    logoutUrl, loginUrl, serveUrl,authStatus,routeHead
}
