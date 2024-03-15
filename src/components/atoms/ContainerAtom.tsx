import * as React from 'react';
import {
  Edge,
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';

interface ContainerAtomProps extends SafeAreaViewProps {
  children: React.ReactNode;
  top?: boolean;
  bottom?: boolean;
}

export const ContainerAtom: React.FC<ContainerAtomProps> = ({
  children,
  top,
  bottom,
  ...rest
}) => {
  let edges: Edge[] = ['left', 'right'];
  if (top !== false) {
    edges.push('top');
  }
  if (bottom !== false) {
    edges.push('bottom');
  }
  return (
    <SafeAreaView {...rest} edges={edges}>
      {children}
    </SafeAreaView>
  );
};
