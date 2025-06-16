<script lang="ts">
  import portrait from '$lib/assets/DSC05981.webp';
</script>

<svelte:head>
  <title>Jason Yuan</title>
</svelte:head>

<!-- Body -->
<main>
  <!-- Hero -->
  <div class="hero my-6 flex grow flex-col items-center justify-center md:grow-0 md:flex-row">
    <!-- Portrait Image -->
    <img
      class="mb-6 rounded-full md:m-6 md:rounded-lg"
      src={portrait}
      alt="Jason Yuan"
      width="256"
      height="256"
    />
    <!-- Short Description -->
    <div class="md:flex md:flex-col md:items-center md:justify-center">
      <h1 class="text-center text-xl font-bold italic lg:text-xl">Hey there!</h1>
      <p class="px-6 text-center">
        I'm Jason Yuan, a 4th-year Software Engineering student from the University of Waterloo.
        With a solid academic background, diverse industry experiences, and a knack for blending
        technologies, I thrive on turning ideas into reality.
        <br />
        <br />
        Currently working on data analytics and growth enablement technologies at Ramp.
      </p>
    </div>
  </div>

  <!-- Experience -->
  <div class="card bg-base-200 w-full p-6">
    <div class="text-lg font-bold">Work Experiences</div>
    <div class="mt-3 flex flex-col space-y-4">
      <div class="grid grid-cols-2 opacity-70">
        <div>
          <a href="https://ramp.com/" target="_blank" class="link-hover link font-bold"> Ramp </a>
        </div>
        <div class="text-right font-bold">New York, NY</div>
        <div>Software Engineering Intern</div>
        <div class="text-right">May 2025 - Present</div>
      </div>
      <div class="grid grid-cols-2 opacity-70">
        <div>
          <a href="https://www.bitgo.com/" target="_blank" class="link-hover link font-bold">
            BitGo
          </a>
        </div>
        <div class="text-right font-bold">Palo Alto, CA</div>
        <div>Software Engineering Intern - Onboarding</div>
        <div class="text-right">Feb - Apr 2025</div>
        <div>Software Engineering Intern - Velocity</div>
        <div class="text-right">May - Aug 2024</div>
      </div>
      <div class="grid grid-cols-2 opacity-70">
        <div>
          <a href="https://www.amd.com/" target="_blank" class="link-hover link font-bold">AMD</a>
        </div>
        <div class="text-right font-bold">Markham, ON</div>
        <div>GPU Engineering Intern</div>
        <div class="text-right">Sept - Dec 2023</div>
      </div>
      <div class="grid grid-cols-2 opacity-70">
        <div>
          <a href="https://www.curvegrid.com/" target="_blank" class="link-hover link font-bold">
            Curvegrid
          </a>
        </div>
        <div class="text-right font-bold">Tokyo, JP</div>
        <div>Software Engineering Intern</div>
        <div class="text-right">Jan - Apr 2023</div>
      </div>
      <div class="grid grid-cols-2 opacity-70">
        <div>
          <a href="https://dreamschools.com/" target="_blank" class="link-hover link font-bold">
            Dreamschools
          </a>
        </div>
        <div class="text-right font-bold">Toronto, ON</div>
        <div>Fullstack Engineering Intern</div>
        <div class="text-right">May - Aug 2022</div>
      </div>
    </div>
  </div>
</main>
