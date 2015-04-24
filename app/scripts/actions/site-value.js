import Reflux from 'reflux'
import Api from 'lib/api'

let SiteValueActions = Reflux.createActions({
  get: { asyncResult: true }
})

SiteValueActions.get.listen(function (valueId) {
  this.promise(Api.get(`site-values/${valueId}`))
})

export default SiteValueActions
