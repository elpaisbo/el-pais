import React from 'react';

interface IconoirWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const IconoirWrapper: React.FC<IconoirWrapperProps> = ({ 
  children, 
  className 
}) => {
  return (
    <span className={className}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            onPointerEnterCapture: undefined,
            onPointerLeaveCapture: undefined,
            ...child.props,
          });
        }
        return child;
      })}
    </span>
  );
};

export default IconoirWrapper;
