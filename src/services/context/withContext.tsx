import React, { ComponentType } from "react"
import { Consumer } from "."
/* eslint-disable react/display-name */
const withContext = (WrappedComponent: ComponentType<any>) => (props: any) => (
  <Consumer>
    {values => <WrappedComponent {...props} context={values} />}
  </Consumer>
)

export default withContext
