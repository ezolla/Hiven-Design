import styled from 'styled-components'

const Search: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...otherProps
}): JSX.Element => <StyledTextInput {...otherProps} />

export default Search

const StyledTextInput = styled.input`
  width: 100%;
  font-size: 16px;
  color: var(--color-white);
  background: var(--color-dark);
  border: 1px solid var(--color-grey);
  border-radius: 4px;
  padding: 16px 15px;
  box-sizing: border-box;
  margin-bottom: 20px;

  ::placeholder {
    color: var(--color-white);
  }

  :focus {
    outline: none;
  }
`
