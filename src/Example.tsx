import { useState } from "react";
import * as styles from "./Example.css";

export const ExampleWithRecipesEverywhere = ({
  priority,
}: {
  priority: "primary" | "secondary";
}) => {
  return (
    <div className={styles.wrapper({ priority })}>
      <div className={styles.recipesInner({ priority })}>
        Example with recipes everywhere
      </div>
    </div>
  );
};

export const ExampleWithNestedSelectors = ({
  priority,
}: {
  priority: "primary" | "secondary";
}) => {
  return (
    <div className={styles.wrapper({ priority })}>
      <div className={styles.selectorsInner}>Example with nested selectors</div>
    </div>
  );
};

export const Example = () => {
  const [priority, setPriority] = useState<"primary" | "secondary">("primary");

  return (
    <>
      <button
        onClick={() =>
          setPriority((prev) => (prev === "primary" ? "secondary" : "primary"))
        }
      >
        Toggle
      </button>
      <ExampleWithRecipesEverywhere priority={priority} />
      <ExampleWithNestedSelectors priority={priority} />
    </>
  );
};
