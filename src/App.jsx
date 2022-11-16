import Header from './components/header/Header'
import { ContainerApp, ContainerAppBackgroundImage } from './style-app'

function App() {
  return (
    <ContainerAppBackgroundImage>
      <ContainerApp>
        <Header />
        <iframe
          style={{ display: 'flex', marginLeft: '-1100px', marginTop: '200px' }}
          width="550"
          height="305"
          src="https://www.pianopoa.com.br/"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </ContainerApp>
    </ContainerAppBackgroundImage>
  )
}

export default App
