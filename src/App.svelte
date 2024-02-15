<script lang="ts">
  import { onMount } from "svelte";
  import Links from "./lib/Links.svelte";
  import { stagger, timeline, spring } from "motion";

  type links = {
    title: string;
    href: string;
  };

  const links: links[] = [
    {
      title: "GitHub",
      href: "github.com",
    },
    {
      title: "Frontend Mentor",
      href: "frontendmentor.io",
    },
    {
      title: "LinkedIn",
      href: "linkedin.com",
    },
    {
      title: "Twitter",
      href: "twitter.com",
    },
    {
      title: "Instagram",
      href: "instagram.com",
    },
  ];
  const sequence = [
    [".card", { opacity: 1 }, { duration: 0.5 }],
    [
      ".clipped-items",
      { y: [100, 0] },
      { delay: stagger(0.08), easing: [0.34, 1.56, 0.64, 1] },
    ],
  ];

  onMount(() => {
    timeline(sequence, { delay: 0.1 });
  });
</script>

<main
  class="font-inter bg-neutral-offBlack h-svh w-full p-6 grid place-items-center"
>
  <div
    class="card opacity-0 w-full bg-neutral-darkGrey flex flex-col items-center rounded-xl py-6 md:py-8 px-8 md:gap-6 text-white gap-4 max-w-sm"
  >
    <div class="clipped">
      <img
        class="clipped-items size-20 rounded-full"
        src="/images/avatar-jessica.jpeg"
        alt="Jessica Avatar"
      />
    </div>
    <div class="text-center">
      <div class="clipped">
        <h1 class="clipped-items text-2xl font-semibold">Jessica Randall</h1>
      </div>
      <div class="clipped">
        <h2 class="clipped-items text-primary-green text-sm font-medium">
          London, United Kingdom
        </h2>
      </div>
    </div>
    <div class="clipped">
      <p class="clipped-items text-xs">
        "Front-end Developer and avid reader."
      </p>
    </div>
    <div class="flex flex-col w-full gap-3">
      {#each links as link (link.title)}
        <Links {...link} />
      {/each}
    </div>
  </div>
</main>
