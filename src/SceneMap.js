/* @flow */

import * as React from 'react';

class SceneComponent extends React.PureComponent<*> {
  render() {
    const { component, ...rest } = this.props;
    return React.createElement(component, rest);
  }
}

export default function SceneMap<T: *>(scenes: {
  [key: string]: React.ComponentType<T>,
}, P_state,P_props) {
  return ({ route, jumpTo }: T) => (
    <SceneComponent
      key={route.key}
      component={scenes[route.key]}
      route={route}
      jumpTo={jumpTo}
      data= {({state: P_state,props:P_props})}
    />
  );
}
