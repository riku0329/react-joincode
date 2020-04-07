import React from "react";

import { Spinner } from "./Spinner";

const WithSpinner = (WrappedConponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedConponent {...otherProps} />;
};

export { WithSpinner };
