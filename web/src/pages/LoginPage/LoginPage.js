import { Link, navigate, routes } from '@redwoodjs/router'
import { useRef } from 'react'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useEffect, useState } from 'react'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()
  const [devmode, setdevmode] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])

  const usernameRef = useRef()
  useEffect(() => {
    usernameRef.current.focus()
    let x = localStorage.getItem('devmode')
    if (x === '45lCEODB4a0LBIAD') {
      setdevmode(true)
    }
  }, [])

  const onSubmit = async (data) => {
    const response = await logIn({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error('Fehler beim einloggen. Bitte prüfe deine Eingaben.')
    } else {
      toast.success('Willkommen!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">
                MSCP | Team-ELAN.de
              </h2>
            </header>

            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <Label
                    name="username"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Benutzertag
                  </Label>
                  <TextField
                    name="username"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    ref={usernameRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'Benutzertag muss angegeben sein!',
                      },
                    }}
                  />

                  <FieldError name="username" className="rw-field-error" />

                  <Label
                    name="password"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Passwort
                  </Label>
                  <PasswordField
                    name="password"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Passwort muss angegeben sein!',
                      },
                    }}
                  />

                  <div className="rw-forgot-link">
                    {/* <Link
                      to={routes.forgotPassword()}
                      className="rw-forgot-link"
                    >
                      Forgot Password?
                    </Link> */}
                    Passwort vergessen? Melde dich bei deiner Leitung!
                  </div>

                  <FieldError name="password" className="rw-field-error" />

                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">
                      Einloggen
                    </Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          {/* <div className="rw-login-link">
            <span>Don&apos;t have an account?</span>{' '}
            <Link to={routes.signup()} className="rw-link">
              Sign up!
            </Link>
          </div> */}
          {devmode ? <Devmode /> : null}
        </div>

      </main>
    </>
  )
}

const Devmode = () => {
  return (
    <div className='rw-segment mt-2'>
      <header className='rw-segment-header'>
        <h2 className='rw-heading rw-heading-section'>
          Account erstellen
        </h2>
      </header>
      <div className='rw-segment-main'>
        <button onClick={() => { navigate(routes.signup()) }}>Zur Signup-Page</button>
      </div>
    </div>
  )
}

export default LoginPage
