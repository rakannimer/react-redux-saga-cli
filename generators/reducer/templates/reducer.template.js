// Reducer
import { INITIAL_STATE } from '../constants/DEFAULT_STATE';

import update from 'react-addons-update';


export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    <% for (var i =0; i < actions.length; i++) { %>
      case "<%=actions[i]%>":
        return update(state, {

        }); <%  } %>
    default:
      return state;
  }
}
