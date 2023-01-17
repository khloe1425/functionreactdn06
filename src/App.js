import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Registers from './pages/Registers/Registers';


// Cài đặt thư viện react-router-dom
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import DemoUseState from './pages/Hook/DemoUseState/DemoUseState';
import DemoUseEffect from './pages/Hook/DemoUseEffect/DemoUseEffect';
import DemoUseCallBack from './pages/Hook/DemoUseCallBack/DemoUseCallBack';
import DemoUseMemo from './pages/Hook/DemoUseMemo/DemoUseMemo';
import DemoUseRef from './pages/Hook/DemoUseRef/DemoUseRef';

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Switch>

        {/* C2:Route => render  */}
        {/* học chuyên sâu ở Template */}
        <Route exact path="/home" render={() => {
          //trả về UI mới có chứa component muốn hiển thị
          return <div className='container'>
              <Home/>
          </div>
        }} />

        {/* C1:Route => component  */}
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registers" component={Registers} />
        <Route exact path="/use-state" component={DemoUseState} />
        <Route exact path="/use-effect" component={DemoUseEffect} />
        <Route exact path="/use-call-back" component={DemoUseCallBack} />
        <Route exact path="/use-memo" component={DemoUseMemo} />
        <Route exact path="/use-ref" component={DemoUseRef} />
       
       {/* tương tự default của switch case  */}
        <Route exact path="/" component={Home} />


      </Switch>

    </BrowserRouter>
  );
}

export default App;
