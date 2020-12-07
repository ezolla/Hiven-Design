import Head from 'next/head'
import styled from 'styled-components'
import { useHivenDesigns, useInputFilter } from '../utils/hooks'

import Navigation from '../components/Navigation'
import DesignStyle from '../components/DesignStyle'
import Search from '../components/Search'

export default function Home() {
  const { data: designs } = useHivenDesigns()

  const entries = Object.entries(designs ?? {})

  const { state, setState, filtered } = useInputFilter((design, i, s) => {
    const [name, code] = design
    s = s.toLowerCase()

    return (code + name).toLowerCase().includes(s)
  }, entries)

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

          {/* Search */}
          <Search
            type='text'
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder={'Search for themes..'}
          />

          {/* Design Styles */}
          <DesignStylesContainer>
            {filtered.map((design) => {
              return <DesignStyle name={design[0]} code={design[1]} />
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
