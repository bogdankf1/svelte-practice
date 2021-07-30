import { writable } from 'svelte/store';
import type { Todo } from '../interfaces/Todo';

interface TodosInitialState {
  todos: Todo[];
}

const initialState: TodosInitialState = {
  todos: [],
};

export const list = writable(initialState);
