<script lang="ts">
  import { isEnvBrowser } from "@utils/misc";
  import VisibilityProvider from '@providers/VisibilityProvider.svelte';
  import {EventHandler} from '@utils/eventHandler';
  import Desktop from '@components/Desktop.svelte';
  import { debugData } from '@utils/debugData';

  debugData([{ action: 'setVisible', data: true }]);

  if (isEnvBrowser()) {
    
  } else { 
    EventHandler();
  }

  let background = "";
  if (isEnvBrowser()) {
    background = "url('https://localhost/image.png')";
  } else {
    background = "none";
  }

  document.documentElement.style.height = "100%";
  document.body.style.height = "100%";
  document.body.style.margin = "0";
  document.body.style.padding = "0";
  document.body.style.width = "100vw";
  document.body.style.height = "100vh";
  document.body.style.backgroundImage = background;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundColor = "transparent";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
</script>

<main>
  <VisibilityProvider>
    <Desktop />
  </VisibilityProvider>
</main>
