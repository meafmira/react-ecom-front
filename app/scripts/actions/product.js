import Reflux from 'reflux'
import Api from 'lib/Api'

let ProductActions = Reflux.createActions({
  loadOne: { asyncResult: true }
});

ProductActions.loadOne.listen(function (productId) {
  Api.get(`products/${productId}`)
    .then(this.completed)
    .catch(this.failed);
});

export default ProductActions;
