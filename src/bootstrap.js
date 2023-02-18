import React from 'react'
import {hydrate, render} from 'react-dom';
import App from './App'


// const AppContainer = React.lazy(() => import('shared/AppContainer'));
import store from './store'

store.then((asyncStore) => {

    const FinalApp = () => (
        <React.Suspense fallback={<div>Loading...</div>}>
          {/* <AppContainer store={asyncStore} > */}
            <App />
          {/* </AppContainer> */}
        </React.Suspense>
      )
      
      let root = document.getElementById('root')
      
      if (root?.hasChildNodes()) {
        hydrate(<FinalApp />, root);
      } else {
        render(<FinalApp />, root);
      }
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();