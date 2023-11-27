import React from 'react'
import "./About.css"
import { Container } from 'react-bootstrap'
function Aboutpage() {
  return (
    <div className='about_container'>
      <div className='about_wrapper' >
        {/* <img className="about_bg" src="https://i.postimg.cc/C50FJPkH/login-image.png"></img> */}
        <div class="about-content">
          <h1 className='text-center p-3 mb-3 mt-3'>About Us</h1>
        </div>
      </div>
      <div className='history'>
        <div className='history_white'>

          <div className='history__white__top-section'>
            <div className='history_image'>
              <img className='history__top-image__section' src="https://i.postimg.cc/Wpqwmpvy/st-mary-s-school.png"></img>
            </div>
            <div className='history_description'>
              <h1 className='ninty__six__style' >1993</h1>
              <h1 className='history__left-section-discription'>Established & administrated by the Daughters of Mary Educational and Charitable Society</h1>
            </div>
          </div>
          {/* bottom section */}
          <div className='bottom__wrapper'>

            <p>The school is affiliated to the Central Board of Secondary Education (C.B.S.E) it is a Co-educational Center of National Standard. The school prepares students for the All India Secondary School Examination (A.I.S.S.E) conducted by the CBSE. It admits students of all communities irrespective of caste or creed.<br></br>The moto of our school is lighted for life. We the Mariens prepares the students keep shining and do their duties diligently and become important to the world and find their purpose of life. The School aims at giving education in its truest sense of the word. Education that goes behind the confines of acadamics, moulding the child's personality,building up his moral character, instilling a sense of responsibility, in short helping children grown up to responsible citizens based on christian values.<br></br>Today the modern concept of education is to define education as a three dimension process and endeavors catering not only to the child’s mental exigencies but also its physical, moral and aesthetic exigencies, there by achieving the development of the total personality of the individual ,making him/her an integrated and harmoniously developed ,persons, useful and only to himself/herself by also to the society as a whole.<br></br>The general principle of education is the basics and foundation of all the educational endeavors of the congregation, which has been doing yeoman services in the field of modern education, not only at tertiary and advanced levels, but even at nursery, primary and secondary levels.: Education for complete living” has been the watch word and guiding principle of all its educational projects and programs.<br></br>St Mary’s is yet another of the many educational endeavors of forming leaders who are intellectually competent, spiritually mature, morally upright, psychologically integrated ,physically healthy and Socially acceptable, who will Champion the cause of “Justice,Love,Truth and peace and who are ever open for further growth”.</p>
            <h4>Objectives</h4>

            <li>To hold up before the students an integral view of life based on moral values and perspectives and promote their all round development ,intellectual, physical and spiritual.</li>


            <li>To provide an educational which aims at excellence in the pursuit of knowledge and encourages creativity and independent thinking.</li>
            <li>To awaken in students an awareness of social and economic realities in the world around them and a sense of social responsibility. to develop in them to be responsible and useful citizens of India.</li>
            <h4>Curriculum</h4>
            <p>The School provides highly efficient coaching to both boys and girls according to the syllabus prescribed by the Central Board of Secondary Education, New Delhi. The objective of the curriculum is to fully develop student’s individual potentialities rather than to continue him/her to books alone. The medium of instruction is English, Hindi and Malayalam, Periodical and monthly student evaluation and parent/teachers meeting wii help to assess the level of attainment of the student.</p>
          </div>



        </div>
        <div className='administration_bg  mt-4'>
          <h1 className='mt-4'>Administration</h1>
          <div className='mt-5 image__Wrapper-administration'>
            <div className='image__content'>
              <img className='administration__image-section' style={{height:"500px"}} src="https://i.postimg.cc/X7NYrWcJ/Whats-App-Image-2023-11-17-at-1-03-54-PM.jpg" alt="" />
              <div className='administration__bottom'>
                <h2>AmarDev</h2>
                <h3>PRINCIPAL</h3>
              </div>

            </div>
            <div className='admininstration__left-section'>
              <img className='administration__image-section'style={{height:"500px"}} src="https://i.postimg.cc/SRG9hGLx/IMG-4144.jpg" alt="" />

              <div className='administration__bottom'>
                <h2>Ashiq </h2>
                <h3>ACCOUNTANT</h3>
              </div>
            </div>

          </div>

        </div>

      </div>




    </div>
  )
}

export default Aboutpage