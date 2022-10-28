import { ErrorBoundary, For, Show, Suspense } from "solid-js";
import { RouteDataArgs, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { request } from "~/services/cms";

type Study = {
  title: string;
  description: string;
  link: string;
  tag: string[];
};
const query = `
{
  allStudies (first: 50) {
    title
    link
    description
    tag
  }
}

`;

export function routeData({ params }: RouteDataArgs) {
  return createServerData$(async () => {
    const { allStudies } = await request(query);
    return allStudies as Study[];
  });
}

export default function StudyPage() {
  const study = useRouteData<typeof routeData>();

  return (
    <div class="flex h-full w-full flex-wrap items-center justify-around text-center">
      <div class="w-full  border-dashed border-slate-900 pb-6">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-300">
          Things I use to learn
        </h1>
        <p class="text-base font-bold text-gray-800 dark:text-gray-400">
          The material here can relate to anything between programming language
          design and career advice, I try to keep only free resources on this
          list. Aside from that, most of the content is in english, but some of
          it has the <b>portuguese</b> tag, cause I'm Brazilian
        </p>
      </div>
      <div class="w-full">
        <Suspense fallback={<div>Loading</div>}>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <For each={study()}>
              {({ title, description, link, tag }) => (
                <Item
                  title={title}
                  description={description}
                  link={link}
                  tag={tag}
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
  link,
  description,
  tag,
}: {
  title: string;
  description: string;
  link: string;
  tag: string[];
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
        <h3 class="prose prose-gray prose-sm dark:text-gray-400 pb-4">
          <Show when={description}>
            <span class="prose-lg text-gray-800 dark:text-gray-300">
              {description}
            </span>
          </Show>
          <Show when={tag}>
            <div class="mt-4">
              <For each={tag}>
                {(t) => (
                  <span class="last:mr-0 mr-4 p-[2px] px-2 bg-gray-800 rounded-full text-white">
                    {t.includes("portuguese") ? `${t} 🇧🇷` : t}
                  </span>
                )}
              </For>
            </div>
          </Show>
        </h3>
      </div>
    </a>
  );
}
