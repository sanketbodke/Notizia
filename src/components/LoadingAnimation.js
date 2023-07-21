import React from 'react';
import { Skeleton } from 'antd';

const LoadingAnimation = () => <Skeleton active className='loading_animation' />;

const LoadingComponent = () => {
  const numberOfTimes = 6;

  return (
    <div className='loading_animation_container'>
      {Array.from({ length: numberOfTimes }).map((_, index) => (
        <LoadingAnimation key={index} />
      ))}
    </div>
  );
};

export default LoadingComponent;
