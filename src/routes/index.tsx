import { GridItem } from "../components/GridItem";
import bgImg from "../assets/bg.jpg";
import { FaSolidInfo } from "solid-icons/fa";

export default function IndexPage() {
  return (
    <div class="grid grid-cols-1 gap-8">
      <div class="row-span-2 grid grid-cols-2 gap-y-10 rounded-xl">
        <div class="z-1 col-span-2 flex w-full flex-col justify-between gap-10 rounded-xl border-2 border-dashed border-slate-900 bg-transparent p-6 dark:border-gray-300 sm:flex-row">
          <div class="prose prose-invert w-full rounded-lg border-2 bg-slate-900 p-4">
            <h3 class="text-yellow font-bold">What I'm doing:</h3>
            <ul>
              <li>Building applications at Banco SB</li>
              <li>
                Learning about economics, various programming languages's and
                complex interfaces
              </li>
              <li>Optimizing my iteration cycles</li>
              <li>
                This website, current state: working on adding the watch and did
                sections pages and filters/search
              </li>
            </ul>
          </div>
          <div class="prose prose-invert w-full rounded-lg border-2 bg-slate-900 p-4">
            <h3 class="text-yellow  justify-center font-bold">About me:</h3>
            <ul>
              <li>Programmer (mostly Front-end) </li>
              <li>Tech enthusiast</li>
              <li>Curious and competitive</li>
              <li>Avid Lana, Billie and Chico listener</li>
              <li>Brazil beta tester</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="row-span-2 grid grid-cols-1 gap-10 rounded-xl border-2 p-6 sm:grid-cols-2"
        style={{
          "background-image": `url(${bgImg})`,
        }}
      >
        <GridItem path={"/read"}>
          <h3 class={`text-yellow text-lg font-bold`}>What I like (to read)</h3>
          Books and articles that I found interesting and/or learned something
          from and would like to share
        </GridItem>
        <GridItem path={"/watched"}>
          <h3 class={`text-yellow text-lg font-bold `}>
            What I like (to watch)
          </h3>
          Same as read, but for videos, courses and movies (should probably be
          the same list)
        </GridItem>

        <GridItem path={"/study"}>
          <h3 class="text-yellow text-lg font-bold">
            Material I rely on (to study)
          </h3>
          Repos, books, videos, courses related to computer science, enterprise,
          project management, design or career that I use as my guides
        </GridItem>
        <GridItem path="https://github.com/abdulhdr1/website">
          <h3 class="text-yellow justify-center  text-lg font-bold">
            How I built this (code)
          </h3>
          <ul class="grid grid-cols-2">
            <li>SolidJS (SolidStart)</li>
            <li>TailwindCSS</li>
            <li>GraphQL</li>
            <li>HyperUI</li>
            <li>DatoCMS</li>
            <li>Vercel</li>
          </ul>
        </GridItem>
        <div class="group absolute bottom-0 right-2 overflow-hidden">
          <div class="bg-yellow relative -right-[93%]  flex items-center rounded-tl-xl pt-[2px] pl-2 transition-all duration-700 group-hover:right-0">
            <span class="flex h-4 w-4 items-center justify-center rounded-full p-2 font-extrabold">
              <FaSolidInfo />
            </span>
            <span>
              background photo by{" "}
              <a
                rel="noreferrer noopener"
                href="https://unsplash.com/@charlotablunarova"
                target="_blank"
                class="font-bold text-slate-800 dark:text-gray-300"
              >
                @charlotablunarova
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
