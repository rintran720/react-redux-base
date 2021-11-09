import { mapViewConstants } from '../configs/mapView.constant';

const initialState = {
  regions: [],
  loading: true,
  isError: false,
  provinces: [],
  destinations: [],
  supports: [],
  patron: [],
  accessToken: '',
  authentication: {}
};

interface Action {
  type: string;
  payload: any;
}

const mapViewReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case mapViewConstants.INIT_DATA_MAP_VIEW_ERROR:
      return {
        ...state,
        regions: [],
        loading: true,
        isError: true
      };
    case mapViewConstants.INIT_DATA_MAP_VIEW_SUCCESS:
      return {
        ...state,
        regions: action.payload.regions?.regions,
        loading: true,
        isError: false
      };
    case mapViewConstants.INIT_PROVINCE:
      return {
        ...state,
        loading: true
      };
    case mapViewConstants.INIT_PROVINCE_ERROR:
      return {
        ...state,
        provinces: [],
        loading: false
      };
    case mapViewConstants.INIT_PROVINCE_SUCCESS:
      return {
        ...state,
        provinces: action.payload.regions?.data,
        loading: false
      };
    case mapViewConstants.INIT_PATRON:
      return {
        ...state,
        loading: true
      };
    case mapViewConstants.INIT_PATRON_ERROR:
      return {
        ...state,
        patron: [],
        loading: false
      };
    case mapViewConstants.INIT_PATRON_SUCCESS:
      return {
        ...state,
        patron: action.payload.patron?.data,
        loading: false
      };
    default:
      return state;
  }
};

export default mapViewReducer;
