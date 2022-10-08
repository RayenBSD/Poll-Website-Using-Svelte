<script>
    import Button from "./Button.svelte";
    import { createEventDispatcher } from "svelte"
    import { PollStore } from "../stores/PollStore";

    const dispatch = createEventDispatcher();

    let field = {
        question: '',
        answerA: '',
        answerB: '',
        //answerC: '',
    };

    const submitHandler = () => {

        if (field.question.trim().length < 5) {
            alert("Enter all required data");
            return
        }
        else if (field.answerA.trim().length < 5) {
            alert("Enter all required data");
            return
        }
        else if (field.answerB.trim().length < 5) {
            alert("Enter all required data");
            return
        }
        else {
            //console.log(field);

            const poll = {...field, voteA: 0, voteB: 0, id: Date.now()}

            PollStore.update(polls => [poll, ...polls])

            dispatch("add");


            field.question = '';
            field.answerA = '';
            field.answerB = '';            
        }

    }
</script>

<form on:submit|preventDefault = {submitHandler}>
    <div class="form-field">
        <label for="question">Poll Question:</label>
        <input type="text" id="question" bind:value={field.question} required>
    </div>
    <div class="form-field">
        <label for="answer-a">Aanswer A:</label>
        <input type="text" id="answer-a" bind:value={field.answerA} required>
    </div>
    <div class="form-field">
        <label for="answer-b">Aanswer B:</label>
        <input type="text" id="answer-b" bind:value={field.answerB} required>
    </div>
    <!-- <div class="form-field">
        <label for="answer-c">Aanswer C:</label>
        <input type="text" id="answer-c" bind:value={field.answerC}>
    </div> -->
    <Button type="secondary" flat={true}>Add Poll</Button>
</form>

<style>
    form {
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    .form-field {
        margin: 18px auto;
    }
    input  {
        width: 100%;
        border-radius: 6px;
        padding: .5rem 0;
    }
    label {
        margin: 10px auto;
        text-align: left;
    }
</style>