import { homeViewConstants } from '../actions/homeView.constant';
import AnyAction from './actionType';

export interface PostType {
  id: string;
  title: string;
  description: string;
}
export interface AuthenticationType {
  jwt: string;
  user: object;
}

export interface HomeStateType {
  loading: boolean;
  posts: Array<PostType>;
  authentication: AuthenticationType;
}

const initialState: HomeStateType = {
  loading: true,
  posts: [
    {
      id: '123',
      title: 'Hot news',
      description: 'lorem'
    }
  ],
  authentication: {
    jwt: '',
    user: {
      name: 'Tran Rin',
      id: 'rintran720@gmail.com'
    }
  }
};

const homeViewReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case homeViewConstants.GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case homeViewConstants.GET_POSTS_FAILURE:
      return {
        ...state,
        posts: [],
        loading: false
      };
    case homeViewConstants.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload?.posts || [],
        loading: false
      };
    default:
      return state;
  }
};

export default homeViewReducer;
