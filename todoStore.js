var ActionStores = require('tuxx/Stores/ActionStores');

var todoStore = ActionStores.createStore({
  _todos: [],

  getAll: function () {
    return this._todos;
  },

  onAdd: function (todo) {
    this._todos.push({
      text: todo.text,
      id: this._todos.length
    });
    this.emitChange();
  },

  onRemove: function (todo) {
    var todos = this._todos;
    var todosLength = todos.length;
    var i;
    for (i = 0; i < todosLength; i++) {
      if (todos[i] === todo) {
        delete todos[i];
        break;
      }
    }
    this.emitChange();
  },

  register: function () {
    return {
      todos: {
        add: this.onAdd,
        remove: this.onRemove
      }
    };
  }
});

module.exports = todoStore;
