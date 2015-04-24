import Reflux from 'reflux'
import SiteValueActions from 'actions/site-value'

let SiteValueStore = Reflux.createStore({
  listenables: SiteValueActions,

  onGetCompleted(value) {
    this.trigger(value)
  }
})

export default SiteValueStore
