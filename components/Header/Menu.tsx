import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { SITE_NAVS } from 'utils/constants'

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}

const Menu = () => {
  const [dropDown, setDropDown] = useState(false)
  const [mobileDropDown, setMobileDropDown] = useState(false)
  const dropNode = useRef(null)
  const mobileNode = useRef(null)  
  useOnClickOutside(dropNode, () => setDropDown(false))
  useOnClickOutside(mobileNode, () => setMobileDropDown(false))

  return (
    <nav>
      <MenuWrapper>
        {SITE_NAVS.map((nav) =>
          nav.slug === null ? (
            <li key={nav.id}>
              <button aria-label="Coaches" onClick={() => setDropDown(!dropDown)}>
                {nav.label}
              </button>
              {dropDown && (
                <DropDown ref={dropNode}>
                  {nav.children.map((child) => (
                    <li key={child.id}>
                      <Link href={child.slug}>
                        <a>{child.label}</a>
                      </Link>
                    </li>
                  ))}
                </DropDown>
              )}
            </li>
          ) : (
            <li key={nav.id}>
              <Link href={nav.slug}>
                <a>{nav.label}</a>
              </Link>
            </li>
          )
        )}
        <li>
          <Link href="#contact">
            <a>Contact</a>
          </Link>
        </li>
      </MenuWrapper>
    </nav>
  )
}

/** Standard Menu */
const MenuWrapper = styled.ul`
  display: none;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    min-width: 500px;
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
  }

  li {
    list-style-type: none;
    padding-bottom: 8px;
    ${(props) => props.theme.fonts.xxxxxl};
    margin: 0 32px;
    color: ${(props) => props.theme.colors.standardGreen};
    transition: all 0.1s ease-in;

    button {
      ${(props) => props.theme.fonts.xxxxxl};
      color: ${(props) => props.theme.colors.standardGreen};
      background-color: white;
      outline: 0;
      border: 0;

      &:hover {
        cursor: pointer;
      }
    }

    &:hover {
      cursor: pointer;
      border-bottom: 3px solid ${(props) => props.theme.colors.standardGreen};
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.standardGreen};
      transition: all 0.1s ease-in;
    }
  }
`

const DropDown = styled.ul`
  background-color: ${(props) => props.theme.colors.gray};
  position: absolute;
  min-width: 240px;
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.colors.shadowNormal};
  margin: 0;
  padding: 0;
  

  li {
    ${(props) => props.theme.fonts.xxxxl};
    text-align: left;
    margin: 16px;
    padding: 0;
  }
`

/** Mobile Menu */

export default Menu
