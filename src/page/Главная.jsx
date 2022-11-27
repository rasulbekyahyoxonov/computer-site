import '../Главная.css'
import '../script.js';
import '../media.css'
import { Link } from 'react-router-dom'
function Главная() {
  return (
    <>
      <div className="main-bg">
        <div className="container">
          <h1 className='main-h1'>Первый курс по компьютерной сборке</h1>
          <div className='time-flex'>
            <div className="time-discount">
              <h4>18</h4>
              <span>Дней</span>
            </div>
            <div className="time-discount">
              <h4>18</h4>
              <span>Часов</span>
            </div>
            <div className="time-discount">
              <h4>18</h4>
              <span>Минут</span>
            </div>
            <div className="time-discount">
              <h4>18</h4>
              <span>Секунд</span>
            </div>
          </div>
        </div>
        <div className='main-bottom'>
          <div className="container">
            <Link to='/'>
              <button className='course-btn'>Заказать курс</button>
            </Link>
            <div className='info-numDiv'>
              <p className='info-p'><span className='span-p'>Учеников всего: </span><span className='span2-p'>200</span></p>
              <p className='info-p'><span className='span-p'>Успешно закончили курс:: </span><span className='span2-p'>190</span></p>
            </div>
            <div className='proggresDiv'>
              <p className='info-p'><span className='span-p'>Заработано учениками: </span><span className='span2-p'>400 000₽</span></p>
              <div className='proggres'>
                <div className='abs-proggres'></div>
              </div>
              <p className='info2-p'><span className='span-p'>0 </span><span className='span-p'>1 000 000₽</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Главная;