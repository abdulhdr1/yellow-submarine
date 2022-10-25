// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  useIsRouting,
} from "solid-start";
import { Header } from "./components/Header";
import "./root.css";

export default function Root() {
  const isRouting = useIsRouting();

  return (
    <Html lang="en">
      <Head>
        <Title>Abdul Haidar</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <div
              class={`flex min-h-screen flex-col justify-between bg-amber-400 dark:bg-slate-900`}
            >
              <div class="relative mx-auto w-full max-w-3xl px-4 text-gray-200 lg:px-6 2xl:mx-auto">
                <Header />
                <div class={`m-6  mx-auto ${isRouting() ? "opacity-60" : ""}`}>
                  <section>
                    <Routes>
                      <FileRoutes />
                    </Routes>
                  </section>
                </div>
              </div>
            </div>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
