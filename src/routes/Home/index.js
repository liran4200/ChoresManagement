import { injectReducer } from '../../store/reducers'
import HomeContiner from './containers/HomeContiner'

export default (store) => ({
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Home = require('./containers/HomeContiner').default
      const reducer = require('./modules/reducer').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'home', reducer })

      /*  Return getComponent   */
      cb(null, HomeContiner)

    /* Webpack named bundle   */
    }, 'home')
  }
})
