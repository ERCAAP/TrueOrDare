import React from 'react';
import { TouchableOpacity, Linking, TouchableOpacityProps } from 'react-native';

interface ExternalLinkProps extends TouchableOpacityProps {
  href: string;
  children: React.ReactNode;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, ...props }) => {
  const handlePress = () => {
    Linking.openURL(href);
  };

  return (
    <TouchableOpacity onPress={handlePress} {...props}>
      {children}
    </TouchableOpacity>
  );
}; 