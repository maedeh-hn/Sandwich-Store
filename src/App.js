import logo from './logo.svg';
import './App.css';
import Layout from './hoc/Layout/Layout';
import FoodBuilder from './containers/FoodBuilder/FoodBuilder';
import CheckOut from './containers/CheckOut/CheckOut';
import {Route,Switch} from 'react-router-dom'
import Auth from './containers/Auth/Auth';



function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/authentication" component={Auth}/>
          <Route path="/checkout" component={CheckOut}/>
          <Route path="/" exact component={FoodBuilder}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
