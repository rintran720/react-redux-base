import _ from 'lodash';
import { Fragment, PropsWithChildren } from 'react';
import { Redirect, useLocation } from 'react-router-dom';

interface Props {
  permission: string;
  userPermissions: Array<string>;
}

function UsePermission({
  children,
  permission,
  userPermissions
}: PropsWithChildren<Props>) {
  const location = useLocation();
  console.log(_.findIndex(userPermissions, permission));
  if (
    _.findIndex(userPermissions, function (p) {
      return p === permission;
    }) > -1
  ) {
    return <Fragment>{children}</Fragment>;
  } else {
    return (
      <Redirect
        to={{
          pathname: '/403',
          state: { from: location }
        }}
      />
    );
  }
}

export default UsePermission;
