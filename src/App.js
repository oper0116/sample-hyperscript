import h from "react-hyperscript";

import "./App.css";

function App() {
	// return h("div.App", h("header.App-header", h("img.App-log", { src: logo, alt: "logo" }), h("p", "Edit <code>src/App.js</code> and save to reload.")));
	return h("div.example", [h("h1#heading", "This is hyperscript"), h("h2", "creating React.js markup")]);
}

export default App;
