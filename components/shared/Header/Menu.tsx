import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

export const SITE_NAVS = [
  {
    id: 1,
    slug: '/',
    label: 'Home',
  },
  {
    id: 2,
    slug: '/services',
    label: 'Services',
  },
  {
    id: 3,
    slug: null,
    label: 'Coaches',
    children: [
      {
        id: 1,
        slug: '/coach/jessica-rebelo',
        label: 'Jessica Rebelo',
      },
      {
        id: 2,
        slug: '/coach/ron-lombardi',
        label: 'Ron Lombardi',
      },
      {
        id: 3,
        slug: '/coach/ché-greeff',
        label: 'Ché Greeff',
      },
    ],
  },
  {
    id: 4,
    slug: '/our-story',
    label: 'Our Story',
  },
  {
    id: 5,
    slug: '/reviews',
    label: 'Reviews',
  },
]

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
  const [dropDown, setDropDown] = useState<boolean>(false)
  const [mobileDropDown, setMobileDropDown] = useState<boolean>(false)
  const dropNode = useRef<HTMLUListElement>(null)
  const mobileNode = useRef<HTMLDivElement>(null)
  useOnClickOutside(dropNode, () => setDropDown(false))
  useOnClickOutside(mobileNode, () => setMobileDropDown(false))
  const handleDropDown = () => setDropDown(!dropDown)

  return (
    <nav>
      <MenuWrapper>
        {SITE_NAVS.map((nav) =>
          nav.slug === null ? (
            <li key={nav.id}>
              <button aria-label="Coaches" onClick={handleDropDown}>
                {nav.label}
              </button>
              {dropDown && (
                <DropDown ref={dropNode}>
                  {nav.children.map((child, index) => (
                    <li key={child.id}>
                      <div
                        tabIndex={index}
                        onKeyPress={handleDropDown}
                        onClick={handleDropDown}
                        role="button"
                      >
                        <Link href={child.slug}>
                          <a>{child.label}</a>
                        </Link>
                      </div>
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    height: 32px;
    margin-top: 16px;
  }

  li {
    list-style-type: none;
    padding-bottom: 8px;
    ${(props) => props.theme.fonts.lg};
    margin: 0 32px;
    color: ${(props) => props.theme.colors.standardGreen};
    transition: all 0.1s ease-in;

    button {
      ${(props) => props.theme.fonts.lg};
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
  min-width: 160px;
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.colors.shadowNormal};
  margin: 0;
  padding: 0;
  z-index: 99;

  li {
    ${(props) => props.theme.fonts.lg};
    text-align: left;
    margin: 16px;
    padding: 0;
    height: 30px;

    &:hover {
      border-bottom: 0;
    }
  }
`

/** Mobile Menu */

export default Menu
