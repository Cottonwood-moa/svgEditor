/* eslint-disable @typescript-eslint/no-explicit-any */
// import { twMerge } from 'tailwind-merge';
import { Node } from '@antv/x6';
import { useEffect } from 'react';
import { ReactComponent as Test1 } from '../svg/test1.svg';
import { ReactComponent as Test2 } from '../svg/test2.svg';
import { ReactComponent as Test3 } from '../svg/test3.svg';
import { ReactComponent as Test4 } from '../svg/test4.svg';
import { ReactComponent as Test5 } from '../svg/test5.svg';
import { ReactComponent as Test6 } from '../svg/test6.svg';

interface SvgProp {
  node: Node;
}

function Svg({ node }: SvgProp) {
  const type = node.prop('type');
  useEffect(() => {
    console.log('하이킥 Test1', Test1);
  }, []);
  return (
    <>
      {type === 'test1' && <Test1 className="h-full w-full" />}
      {type === 'test2' && <Test2 className="h-full w-full" />}
      {type === 'test3' && <Test3 className="h-full w-full" />}
      {type === 'test4' && <Test4 className="h-full w-full" />}
      {type === 'test5' && <Test5 className="h-full w-full" />}
      {type === 'test6' && <Test6 className="h-full w-full" />}
    </>
  );
}

export default Svg;
