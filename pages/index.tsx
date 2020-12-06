import Head from 'next/head'
import styled from 'styled-components'

import Navigation from '../components/Navigation'
import DesignStyle from '../components/DesignStyle'

export default function Home() {
  const hivenDesigns = [
    'Hiven Dark:aF92MTpkYXJrLCMzYjNiM2IsIzJkMmQyZCwjMjQyNDI0LCMxZTFlMWUsIzE5MTkxOSwjMTIxMjEyLCNmZmZmZmYsI2RlZGVkZSwjOTY5Njk2LCM4Nzg3ODcsIzY0NjQ2NCwjZmY3OWM2LCNmZjAwODMsIzFhYjU1NywjOGJlOWZkLCNmMWZhOGMsI2ZmNGY0Zg==',
    'Discord Light:aF92MTpkYXJrLCNjZmNmY2YsI2Y3ZjdmNywjZjVmNWY1LCNmMmYyZjIsI2U2ZTZlNiwjZjVmNWY1LCMwMDAsIzAwMCwjOTY5Njk2LCM4Nzg3ODcsIzY0NjQ2NCwjZmMzZDE2LCNmYzRmMmQsIzFhYjU1NywjOGJlOWZkLCNmMWZhOGMsI2ZmNGY0Zg==',
    'Subdued Blue:aF92MTpkYXJrLCMzQjNBNUUsIzNCM0E1RSwjMjgyODQxLCMyMzIzMzgsIzIzMjMzOCwjMUMxQzI5LCNGRkZGRkYsI2RlZGVkZSwjOTY5Njk2LCM4Nzg3ODcsIzY0NjQ2NCwjNzI4OURBLCMwMDk5RTUsIzFhYjU1NywjOGJlOWZkLCNmMWZhOGMsI2ZmNGY0Zg==',
    'Strelitzia Orange:aF92MTpkYXJrLCNmOTMsI2VlZSwjZmRhLCNmZjdmMDAsI2Q2MCwjYjIyLCMwMDAsIzAwMCwjMDAwLCMwMDAsIzAwMCwjZTY2LCNiMjIsIzFhYjU1NywjOGJlOWZkLCNmMWZhOGMsI2ZmNGY0Zg==',
    'Oled Black:aF92MTpkYXJrLCMxMjEyMTIsIzEyMTIxMiwjMDAwLCMwMDAsIzEyMTIxMiwjMDAwLCNmZmYsI2ZmZiwjZmZmLCNmZmYsI2ZmZiwjZDAwLCNkMDAsIzFhYjU1NywjOGJlOWZkLCNmMWZhOGMsI2ZmNGY0Zg==',
  ]

  return (
    <div>
      <Head>
        <title>Hiven Design</title>
        <link rel='icon' href='/logo.svg' />
      </Head>

      {/* Navigation */}
      <Navigation />

      <main>
        <ContentWrapper>
          {/* Title */}
          <Title>Share theme styles for Hiven platform</Title>

          {/* Design Styles */}
          <DesignStylesContainer>
            {hivenDesigns.map((design) => {
              let split = design.split(':')

              return <DesignStyle name={split[0]} code={split[1]} />
            })}
          </DesignStylesContainer>
        </ContentWrapper>
      </main>
    </div>
  )
}

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const Title = styled.h1`
  color: var(--color-white);
  font-size: 64px;
  font-weight: 800;
  text-align: center;
  max-width: 610px;
  margin: 100px auto 80px;
`

const DesignStylesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`
