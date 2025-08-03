import './App.css';
import './bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Login from './componentes/Login';
import Clima from './componentes/Clima';
import Menu from './componentes/Menu';
import Registro from './componentes/Registro';
import { BrowserRouter, Routes, Route } from 'react-router';

const App = () => {

  return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>            
              <Route path='/' element={<Login/>}>
                <Route path='/registrar' element={<Registro/>}/>
                <Route path='menu' element={<Menu/>}/>
                <Route path='clima' element={<Clima/>}/>
              </Route>
          </Routes>
        </BrowserRouter>

      </Provider>
  );
}

export default App;
