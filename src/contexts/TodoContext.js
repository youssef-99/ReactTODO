import { createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = TodoContext.Provider;

export const TodoConsumer = TodoContext.Consumer;
