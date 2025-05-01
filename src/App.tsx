import './App.css'
import CompanyOnboardingForm from './components/CompanyOnboardingForm'
import { Box, Grid } from '@mui/material'
import logo from './assets/commtrix_logo.svg'
import bgSvg from './assets/commtrix_background.svg'

function App() {

  return (
    <Grid container width={"100vw"} >
      <Grid size={{xs: 12}} flexDirection={"column"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Grid width={"100%"} bgcolor={"#E3FFEA"} sx={{maxWidth: "470px"}} mb={2}>
          <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{
                  maxWidth: "500px",
                  // minHeight: "100px",
                  maxHeight: "80px",
                  // backgroundColor: "#E3FFEA",
                  objectFit: "contain",
                  padding: "40px",

                }}
              />
        </Grid>
      
               <CompanyOnboardingForm/>
      </Grid>
      <Box
        component="img"
        src={bgSvg}
        alt="Background SVG"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: "10%",
          width: '80%',
          zIndex: -1,
          opacity: 0.2
        }}
      />

    </Grid>
  )
}

export default App
