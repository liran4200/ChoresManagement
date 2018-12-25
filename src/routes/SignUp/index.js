import { injectReducer } from '../../store/reducers'
import SignUpContiner from './containers/SignUpContiner'

export default (store) => ({
  path : '/signUp',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const signUp = require('./containers/SignUpContiner').default
      const reducer = require('./modules/reducer').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'signUp', reducer })

      /*  Return getComponent   */
      cb(null, SignUpContiner)

    /* Webpack named bundle   */
    }, 'signUp')
  }
})
