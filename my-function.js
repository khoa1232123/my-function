onChange = event => {
  var target = event.target;
  var name = target.name;
  var value = target.type === "checkbox" ? target.checked : target.value;
  this.setState({
    [name]: value
  });
};
