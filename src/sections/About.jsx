import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button.jsx';
import { useMediaQuery } from 'react-responsive';



const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('mahmoud-h-a@hotmail.com');
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000);
    } 
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const globeSize = isSmall ? 300 : isMobile ? 300 : 350; // Adjust sizes as needed
  return (
    <section className='c-space my-20' id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="assets/portfPic.png" alt="grid-1" className='w-full sm:h-[276px] h-fit
                     object-contain'/>
                     <div>
                        <p className='grid-headtext'>Hi, I'm Mahmoud</p>
                            <p className='grid-subtext'>
                                A Computer Engineering undergraduate from Abu Dhabi University, 
                                currently enrolled at 42 Abu Dhabi, with skills in Java, Python, C, C++, and more. 
                                I’m committed to becoming a specialist in software development, 
                                focusing on building efficient and scalable solutions.
                            </p>
                     </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="assets/langs.png" alt="grid-2" className='w-full sm:h-[276px] h-fit object-contain' />
                    <div>
                        <p className='grid-headtext'>Tech Stack</p>
                        <p className='grid-subtext'>
                            I specialize in a variety of languages, frameworks, and tools 
                            that allow me to build robust and scalable applications.
                        </p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-4'>
                <div className='grid-container'>
                    <div className='rounded-3xl w-full sm:h-[326px] 
                        h-fit flex justify-center items-center'>
                            <Globe 
                                height={globeSize}
                                width={globeSize}
                                backgroundColor='rgba(0, 0, 0, 0)'
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[
                                    {
                                      lat: 24.4539,
                                      lng: 54.3773,
                                      text: "I'm Here!",
                                      color: 'red',
                                      size: 20,
                                    }
                                  ]}
                                  labelText={(d) => d.text}    
                                  labelColor={() => 'red'}    
                                  labelSize={() => 3}          
                                  labelDotRadius={() => 1}   
                                  labelDotColor={() => 'red'}  
                              />
                    </div>
                    <div>
                        <p className='grid-headtext'>Where I'm Currently Located</p>
                        <p className='grid-subtext'>
                            I’m based in Abu Dhabi, United Arab Emirates, where I have worked on various projects.
                        </p>
                        <a href="#contact" className="w-fit">
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </ a>
                    </div>
                </div>
            </div>
            
            <div className='xl:col-span-2 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="assets/grid3.png" alt="grid-3" className='w-full sm:h-[276px]
                        h-fit object-contain'/>
                        <div>
                            <p className='grid-headtext'>My Passion for Coding</p>
                            <p className='grid-subtext'>
                                I really enjoy tackling problems and creating cool things with code. 
                                For me, programming isn’t just a job; it’s a passion. 
                                I love diving into new technologies and continuously leveling up my skills.
                            </p>
                        </div>
                </div>
            </div>

            <div className='xl:col-span-1 xl:row-span-2'>
                <div className='grid-container'>
                    <img src="assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] 
                        h-fit object-cover sm:object-top'/>
                        <div className='space-y-2'>
                            <p className='grid-subtext text-center' >Contact Me</p>
                            <div className='copy-container' onClick={handleCopy} >
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className='lg:text-xl md:text-l font-medium text-gray_gradient text-white'>
                                    mahmoud-h-a@hotmail.com
                                </p>
                            </div>
                        </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default About
