import React,{useState} from "react"
import Link from "gatsby-link"

import { Menu as SemanticMenu, Segment } from "semantic-ui-react"

export default function Menu() {

  const pathname = window.location.pathname; // Returns current route
  const path = pathname === "/" ? "/" : pathname.substr(1); // Gets a string from the pathname after the backlash
  const { activeItem, setActiveItem } = useState(path)
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Segment inverted>
      <SemanticMenu inverted secondary>
        
        <SemanticMenu.Item
          as={Link}
          to="/"
          name="Home"
          active={activeItem === "/"}
          onClick={handleItemClick}
        />
        <SemanticMenu.Item
          as={Link}
          to="/about"
          name="About"
          active={activeItem === "About"}
          onClick={handleItemClick}
        />
        <SemanticMenu.Item
          as={Link}
          to="/services"
          name="Services"
          active={activeItem === "Services"}
          onClick={handleItemClick}
        />
      </SemanticMenu>
    </Segment>
  )

}
