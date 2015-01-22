var React = require('tuxx/React');
var todoActions = require('./todoActions');
var todoStore = require('./todoStore');
var Todo = require('./Todo.jsx');
var TodoCreateForm = require('./TodoCreateForm.jsx');

var TodoViewOwner = React.createOwnerClass({
  getInitialState: function () {
    return {
      todos: todoStore.getAll() // Will get all of the Todos that are stored in the TodoStore
    };
  },

  // This method connects this owner component to the specified store. Additionally it also adds and removes the change listeners from the store during the appropriate lifecycle events, specifically componentDidMount and componentWillUnmount.
  connectOwnerToStore: function () {
    return {
      store: todoStore,
      listener: function () {
        this.setState({ todos: todoStore.getAll() });
      }.bind(this)
    };
  },

  // The registerOwnerProps method is invoked with the context of the component and allows an OwnerClass to automatically expose its properties to its child components (direct or otherwise). In this instance this component is exposing the add and remove methods specified in the return.
  registerOwnerProps: function () {
    // the todoActions.METHOD will take the input to that method and pass it to the dispatcher, where it will broadcast the METHOD to any store listening. If that action is registered with the store, the payload from that action will then be passed to the corresponding actions method.
    return {
      add: todoActions.add,
      remove: todoActions.remove
    };
  },

  render: function () {
    // Create an array of todo components
    var Todos = this.state.todos.map(function(todo) {
      return (
        <Todo todo={todo} />
      );
    });

    // Render all of the Todo components and the TodoCreateForm
    return (
      <div>
        <TodoCreateForm />
        {Todos}
      </div>
    );
  }
});

module.exports = TodoViewOwner;
