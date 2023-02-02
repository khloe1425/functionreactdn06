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
import TangGiamFS from './pages/Hook/ReduxHook/TangGiamFS';
import FakebookApp from './pages/Hook/ReduxHook/FakebookApp';
import ShoesShopAPI from './pages/API/ShoesShopAPI';
import ShoesShopAwait from './pages/API/ShoesShopAwait';
import ShoesShopMiddleWare from './pages/API/ShoesShopMiddleWare';
import { HomeTemplate } from './templates/HomeTemplate';
import { FormTemplate } from './templates/FormTemplate';




function App() {
  return (
    <BrowserRouter>

    {/* Dùng chung cho toàn bộ trang */}
      {/* <Header /> */}

      <Switch>

        {/* C2:Route => render  */}
        {/* học chuyên sâu ở Template */}
        {/* <Route exact path="/home" render={(propsRoute) => {
          //trả về UI mới có chứa component muốn hiển thị
          return <div className='container'>
              <Header/>
              <Home {...propsRoute} />
          </div>
        }} />
        <Route exact path="/about" render={() => {
          return <div className='container'>
              <Header/>
              <About/>
          </div>
        }} />
        <Route exact path="/login" render={() => {
          return <div className='container'>
           
              <Login/>
          </div>
        }} /> */}

        {/* C1:Route => component  */}
        
        <HomeTemplate path="/home" component={Home} />
        <HomeTemplate  path="/about" component={About} />
        <FormTemplate  path="/login" component={Login} />
        <FormTemplate  path="/registers" component={Registers} />
        <Route exact path="/use-state" component={DemoUseState} />
        <Route exact path="/use-effect" component={DemoUseEffect} />
        <Route exact path="/use-call-back" component={DemoUseCallBack} />
        <Route exact path="/use-memo" component={DemoUseMemo} />
        <Route exact path="/use-ref" component={DemoUseRef} />
        <Route exact path="/tang-giam-fs" component={TangGiamFS} />
        <Route exact path="/fakebook-app" component={FakebookApp} />
        <Route exact path="/shoes-shop-api" component={ShoesShopAPI} />
        <Route exact path="/shoes-shop-await" component={ShoesShopAwait} />
        <Route exact path="/middle-ware" component={ShoesShopMiddleWare} />
       
       {/* tương tự default của switch case  */}
        <HomeTemplate  path="/" component={Home} />


      </Switch>

    </BrowserRouter>
  );
}

export default App;
