<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import PollList from "./components/PollList.svelte";
  import Tabs from './components/Tabs.svelte';

  import { ActiveItem, items } from "./stores/PollStore";

  let activeItem;

  ActiveItem.subscribe(data => {
    activeItem = data;
  })

  const addNewPoll = () => {
    ActiveItem.set(items[0]);
  }

</script>

<Header />
<main>
  <Tabs />
  {#if activeItem === 'Current Polls'}
    <PollList />
    {:else if activeItem === 'Add New Poll'}
      <CreatePollForm on:add={addNewPoll}/>
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>