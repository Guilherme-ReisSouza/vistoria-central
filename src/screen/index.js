import { useEffect, useState } from 'react';
import { ChatBox } from '../component/chat';
import HeaderSlider from '../component/header-slider';
import Footer from '../component/footer'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, } from 'mdb-react-ui-kit';
import '../index.css';

import { FaThumbsUp, FaUserShield, FaCar, FaBus, FaStar, FaCarSide, FaTruckMonster, FaMoneyBill, FaMedal } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import { FiCheckCircle } from "react-icons/fi";
import { BiSolidCarGarage, BiMessageSquareDetail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

import { useResponsiveMode } from '../controller/utils';
import NavBar from '../component/navbar';
import PlacasMercosul from '../img/config.png';
import InitialBkg from '../img/initial-bkg.png';
import BkgBike from '../img/bkg-hero1.png';
import BkgCar from '../img/bkg-hero2.png';
import BkgTruck from '../img/bkg-hero3.png';
import { FaCircleInfo } from 'react-icons/fa6';


function Index() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const goToElement = (elementId) => {
        const element = document.getElementById(elementId);
        element.scrollIntoView();
    };

    const slides = [
        {
            bg: InitialBkg, title: `Lorem ipsum 
dolo!`, cta_text: '', cta_url: '', cta_url_class: ''
        }, {
            bg: BkgBike, title: `sit amet, 
consectetur adipiscing 
elit.`, cta_text: '', cta_url: '', cta_url_class: ''
        }, {
            bg: BkgCar, title: `Sed 
id ante eu 
orci!`, cta_text: '', cta_url: '', cta_url_class: ''
        }, {
            bg: BkgTruck, title: `laoreet 
feugiat. Duis 
venenatis auctor`, cta_text: '', cta_url: '', cta_url_class: ''
        },
    ];


    const isMobile = useResponsiveMode();
    const [view, setView] = useState('home');

    return (
        <>
            {view === 'home' ?
                <div>
                    <NavBar />
                    <MDBContainer id='home' fluid className="headerContainer">
                        <HeaderSlider slides={slides} id='slider' />
                        {!isMobile && (<div id='ia-assist' className='chatbox-container'> <ChatBox setView={setView} /> </div>)}

                        <div className='btnSlideDiv'>
                            <button id='btn-cta-cotacao_vantagens' onClick={() => goToElement('contato')} className='btnSlide'>Realizar Orçamento</button>
                        </div>

                        
                        
                    </MDBContainer>
                    <MDBContainer fluid className='bg-default'>
                        <MDBRow className='justify-content-center align-items-center'>
                            <MDBCol md={8} className='container-about-section'>
                                <p>A <span>Vistoria Central</span> dui, in finibus quam porta in. Quisque non bibendum 
                                ipsum. Vivamus sit amet eros felis. Cras tempus lacinia nunc, eu finibus magna dictum sed.</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <MDBContainer>
                        <div className='circles-holder'>
                            <MDBRow style={{ textAlign: 'center' }} className='justify-content-center align-items-center'>
                                <MDBCol>
                                    <span className='icon-span mt-3 mb-3'>
                                        <FaCar size={'3rem'} color='#f5f5f5' />
                                    </span>
                                    <h4>Donec</h4>
                                </MDBCol>
                                <MDBCol>
                                    <span className='icon-span mt-3 mb-3'>
                                        <FaBus size={'3rem'} color='#f5f5f5' />
                                    </span>
                                    <h4> fermentum</h4>
                                </MDBCol>
                                <MDBCol>
                                    <span className='icon-span mt-3 mb-3'>
                                        <FaStar size={'3rem'} color='#f5f5f5' />
                                    </span>
                                    <h4>consectetur</h4>
                                </MDBCol>
                                <MDBCol>
                                    <span className='icon-span mt-3 mb-3'>
                                        <FaCarSide size={'3rem'} color='#f5f5f5' />
                                    </span>
                                    <h4>vestibulum</h4>
                                </MDBCol>
                                <MDBCol>
                                    <span className='icon-span mt-3 mb-3'>
                                        <BiSolidCarGarage size={'3rem'} color='#f5f5f5' />
                                    </span>
                                    <h4>placerat</h4>
                                </MDBCol>
                                <MDBCol>
                                    <span className='icon-span mt-3 mb-3'>
                                        <GiCarWheel size={'3rem'} color='#f5f5f5' />
                                    </span>
                                    <h4>Integer</h4>
                                </MDBCol>
                                <MDBCol>
                                    <span className='icon-span mt-3 mb-3'>
                                        <FaTruckMonster size={'3rem'} color='#f5f5f5' />
                                    </span>
                                    <h4>facilisi</h4>
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </MDBContainer>
                    <MDBContainer id='vantagens' fluid className='vantagens-container'>
                        <MDBRow className='justify-content-center align-items-center'>
                            <MDBCol md={6}>
                                <h1 className='vantagens-title'>
                                    <span>orci luctus et</span> et <span>Vistoria Central</span>
                                </h1>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className='cardsHolder justify-content-center align-items-center'>
                            <MDBCol md='6'>
                                <MDBCard className='cardsProtec'>
                                    <MDBCardBody>
                                        <div className='icon-services-container'><FaMedal style={{ width: '100%', height: '100%', padding: '10px', color: '#1F824A' }} /></div>
                                        <h3>
                                            cubilia curae
                                        </h3>
                                        <p>
                                        Sed luctus tincidunt ligula, sed blandit odio tristique a. Sed bibendum libero
                                        ut nibh aliquam luctus. Mauris sodales feugiat nibh, vel consequat justo efficitur
                                        a. Nulla facilisi. Fusce sit amet volutpat ex.
                                        </p>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBCard className='cardsProtec'>
                                    <MDBCardBody>
                                        <div className='icon-services-container'><FiCheckCircle style={{ width: '100%', height: '100%', padding: '10px', color: '#1F824A' }} /></div>
                                        <h3>
                                            fringilla
                                        </h3>
                                        <p>
                                        leo in purus viverra, quis scelerisque ex faucibus. Nulla facilisi. Proin vestibulum 
                                        ligula vel felis gravida, nec malesuada velit suscipit. Ut lacinia dui eget nisl  
                                        fermentum pharetra. Mauris eget arcu lacinia, luctus nisl ac, vestibulum est. 
                                        </p>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBCard className='cardsProtec'>
                                    <MDBCardBody>
                                        <div className='icon-services-container'><FaThumbsUp style={{ width: '100%', height: '100%', padding: '10px', color: '#1F824A' }} /></div>
                                        <h3>
                                            Cras eu tortor enim
                                        </h3>
                                        <p>
                                        Nulla eu justo eu nunc hendrerit finibus. Proin vel ultrices magna. Duis nec arcu at turpis
                                        suscipit commodo. Proin tristique elit in arcu commodo, vitae tincidunt lorem interdum.
                                        Vivamus fermentum eget odio in ultrices.
                                        </p>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBCard className='cardsProtec'>
                                    <MDBCardBody>
                                        <div className='icon-services-container'><FaMoneyBill style={{ width: '100%', height: '100%', padding: '10px', color: '#1F824A' }} /></div>
                                        <h3>
                                            Pellentesque scelerisque
                                        </h3>
                                        <p>
                                            metus eu dui luctus commodo. Vestibulum mattis, libero non bibendum posuere, odio elit tempus 
                                            ipsum, nec ultrices enim nunc id ante. Aliquam id eros urna. Ut feugiat rutrum dui, sit amet 
                                            commodo ipsum ultrices eu. 
                                        </p>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBCard className='cardsProtec'>
                                    <MDBCardBody>
                                        <div className='icon-services-container'><FaUserShield style={{ width: '100%', height: '100%', padding: '10px', color: '#1F824A' }} /></div>
                                        <h3>
                                            Maecenas dignissim
                                        </h3>
                                        <p>
                                            risus ut sapien convallis volutpat. Suspendisse sit amet vestibulum nisl. Integer dictum
                                            hendrerit ligula vel aliquet. Morbi sed fermentum ligula, in tincidunt nulla. Suspendisse
                                            in ipsum vehicula pharetra felis ac, molestie eros.
                                        </p>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md='7' className='justify-content-center align-items-center py-4 d-flex'>
                                <button id='btn-cta-cotacao_vantagens' onClick={() => goToElement('contato')} className='contactBtn vantagens'>Solicitar Revisão</button>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <MDBContainer>
                        <MDBRow className='placas-mercosul justify-content-center align-items-center'>
                            <MDBCol md={6}>
                                <img src={PlacasMercosul} alt='Placas Mercosul' id='img_reclame_aqui' />
                            </MDBCol>
                            <MDBCol md={5}>
                                <h4>Nulla nec commodo purus</h4>
                                <p>Na Morbi aliquet dolor non justo sollicitudin, vitae condimentum risus placerat. Cras ut ipsum consequat,
                                    tristique sapien et, pellentesque justo. Nulla facilisi. Aliquam erat volutpat. Nam varius eros eget neque
                                    blandit, vitae malesuada justo ultricies. Nullam ut velit sit amet risus tincidunt iaculis. Vestibulum 
                                    sit amet fringilla lectus. Nullam sed mi neque</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <MDBContainer fluid className='contato-container' id='contato'>
                        <MDBRow className='justify-content-center align-items-center'>
                            <MDBCol md={4} className='text-center contact-col'>
                                <div className='contact-container'>
                                    <span className='contact-icon'><BiMessageSquareDetail /></span>
                                    <h4>Entre em contato agora mesmo!</h4>

                                    <a href='https://wa.me/5511963117696?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Gol%20Placas%20ABC'>
                                        <button className="contactBtn whatsapp">
                                            <span>Entre em contato!</span>
                                            (11) 9 6311-7696
                                        </button>
                                    </a>
                                    <button id='btn-cta-cotacao' onClick={() => goToElement('contato')} className='contactBtn'>Clique aqui e faça uma Revisao!</button>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                    <Footer />
                    <a id='whatsappFloat' href="https://wa.me/5511963117696?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Gol%20Placas%20ABC" rel="noreferrer" class="whatsapp-float hover-shadow" target="_blank">
                        <FaWhatsapp />
                    </a>
                    {isMobile && (
                        <span id='upflow-float' onClick={() => setView('chat')} rel="noreferrer" class="upflow-float hover-shadow" target="_blank">
                            <FaCircleInfo size={'3rem'} color='#1F824A' />
                        </span>)
                    }
                </div>
                :
                <div>
                    <ChatBox setView={setView} />
                </div>
            }
        </>
    )
}

export default Index;