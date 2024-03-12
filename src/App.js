import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Products from './Component/Products';
// import { Switch, Route } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">

      
//         <Navbar />
//         {/* <Home /> */}
//         {/* <BrowserRouter>  */}
//         {/* <Routes>      */}
//              {/* <Switch> */}
          
      
//           <Route  path='/' component={Home} />
//           <Route path='/products' component={Products} />
//           {/* </Switch> */}
//           {/* </Routes> */}

//           {/* </BrowserRouter> */}
//           {/* <Switch> */}
//   {/* <Route exact path="/" component={Home} />
//   <Route path="/products" component={Products} />
//   {/* <Route path="/contact" component={Contact} /> */}
// {/* </Switch>  */}
        
      
//     </div>
//   );
// }

// export default App;

import { Switch,Routes, Route } from 'react-router-dom';
import { Product } from './Component/Product';
import { Contact } from './Component/Contact';
import { Cart } from './Component/Cart';

export default function App() {
  return (
    <div>
    <Navbar />
    {/* <Switch> */}
    <Routes>
      {/* <Route path="/" element={<Home/>} /> */}
      {/* <Route path="/about" element={<AboutPage />} /> */}

      <Route exact path="/"Component={Home}/>
      <Route exact path="/products" Component={Products} />
      <Route exact path="/products/:id" Component={Product} />
      <Route exact path="/contact" Component={Contact} />
      <Route exact path="/cart" Component={Cart} />
    </Routes>
    {/* </Switch> */}
    </div>
  );
}

