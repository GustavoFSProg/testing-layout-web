import Header from './components/header/Header'
import { ContainerApp, ContainerAppBackgroundImage } from './style-app'

function App() {
  return (
    <ContainerAppBackgroundImage>
      <ContainerApp>
        <Header />

        <iframe
          style={{ display: 'flex', marginLeft: '-1150px', marginTop: '200px' }}
          width="550"
          height="305"
          src="https://www.pianopoa.com.br/"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            background: '#f2f2f2',
            borderRadius: '10px',
            fontSize: '16px',
            marginTop: '200px',
            height: '300px',
            width: '400px',
            marginLeft: '10px',
            opacity: '0.9'
          }}
        >
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
        </div>

      </ContainerApp>
    </ContainerAppBackgroundImage>
  )
}

export default App
