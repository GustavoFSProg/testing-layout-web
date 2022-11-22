import Header from './components/header/Header'
import video from './assets/video.jpg'
import dois from './assets/dois.jpg'
import {
  ContainerApp,
  AulaContainer,
  Imagem,
  IFrameContainer,
  ContainerAppBackgroundImage,
  HR,
} from './style-app'
import whats from './assets/whats.jpg'

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
                  justifyContent: 'center',
                  textAlign: 'center',
                  color: 'blue',
                  width: '280px',
                  fontWeight: 'bold',
                  marginTop: '20px',
                }}
              >

                Agende uma aula demonstrativa nessa unidade.
                <HR></HR>
                <h2 style={{ fontSize: '20px' }}>DÚVIDAS SOBRE O CURSO?</h2>
                <span>Fale pelo Whatsapp</span>
                <a href="https://api.whatsapp.com/send?phone=666666-666666-666666&text=Ol%C3%A1.">

                  <img width="80" src={whats} alt="whatsapp" />
                </a>
                <span>emails@gmail.com</span>
                <span>666666-666666-666666</span>
              </p>
            </AulaContainer>
          </IFrameContainer>

          <IFrameContainer>
            <Imagem src={dois} alt="YouTube video player" />

            <AulaContainer style={{ background: '#0088cc', opacity: '0.9' }}>
              <p
                style={{
                  fontFamily: 'Roboto 300',
                  flexDirection: 'column',
                  display: 'flex',
                  justifyContent: 'center',
                  textAlign: 'center',
                  color: '#00334d',
                  width: '280px',
                  fontWeight: 'bold',
                  marginTop: '20px',
                  fontSize: '24px'
                }}
              >

                Idiomas oferecidos:

                <span style={{ marginTop: '10px', marginBottom: '10px' }}>
                  Alemão
                </span>
                <HR></HR>
                <h2 style={{ fontSize: '20px' }}>Essa unidade trabalha com
                  aulas online e presenciais</h2>


              </p>
            </AulaContainer>
          </IFrameContainer>
        </ContainerApp>
      </ContainerAppBackgroundImage>
    </>
  )
}

export default App
