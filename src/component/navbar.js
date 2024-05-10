import logoGolPlacas from '../img/logo-vistoria-central.png'

function NavBar() {

  return (
    <div className="navbar-floating">
      <div className="navbar-container">
        <img src={logoGolPlacas} width={'100px'} alt='Vistoria central logo' />
        <div className="navbar-buttons-container">

          <a href='https://wa.me/5511963117696?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Gol%20Placas%20ABC'>
            <button className="whatsapp">
              <span>Orçe em nosso WhatsApp!</span>
              (11) 9 6311-7696
            </button>
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default NavBar;