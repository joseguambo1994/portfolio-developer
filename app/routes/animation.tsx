import { useRef } from 'react'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
// import SoftwareExplorerLogo from "../images/SoftwareExplorerLogo.png";
// import PPMLogo from "../images/PPMLogo.png";

// import BluehatLogo from "../images/BluehatLogo.png";

// import HuaweiLogo from "../images/HuaweiLogo.png";

// import FormosLogo from "../images/FormosLogo.png";
// import Chimborazo from "../images/Chimborazo.jpg";
// import Rock1 from '../images/Rock1.svg';
// import Rock2 from '../images/Rock2.svg';
// import Rock3 from '../images/Rock3.svg';
// import Rock4 from '../images/Rock4.svg';
import GalaxyPurple from '../images/GalaxyPurple.jpg';
import GalaxyGreen from '../images/GalaxyGreen.jpg';
import GalaxyOrange from '../images/GalaxyOrange.jpg';



import GymnastPulling from '../images/GymnastPulling.svg';
import GymnastHanging from '../images/GymnastHanging.svg';






// Little helpers ... 
const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function App() {
  const parallax = useRef<IParallax>(null!)
  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax ref={parallax} pages={3}>



        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
    

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />

<ParallaxLayer offset={0} speed={-0.2} style={{ pointerEvents: 'none' }}>
              <img
                  src={GalaxyPurple}
                  alt="Remix"
                  className="w-full h-full"
                />
    
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={0.6} style={{ pointerEvents: 'none' }}>
        <div className="relative">

       <img
                  src={GymnastHanging}
                  alt="Remix"
                  className='w-3/4 absolute -left-32'
                />
      <img
                  src={GymnastPulling}
                  alt="Remix"
                  className='w-3/4 absolute left-16'
                  />
              
              <img
                  src={GymnastHanging}
                  alt="Remix"
                  className='w-3/4 absolute -right-32'
                  />
  
                
    </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-0.2} style={{ pointerEvents: 'none' }}>
              <img
                  src={GalaxyGreen}
                  alt="Remix"
                  className="w-full h-full"
                />
    
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={-0.2} style={{ pointerEvents: 'none' }}>
              <img
                  src={GalaxyOrange}
                  alt="Remix"
                  className="w-full h-full"
                />
    
        </ParallaxLayer>
{/* 
<ParallaxLayer offset={0.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
<div className="relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32">
              <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-purple-500 drop-shadow-md">
                  Jose Guambo
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                Software Developer
              </p>
            </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.0} speed={-0.3} style={{ pointerEvents: 'none' }}>
        <div className="flex flex-row px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32">
              <h6 className="text-center text-base font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-purple-500 drop-shadow-md">
                  BlueHat 2019
                </span>
              </h6>
              <img
                  src={BluehatLogo}
                  alt="Remix"
                  className="mx-auto mt-16 w-1/4 max-w-[12rem] md:max-w-[16rem]"
                />
            </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.4} speed={-0.3} style={{ pointerEvents: 'none' }}>
        <div className="flex flex-row px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32">
              <h6 className="text-center text-base font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-purple-500 drop-shadow-md">
                Huawei 2019
                </span>
              </h6>
              <img
                  src={HuaweiLogo}
                  alt="Remix"
                  className="mx-auto mt-16 w-1/4 max-w-[12rem] md:max-w-[16rem]"
                />
            </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.8} speed={-0.3} style={{ pointerEvents: 'none' }}>
        <div className="flex flex-row px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32">
              <h6 className="text-center text-base font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-purple-500 drop-shadow-md">
                Formos 2021
                </span>
              </h6>
              <img
                  src={FormosLogo}
                  alt="Remix"
                  className="mx-auto mt-16 w-1/4 max-w-[12rem] md:max-w-[16rem]"
                />
            </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.2} speed={-0.3} style={{ pointerEvents: 'none' }}>
        <div className="flex flex-row px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32">
              <h6 className="text-center text-base font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-purple-500 drop-shadow-md">
                  PPM 2021
                </span>
              </h6>
              <img
                  src={PPMLogo}
                  alt="Remix"
                  className="mx-auto mt-16 w-1/4 max-w-[12rem] md:max-w-[16rem]"
                />
            </div>
        </ParallaxLayer>
            
            

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>
            
      <ParallaxLayer offset={1.3} speed={-0.6} style={{ pointerEvents: 'none' }}>
          <img src={SoftwareExplorerLogo} style={{ width: '50%', marginLeft: '10%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true),
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src={url('server')} style={{ width: '20%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src={url('bash')} style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}>
          <img src={url('clients-main')} style={{ width: '40%' }} />
        </ParallaxLayer> */}
      </Parallax>
    </div>
  )
}
