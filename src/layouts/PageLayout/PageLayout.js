import React from 'react'
import { ToastContainer } from 'react-toastify';
import { IndexLink, Link } from 'react-router'
import 'react-toastify/scss/main.scss';
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='page-layout_wrapper container text-center'>
    <div className='page-layout_header'>
      <h1 className='page-layout_title'>Chore Score</h1>
    </div>
    <ToastContainer autoClose={8000} />
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
