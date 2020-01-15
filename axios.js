import React from "react";
import * as Config from './Config';

export default function ConnectAPI(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/${endpoint}`,
    data: body
  }).catch(err => {
    console.log(err);
  });
}

ConnectAPI('endpoint', 'GET', data).then( res => {
  this.setState({
    data: res.data
  })
})