import Image from 'next/image'
import styled from 'styled-components'

export default function Navigation() {
  return (
    <Nav>
      {/* Logo */}
      <Image src='/logo.svg' alt='Hiven House' width={35} height={40} />

      <Links>
        <li>
          <a
            href='https://github.com/ezolla/Hiven-Design#contributing'
            target='_blank'
          >
            Contribute
          </a>
        </li>
        <li>
          <a href='https://github.com/ezolla/Hiven-Design' target='_blank'>
            Github
          </a>
        </li>
        <li>
          {/* Launch Button */}
          <Launch href='https://app.hiven.io/' target='_blank'>
            Launch Hiven
          </Launch>
        </li>
      </Links>
    </Nav>
  )
}

const Nav = styled.nav`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`

const Links = styled.ul`
  li {
    display: inline;
    margin-left: 14px;
  }
`

const Launch = styled.a`
  font-size: 16px;
  font-weight: 600;
  padding: 9px 14px;
  background: var(--color-pink);
  border-radius: 5px;
`
