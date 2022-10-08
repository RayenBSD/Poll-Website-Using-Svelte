import { writable } from "svelte/store";

//Tabs
export const items = ['Current Polls', 'Add New Poll'];

export const PollStore = writable([]);
export const ActiveItem = writable(items[0]);

