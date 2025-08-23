import { onMount, onDestroy } from "svelte";
import { get } from 'svelte/store';

import { visibility } from '@store/stores';

interface nuiMessage {
    data: {
        action: string,
        topic?: string,
        [key: string]: any,
    },
}

export function EventHandler() {
    function mainEvent(event: nuiMessage) {
        const data = event.data.data;

        switch (event.data.action) {
            case "setVisible":
                visibility.set(data.show);
                break;
        }
    }

    onMount(() => window.addEventListener("message", mainEvent));
    onDestroy(() => window.removeEventListener("message", mainEvent));
}