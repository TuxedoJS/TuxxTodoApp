var Actions = require('tuxx/Actions');

var todoActions = Actions.createActionCategory({
  category: 'todos',
  source: 'todo views',
  actions: ['add', 'remove'] // the specified actions will become methods on the todoActions ActionCategory. These actions allow us to get data from our views to our actions and then to our stores
});

module.exports = todoActions;
