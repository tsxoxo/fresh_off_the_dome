<template>
  <nav text-xl flex justify-end gap-2>
    <button icon-btn @click="toggleDark()">
      <div dark:i-carbon-moon i-carbon-sun />
    </button>

    <a
      icon-btn i-carbon-logo-github
      rel="noreferrer"
      href="https://github.com/"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
