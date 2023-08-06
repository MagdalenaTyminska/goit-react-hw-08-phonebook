import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <RotatingLines
      height="100"
      width="100"
      color="#4fa94d"
      ariaLabel="line-wave"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      firstLineColor=""
      middleLineColor=""
      lastLineColor=""
    />
  );
};
