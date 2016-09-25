import keymirror from 'keymirror';

const ACTION_NAMES = keymirror({

  <% for (var i =0; i < actions.length; i++) { %> <%= actions[i] %>:null,
  <% } %>
});
export {ACTION_NAMES};
