import <%=COMPONENT_NAME%> from '../components/<%=COMPONENT_NAME%>';
import { connect } from 'react-redux';


const mapStateToProps = state => ({ <%=COMPONENT_NAME%>: state.<%=COMPONENT_NAME%> });

const mapDispatchToProps = dispatch => ({
  onAction: (actionData) => {<% for (var i =0; i < actions.length; i++) { %>
    dispatch({
      type: '<%= actions[i]%>',
      payload: { actionData },
    });<%  } %>
  },
});

const <%=COMPONENT_NAME%>Container = connect(mapStateToProps, mapDispatchToProps)(<%=COMPONENT_NAME%>)

export default <%=COMPONENT_NAME%>Container;
