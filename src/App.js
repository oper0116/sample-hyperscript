import h from "react-hyperscript";
import helpers from "hyperscript-helpers";

import "./App.css";

const { div, h1, h2 } = helpers(h);

function App() {
	// return h("div.App", h("header.App-header", h("img.App-log", { src: logo, alt: "logo" }), h("p", "Edit <code>src/App.js</code> and save to reload.")));

	return div(".exmaple", [h1("#heading", "This is hyperscript uses helpers"), h2("creating React.js markup")]);
}

export default App;
