import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='page-layout_wrapper container text-center'>
    <div className='page-layout_header'>
      <h1 className='page-layout_title'>Chore Score</h1>
      <div className='page-layout_nav_bar'>
        <IndexLink to='/chores' activeClassName='page-layout__nav-item--active'>Chores</IndexLink>
      </div>
    </div>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
