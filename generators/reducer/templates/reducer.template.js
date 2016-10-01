import update from 'react-addons-update';

import INITIAL_STATE from '../constants/INITIAL_STATE';

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {<% for (var i =0; i < actions.length; i++) { %>
    case '<%=actions[i]%>':
      return update(state, {

      });<%  } %>
    default:
      return state;
  }
}
