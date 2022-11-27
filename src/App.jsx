import './App.css';
import './script.js';
import { Route, Routes, Link } from 'react-router-dom'
import Главная from './page/Главная'
import Курсы from './page/Курсы'
import logo from './pictures/logo.png'
function App() {
  return (
    <>
      <nav className='all-nav'>
        <Link to='/'>
          <img src={logo} className='logo' alt="logo" />
        </Link>
        <div>
        <img className="open-icon" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e" alt="none" />
        </div>
        <div className='nav-link'>
          <ul className='nav-ul'>
            <li><Link to='/' className='nav-a active-a'>Главная</Link></li>
            <li><Link to='/Курсы' className='nav-a'>Курсы</Link></li>
            <li><Link to='' className='nav-a'>Расписание</Link></li>
            <li><Link to='' className='nav-a'>Преподаватели</Link></li>
            <li><Link to='' className='nav-a'>Рассылка</Link></li>
            <li><Link to='' className='nav-a'>Контакты</Link></li>
          </ul>
          <Link to='/'>
            <button className='btn-shop'>Зайти в кабинет</button>
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Главная />} />
        <Route path='/Курсы' element={<Курсы />} />
      </Routes>
    </>
  );
}

export default App;
