import {
    background,
    border,
    color,
    compose,
    flexbox,
    grid,
    layout,
    position,
    shadow,
    space,
    system,
    typography,
  } from "styled-system"
  
  export const primitives = compose(
    background,
    border,
    color,
    flexbox,
    grid,
    layout,
    position,
    shadow,
    space,
    typography,
    system({
      textTransform: true,
      textDecoration: true,
      whiteSpace: true,
      cursor: true,
      transform: true,
      outline: true,
      visibility: true,
      gap: {
        property: "gap",
        scale: "space",
      },
    })
  )