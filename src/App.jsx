import Header from './components/header/Header'
import video from './assets/video.jpg'
import {
  ContainerApp,
  AulaContainer,
  Imagem,
  IFrameContainer,
  ContainerAppBackgroundImage,
} from './style-app'

function App() {
  return (
    <>
      <Header />
      <ContainerAppBackgroundImage>
        <ContainerApp>
          <IFrameContainer>
            <Imagem src={video} alt="YouTube video player" />

            <AulaContainer>
              <p
                style={{
                  fontFamily: 'Roboto 300',
                  flexDirection: 'column',
                  display: 'flex',
                  // justifyContent: 'center',
                  textAlign: 'center',
                  color: 'blue',
                  width: '280px',
                  fontWeight: 'bold',
                  marginTop: '20px',
                }}
              >
                {' '}
                Agende uma aula demonstrativa nessa unidade.
                <hr
                  style={{
                    borderTop: '1px solid black',
                    width: '110%',
                    height: '1px',
                    // marginTop: '200px'
                  }}
                ></hr>
              </p>
            </AulaContainer>
          </IFrameContainer>
        </ContainerApp>
      </ContainerAppBackgroundImage>
    </>
  )
}

export default App
