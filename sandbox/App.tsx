// Dependencies
import React, { FC } from 'react'

import styled from '@emotion/styled'

// Components
import Button from '../src/components/Button'

const StyledApp = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 1rem;
  background-color: #fff;
  margin: 0 auto;
  padding-bottom: 500px;
  width: 95%;
`

const App: FC = () => {
  return (
    <StyledApp>
      <div>
        <h2>Buttons</h2>
        <p>
          <Button variant="contained" size="sm" color="danger">
            Hello World
          </Button>
        </p>
        <p>
          <Button variant="contained" size="md" color="warning">
            Hello World
          </Button>
        </p>
        <p>
          <Button variant="contained" size="lg">
            Hello World
          </Button>
        </p>
        <p>
          <Button size="sm" variant="text">
            Primary
          </Button>
        </p>
        <p>
          <Button>Primary</Button>
        </p>
        <p>
          <Button size="lg" variant="outlined">
            Primary
          </Button>
        </p>
        <p>
          <Button size="xl" variant="outlined">
            Primary
          </Button>
        </p>
        <p>
          <Button size="sm">Primary</Button>
        </p>
        <p>
          <Button>Primary</Button>
        </p>
        <p>
          <Button size="lg">Primary</Button>
        </p>
        <p>
          <Button size="xl" disabled>
            Primary
          </Button>
        </p>
      </div>
    </StyledApp>
  )
}

export default App
