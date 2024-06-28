import React from 'react'

const Button = ({title,className,}) => {
  return (
      <button className= {`h-12 w-40 text-xl font-poppins ${className}`}>
          {title}
    </button>
  )
}

export default Button