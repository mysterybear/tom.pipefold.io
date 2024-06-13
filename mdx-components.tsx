import type { MDXComponents } from "mdx/types";
import clsx from "clsx";

// Tailwind-styled components
const H1 = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1 className={clsx("text-2xl font-bold mb-4", props.className)} {...props} />
);

const H2 = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className={clsx("text-xl font-bold mb-3", props.className)} {...props} />
);

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: H1,
    h2: H2,
    // Add other custom components here
  };
}
