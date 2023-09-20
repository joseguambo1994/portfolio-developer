import { useRef } from 'react'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import SoftwareExplorerLogo from "../images/SoftwareExplorerLogo.png";
import PPMLogo from "../images/PPMLogo.png";
import BluehatLogo from "../images/BluehatLogo.png";
import HuaweiLogo from "../images/HuaweiLogo.png";
import FormosLogo from "../images/FormosLogo.png";
import GalaxyPurple from '../images/GalaxyPurple.jpg';
import GalaxyGreen from '../images/GalaxyGreen.jpg';
import GalaxyOrange from '../images/GalaxyOrange.jpg';
import GymnastPulling from '../images/GymnastPulling.svg';
import GymnastHanging from '../images/GymnastHanging.svg';
import GappnaderoAppDetail from '../images/GappnaderoAppDetail.png';
import GappnaderoAppCreate from '../images/GappnaderoAppCreate.png';
import GappnaderoAppList from '../images/GappnaderoAppList.png';
import GappnaderoAppLogin from '../images/GappnaderoAppLogin.png';
import { redirect } from '@remix-run/node';


export default function App() {
  const parallax = useRef<IParallax>(null!)
  const parallax2 = useRef<IParallax>(null!)

  const handleClick = () => {
    console.log('handleClick')
    redirect("https://www.gappnadero.com");

  }

  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax ref={parallax} pages={3}>



        <ParallaxLayer offset={0} speed={-0.2} style={{ pointerEvents: 'none' }}>

          <img
            src={GalaxyPurple}
            alt="Remix"
            className="w-full h-full"
          />

        </ParallaxLayer>




        <ParallaxLayer offset={0.55} speed={0.6} style={{ pointerEvents: 'none' }}>
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

        <ParallaxLayer offset={0} speed={-1.5} style={{ pointerEvents: 'none' }}>

          <div className="relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32">
            <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
              <span className="block uppercase text-purple-500 drop-shadow-md">
                Jose Guambo
              </span>
            </h1>
            <h1 className="text-center text-3xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
              <span className="block uppercase text-white drop-shadow-md">
                Software Developer
              </span>
            </h1>
          </div>

        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-0.2} style={{ pointerEvents: 'none' }}>
          <img
            src={GalaxyGreen}
            alt="Remix"
            className="w-full h-full"
          />

        </ParallaxLayer>

        <ParallaxLayer offset={1.3} speed={0.7} style={{ pointerEvents: 'none' }}>

          <div className="grid grid-cols-3 gap-4  bg-gray-100	p-4 m-4 rounded-xl">

            <h4 className="text-base font-extrabold">
              <span className="block uppercase text-purple-500 drop-shadow-md">
                BlueHat
              </span>
            </h4>
            <p className="">
              <span className="block uppercase text-purple-500 drop-shadow-md">
                2019
              </span>
            </p>
            <img
              src={BluehatLogo}
              alt="Remix"
              className="w-1/4"
            />

          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.4} speed={0.7} style={{ pointerEvents: 'none' }}>

          <div className="grid grid-cols-3 gap-4  bg-gray-100	p-4 m-4 rounded-xl">

            <h4 className="text-base font-extrabold">
              <span className="block uppercase text-purple-500 drop-shadow-md">
                Huawei
              </span>
            </h4>
            <p className="">
              <span className="block uppercase text-purple-500 drop-shadow-md">
                2020
              </span>
            </p>
            <img
              src={HuaweiLogo}
              alt="Remix"
              className="w-1/4"
            />

          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={0.7} style={{ pointerEvents: 'none' }}>
          <div className="grid grid-cols-3 gap-4  bg-gray-100	p-4 m-4 rounded-xl">
            <h4 className="text-base font-extrabold">
              <span className="block uppercase text-purple-500 drop-shadow-md">
                Formos
              </span>
            </h4>
            <p className="">
              <span className="block uppercase text-purple-500 drop-shadow-md">
                2021
              </span>
            </p>
            <img
              src={FormosLogo}
              alt="Remix"
              className="w-1/4"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.6} speed={0.7} style={{ pointerEvents: 'none' }}>
          <div className="grid grid-cols-3 gap-4  bg-gray-100	p-4 m-4 rounded-xl">
            <h4 className="text-base font-extrabold">
              <span className="block uppercase text-purple-500 drop-shadow-md">
                PPM
              </span>
            </h4>
            <p className="">
              <span className="block uppercase text-purple-500 drop-shadow-md">
                2021
              </span>
            </p>
            <img
              src={PPMLogo}
              alt="Remix"
              className="w-1/4"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 0.9, end: 3 }} style={{ pointerEvents: 'none' }}>
          <div className="flex flex-row-reverse ">
            <img
              src={SoftwareExplorerLogo}
              alt="Remix"
              className='w-1/4 fixed bottom-4 right-4'
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={-0.2} style={{ pointerEvents: 'none' }}>
          <img
            src={GalaxyOrange}
            alt="Remix"
            className="w-full h-full"
          />

        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={-0.2} >

        <Parallax ref={parallax2} pages={3} horizontal>
        <ParallaxLayer offset={0} speed={-0.2} style={{ pointerEvents: 'none' }} >

     
<div onClick={()=> console.log('offset={0} ')}> <img
  src={GappnaderoAppLogin}
  alt="Remix"
  className="w-1/2"
/></div>

        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-0.2} style={{ pointerEvents: 'none' }} >

     
<div> <img
  src={GappnaderoAppList}
  alt="Remix"
  className="w-1/2"
/></div>

        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={-0.2} style={{ pointerEvents: 'none' }} >

<div> <img
  src={GappnaderoAppDetail}
  alt="Remix"
  className="w-1/2"
/></div>

</ParallaxLayer>
<ParallaxLayer offset={3} speed={-0.2} style={{ pointerEvents: 'none' }} >

<div> <img
  src={GappnaderoAppCreate}
  alt="Remix"
  className="w-1/2"
/></div>

</ParallaxLayer>
      </Parallax>

        </ParallaxLayer>


      </Parallax>
      

    </div>
  )
}
