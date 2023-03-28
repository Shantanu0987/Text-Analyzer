import React from 'react'

export default function Alert(props) {
  return (
    
      props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
        <b>{props.alert.type}</b> : {props.alert.message}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    
  )
}
