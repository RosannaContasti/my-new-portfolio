import { LibrariesCard } from "@/src/components/librariesCard";
import { skills } from "../mocks/libraries";

const LibrariesPage = () => (
  <section className="relative min-h-screen shrink-0 w-screen flex flex-col items-center text-6xl bg-[#fcb9c0] justify-between text-black font-semibold p-8 overflow-hidden isolate">
    <div
      className="
    min-h-screen
    w-screen
    flex
    flex-wrap
    items-center
    justify-center
    gap-8
    text-6xl
    bg-[#fcb9c0]
    text-black
    font-semibold
     md:flex-row
  "
    >
      {skills?.map((skill) => (
        <LibrariesCard
          key={skill.category}
          items={skill.items}
          title={skill.category}
        />
      ))}
    </div>
  </section>
);

export default LibrariesPage;