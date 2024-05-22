import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import data from '../JSON/data.json'
import { faClose, faCode, faEye, faHome,   faMobileAlt, faPerson } from '@fortawesome/free-solid-svg-icons'
import { BusinessCenter, Download } from '@mui/icons-material'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp'
import { faContactBook } from '@fortawesome/free-solid-svg-icons/faContactBook'
import { AnimatedOnScroll } from "react-animated-css-onscroll";
 


const menu = data["menuitems"]
const menuitems = data["menuitems"]
const skillsdata = data["Skills"]
const projectdata = data["projects"]
const contactData = data["contact"]

const Wrapper = styled.div`
height: 100vh;
width: 100vw;
overflow: auto;
 position: relative;

 
`

const Header = styled.header`
height: 8vh;
width: 100%;
position: fixed;
backdrop-filter: blur(100px);
 
top: 0; right: 0; left: 0;
/* box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.1); */
display: flex;
justify-content: space-evenly;
align-items: center;
/* background: linear-gradient(to left, #001F3F , white); */
 
font-family: "Lilita One", sans-serif;
  font-weight: 400;
  font-style: normal;
 z-index: 999;


 h3{
  color: transparent;
 }
 
  
 .menu-i{
  display: flex;
  align-items: center;
  gap: 5rem;
  color: #001F3F;
 
 }

.menu-icon{
cursor   : pointer;
font-size: 1.5rem;
transition: all 0.3s ease;
 
}

.rotate{
  transform: rotate(90deg);
}

 
 

.menu{
 
  transform: translateY(-200%);
  transition: all 0.5s ease;
}


.fall{
  color: #001F3F;
  font-size: 1.2rem;
  transform: translateY(0);
  cursor: pointer;
}

.fall:nth-child(1) {
  transition-delay: 0.7s;
}

.fall:nth-child(2) {
  transition-delay: 0.6s;
}

.fall:nth-child(3) {
  transition-delay: 0.5s;
}

.fall:nth-child(4) {
  transition-delay: 0.4s;
}
.fall:nth-child(5) {
  transition-delay: 0.3s;
}

.menu.hide {
  transform: translateY(-500%);
   
}

.hide:nth-child(1) {
  transition-delay: 0.7s;
}

.hide:nth-child(2) {
  transition-delay: 0.6s;
}

.hide:nth-child(3) {
  transition-delay: 0.5s;
}

.hide:nth-child(4) {
  transition-delay: 0.4s;
}
.hide:nth-child(5) {
  transition-delay: 0.3s;
}


@media screen and (max-width: 900px){

  display: flex;
  justify-content: space-around;
  

  .menu{
        display: none;
  }
}


`


const Home = styled.div`
height: 100vh;
width: 100%;
padding-top: 8vh;
/* background: linear-gradient(to bottom, #001F3F , white); */
 
 


.menu.active{
  color: red;
}

 
`

const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
 

.name-role{

  font-family: "Mulish", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
 
   p{
    font-size: 2rem;
    font-weight: 300;
    color: #001F3F;
   }
 
  h3{
    font-family: "Lilita One", sans-serif;
    font-style: normal;
    font-size: 4rem;
    color: #001F3F;
  }
}

button{
  background: #001F3F;
  color: white;
  border-radius: 30px;
  width: 15rem;
  height: 3rem;
  border: none;
  outline: none;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  &:hover{
    background: #FF5733;
    transition: all 0.3s ease;
  }
}


@media screen and (max-width:900px){
 
 

  .name-role{
    width: 100%;
    height: 30%;
    display: grid;
    place-items: center;
   

    p {
      font-size: 1.5rem;  
      font-weight: 300;
      color: #001f3f;
    }

    h3 {
      font-family: "Lilita One", sans-serif;
      font-style: normal;
      font-size: 2.5rem;  
      color: #001F3F;
    }
  }
}

`

const About = styled.div`
height: 90vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
 

.about-content{
  display: flex;
  flex-direction: column;
justify-content: center;
align-items: center;
gap: 2rem;
  width: calc(40%);
  height: calc(50%);
  font-family: "Mulish", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
   
  h3{
    color: #001f3f;
    font-family: "Lilita One", sans-serif;
      font-style: normal;
      font-size: 2.5rem; 
  }

  p{
    color: #001f3f;
    font-size: 1.2rem;
  }

  button{
  background: #001F3F;
  color: white;
  border-radius: 30px;
  width: 15rem;
  height: 3rem;
  border: none;
  outline: none;

  &:hover{
    background: #FF5733;
    transition: all 0.3s ease;
  }
}

  

}



@media screen and (max-width: 900px){
 
  
  .about-content{
    padding: 20px;
    width: 100%;

  }

 
}

`
 

const Skills = styled.div`
 width: 100%;
 height: 100%;

 .skills-intro{
  width: 100%;
  height: 20%;
  color: #001f3f;
  font-family: "Lilita One", sans-serif;
   font-style: normal;
   font-size: 2.5rem; 
    display: flex;
    align-items: center;
    justify-content: center;
    }

 .skills-content{
  font-family: "Mulish", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
   width: 100%;
   height: 80%;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
   place-items: center;
   grid-gap: 1rem;
  }
  
  .skills{
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   gap: 1rem;
  width: 200px;
  height: 200px;
  transition: all 0.3s ease;
  cursor: pointer;
   background: #f9f9f9;

  &:hover{
    transform: translateY(-10px);
   
  }
  
 }


 @media screen and (max-width: 900px){
 height: auto;

 .skills-gap{
  height: 100px;
  background: white;
 }
  
 .skills{
   grid-gap: 1rem;
   width: 80%;
  height: 150px;
 }
}

 
 `


const Projects = styled.div`
height: 100%;
width: 100%;
 

.projects-intro{
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #001f3f;
  font-family: "Lilita One", sans-serif;
   font-style: normal;
   font-size: 2.5rem; 
}

.projects-content{
  height: 85%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  place-items: center;
  gap: 2rem;
  padding: 5rem;
}

.project-container{
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1); 
  position: relative;
}

img{
  height: 350px;
  cursor: pointer;
}
  

.eye-icon{
font-size: 1.3rem;
color: #001f3f;
}
 
.eye-container{
  cursor: pointer;
  /* border: 2px solid #001f3f; */
    position: absolute;
  bottom: 10%;
  left: 10%;
  width: 15%;
  height: 15%;
  display: ${(props) => props.hoverView ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  border-radius: 30%;
  transition: all 0.3s ease;
  z-index: 999;
  background: white;


  &:hover{
    background: #001f3f;


    .eye-icon{
      color: white;
    }

     

  }
}

.project-container:hover .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.4s ease;
 
}


.overlay{
  cursor: pointer;

  span{
    display: none;
  }
}

 
 

    @media screen and (max-width: 900px){
      height: auto;


      .projects-content{
       padding: 2rem;
}
      

      .eye-container{
        display: flex;
      }
    }

    span{
      display: block;
      text-transform: capitalize;
      text-align: center;
      color: #001f3f;
      background: white;
    }
    .project-container:hover .overlay {
   
      span{
        display: none;
      }
}
 

 

 
`

const Contact = styled.div`
height: 40%;
width: 100%;
background:  #f5f5f5;
 
 

   .contact-title{
 
    height: 50%;
    width: 100%;
    display: flex;
  justify-content: center;
  align-items: center;
    color: #001f3f;
  font-family: "Lilita One", sans-serif;
   font-style: normal;
   font-size: 2.5rem; 
   }
 

.contact-links {
   height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 3rem;
}

.icon-div{
  border-radius: 40%;
  border: 2px solid #001f3f;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #001f3f;
  color: white;

  &:hover{
    background: white;
    transition: all 0.3s ease;
  }

  &:hover img{
    filter: grayscale(100%);
  }
  
  img{
    width: 60%;
    filter: brightness(0) invert(1);
    height: 60%;

  }

  a{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

   
   @media screen and (max-width: 900px){
      height: 50%;
    }
`

const MoveToTop = styled.div`
  width: 40px;
  height: 40px;
  position: fixed;
  right: 80px;
  bottom: 50px;
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  background: #001f3f;
  color: white;
  border-radius: 10px;
  cursor: pointer;

  &:hover{
    color: #001f3f;
    background: white;
    border-radius: 10px;
    border: 2px solid #001f3f;
    transition: all 0.3s ease;
  }
`

const MobileMenu = styled.div`
backdrop-filter: blur(20px);
height: 100%;
width: 100%;
position: fixed; 
top: 10vh;
left: ${(props) => props.menuOpen ? '0' : '-100%'};
transition: all 0.3s ease;
z-index:1000;
display: flex;
flex-direction: column;
text-align: center;
gap: 1rem;

div{
  background: #001f3f;
  color: white;
height: 3rem;
display: flex;
padding-left: 1rem;
 text-align: center;
align-items: center;
gap: 1rem;
}


@media screen and (min-width: 900px){
  display: none;
}
`

function Portfolio() {

  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }


  const [hoverImage, setHoverImage] = useState(null)

  const hoverEnter = (index) => {
    setHoverImage(index)

  }

  const hoverLeave = () => {
    setHoverImage(null)
  }

  const clickToResume = () => {
    window.location.href = 'https://1drv.ms/b/c/2cd9454a2341e747/EYpcB1p_bwNHmKO3PRsD9YoBSnbe74bFQRgl9gFQxzbZ5Q?e=ZaEnxg'
  }


  const homeRef = useRef()
  const aboutRef = useRef()
  const projectsRef = useRef()
  const skillsRef = useRef()
  const contactRef = useRef()


  const ScrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  }


const[activeMenu, setActiveMenu] = useState(false)

 
const handleMenuChange = (item) => {
setActiveMenu(item)
}

 
const [developer, setDeveloper] = useState('Frontend Developer !');

useEffect(() => {
  const interval = setInterval(() => {
    setDeveloper(prevDeveloper =>
      prevDeveloper === 'Frontend Developer !' ? 'Web Developer !' : 'Frontend Developer !'
    );
  }, 2000);  

  return () => clearInterval(interval);
}, []);

 
  return (
    <Wrapper  >

 
        <Header>

          <h3>Santhosh</h3>
 
          <div className="menu-i">

            {/* {
              menu.map((item, index) => (
                <div className={`menu ${menuOpen ? 'fall' : 'hide'}`}  onClick={() => {ScrollToSection((item.ref)); console.log('clicked', item.item)}} key={index}>{item.item}</div>
              ))
            } */}
            <div className={`menu ${menuOpen ? 'fall' : 'hide'} ${activeMenu === 'Home' ? 'active' : 'default'}`} onClick={() => { ScrollToSection(homeRef);  }}>{menuitems[0].item}</div>
            <div className={`menu ${menuOpen ? 'fall' : 'hide'}`} onClick={() => { ScrollToSection(aboutRef);   }}>{menuitems[1].item}</div>
            <div className={`menu ${menuOpen ? 'fall' : 'hide'}`} onClick={() => { ScrollToSection(skillsRef);  }}>{menuitems[2].item}</div>
            <div className={`menu ${menuOpen ? 'fall' : 'hide'}`} onClick={() => { ScrollToSection(projectsRef);  }}>{menuitems[3].item}</div>
            <div className={`menu ${menuOpen ? 'fall' : 'hide'}`} onClick={() => { ScrollToSection(contactRef);   }}>{menuitems[4].item}</div>


            <FontAwesomeIcon className={`menu-icon ${menuOpen ? 'rotate' : ''}`} icon={menuOpen ? faClose : faBars} onClick={handleMenuOpen} />
          </div>

        </Header>
      <Home ref={homeRef}   >



        <Content >
        <AnimatedOnScroll animationIn="fadeInUp" isVisible={true} duration="1000" once={false} >

          <div className="name-role">
            <h3>I'm</h3>
            <h3>Santhosh Kumar</h3>
            <p>{developer}</p>
            <button onClick={() => { ScrollToSection(projectsRef) }}>Visit Projects  <BusinessCenter /></button>
            
          </div>
         </AnimatedOnScroll>
        </Content>
      </Home>

      <About ref={aboutRef}>
  
    <div className="about-content">
  
      <h3>About Me</h3>
      <p>Tech Enthusiast and an Optimistic Computer Science Graduate looking forward to being a part of an organization where I can expand and enrich my skills and subsequently contribute to the organization’s growth.</p>
      <button onClick={clickToResume}>Download CV <Download /></button>
      
    </div>
 
</About>


      <Skills ref={skillsRef} >
      
        <div className="skills-intro">
          What I Know?
        </div>
        <div className="skills-content">

          {
            skillsdata.map((skills, index) => (
              <div style={{ borderBottom: `3px solid ${skills.color}` }} key={index} className="skills">
                <img src={skills.icon} alt={skills.skill} />
                <p>{skills.skill}</p>
              </div>
            ))
          }
        </div>

         
        <div className="skills-gap"> </div>
      </Skills>

      <Projects ref={projectsRef} hoverView={hoverImage} >
        <div className="projects-intro">
          Projects
        </div>

        <div className="projects-content" >
          {
            projectdata.map((project, index) => (
              <div key={index} className={`project-container ${hoverImage === index ? 'pro-link' : ''}`} onMouseEnter={() => hoverEnter(index)} onMouseLeave={hoverLeave}>
                <img className='img-fluid' src={project.image} />
                {hoverImage === index && (
                  <div className="eye-container" >
                    <a href={project.link}> <FontAwesomeIcon className="eye-icon" icon={faEye} /> </a>
                  </div>
                )}
                <div className="overlay"><span>click image to view project</span></div>
              </div>
            ))
          }
        </div>



      </Projects>

      <Contact ref={contactRef} >

        <div className="contact-title">
          Contact
        </div>


        <div className="contact-links">
          {
            contactData.map((item, index) => (
              <div key={index} className="icon-div">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.icon} alt={item.media} title={item.media} />
                </a>
              </div>
            ))
          }
        </div>



      </Contact>
      
      <MoveToTop onClick={() => { ScrollToSection(homeRef) }} >
        <FontAwesomeIcon icon={faArrowUp}  />

      </MoveToTop> 

             
       <MobileMenu menuOpen = {menuOpen}>
       <div className={`menu ${menuOpen ? 'fall' : 'hide'} ${activeMenu === 'Home' ? 'active' : 'default'}`} onClick={() => { ScrollToSection(homeRef);  }}> <FontAwesomeIcon icon={faHome}/> {menuitems[0].item}</div>
            <div className={`menu ${menuOpen ? 'fall' : 'hide'}`} onClick={() => { ScrollToSection(aboutRef);   }}><FontAwesomeIcon icon={faPerson}/>{menuitems[1].item}</div>
            <div className={`menu ${menuOpen ? 'fall' : 'hide'}`} onClick={() => { ScrollToSection(skillsRef);  }}><FontAwesomeIcon icon={faCode}/>{menuitems[2].item}</div>
            <div className={`menu ${menuOpen ? 'fall' : 'hide'}`} onClick={() => { ScrollToSection(projectsRef);  }}><FontAwesomeIcon icon={faMobileAlt}/>{menuitems[3].item}</div>
            <div className={`menu ${menuOpen ? 'fall' : 'hide'}`} onClick={() => { ScrollToSection(contactRef);   }}><FontAwesomeIcon icon={faContactBook}/>{menuitems[4].item}</div>
       </MobileMenu>

    
    </Wrapper>
  )
}

export default Portfolio
