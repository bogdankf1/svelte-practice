<script lang="ts">
  import { v4 as uuidv4 } from 'uuid';
  import { Todo } from '../../interfaces/Todo';

  export let handleSubmit: (item: Todo) => void;
  export let handleToggleAll: () => void;

  let value: string = '';
  let inputField: any;

  const getPreparedTodo = (title: string): Todo => {
    return {
      title,
      isCompleted: false,
      id: uuidv4(),
    };
  };

  const clearInputField = () => (inputField.value = '');

  const handleFormSubmit = () => {
    handleSubmit(getPreparedTodo(value));
    clearInputField();
  };
</script>

<div class="wrapper">
  <div class="select-all-icon" on:click={handleToggleAll}>
    <img alt="chevron down" src="/assets/chevron-down.svg" />
  </div>
  <form class="search-form" on:submit|preventDefault={handleFormSubmit}>
    <input bind:this={inputField} class="search-field" placeholder="Enter your todo" bind:value />
  </form>
</div>

<style>
  .wrapper {
    width: 100%;
    height: 48px;
    padding: 10px 0;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .select-all-icon {
    width: 32px;
    height: 32px;
  }
  .select-all-icon img {
    width: 100%;
    height: 100%;
  }
  .search-form {
    width: 100%;
    height: 100%;
  }
  .search-field {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 24px;
    padding: 0 5px;
  }
</style>
