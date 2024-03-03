import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <>
      <div className="Home_background">
        <div className='Home_Inicio'>
          <img src="THE KID FLIM LOGO letras blancas sin fondo logo en color_4.webp" alt="TheKidFilm" />
          <Link to={"/home"}>
            <button className='Btn_PrincipalFilm'>CONOCENOS</button>
          </Link>
          <div className='Home_IconosRedesSociales'>
            <button className='BtnRedSocial'>
              <i className="fa-brands fa-youtube"></i>
            </button>
            <button className='BtnRedSocial'>
              <i className="fa-brands fa-tiktok"></i>
            </button>
            <button className='BtnRedSocial'>
              <i className="fa-brands fa-instagram"></i>
            </button>
            <button className='BtnRedSocial'>
              <i className="fa-brands fa-facebook-f"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
