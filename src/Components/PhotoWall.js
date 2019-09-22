import React from 'react'
import Photo from './Photo';

export default function PhotoWall(props) {
  return (
    <div className="photoGrid">
      {props.posts.map((post, index) => <Photo key={index} post={post} />)}
    </div>
  )
}

