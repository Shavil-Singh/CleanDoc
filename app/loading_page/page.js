'use client'

import React from "react";
import {Progress} from "@nextui-org/react";

export default function App() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex w-screen h-screen flex-col justify-center items-center gap-10'>
        <Progress
      aria-label="Please wait"
      size="md"
      value={value}
      color="success"
      showValueLabel={true}
      className='flex items-center gap-2'
      
    />
    </div>
    
  );
}
