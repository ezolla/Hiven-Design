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

  return (
    <DesignStyleCard>
      {/* Title */}
      <Title>{props.name}</Title>

      {/* Copy Button */}
      <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
        <Copy>
          <Image src='/clipboard.svg' alt='Clipboard' width={18} height={18} />
        </Copy>
      </CopyToClipboard>
    </DesignStyleCard>
  )
}

const DesignStyleCard = styled.div`
  background: var(--color-dark);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
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
