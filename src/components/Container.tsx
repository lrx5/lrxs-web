import { ReactNode } from 'react';
import '../index.css';

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div id='root'>
      {children}
    </div>
  );
}

export default Container;