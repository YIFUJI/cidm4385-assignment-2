var root = document.getElementById("root");

var App = () => {
  return React.createElement('div', { className: "bg-primary text-white p-2 border rounded border-dark", style: { margin: 'auto', marginTop: 100, width: 200, height: 150 } },
    React.createElement(Form, {})
  )
};


var Form = () => {
  return React.createElement('form', {}, [
    React.createElement(Email),
    React.createElement(ZipCode),
    React.createElement(Submit)
  ])
};


var Email = () => {
  return React.createElement("input", { className: 'form-control-md input-group mb-3 text-center', placeholder: 'Email' });
};

var ZipCode = () => {
  return React.createElement("input", { className: ' form-control-md input-group mb-3 text-center', placeholder: 'Zipcode'});
};

var Submit = () => {
  return React.createElement("button", {className:'btn btn-secondary', style: { float: 'right' } }, "Submit")
};


ReactDOM.render(React.createElement(App), root);