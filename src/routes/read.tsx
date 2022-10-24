import { ErrorBoundary, For, Show, Suspense } from "solid-js";
import { useRouteData } from "solid-start";
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

export function routeData() {
  return createServerData$(async () => {
    const { allReads } = await request(query);
    return allReads as Read[];
  });
}

export default function ReadPage() {
  const reads = useRouteData<typeof routeData>();

  return (
    <div class="flex h-full w-full flex-wrap items-center justify-around text-center">
      <div class="w-full border-b-2 border-dashed border-slate-900 pb-6">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-300">
          thing's i liked to read
        </h1>
        <p class="text-base font-bold text-gray-800 dark:text-gray-400">
          this list is appended constantly
        </p>
      </div>
      <div class="w-full">
        <Suspense fallback={<div>Loading</div>}>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <For each={reads()}>
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
        </Suspense>
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
          class={`prose font-bold text-gray-800 dark:text-gray-300 sm:prose-xl`}
        >
          {title}
        </h2>
        <h3 class="prose prose-gray text-lg dark:text-gray-400">
          by {author} <Show when={platform}> on {platform}</Show>
        </h3>
      </div>
    </a>
  );
}
