import '../Главная.css'
import '../media.css'
import image1 from '../pictures/image.png'
import logo1 from '../pictures/icon-1.png'
import logo2 from '../pictures/icon-2.png'
import logo3 from '../pictures/icon-3.png'
import msi from '../pictures/msi.png'
import person from '../pictures/person.png'
import person2 from '../pictures/person2.png'
import person3 from '../pictures/person3.png'
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
      <div className="section2">
        <div className="container">
          <div className='border-div'>
            <div className='border-img'>
              <img src={image1} alt="none" />
            </div>
          </div>
          <div className='info-imgBorder'>
            <h1>Чем мы занимаемся?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, 
              dignissim et feugiat elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. 
              Et neque, adipiscing sapien sem senectus praesent aenean consequat. Aenean facilisi turpis aliquet fringilla. 
              Nunc sem felis sed interdum feugiat mattis elit, sollicitudin. Quam pharetra rhoncus risus, cursus id elementum aliquet. 
              Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis. </p>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="container">
          <div className='discount'>
            <div className='dis-flex'>
              <span className='circle-span'></span>
              <h1 className='all-h1'>Быстрый старт</h1>
            </div>
            <p className='all-p'>Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер</p>
          </div>
          <div className="discount-info">
            <div className='discount-card'>
              <div className='num-dis'><h1>100%</h1></div>
              <div className='color-discount-x'>
                <div className='color-discount'></div>
              </div>
              <p className='discount-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Netus eget velit quisque accumsan amet tortor. 
                Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
            </div>
            <div className='discount-card'>
              <div className='num-dis'><h1>75%</h1></div>
              <div className='color-discount-x'>
                <div className='color-discount2'></div>
              </div>
              <p className='discount-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Netus eget velit quisque accumsan amet tortor. 
                Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
            </div>
            <div className='discount-card'>
              <div className='num-dis'><h1>50%</h1></div>
              <div className='color-discount-x'>
                <div className='color-discount3'></div>
              </div>
              <p className='discount-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Netus eget velit quisque accumsan amet tortor. 
                Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
            </div>
            <div className='discount-card'>
              <div className='num-dis'><h1>Итог</h1></div>
              <div className='color-discount-x'>
                <div className='color-discount4'></div>
              </div>
              <p className='discount-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Netus eget velit quisque accumsan amet tortor. 
                Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section4">
        <div className="container">
          <h1 className='all-h1 ac-h1'>Получите профессию прямо сейчас</h1>
          <div className='accept-flex'>
            <div className='accept-card'>
              <div className='accept-ico'>
                <img src={logo1} alt="none" />
              </div>
              <h4 className='acc-h4'>Только практические навыки в работе</h4>
              <div className="discount-p acc-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</div>
            </div>
            <div className='accept-card'>
              <div className='accept-ico'>
                <img src={logo2} alt="none" />
              </div>
              <h4 className='acc-h4'>Работа на самом современном оборудовании</h4>
              <div className="discount-p acc-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</div>
            </div>
            <div className='accept-card'>
              <div className='accept-ico'>
                <img src={logo3} alt="none" />
              </div>
              <h4 className='acc-h4'>Сертификация по окончании обучения</h4>
              <div className="discount-p acc-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="section5">
        <div className="container">
            <div className='dis-flex'>
              <span className='circle-span'></span>
              <h1 className='all-h1'>Партнеры - топовые бренды</h1>
            </div>
            <div className="msi-flex">
              <div className='msi-card br-btm brm1'>
                <img src={msi} alt="none" />
              </div>
              <div className='msi-card br-btm brm2'>
                <img src={msi} alt="none" />
              </div>
              <div className='msi-card br-btm brm3'>
                <img src={msi} alt="none" />
              </div>
              <div className='msi-card b-btm brm4'>
                <img src={msi} alt="none" />
              </div>
              <div className='msi-card br-r brm5'>
                <img src={msi} alt="none" />
              </div>
              <div className='msi-card br-r brm6'>
                <img src={msi} alt="none" />
              </div>
              <div className='msi-card br-r brm7'>
                <img src={msi} alt="none" />
              </div>
              <div className='msi-card'>
                <img src={msi} alt="none" />
              </div>
            </div>
        </div>
      </div>
      <div className="section6">
        <div className="container">
          <div className='program-div'>
            <div className='dis-flex prm-flex'>
              <span className='circle-span'></span>
              <h1 className='all-h1 prm-h1'>Программа обучения</h1>
              <p className='all-p prm-p'>Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер</p>
            </div>
            <div className="program-flex">
              <div className='three-div'>
                <div className='program-info'>
                  <div className='text-info'>
                    <p className='prm-p2'>Неделя №1</p>
                    <h4 className='prm-h4'>Красивая часть курса, которая помогает в успехе</h4>
                  </div>
                  <div className='text-info'>
                    <p className='prm-p2'>Неделя №3</p>
                    <h4 className='prm-h4'>Красивая часть курса, которая помогает в успехе</h4>
                  </div>
                  <div className='text-info'>
                    <p className='prm-p2'>Неделя №5</p>
                    <h4 className='prm-h4'>Красивая часть курса, которая помогает в успехе</h4>
                  </div>
                  <div className='text-info'>
                    <p className='prm-p2'>Неделя №7</p>
                    <h4 className='prm-h4'>Красивая часть курса, которая помогает в успехе</h4>
                  </div>
                </div>
                <div className='center-line'></div>
                <div className='program-info program-info2'>
                  <div className='text-info text-info2'>
                    <p className='prm-p2'>Неделя №2</p>
                    <h4 className='prm-h4'>Красивая часть курса, которая помогает в успехе</h4>
                  </div>
                  <div className='text-info text-info2'>
                    <p className='prm-p2'>Неделя №4</p>
                    <h4 className='prm-h4'>Красивая часть курса, которая помогает в успехе</h4>
                  </div>
                  <div className='text-info text-info2'>
                    <p className='prm-p2'>Неделя №6</p>
                    <h4 className='prm-h4'>Красивая часть курса, которая помогает в успехе</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section7">
        <div className="container">
            <div className='dis-flex'>
              <span className='circle-span'></span>
              <h1 className='all-h1'>Ваши преподаватели</h1>
            </div>
            <div className="people-flex">
              <div className='people-card'>
                <div className='img-person'>
                  <img src={person} alt="none" />
                </div>
                <h4>Дмитрий Иванов</h4>
                <p>Специалист по видеокартам</p>
                <div className='person-info-div'>
                  <Link to=''>
                    <button className='person-info-btn'>Биография</button>
                  </Link>
                </div>
              </div>
              <div className='people-card'>
                <div className='img-person'>
                  <img src={person2} alt="none" />
                </div>
                <h4>Дмитрий Иванов</h4>
                <p>Специалист по видеокартам</p>
                <div className='person-info-div'>
                  <Link to=''>
                    <button className='person-info-btn'>Биография</button>
                  </Link>
                </div>
              </div>
              <div className='people-card'>
                <div className='img-person'>
                  <img src={person3} alt="none" />
                </div>
                <h4>Дмитрий Иванов</h4>
                <p>Специалист по видеокартам</p>
                <div className='person-info-div'>
                  <Link to=''>
                    <button className='person-info-btn'>Биография</button>
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="section8">
        <div className="container">
          <div className='footer-flex'>
            <h1 className='all-h1 footer-h1'>Статьи каждую неделю</h1>
            <p className='all-p footer-p'>Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер</p>
            <form>
              <div className='submit-flex'>
                <input type="text" className='inp-submit' placeholder='E-mail' />
                <input type="submit" className='btn-submit' value="Подписаться" />
              </div>
            </form>
            <div className='submit-icons'>
              <div>
                <i class="fab fa-vk"></i>
              </div>
              <div>
                <i class="fab fa-youtube"></i>
              </div>
              <div>
                <i class="fab fa-facebook-f"></i>
              </div>
              <div>
                <i class="fab fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Главная;