import React, { useContext, useState } from 'react'
import "./Card.css"
import { posts } from '../../../data';
import RedHeart from "../../../images/redHeart.svg";
import Heart from  "../../../images/heart.svg";
import Comment from "../../../images/comment.svg";
import Info from  "../../../images/info.svg";
import Share from "../../../images/share.svg";


function Card({post}) {
  const [liked, setLiked] = useState(false);
  
 

  return (
    <div className="card" key={post.id}>
      <div className="info">
        <img src={post.download_url} alt="" className="userImg" />
      </div>
      <img src={post.download_url} alt="" className="postImg" />
      <div className="interaction">
        {liked ? (
          <img src={RedHeart} alt="" className="cardIcon" />
        ) : (
          <img
            src={Heart}
            alt=""
            className="cardIcon"
          />
        )}
        <img
          src={Comment}
          alt=""
          className="cardIcon"
        />
        <img
          src={Share}
          alt=""
          className="cardIcon"
        />
        <img src={Info} alt="" className="cardIcon infoIcon" />
      </div>
    </div>

  )
}

export default Card