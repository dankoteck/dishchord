<template>
  <main class="flex gap-0 h-screen w-full">
    <SidebarServers />
    <SidebarChannels />
    <!-- <AppHeader /> -->
    <div class="bg-[#313338] flex-1">
      <slot />
    </div>
    <SidebarInfo />
  </main>
</template>
