<script>
  export let item;
  export let handleRemove;
  export let handleUpdate;
  export let handleToggle;

  let isEditMode = false;
  let inputField;
  let inputValue = '';

  const enableEditMode = () => {
    isEditMode = true;
    inputValue = item.title;
  };
  const disableEditMode = () => (isEditMode = false);

  const clearInputField = () => (inputField.value = '');

  const handleSubmit = () => {
    if (!inputField.value) {
      return;
    }
    handleUpdate(item.id, inputField.value);
    clearInputField();
    disableEditMode();
  };

  const onCheckmarkClick = () => {
    handleToggle(item.id);
  };
  const onTrashClick = () => {
    handleRemove(item.id);
  };
</script>

<li class="item" data-id={item.id}>
  <div class="check-icon" on:click={onCheckmarkClick}>
    {#if item.isCompleted}
      <img alt="checkmark" src="/assets/checkmark.svg" />
    {/if}
  </div>

  {#if isEditMode}
    <form class="edit-form" on:submit|preventDefault={handleSubmit}>
      <!-- svelte-ignore a11y-autofocus -->
      <input
        bind:this={inputField}
        autofocus
        class="edit-field"
        placeholder="Enter your todo"
        bind:value={inputValue}
      />
    </form>
  {:else}
    <div class="item-content" on:dblclick={enableEditMode}>
      {item.title}
    </div>
  {/if}
  <div class="delete-icon" on:click={onTrashClick}>
    <img alt="trash" src="/assets/trash.svg" />
  </div>
</li>

<style>
  .item {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
  }
  .check-icon {
    width: 24px;
    height: 24px;
  }
  .check-icon img {
    width: 100%;
    height: 100%;
  }
  .item-content {
    width: 100%;
    height: 100%;
    flex: 1;
    font-size: 32px;
    padding: 0 10px;
    display: flex;
    align-items: center;
  }
  .delete-icon {
    width: 24px;
    height: 24px;
  }
  .delete-icon img {
    width: 100%;
    height: 100%;
  }

  .edit-form {
    flex: 1;
    height: 100%;
    padding: 0 10px;
  }
  .edit-field {
    width: 100%;
    height: 100%;
    font-size: 32px;
  }
</style>
