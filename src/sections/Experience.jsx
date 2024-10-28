import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Experiences } from '../constants'
import { OrbitControls } from '@react-three/drei'; 
import Loading from '../components/Loading'
import Developer from '../components/Developer'

const Experience = () => {
    const [animationName, setAnimationName] = useState('idle')
  return (
    <section className="c-space my-20" id="e&d">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas camera={{ position: [0, 1, 4.5 ]}}>   
                <ambientLight intensity={3} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <OrbitControls maxPolarAngle={Math.PI / 2} />
                <Suspense fallback={<Loading />}>
                    <Developer position-y={-3} rotation={[0, 0.6, 0]} scale={3} 
                        animationName={animationName}/>
                </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {Experiences.map(({id, name, pos, icon, duration, title, animation}) => (
                <div
                  key={id} className="work-content_container group" 
                  onClick={() => setAnimationName(animation.toLowerCase())} 
                  onPointerOver={() => setAnimationName(animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{name}</p>
                    <p className="text-sm mb-5">
                      {pos} -- <span>{duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience