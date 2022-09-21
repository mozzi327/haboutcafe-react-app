import React from 'react';
import './Post.css';
import {GrView} from 'react-icons/gr'
import {AiFillStar} from 'react-icons/ai'
import {IoMdCall} from 'react-icons/io'
import {FaStarHalfAlt} from 'react-icons/fa'
import {FaStar} from 'react-icons/fa'
import {FaRegStar} from 'react-icons/fa'

function Post({id, title, image, score ,address, expl, view, mark, call}) {
  return (
    <div className="caffe__post">
      <a href="#"><img src={image} alt="" /></a>
      <div className="cafe__info">
        <div className="caffe__score">
          <span className='score'>{score.toFixed(1)}</span>
          <span className='caffe__rating'>
            {
              <Rating score={score} />
            }
            </span>
        </div>
        <a href='#' className="caffe__title">{title}</a>
        <p className="caffe__address">{address}</p>
        <a href='#' className="caffe__expl">
          {expl}
        </a>
        <div className="caffe__view_mark_call">
          <span className="view">
            <GrView/>
            <p>{view}</p>
          </span>
          <span className="mark">
            <AiFillStar/>
            <p>{mark}</p>
          </span>
          <span className="call">
            <IoMdCall/>
            <p>{call}</p>
          </span>
        </div>
      </div>

      
    </div>
  );
}


function Rating({score}) {
  let star = Array(5)
  .fill()
  .map((_, i) => (
    <p><FaRegStar style={{color : 'rgb(243, 156, 18)'}}/></p>
  ))

  let units = Math.floor(score)
  let demical = score.toPrecision(1) - units

  for (let i = 0; i < units; i++) {
    star[i] = <p><FaStar style={{color : 'rgb(243, 156, 18)'}}/></p>
  }

  if(demical >= 0.5) {
    star[units] = <p><FaStarHalfAlt style={{color : 'rgb(243, 156, 18)'}}/></p>
  }

  return star
}

export default Post;
