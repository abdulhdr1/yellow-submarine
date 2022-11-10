import { For } from "solid-js";
import { ErrorBoundary, RouteDataArgs, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { request } from "~/services/cms";

type Read = {
  title: string;
  author: string;
  link: string;
  platform: string;
};
const query = `
  {
    allReads {
      title
      author
      platform
      link
    }
  }
`;

export function routeData({ params }: RouteDataArgs) {
  return createServerData$<{ allReads: Read[] }>(() => request(query));
}

export default function ReadPage() {
  const reads = useRouteData<typeof routeData>();
  return (
    <div class="flex h-full w-full flex-wrap items-center justify-around text-center">
      <div class="w-full  border-dashed border-slate-900 pb-6">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-300">
          Things I liked to read
        </h1>
        <p class="text-base font-bold text-gray-800 dark:text-gray-400">
          This list is appended constantly
        </p>
      </div>
      <div class="w-full">
        <ErrorBoundary fallback={() => <div>Something went wrong</div>}>
          <For each={reads()?.allReads}>
            {({ title, author, link, platform }) => (
              <Item
                title={title}
                author={author}
                link={link}
                platform={platform}
              />
            )}
          </For>
        </ErrorBoundary>
      </div>
    </div>
  );
}

function Item({
  title,
  author,
  link,
  platform,
}: {
  title: string;
  author: string;
  link: string;
  platform?: string;
}) {
  return (
    <a
      href={link}
      class="group my-4 flex w-full items-center justify-between  rounded-lg font-bold duration-500 hover:bg-gray-800/20 dark:hover:bg-gray-800 sm:p-2 sm:px-4"
      target="_blank"
      rel="noreferrer noopener"
    >
      <div class="text-start">
        <h2
          class={`prose font-bold text-gray-900 dark:text-gray-200 sm:prose-xl`}
        >
          {title}
        </h2>
        <h3 class="prose prose-gray prose-sm dark:text-gray-400">
          by{" "}
          <span class="prose-lg text-gray-800 dark:text-gray-300">
            {author}
          </span>{" "}
          <Show when={platform}>
            {" "}
            on{" "}
            <span class="prose-lg text-gray-800 dark:text-gray-300">
              {platform}
            </span>
          </Show>
        </h3>
      </div>
    </a>
  );
}
