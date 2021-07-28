<script>
  import FiltersPanel from './components/filtersPanel/FiltersPanel.svelte';
  import Header from './components/header/Header.svelte';
  import SearchField from './components/searchField/SearchField.svelte';
  import Todolist from './components/todolist/Todolist.svelte';
  import { FILTER_MODES, FILTER_OPTIONS } from './constants/filterOptions';

  let todos = [];
  let displayingTodos = [];
  let filterMode = FILTER_OPTIONS[0];
  let isClearCompletedShown;
  let activeItemsCount;

  const addTodo = (item) => {
    todos = [...todos, item];
  };
  const removeTodo = (id) => {
    todos = todos.filter((todo) => todo.id !== id);
  };
  const updateTodo = (id, value) => {
    todos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: value,
        };
      }
      return todo;
    });
  };
  const toggleTodo = (id) => {
    todos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
  };
  const toggleAll = () => {
    const isEveryCompleted = todos.every((todo) => todo.isCompleted);
    todos = todos.map((todo) => {
      return {
        ...todo,
        isCompleted: !isEveryCompleted,
      };
    });
  };
  const clearCompleted = () => {
    todos = todos.filter((todo) => !todo.isCompleted);
  };
  const setFilterMode = (mode) => {
    filterMode = mode;
  };
  $: isClearCompletedShown = todos.some((todo) => todo.isCompleted);
  $: activeItemsCount = todos.filter((todo) => !todo.isCompleted).length;
  $: displayingTodos = todos.filter((todo) => {
    if (filterMode.value === FILTER_MODES.ACTIVE) {
      return !todo.isCompleted;
    } else if (filterMode.value === FILTER_MODES.COMPLETED) {
      return todo.isCompleted;
    }
    return true;
  });
</script>

<svelte:body />

<main>
  <Header name={'Bohdan'} />
  <SearchField handleSubmit={addTodo} handleToggleAll={toggleAll} />
  <Todolist list={displayingTodos} handleRemove={removeTodo} handleUpdate={updateTodo} handleToggle={toggleTodo} />
  <FiltersPanel
    {activeItemsCount}
    {isClearCompletedShown}
    {filterMode}
    handleSetFilterMode={setFilterMode}
    handleClearCompleted={clearCompleted}
  />
</main>

<style>
  :global(body),
  :global(ul),
  :global(input) {
    padding: 0;
    margin: 0;
    border: 0;
  }
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
</style>
