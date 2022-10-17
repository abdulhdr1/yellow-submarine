import { Component, For } from "solid-js";

const readList: { author: string; title: string; href: string }[] = [
  {
    author: "harvard business review",
    title: "the new new product development game",
    href: "https://hbr.org/1986/01/the-new-new-product-development-game",
  },
  {
    href: "https://graydon2.dreamwidth.org/193447.html",
    author: "graydon2",
    title: "always bet on text",
  },
  {
    author: "wait but why (tim urban)",
    href: "https://waitbutwhy.com/2019/08/story-of-us.html",
    title: "story of us",
  },
  {
    href: "https://overreacted.io/npm-audit-broken-by-design/",
    author: "dan abramov",
    title: "npm audit critique",
  },
  {
    author: "joy liuzzo",
    href: "https://stackoverflow.blog/2022/08/04/great-engineering-cultures-are-built-on-social-learning-communities/",
    title: "social learning communities",
  },
  {
    href: "https://stackoverflow.blog/2022/04/07/you-should-be-reading-academic-computer-science-papers/",
    author: "ryan donovan",
    title: "you should be reading academic computer science papers",
  },
  {
    title: "the defining decade",
    href: "https://www.goodreads.com/book/show/40603783-the-defining-decade",
    author: "meg jay",
  },
];

export default function ReadPage() {
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
        <For each={readList}>
          {(entry) => (
            <Item title={entry.title} author={entry.author} href={entry.href} />
          )}
        </For>
      </div>
    </div>
  );
}

function Item({
  title,
  author,
  href,
}: {
  title: string;
  author: string;
  href: string;
}) {
  return (
    <a
      href={href}
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
          by: {author}
        </h3>
      </div>
    </a>
  );
}
