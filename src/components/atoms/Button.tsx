'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  ariaLabel?: string;
  target?: '_blank' | '_self';
}

const StyledButton = styled.button<{
  $variant: ButtonProps['variant'];
  $size: ButtonProps['size'];
  $fullWidth?: boolean;
  $disabled?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.typography.fonts.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  border: none;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: all ${({ theme }) => theme.transitions.duration.normal} ${({ theme }) => theme.transitions.easing.easeOut};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  white-space: nowrap;
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  
  /* Size variations */
  ${({ $size, theme }) => {
    switch ($size) {
      case 'small':
        return `
          height: ${theme.components.button.height.small};
          padding: ${theme.components.button.padding.small};
          font-size: ${theme.typography.fontSize.sm};
        `;
      case 'large':
        return `
          height: ${theme.components.button.height.large};
          padding: ${theme.components.button.padding.large};
          font-size: ${theme.typography.fontSize.lg};
        `;
      default:
        return `
          height: ${theme.components.button.height.medium};
          padding: ${theme.components.button.padding.medium};
          font-size: ${theme.typography.fontSize.base};
        `;
    }
  }}
  
  /* Variant styles */
  ${({ $variant, theme, $disabled }) => {
    switch ($variant) {
      case 'secondary':
        return `
          background: ${theme.colors.black};
          color: ${theme.colors.white};
          
          ${!$disabled && `
            &:hover {
              background: ${theme.colors.darkGray};
              transform: translateY(-2px);
              box-shadow: ${theme.shadows.lg};
            }
            
            &:active {
              transform: translateY(0);
            }
          `}
        `;
      case 'outline':
        return `
          background: transparent;
          color: ${theme.colors.text.primary};
          border: 2px solid ${theme.colors.gray};
          
          ${!$disabled && `
            &:hover {
              border-color: ${theme.colors.primary};
              color: ${theme.colors.primary};
              background: ${theme.colors.background.tertiary};
            }
          `}
        `;
      case 'ghost':
        return `
          background: transparent;
          color: ${theme.colors.text.primary};
          
          ${!$disabled && `
            &:hover {
              background: ${theme.colors.background.tertiary};
            }
          `}
        `;
      default: // primary
        return `
          background: ${theme.colors.primary};
          color: ${theme.colors.text.onPrimary};
          box-shadow: ${theme.shadows.md};
          
          ${!$disabled && `
            &:hover {
              background: ${theme.colors.primaryLight};
              transform: translateY(-2px);
              box-shadow: ${theme.shadows.glow};
            }
            
            &:active {
              transform: translateY(0);
            }
          `}
        `;
    }
  }}
  
  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  disabled = false,
  fullWidth = false,
  className,
  ariaLabel,
  target = '_self',
}) => {
  const buttonProps = {
    $variant: variant,
    $size: size,
    $fullWidth: fullWidth,
    $disabled: disabled,
    className,
    'aria-label': ariaLabel,
    onClick: disabled ? undefined : onClick,
  };

  if (href) {
    const isExternal = href.startsWith('http');
    
    if (isExternal) {
      return (
        <StyledButton
          as="a"
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          {...buttonProps}
        >
          {children}
        </StyledButton>
      );
    }
    
    return (
      <StyledButton as={Link} href={href} {...buttonProps}>
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton type="button" disabled={disabled} {...buttonProps}>
      {children}
    </StyledButton>
  );
};

export default Button;
