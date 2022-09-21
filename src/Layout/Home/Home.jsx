import React from 'react'
import './Home.css'
import Main from '../../assets/bg_main.jpg'
import Post from '../../components/Home/Post'

function Home() {

  return (
    <div className='home'>
        <div className="home__container">
            <img src= {Main} alt="" className="main__image" />
            <div className="home__slideArea">

            </div>
            <div className="home__row">
                <Post 
                    id = "1" 
                    title = "은행동 커피홀" 
                    image = "https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg"
                    score = {3.9}
                    address = "은행동"
                    view = {776141}
                    mark = {1211}
                    call = {1327}
                    expl = "인스타 맛집 ^^ 😄😄"
                />
                <Post 
                    id = "2" 
                    title = "은행동 커피홀" 
                    image = "https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg"
                    score = {3.4}
                    address = "은행동"
                    view = {776141}
                    mark = {1211}
                    call = {1327}
                    expl = "인스타 맛집 ^^ 😄😄"
                />
                <Post 
                    id = "3" 
                    title = "은행동 커피홀" 
                    image = "https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg"
                    score = {4.0}
                    address = "은행동"
                    view = {776141}
                    mark = {1211}
                    call = {1327}
                    expl = "인스타 맛집 ^^ 😄😄"
                />
            </div>
        </div>
    </div>
  )
}

export default Home
