// import React from "react"
// import ReactDOM from "react-dom"
// import singleSpaReact from "single-spa-react"
// import App from "./App"

// const lifecycles = singleSpaReact({
//   React,
//   ReactDOM,
//   rootComponent: App,
//   errorBoundary(err, info, props) {
//     return (
//       <div>
//           Error in my-app. Check browser console for details.
//       </div>
//     )
//   },
// })

// export const { bootstrap, mount, unmount } = lifecycles
import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Base from './base'
const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Base,
  errorBoundary() {
    return <div>Error in my-app. Check browser console for details.</div>
  },
})
export const { bootstrap, mount, unmount } = lifecycles