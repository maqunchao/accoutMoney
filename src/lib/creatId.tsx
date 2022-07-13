import React from "react";

let id = 0;
function creatId() {
  id += 1;
  return id;
}

export { creatId };
