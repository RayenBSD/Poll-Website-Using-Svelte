<script>
    import { createEventDispatcher } from "svelte";

    import { ActiveItem, items } from "../stores/PollStore";

    let activeItem = "";

    ActiveItem.subscribe (data => {
        activeItem = data;
    })

</script>

<div class="tabs">
    <ul>
        {#each items as item, i}
            <li on:click={() => ActiveItem.set(items[i])}>
                <div class:active={activeItem === item}>
                    {item}
                </div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .tabs {
        margin-bottom: 40px;
    }
    ul {
        display: flex;
        list-style: none;
        justify-content: space-around;
        padding: 0;
    }
    li {
        margin: 0 16px;
        color: #555;
        cursor: pointer;
    }
    .active {
        color: #d91b42;
        border-bottom: 2px solid #d91b42;
        padding-bottom: 8px;
    }
</style>