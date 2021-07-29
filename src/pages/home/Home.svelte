<script lang="ts">
  import FiltersPanel from '../../components/filtersPanel/FiltersPanel.svelte';
  import Header from '../../components/header/Header.svelte';
  import SearchField from '../../components/searchField/SearchField.svelte';
  import Todolist from '../../components/todolist/Todolist.svelte';
  import { FILTER_MODES, FILTER_OPTIONS } from '../../constants/filterOptions';
  import { FilterOption } from '../../interfaces/FilterOption';
  import { Todo } from '../../interfaces/Todo';

  let todos: Todo[] = [];
  let displayingTodos: Todo[] = [];
  let filterMode = FILTER_OPTIONS[0];
  let isClearCompletedShown: boolean;
  let activeItemsCount: number = 0;

  const addTodo = (item: Todo) => {
    todos = [...todos, item];
  };
  const removeTodo = (id: string) => {
    todos = todos.filter((todo) => todo.id !== id);
  };
  const updateTodo = (id: string, value: string) => {
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
  const toggleTodo = (id: string) => {
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
  const setFilterMode = (mode: FilterOption) => {
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
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
</style>
