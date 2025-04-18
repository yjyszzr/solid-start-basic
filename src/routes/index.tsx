import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
      
      <div>
        <A href="/fruits" class="text-blue-600 hover:underline">
          查看水果列表
        </A>
      </div>
    </main>
  );
}
