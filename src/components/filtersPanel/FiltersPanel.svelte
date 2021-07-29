<script lang="ts">
  import { FILTER_OPTIONS } from '../../constants/filterOptions';
  import { FilterOption } from '../../interfaces/FilterOption';

  export let activeItemsCount: number = 0;
  export let isClearCompletedShown: boolean = false;
  export let filterMode: FilterOption;
  export let handleSetFilterMode: (option: FilterOption) => void;
  export let handleClearCompleted: () => void;
</script>

<div class="wrapper">
  <div class="items-count">
    {#if activeItemsCount === 1}
      {activeItemsCount} item left
    {:else}
      {activeItemsCount} items left
    {/if}
  </div>
  <div class="filter-options">
    {#each FILTER_OPTIONS as option (option.value)}
      <div
        class="filter-option {filterMode.value === option.value ? 'active' : ''}"
        on:click={() => handleSetFilterMode(option)}
      >
        {option.title}
      </div>
    {/each}
  </div>
  <div class="clear-completed {!isClearCompletedShown ? 'hidden' : ''}" on:click={handleClearCompleted}>
    Clear completed
  </div>
</div>

<style>
  .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
  }
  .items-count {
    flex: 1;
  }
  .filter-options {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .filter-option.active {
    font-weight: 900;
  }
  .clear-completed {
    flex: 1;
    min-width: 150px;
  }
  .clear-completed.hidden {
    visibility: hidden;
  }
</style>
