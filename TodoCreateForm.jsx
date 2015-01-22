var React = require('tuxx/React');

var TodoCreateForm = React.createOwneeClass({
  // nearestOwnerPropTypes allows us to perform prop validation on our nearestOwnerProps
  nearestOwnerPropTypes: {
    add: React.PropTypes.func.isRequired
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var todoTextInput = this.refs.textInput.getDOMNode();

    this.nearestOwnerProps.add({
      text: todoTextInput.value
    });

    todoTextInput.value = '';
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="textInput" placeholder="Add a Todo" />
        <button type="submit">Add</button>
      </form>
    );
  }
});

module.exports = TodoCreateForm;
