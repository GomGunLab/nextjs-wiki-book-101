import Image from 'next/image';
import React from 'react';
import examplefic from '../../public/1.jpg';

const Example = () => {
  return (
    <div>
      Example
      <Image src={examplefic} alt="apple" width={100} height={100} />
    </div>
  );
};

export default Example;
