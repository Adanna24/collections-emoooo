import React from 'react'

function Alert({type, msg}) {
  return (
      <div className={type}>{msg}</div>
  )
}

export default Alert;