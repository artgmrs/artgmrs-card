import {
  ShaderGradientCanvas,
  ShaderGradient,
} from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'

function Card() {
  return (
    <>
      <ShaderGradientCanvas
        importedFiber={{ ...fiber, ...drei, ...reactSpring }}
        style={{
          top: 0,
          pointerEvents: "none",
          height: "100vh",
        }}
      >
        <ShaderGradient
          control='query'
          urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23ff0700&color2=%233d9fdb&color3=%23d0bce1&embedMode=off&envPreset=city&fov=45&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=waterPlane&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=1.4&uTime=0&wireframe=false'
        />
      </ShaderGradientCanvas>

      <header>
        <div>
          <span><a href="https://instagram.com/artgmrs" target="_blank">Instagram</a></span>
          <span><a href="https://www.strava.com/athletes/107680351" target="_blank">Strava</a></span>
          <span><a href="https://github.com/artgmrs" target="_blank">Github</a></span>
          <span><a href="https://www.linkedin.com/in/artgmrs/" target="_blank">Linkedin</a></span>
        </div>
        <a
          className="mail-to"
          href="mailto:artgmrs@outlook.com"
          target="_blank"
        >
          Email (business enquiries only)
        </a>
      </header>

      <footer>
        <h1>Arthur Guimarães</h1>
        <div className="second-group">
          <h2>Software Developer</h2>
          <h2>São Paulo</h2>
        </div>
      </footer>
    </>
  )
}

export default Card
