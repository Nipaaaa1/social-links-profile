<script lang="ts">
  export let title: string;
  export let href: string;
</script>

<div class="clipped">
  <div
    class="clipped-items text-sm w-full text-center bg-neutral-grey py-3 rounded-lg font-medium hover:bg-primary-green hover:text-neutral-grey transition-colors ease-in-out"
  >
    <a {href}>
      {title}
    </a>
  </div>
</div>
