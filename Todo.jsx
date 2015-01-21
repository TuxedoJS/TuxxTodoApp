var React = require('tux/React');

var Todo = React.createMutableClass({
  // Here we are specifying that on the props object there is key that we want to watch and see if it changes and that we only want to re-render the component when that specified prop value changes
  mutableTraits: {
    props: 'text'
  },

  propTypes: {
    todo: React.PropTypes.object.isRequired
  },

  // nearestOwnerPropTypes allows us to perform prop validation on our nearestOwnerProps
  nearestOwnerPropTypes: {
    remove: React.PropTypes.func.isRequired
  },

  handleRemove: function (e) {
    e.preventDefault();
    this.nearestOwnerProps.remove(this.props.todo);
  },

  render: function () {
    return (
      <div>
        <p>{ this.props.todo.text }</p>
        <button onClick={this.handleRemove}>Delete</button>
      </div>
    );
  }
});

module.exports = Todo;
