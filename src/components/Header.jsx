import React from 'react'

function Header({title, bgColor, titleColor}) {
    const headStyle={
        background: bgColor,
        color: titleColor
    }
  return (
    <header style={headStyle}>
        <div className="container">
            <h2>{title}</h2>
        </div>
    </header>
  )
}

Header.defaultProps ={
    title: 'Feedback App',
    bgColor: "rgba(0,0,0, 0.4)",
    titleColor: "#ff6a95"
}

export default Header