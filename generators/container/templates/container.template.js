import <%=COMPONENT_NAME%> from '../components/<%=COMPONENT_NAME%>';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAction: (actionData) => {
      <% for (var i =0; i < actions.length; i++) { %>
        dispatch({
          type: '<%= actions[i]%>',
           payload: {}
        }); <%  } %>
    }
  };
};
const <%=COMPONENT_NAME%>Container = connect(mapStateToProps, mapDispatchToProps)(<%=COMPONENT_NAME%>)


export default <%=COMPONENT_NAME%>Container;
