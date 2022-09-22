import React from 'react'
import './layout.css'
import LoginForm from '../components/LoginForm'


export const Layout = () => {
  return (
    <div>
        <div className="container">
            <div className="header">
            </div>
            <LoginForm/>
        </div>
    </div>
  )
}