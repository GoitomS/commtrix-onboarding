import { useState } from 'react'
import './App.css'
import CompanyOnboardingForm from './components/CompanyOnboardingForm'
import { Grid } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Grid container width={"100%"} height={"100%"} display={"flex"}>
      <Grid size={{xs: 12, md: 6}}>
        <CompanyOnboardingForm/>
      </Grid>
      <Grid size={{xs: 12, md: 6}}>
        <CompanyOnboardingForm/>
      </Grid>
      
    </Grid>
  )
}

export default App
