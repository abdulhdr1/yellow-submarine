import { JSXElement } from "solid-js";
import { A } from "solid-start";

interface props {
  class?: string;
  path?: `/${string}` | `https://${string}`;
  static?: boolean;
  children: JSXElement;
}

export function GridItem(props: props) {
  const Wrapper = ({
    children,
    path,
    elClass,
  }: {
    children?: JSXElement;
    path?: `/${string}` | `https://${string}`;
    elClass?: string;
  }) => {
    if (props.static)
      return (
        <div
          class={`block rounded-xl border-2  border-gray-900 p-4 transition ${
            elClass ?? ""
          }`}
        >
          {children}
        </div>
      );
    return (
      <A
        class={`border-stale-50  group block rounded-xl border-2  border-transparent bg-slate-900 p-0 shadow-lg transition-all hover:border-slate-50 hover:bg-transparent hover:p-1 ${
          elClass ?? ""
        }`}
        href={path ?? ""}
        target={path?.startsWith("http") ? "_blank" : ""}
      >
        {children}
      </A>
    );
  };

  return (
    <Wrapper elClass={props.class} path={props.path}>
      <div class="h-full w-full rounded-lg bg-slate-900 p-4 transition-all group-hover:p-3">
        <div class="text-sm">{props.children}</div>
      </div>
    </Wrapper>
  );
}
