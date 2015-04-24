import Reflux from 'reflux'
import Api from 'lib/api'

let SiteValueActions = Reflux.createActions({
  get: { asyncResult: true }
})

SiteValueActions.get.listen(function (valueId) {
  Api.get(`site-values/${valueId}`)
    .then(this.completed)
    .catch(this.failed);
})

export default SiteValueActions
