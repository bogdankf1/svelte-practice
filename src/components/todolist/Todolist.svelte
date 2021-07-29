<script lang="ts">
  import { Todo } from '../../interfaces/Todo';
  import Todoitem from './todoitem/Todoitem.svelte';

  export let list: Todo[];
  export let handleRemove: (id: string) => void;
  export let handleUpdate: (id: string, value: string) => void;
  export let handleToggle: (id: string) => void;
</script>

<div class="wrapper">
  <ul class="list">
    {#each list as item (item.id)}
      <Todoitem {item} {handleRemove} {handleUpdate} {handleToggle} />
    {/each}
  </ul>
</div>

<style>
  .wrapper {
    width: 100%;
  }
  .list {
    width: 100%;
    list-style-type: none;
  }
</style>
