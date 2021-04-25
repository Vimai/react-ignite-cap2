import { GlobalStyle } from './styles/global'
import styled from 'styled-components'
import { TransactionsTable } from './components/TransactionsTable'


const Title = styled.h1`
  color: #8257e6;
  font-size: 64px;
`

export function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Title>Hello World</Title>
      <TransactionsTable></TransactionsTable>
      <GlobalStyle />
    </div>
  );
}

