import { AiOutlineMenu } from "solid-icons/ai";
import {
  FaBrandsGithub,
  FaBrandsInstagram,
  FaBrandsLinkedin,
  FaBrandsTwitterSquare,
  FaBrandsYoutube,
} from "solid-icons/fa";
import { A, Link } from "solid-start";
import {
  createEffect,
  createSignal,
  For,
  from,
  JSXElement,
  Show,
  useContext,
} from "solid-js";
import type { IconProps } from "solid-icons";
import { HeaderLink } from "./HeaderLink";

const socials: {
  name: string;
  Icon: (p: IconProps) => JSXElement;
  link: `https://${string}`;
}[] = [
  {
    name: "Instagram",
    Icon: (p) => <FaBrandsInstagram {...p} />,
    link: "https://www.instagram.com/abdulhdr1/",
  },
  {
    name: "LinkedIn",
    Icon: (p) => <FaBrandsLinkedin {...p} />,
    link: "https://www.linkedin.com/in/abdulhdr/",
  },
  {
    name: "Twitter",
    Icon: (p) => <FaBrandsTwitterSquare {...p} />,
    link: "https://twitter.com/abdulhdr1",
  },
  {
    name: "Youtube",
    Icon: (p) => <FaBrandsYoutube {...p} />,
    link: "https://www.youtube.com/channel/UC_GHTm6yy5oMJ15H1iu6wxA",
  },
  {
    name: "GitHub",
    Icon: (p) => <FaBrandsGithub {...p} />,
    link: "https://github.com/abdulhdr1",
  },
];

export function Header() {
  const [showMenu, setShowMenu] = createSignal(false);

  return (
    <header class="sticky top-0 w-full border-dashed border-slate-900  bg-amber-400 dark:border-gray-200 dark:bg-slate-900 sm:border-b-2">
      <div class="flex justify-center">
        <div class="h-16  w-full max-w-screen-xl align-middle sm:flex sm:h-24 sm:items-center sm:justify-between">
          <div class="my-3 flex justify-between   text-center  text-sm sm:text-lg ">
            <A
              class="prose rounded-lg border-2 border-dashed border-slate-900 bg-amber-400 p-2 font-bold text-slate-900 dark:border-gray-300 dark:bg-slate-900 dark:text-gray-300 "
              href="/"
            >
              Abdul Haidar
            </A>
            <button
              type="button"
              onClick={() => setShowMenu((p) => !p)}
              class={`border-2  p-2 font-bold  sm:hidden ${
                showMenu()
                  ? "border-solid border-gray-200 bg-gray-200 text-slate-900"
                  : "border-dashed border-slate-900 bg-amber-400 text-slate-900 dark:border-gray-200 dark:bg-slate-900 dark:text-gray-200"
              }   rounded-lg `}
            >
              <AiOutlineMenu class="svg-icon-header " />
            </button>
          </div>

          <div
            class={`relative top-4 ${
              showMenu() ? "flex" : "hidden"
            } w-full justify-between rounded-xl border-2 border-slate-200    bg-amber-400 p-2 dark:bg-slate-900 sm:top-0 sm:flex sm:w-auto sm:border-none`}
          >
            <HeaderLink class="sm:mx-2" link="/work">
              Did
            </HeaderLink>
            <HeaderLink class="sm:mx-2" link="/read">
              Read
            </HeaderLink>
            <HeaderLink class="sm:mx-2" link="/watched">
              Watch
            </HeaderLink>
            <HeaderLink class="sm:mx-2" link="/study">
              Study
            </HeaderLink>
            <div class=" group prose  rounded-lg p-2 font-bold text-slate-900 duration-500 hover:bg-gray-800/20 dark:text-gray-300  dark:hover:bg-gray-800 sm:mx-2 sm:p-3 ">
              <div class="relative flex cursor-default">
                Socials
                <p class="invisible absolute top-4 -right-3 w-full p-6 px-16 group-hover:visible" />
              </div>
              <div class="invisible absolute top-[72px] right-2 z-50 rounded-lg border-2 bg-slate-900 p-2 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 ">
                <div class="flex flex-col">
                  <For each={socials}>
                    {(entry) => (
                      <a
                        rel="noreferrer noopener"
                        href={entry.link}
                        target="_blank"
                        class="peer prose prose-invert relative my-2 mb-2 rounded-lg p-2 font-bold decoration-transparent duration-500 first:mt-0 last:mb-0 hover:bg-gray-800"
                      >
                        <div class="flex items-center justify-between">
                          <span>
                            <entry.Icon size={24} />
                          </span>
                          <p class="m-0 ml-4">{entry.name} </p>
                        </div>
                      </a>
                    )}
                  </For>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
