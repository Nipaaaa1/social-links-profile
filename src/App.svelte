<script lang="ts">
  import Links from "./lib/Links.svelte";

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
</script>

<main
  class="font-inter bg-neutral-offBlack h-svh w-full p-6 grid place-items-center"
>
  <div
    class="w-full bg-neutral-darkGrey flex flex-col items-center rounded-xl py-6 px-8 text-white gap-4"
  >
    <img
      class="size-20 rounded-full"
      src="/images/avatar-jessica.jpeg"
      alt="Jessica Avatar"
    />
    <div class="text-center">
      <h1 class="text-2xl font-semibold">Jessica Randall</h1>
      <h2 class="text-primary-green text-sm font-medium">
        London, United Kingdom
      </h2>
    </div>
    <p class="text-xs">"Front-end Developer and avid reader."</p>
    {#each links as link (link.title)}
      <Links {...link} />
    {/each}
  </div>
</main>
