export interface Action<T = any> {
  type: T;
}

/**
 * An Action type which accepts any other properties.
 * This is mainly for the use of the `Reducer` type.
 * This is not part of `Action` itself to prevent users who are extending `Action.
 */
export default interface AnyAction extends Action {
  // Allows any extra properties to be defined in an action.
  [extraProps: string]: any;
}
