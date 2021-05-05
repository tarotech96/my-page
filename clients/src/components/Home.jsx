import React from 'react'
import Container from '@material-ui/core/Container'
import SlideShow from './common/slide/SlideShow'
import developerImg from 'assets/images/developer.png'

function Home() {
  return (
    <div className="home-page">
      <Container maxWidth="sm">
        <SlideShow />
      </Container>
      <div className="section">
        <div className="st__left">
          <h2>Taro Tech</h2>
          <p>
            My Journey into Software Engineering Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
            ultrices mauris. Nunc elit justo, efficitur quis faucibus id, convallis in sapien. Donec id euismod dolor.
            Mauris ultricies, est at congue venenatis, tellus dui elementum augue, et ullamcorper erat nulla et nisi.
            Integer ultrices lorem vel accumsan ornare. Ut accumsan arcu tortor, vel porta purus consectetur eget.
            Pellentesque placerat orci non congue molestie. Suspendisse varius at odio scelerisque luctus.
          </p>
        </div>
        <div className="st_right">
          <img src={developerImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
