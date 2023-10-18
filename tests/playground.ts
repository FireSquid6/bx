import $ from "../";

let myvar = "hello world";
const res = $`echo ${myvar}`;

console.log(res.stdout);

Bun.spawnSync(["echo", "hello world"], {
  stdio: ["inherit", "inherit", "inherit"],
});
