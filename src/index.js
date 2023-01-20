// Hot reloading
import * as _unused from "raw-loader!./index.ejs";
// TODO: disable before publishing

import Example from "./diagrams/svelte-example.svelte";
import Tuning_Lambda from "./diagrams/tuning_lambda.svelte"
import Incremental from "./diagrams/incremental.svelte"

// lazily initialize any diagram below the fold. E.G:
const exampleTag = document.getElementById("svelte-example-dfigure");
let example;
exampleTag.addEventListener("ready", () => {
	const target = exampleTag.querySelector("#svelte-example-target");
	example = new Example({ target });
});

const Tuning_Lambda_Tag = document.getElementById("tuning-lambda");
let tuning_lambda;
Tuning_Lambda_Tag.addEventListener("ready", () => {
	const target = Tuning_Lambda_Tag.querySelector("#tuning-lambda-target");
	tuning_lambda = new Tuning_Lambda({ target });
});
