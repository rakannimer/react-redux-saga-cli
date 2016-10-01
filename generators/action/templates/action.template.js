import keymirror from 'keymirror';

const ACTION_NAMES = keymirror({
<%= actions.map(function(action){ return "  "+action+": null,"; }).join("\n")+"\n});" %>
export { ACTION_NAMES };
