import React from 'react';
import _ from 'lodash';

export default class AdminCategoryParams extends React.Component {
  constructor() {
    this.state = {
      params: []
    }
    this.onParamChange = this.onParamChange.bind(this);
    this.addParam = this.addParam.bind(this);
    this.removeParam = this.removeParam.bind(this);
  }

  componentWillReceiveProps(props) {
    let params = props.params;
    this.setState({params});
  }

  onParamChange(e) {
    let paramOrder = e.target.dataset.id
      , params = this.state.params;
    params.forEach(param => {
      if (param.order == paramOrder) {
        param.name = e.target.value;
      }
    });
    this.setState({params});
    this.props.onChange(params);
  }

  addParam() {
    let order = _.max(this.state.params, param => { return param.order }).order + 1 || 1;
    let params = this.state.params;
    params.push({ order, name: '', type: 'new' });
    this.setState({ params });
    this.props.onChange(params);
  }

  removeParam(e) {
    let paramOrder = e.target.dataset.paramOrder;
    let params = this.state.params.filter(param => { return param.order != paramOrder });
    this.setState({params});
    this.props.onChange(params);
  }

  render() {
    let params = this.state.params;
    let paramList = params.map(param => {
      return (
        <div className="form-group" key={ param.order }>
          <div className="row">
            <div className="col-md-9">
              <input className="form-control" value={ param.name } ref={ "param" + param.order } onChange={ this.onParamChange } data-id={ param.order } />
            </div>
            <div className="col-md-3">
              <button type="button" className="btn btn-danger" onClick={ this.removeParam } data-param-order={ param.order }>Удалить</button>
            </div>
          </div>
        </div>
      )
    });

    return (
      <div>
        <h3>Параметры</h3>
        { paramList }
        <div className="form-group">
          <button type="button" className="btn btn-default" onClick={ this.addParam }>Добавить параметр</button>
        </div>
      </div>
    )
  }
}
