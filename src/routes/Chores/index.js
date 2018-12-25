import { injectReducer } from '../../store/reducers'
import ChoreContiner from './containers/ChoreContiner'
//Sync route definition
//export default {
// component : ChoreContiner
//}

export default (store) => ({
  path : '/chores',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Chore = require('./containers/ChoreContiner').default
      const reducer = require('./modules/reducer').default

      /*  Add the reducer to the store on key 'chores'  */
      injectReducer(store, { key: 'chores', reducer })

      /*  Return getComponent   */
      cb(null, ChoreContiner)

    /* Webpack named bundle   */
    }, 'chores')
  }
})
