/* eslint-disable no-unused-vars */
import { type PayloadAction, type CaseReducer } from '@reduxjs/toolkit';

/**
 * Wraps a reducer so its action creator accepts positional arguments
 * instead of a single payload object.
 *
 * @param prepareArgs maps the positional args to the payload object
 * @param reducer     the normal reducer, operating on that payload
 */
export function withArgs<State>() {
  return <Args extends unknown[], Payload>(
    prepareArgs: (...args: Args) => Payload,
    reducer: CaseReducer<State, PayloadAction<Payload>>
  ) => ({
    prepare: (...args: Args) => ({ payload: prepareArgs(...args) }),
    reducer,
  });
}
