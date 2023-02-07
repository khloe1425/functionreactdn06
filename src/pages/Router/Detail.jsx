import React from 'react'

export default function Detail(props) {


  return (
    <div className='container'>
        <p className='alert alert-danger w-25' >
            {props.match.params.id}
            </p>
    </div>
  )
}
