import Image from 'next/image'
import styled from 'styled-components'
import { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

interface Props {
  name: string
  code: string
}

export default function DesignStyle(props: Props) {
  const [value, setValue] = useState(props.code)
  const [copied, setCopied] = useState(false)

  const decoded = atob(props.code)
  console.log(decoded)

  const format = decoded.split(',')
  console.log(format)

  let clean = format.splice(1)
  clean = clean.splice(0, 13)

  return (
    <DesignStyleCard>
      <HeadingWrap>
        {/* Title */}
        <Title>{props.name}</Title>

        {/* Copy Button */}
        <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
          <Copy>
            <Image
              src='/clipboard.svg'
              alt='Clipboard'
              width={18}
              height={18}
            />
          </Copy>
        </CopyToClipboard>
      </HeadingWrap>

      <ColorWrap>
        {/* Color Swatches */}
        {clean.map((color) => {
          return <ColorSwatch color={color} />
        })}
      </ColorWrap>
    </DesignStyleCard>
  )
}

const DesignStyleCard = styled.div`
  background: var(--color-dark);
  border-radius: 2px;
  padding: 10px;
`

const HeadingWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  color: var(--color-white);
`

const Copy = styled.a`
  padding: 5px 6px;
  background: var(--color-grey);
  border-radius: 5px;
  cursor: pointer;
`

const ColorWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`

const ColorSwatch = styled.div<{ color: string }>`
  background: ${({ color }) => color};
  height: 8px;
  width: 100%;
`
