import React from 'react';



function Content(props) {
  return (
    <div>
        <p>{props.obj_name}</p>
        <p>{props.obj_age}</p>
        <p>{props.obj_occ}</p>
    </div>
  )
}

export default Content