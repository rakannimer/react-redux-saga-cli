import <%=COMPONENT_NAME%> from '../components/<%=COMPONENT_NAME%>';
import { connect, Provider } from 'react-redux';


const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAction: (actionData) => {
      dispatch({
        type: 'ACTION_NAME',
         payload: {}
      })
    }
  };
};
const <%=COMPONENT_NAME%>Container = connect(mapStateToProps, mapDispatchToProps)(<%=COMPONENT_NAME%>)


export default <%=COMPONENT_NAME%>Container;
