import { A } from "solid-start";
import { TiWarning } from "solid-icons/ti";

export default function NotFound() {
  return (
    <div class="mx-auto flex text-red-700 flex-col items-center">
      <div class="justify-center">
        <TiWarning size={"3rem"} />
      </div>
      <h1 class="text-center font-extrabold">
        this is a work in progress <br /> please{" "}
        <a href="https://twitter.com/abdulhdr1" class="text-blue-600">
          dm me on twitter{" "}
        </a>
        to let me know that i should fill this
      </h1>
    </div>
  );
}
