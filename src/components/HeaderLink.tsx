import { useMatch, useNavigate } from "solid-start";
import { JSXElement } from "solid-js";

interface ButtonProps {
  children?: JSXElement;
  link: string;
  class?: string;
}
export function HeaderLink(props: ButtonProps) {
  const navigate = useNavigate();
  const match = useMatch(() => props.link);

  return (
    <a
      class={`rounded-lg  p-2 font-bold text-slate-900 transition-all duration-500   hover:bg-gray-800/20 dark:text-gray-300  dark:hover:bg-gray-800 sm:p-3 ${props.class}`}
      href={props.link}
    >
      {props.children}
      <hr
        class={`border-b-2 border-t-0 ${
          match()
            ? "border-slate-900 dark:border-gray-300"
            : "border-transparent"
        }`}
      />
    </a>
  );
}
