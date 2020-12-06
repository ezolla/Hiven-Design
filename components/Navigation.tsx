import Image from 'next/image'
import styled from 'styled-components'

export default function Navigation() {
  return (
    <Nav>
      {/* Logo */}
      <Image src='/logo.svg' alt='Hiven House' width={35} height={40} />

      {/* Launch Button */}
      <Launch href='https://app.hiven.io/' target='_blank'>
        Launch Hiven
      </Launch>
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

const Launch = styled.a`
  font-size: 16px;
  font-weight: 600;
  padding: 9px 14px;
  color: var(--color-white);
  background: var(--color-pink);
  border-radius: 5px;
`
