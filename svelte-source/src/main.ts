import { mount, type Component } from 'svelte';
import App from './App.svelte';

const app = mount(App as unknown as Component, {
  target: document.getElementById('app')!,
});

export default app;