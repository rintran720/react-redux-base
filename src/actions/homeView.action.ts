import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import AnyAction from '../reducers/actionType';
import { PostType } from '../reducers/homeView.reducer';
import { RootState } from '../store';
import { homeViewConstants } from './homeView.constant';
import { getPostsURL } from './url';

// export type Actions = { type: 'FOO' } | { type: 'BAR'; payload: number };

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, AnyAction>;
// Example
// Redux action
export function reduxAction(): AnyAction {
  return { type: 'FOO' };
}
// Thunk action
export function thunkAction(): ThunkResult<string> {
  return (dispatch, getState) => {
    dispatch({ type: 'FOO' });
    return 'hello';
  };
}
// Async thunk action
export function asynThunkAction(
  payload: any,
  callback?: Function
): ThunkResult<Promise<void>> {
  return async (dispatch, getState) => {
    dispatch(getPosts_request());
    try {
      const posts: Array<PostType> = await axios.get(getPostsURL);
      if (posts) {
        dispatch(getPosts_success(posts));
        if (callback) {
          callback();
        }
      } else {
        dispatch(getPosts_failure());
      }
    } catch (error) {
      dispatch(getPosts_failure());
    }
  };
}

/*
 ** Post actions
 */
export function getPosts_request(): AnyAction {
  return {
    type: homeViewConstants.GET_POSTS_REQUEST
  };
}
export function getPosts_success(posts: Array<PostType>): AnyAction {
  return {
    type: homeViewConstants.GET_POSTS_SUCCESS,
    payload: { posts }
  };
}
export function getPosts_failure(): AnyAction {
  return {
    type: homeViewConstants.GET_POSTS_FAILURE
  };
}

export function getPosts(
  payload: any,
  callback?: Function
): ThunkResult<Promise<void>> {
  return async (dispatch, getState) => {
    dispatch(getPosts_request());
    try {
      const posts: Array<PostType> = await axios.get(getPostsURL);
      if (posts) {
        dispatch(getPosts_success(posts));
        if (callback) {
          callback();
        }
      } else {
        dispatch(getPosts_failure());
      }
    } catch (error) {
      // dispatch(
      //   getPosts_success([
      //     {
      //       id: '456',
      //       title: 'Super Hot news',
      //       description: 'lorem ipsum'
      //     }
      //   ])
      // );

      dispatch(getPosts_failure());
    }
  };
}
