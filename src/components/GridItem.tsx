import { JSXElement } from "solid-js";
import { A } from "solid-start";

interface GridItemProps {
	class?: string;
	path?: `/${string}` | `https://${string}`;
	static?: boolean;
	children: JSXElement;
}

export function GridItem({
	children,
	class: classProp,
	path,
	static: staticProp = false,
}: GridItemProps) {
	return (
		<Wrapper elClass={classProp} path={path} staticProp={staticProp}>
			<div class="h-full w-full rounded-lg bg-slate-900 p-4 transition-all group-hover:p-3">
				<div class="text-sm">{children}</div>
			</div>
		</Wrapper>
	);
}

interface WrapperProps {
	children?: JSXElement;
	path?: `/${string}` | `https://${string}`;
	elClass?: string;
	staticProp?: boolean;
}

const Wrapper = ({ children, path, elClass, staticProp }: WrapperProps) => {
	if (staticProp)
		return (
			<div
				classList={{
					elClass: elClass?.length > 0,
					"block rounded-xl border-2  border-gray-900 p-4 transition":
						true,
				}}
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
