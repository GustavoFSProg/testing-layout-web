import {
  Container,
  ImgLogo,
  LinksContainer,
  LinksContainerMobile,
  Button,
  Input,
  FormDois,
  MenuButton,
} from './style'
import logo from '../../assets/logo.jpeg'
import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

function Header() {
  const [isButtonClicked, setIsButtonClicked] = useState('none')
  const [isClicked, setIsClicked] = useState()

  function handleLogout() {
    localStorage.clear()

    return alert('Logout Efetuado com Sucesso!!')
  }

  function handleLike() {
    setIsButtonClicked('flex')
  }

  function handleButton() {
    setIsClicked(true)
  }

  function handleDismissButtonClicked() {
    setIsButtonClicked('none')
  }

  function handleDismissClicked() {
    setIsClicked(false)
  }

  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ImgLogo src={logo} alt="logo" />
      </div>
      <div
        style={{
          display: 'flex',
          width: '25%',
        }}
      ></div>

      <Button
        onMouseLeave={() => handleDismissButtonClicked()}
        type="button"
        onClick={() => handleLike()}
        style={{ marginLeft: '50px' }}
      >
        <MenuIcon size="35" style={{ color: 'white' }} />
      </Button>

      <LinksContainer>

        <div style={{ marginLeft: '40px' }}>
          {/* <Link to="/" style={{
            textDecoration: 'none', fontFamily: 'Roboto 400',
            color: 'white',
            fontSize: '15px'
          }}> */}
          <MenuButton
            type="button"
            onClick={() => handleButton()}
          >

            Menu
          </MenuButton>

          {/* </Link>\ */}
        </div>

        <div style={{ marginLeft: '42px' }}>
          <Link
            style={{
              textDecoration: 'none',
              fontFamily: 'Roboto 400',
              color: 'white',
              fontSize: '15px',
            }}
            to="/"
          >
            Curso
          </Link>
        </div>

        <div style={{ marginLeft: '42px' }}>
          <Link
            style={{
              textDecoration: 'none',
              fontFamily: 'Roboto 400',
              color: 'white',
              fontSize: '15px',
            }}
            to="/"
          >
            Aulas
          </Link>
        </div>

        <div style={{ marginLeft: '42px' }}>
          <Link
            style={{
              textDecoration: 'none',
              fontFamily: 'Roboto 400',
              color: 'white',
              fontSize: '15px',
            }}
            to="/"
          >
            Professores
          </Link>
        </div>

        <div style={{ marginLeft: '35px' }}>
          {/* <Link
            style={{
              textDecoration: 'none', fontFamily: 'Roboto',
              color: 'black  '
            }}
            onClick={handleLogout}
          >
            LOGOUT
          </Link> */}
        </div>
        {isClicked === true ? (
          <div
            onMouseLeave={() => handleDismissClicked()}
            style={{
              width: '150px', borderRadius: '5px',
              marginLeft: '-380px', flexDirection: 'column',
              display: 'flex', alignItems: 'left',
              justifyContent: 'center', height: '170px', background: '#0059b3',
              marginTop: '230px'
            }}
          >
            <div style={{
              marginLeft: '25px', flexDirection: 'column',
              display: 'flex'
            }}>

              <span style={{ marginBottom: '6px', cursor: 'pointer' }}>
                Aulas
            </span>
              <span style={{ marginBottom: '6px', cursor: 'pointer' }}>
                Cursos
            </span>
              <span style={{ marginBottom: '6px', cursor: 'pointer' }}>
                Professores
            </span>
              <span style={{ marginBottom: '6px', cursor: 'pointer' }}>
                Cadastro
              </span>
            </div>

          </div>
        ) : (
          <p></p>
        )}
      </LinksContainer>
      {/* <div style={{ display: 'flex', flexDirection: 'center' }}> */}

      <FormDois
        style={{
          display: `${isButtonClicked}`,
          marginTop: '230px',
          marginLeft: '-240px',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '17rem',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: '8px',
          }}
        >
          <Input
            onMouseLeave={() => handleDismissButtonClicked()}
            onMouseEnter={() => handleLike()}
            // style={{ width: '14rem' }}
            type="search"
            name="search"
            placeholder="Search..."
          />

          <BsSearch
            onMouseLeave={() => handleDismissButtonClicked()}
            onMouseEnter={() => handleLike()}
            size="26"
            color="white"
            style={{ marginLeft: '8px', marginTop: '11px' }}
          />
        </div>
        <LinksContainerMobile>
          <div style={{ marginLeft: '20px', marginTop: '8px' }}>
            <Link
              style={{
                textDecoration: 'none',
                fontSize: '21px',
                fontFamily: 'Roboto',
                color: 'white',
                cursor: 'pointer',
              }}
              to="/"
            >
              HOME
            </Link>
          </div>

          <div style={{ marginLeft: '25px', marginBottom: '4px', marginTop: '15px' }}>
            {/* <Link
              style={{
                cursor: 'pointer',
                fontSize: '21px',
                textDecoration: 'none',
                fontFamily: 'Roboto',
                color: 'white  ',
              }}
              to="/"
            >
              LOGIN
            </Link> */}
          </div>
          <div style={{ marginLeft: '25px', marginBottom: '4px', marginTop: '15px' }}>
            {/* <Link
              style={{
                cursor: 'pointer',
                fontSize: '21px',
                textDecoration: 'none',
                fontFamily: 'Roboto',
                color: 'white  ',
              }}
              onClick={handleLogout}
            >
              LOGOUT
            </Link> */}
          </div>

          <div style={{ marginLeft: '25px', marginBottom: '4px', marginTop: '15px' }}>
            {/* <Link
              style={{
                cursor: 'pointer',
                fontSize: '21px',
                textDecoration: 'none',
                fontFamily: 'Roboto',
                color: 'white  ',
              }}
              to="/"
            >
              CADASTRO
            </Link> */}
          </div>
        </LinksContainerMobile>
      </FormDois>

      {/* </div> */}
    </Container>
  )
}

export default Header
