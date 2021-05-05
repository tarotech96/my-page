import React from 'react'
import './SlideShow.css'
import Slider from 'react-slick'
import coderImg from 'assets/images/coder.png'
import hacker1Img from 'assets/images/hacker1.png'
import hacker2Img from 'assets/images/hacker2.png'

function SlideShow() {
  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className="slide">
      <Slider {...settings}>
        <div>
          <img src={coderImg} alt="coder" />
        </div>
        <div>
          <img src={hacker1Img} alt="hacker1" />
        </div>
        <div>
          <img src={hacker2Img} alt="hacker2" />
        </div>
      </Slider>
    </div>
  )
}

export default SlideShow
