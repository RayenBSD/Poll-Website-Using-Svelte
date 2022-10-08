<script>
    import Button from "./Button.svelte";
    import Card from "./Card.svelte";
    import { PollStore } from "../stores/PollStore";
    import { tweened } from "svelte/motion"

    export let poll = {};
    
    
    $: totalVotes = poll.voteA + poll.voteB;
    $: percentA = Math.floor((100/totalVotes)*poll.voteA);
    $: percentB = Math.floor((100/totalVotes)*poll.voteB);

    const tweenedA = tweened(0);
    const tweenedB = tweened(0);
    $: tweenedA.set(percentA);
    $: tweenedB.set(percentB);
    $: console.log($tweenedA, $tweenedB);

    const handleVote = (option, id) => {
        if (option === 'a') {
            poll.voteA++;
        }
        else {
            poll.voteB++;
        }
    }
    const deleteItem = (id) => {
        PollStore.update(polls => {
            return polls.filter(poll => poll.id !== id)
        });
    }
</script>

<Card>
    <div class="poll">
        <h3>{poll.question}</h3>
        <p>Tital Votes: {totalVotes}</p>
        <div class="answer" on:click={() => handleVote('a', poll.id)}>
            <div class="percent percent-a" style="width: {$tweenedA}%"></div>
            <span>{poll.answerA} ({poll.voteA})</span>
        </div>
        <div class="answer" on:click={() => handleVote('b', poll.id)}>
            <div class="percent percent-b" style="width: {$tweenedB}%"></div>
            <span>{poll.answerB} ({poll.voteB})</span>
        </div>
    </div>
    <div class="delete">
        <Button on:click={() => deleteItem(poll.id)}>Delete</Button>
    </div>
</Card>

<style>
    h3 {
        margin: 0 auto;
        color: #555;
    }
    p {
        margin-top: 6px;
        font-size: 14px;
        color: #aaa;
        margin-bottom: 30px;
    }
    .answer {
        background: #fafafa;
        cursor: pointer;
        margin: 10px auto;
        position: relative;
    }
    .answer:hover {
        opacity: .6;
    }
    span {
        display: inline-block;
        padding: 10px 20px;
    }
    .percent{ 
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        box-sizing: border-box;
    }
    .percent-a {
        background-color: rgba(217, 27, 66, .2);
        border-left: 4px solid #d91b42;
    }
    .percent-b {
        background-color: rgba(69, 196, 150, .2);
        border-left: 4px solid #45c492;
    }
    .delete {
        margin-top: 30px;
        text-align: center;
    }
</style>
