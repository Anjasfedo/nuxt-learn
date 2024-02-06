<template>
  <div>
    <NuxtLayout>
      <header>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/events">Event</NuxtLink>
            <NuxtLink to="/events/profile">Event Profile</NuxtLink>
            <NuxtLink to="/my-profile">My Profile</NuxtLink>
          </li>
        </ul>
      </header>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
