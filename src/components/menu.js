import React from "react"
import { nominalTypeHack } from "prop-types"
import {Link } from "react-router-dom"

export default function Menu() {

    // Left it at: https://youtu.be/6YhqQ2ZW1sc?t=1153
  return (
    <div
      style={{
        background: "#f4f4f4",
        paddingTop: "10px",
      }}
    >
      <ul
        style={{
          listStyle: nominalTypeHack,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
          <li><Link to="/">Home</Link> </li>
          <li><Link to="/about">About</Link> </li>
          <li><Link to="/services">Services</Link> </li>
          <li><Link to="/">Home</Link> </li>

      </ul>
    </div>
  )
}
