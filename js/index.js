'use strict';

function getRes(obj) {
  return { __html: obj.state.result };
}

var Markdown = React.createClass({
  displayName: 'Markdown',

  getInitialState: function getInitialState() {
    return { result: 'Write your text here...' };
  },

  handleChange: function handleChange(event) {
    var text = marked(event.target.value);
    this.setState({ result: text });
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'row' },
      React.createElement('div', { className: 'col-md-3' }),
      React.createElement(
        'form',
        { className: 'col-md-3' },
        React.createElement(
          'textarea',
          { className: 'form-control', rows: '20', cols: '30', onChange: this.handleChange },
          'Write your text here...'
        )
      ),
      React.createElement('div', { id: 'res', className: 'col-md-3', dangerouslySetInnerHTML: getRes(this) })
    );
  }
});

ReactDOM.render(React.createElement(Markdown, null), document.getElementById('container'));