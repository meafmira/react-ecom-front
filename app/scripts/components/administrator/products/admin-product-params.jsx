import React from 'react'

export default class AdminProductParams extends React.Component {
  constructor() {
    this.handleChangeParam = this.handleChangeParam.bind(this);
    this.state = {
      paramsMap: [],
      params: []
    }
  }

  componentDidMount() {
    let params = this.props.productParams;
    let paramsMap = this.getParamsMap();
    this.setState({params, paramsMap});
  }

  componentWillReceiveProps(props) {
    let paramsMap = this.getParamsMap(props.productParams);
    this.setState({ paramsMap: paramsMap, params: props.productParams });
  }

  getParamsMap(params) {
    let paramsMap = {}
    if (params) {
      params.forEach(param => {
        paramsMap[param.param_id] = param;
      });
    }
    return paramsMap;
  }

  handleChangeParam(e) {
    let param_id = e.target.dataset.paramId
      , value = e.target.value
      , paramsMap = this.state.paramsMap
      , params = this.state.params;
    if (paramsMap[param_id]) {
      params.forEach(param => {
        if (param.param_id == param_id) {
          param.value = value;
        }
      });
      paramsMap[param_id].value = value;
    }
    else {
      paramsMap[param_id] = { param_id, value };
      params.push({ param_id, value });
    }
    this.props.onChange(params);
    this.setState({ params, paramsMap });
  }

  render() {
    let params = this.state.params;
    let paramsMap = this.state.paramsMap;
    let categoryParams = this.props.categoryParams;
    let paramList = categoryParams.map(param => {
      let paramInput;
      if (paramsMap[param.id]) {
        paramInput = (
          <input value={ paramsMap[param.id].value } className="form-control" data-param-id={ param.id } onChange={ this.handleChangeParam } />
        )
      }
      else {
        paramInput = (
          <input value="" className="form-control" data-param-id={ param.id } onChange={ this.handleChangeParam } />
        )
      }
      return (
        <div className="form-group" key={ param.id }>
          <label>{ param.name }</label>
          { paramInput }
        </div>
      )
    });

    return (
      <div>
        {paramList}
      </div>
    )
  }
}
