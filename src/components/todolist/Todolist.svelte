<script>
  import Todoitem from './todoitem/Todoitem.svelte';

  export let list;
  export let handleRemove;
  export let handleUpdate;
  export let handleToggle;
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
