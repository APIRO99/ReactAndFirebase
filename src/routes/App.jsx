import * as React               from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home                       from '../components/Home'
import Login                      from '../components/login'
import Signin                     from '../components/signin'
import Header                     from '../components/header'
/*import { authContextProvider }    from '../contexts/authContextProvider'*/


export const App = () => {
  return(
    <authContextProvider>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/'       component={Home} />
        <Route exact path='/login'  component={Login} />
        <Route exact path='/signin' component={Signin} />
      </Switch>
    </BrowserRouter>
    </authContextProvider>
  )
}