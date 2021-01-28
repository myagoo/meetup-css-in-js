import {createPrimitive} from "css-system"

export const View = createPrimitive("div", {
  css: {
    minHeight: 0,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
    flex: "none",
  }
})
