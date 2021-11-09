type BooleanReturnFuncType = (obj: any) => boolean;

type RouteProps = {
  path: string;
  isAuthenticated: boolean | BooleanReturnFuncType;
  exact: boolean;
};

export default RouteProps;
