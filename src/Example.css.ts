import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const wrapper = recipe({
  base: {
    width: 300,
    padding: 20,
    border: "1px solid black",
  },
  variants: {
    priority: {
      primary: {
        backgroundColor: "green",
      },
      secondary: {
        backgroundColor: "blue",
      },
    },
  },
});

// ExampleWithRecipesEverywhere

export const recipesInner = recipe({
  base: {
    border: "1px solid black",
    color: "white",
  },
  variants: {
    priority: {
      primary: {
        backgroundColor: "darkgreen",
      },
      secondary: {
        backgroundColor: "darkblue",
      },
    },
  },
});

// ExampleWithNestedSelectors

/**
 * If we're referencing a recipe or style , we need to convert the space separated classnames to a
 * selector. So, a classname like `a b c` becomes a selector like `.a.b.c`.
 */
const toSelector = (rule: string): string => `.${rule.split(" ").join(".")}`;

export const selectorsInner = style({
  border: "1px solid black",
  color: "white",
  selectors: {
    [`${toSelector(wrapper({ priority: "primary" }))} &`]: {
      backgroundColor: "darkgreen",
    },
    [`${toSelector(wrapper({ priority: "secondary" }))} &`]: {
      backgroundColor: "darkblue",
    },
  },
});
