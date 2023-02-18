import React, {useState, Suspense, lazy} from 'react';
import MenuBar from './components/menu-bar'
import Helmet from 'react-helmet'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './components/footer'

import './App.css'


import {navLinks} from './routes'

const Button = lazy('shared/Button')

const Home = () => <>test</>

function App() {
  const [lightMode, setLightMode] = useState(true)

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className={`App ${lightMode ? 'light' : 'dark'}`}>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="description"
            content="HashFund - The crypto crowdfunding app on the Hedera Hashgraph."
          />
          <meta property="og:site_name" content="Hash Fund" />
        </Helmet>
        <Router>
          <MenuBar
            onSetLightMode={setLightMode}
            {...{lightMode, navLinks}}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            {navLinks.map(getComponent)}
            {/* <Route exact path="/pricing" component={Pricing} /> */}
            {/* <Route exact path="/edit-post/:id" component={PostCreator} /> */}
            {/* <Route path='/view-post/:id' component={PostViewer} />
            <Route path='/view-post/:id/:slug' component={PostViewer} />
            <Route exact path="/edit-post" component={PostCreator} /> */}
            {/* <Route path='/user-admin' component={UserAdmin} /> */}
          </Switch>
        </Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Button>test</Button>
        </Suspense>

    </div>
    </Suspense>
  );
}

type Link = {
  path: string
  component: Promise<any>
  title: string
}

const getComponent = (link: Link, index: number) => {
  let component
  try {
    component = React.lazy(() => link.component)
  } catch(err) {
    component = () => <div style={{color:'white'}}>Under Construction</div>
  }
  return <Route
          key={index}
          path={link.path}
          component={component}
        />
}

export default App;
