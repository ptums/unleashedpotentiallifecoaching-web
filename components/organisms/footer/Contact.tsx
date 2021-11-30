import React from 'react'
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import styled from 'styled-components'

const Contact = () => (
  <ContactList>
    <ListItem>
      Jessica: <a href="tel:631-432-8897">(631) 432-8897</a>
    </ListItem>
    <ListItem>
      Ron: <a href="tel:631-507-7248">(631) 507-7248</a>
    </ListItem>
    <ListItem>
      <a href="mail:Unleashedpotentiallifecoaching@gmail.com">
        Unleashedpotentiallifecoaching@gmail.com
      </a>
    </ListItem>
    <ListItem>
      <a
        href="https://www.facebook.com/unleashedpotentiallifecoaching/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineFacebook size={64} />
      </a>
      <a
        href="https://www.instagram.com/unleashedpotentiallifecoaching/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineInstagram size={64} />
      </a>
    </ListItem>
  </ContactList>
)

const ContactList = styled.ul`
  margin-top: 64px;
  list-style-type: none;
  ${(props) => props.theme.fonts.xlwide};
  color: ${(props) => props.theme.colors.darkGreen};
`

const ListItem = styled.li`
  a {
    color: inherit;
    text-decoration: none;
  }
`

export default Contact
