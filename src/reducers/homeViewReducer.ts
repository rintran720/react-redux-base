import { homeViewConstants } from '../configs/homeView.constant';
import ActionType from './actionType';

interface PostType {}
interface AuthenticationType {
  jwt: string;
  user: object;
}

interface HomeStateType {
  loading: boolean;
  posts: Array<PostType>;
  authentication: AuthenticationType;
}

const initialState: HomeStateType = {
  loading: true,
  posts: [],
  authentication: {
    jwt: '',
    user: {}
  }
};

const homeViewReducer = (state = initialState, action: ActionType) => {
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
        posts: action.payload.posts?.data,
        loading: false
      };
    default:
      return state;
  }
};

export default homeViewReducer;
