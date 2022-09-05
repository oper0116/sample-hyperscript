import h from "react-hyperscript";
import helpers from "hyperscript-helpers";

import "./App.css";
import React from "react";

const { div, h1, h2, ul, li } = helpers(h);

function App() {
	// return h("div.App", h("header.App-header", h("img.App-log", { src: logo, alt: "logo" }), h("p", "Edit <code>src/App.js</code> and save to reload.")));

	const lists = ["a", "b"];

	return h(React.Fragment, [
		div(".exmaple", [h1("#heading", "This is hyperscript uses helpers"), h2("creating React.js markup")]),
		ul(
			".list",
			lists.map((item, index) => [li(".list", { key: index, "data-index": index }, item)])
		),
		h(AnotherComponent, { foo: "foo value" }),
	]);
}

function AnotherComponent({ foo }) {
	const onClick = React.useCallback(() => {
		console.debug("onClick");
	}, []);

	return div({ onClick: onClick }, `Another Component props: ${foo}`);
}

export default App;
