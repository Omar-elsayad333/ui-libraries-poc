import { Button } from '@mui/material';
import type { MouseEventHandler } from 'react';

interface CustomButtonProps {
  variant?: 'primary' | 'outline';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const getButtonStyles = (variant: 'primary' | 'outline', disabled: boolean) => {
  if (variant === 'primary') {
    if (disabled) {
      return {
        backgroundColor: '#E0E0E0',
        color: '#BDBDBD',
        boxShadow: 'none',
        border: 'none',
        borderRadius: '12px',
        fontWeight: 700,
        fontSize: '18px',
        padding: '12px 32px',
        textTransform: 'none',
        transition: 'background 0.2s, color 0.2s',
        cursor: 'not-allowed',
        '&:hover': {},
      };
    }
    return {
      backgroundColor: '#111111',
      color: '#fff',
      border: 'none',
      boxShadow: 'none',
      borderRadius: '12px',
      fontWeight: 700,
      fontSize: '18px',
      padding: '12px 32px',
      textTransform: 'none',
      transition: 'background 0.2s, color 0.2s',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#FFB3F6',
        color: '#111111',
        cursor: 'pointer',
      },
    };
  } else {
    // outline
    if (disabled) {
      return {
        backgroundColor: '#E0E0E0',
        color: '#BDBDBD',
        border: '1.5px solid #E0E0E0',
        boxShadow: 'none',
        borderRadius: '12px',
        fontWeight: 700,
        fontSize: '18px',
        padding: '12px 32px',
        textTransform: 'none',
        transition: 'background 0.2s, color 0.2s, border 0.2s',
        cursor: 'not-allowed',
        '&:hover': {},
      };
    }
    return {
      backgroundColor: '#fff',
      color: '#111111',
      border: '1.5px solid #111111',
      boxShadow: 'none',
      borderRadius: '12px',
      fontWeight: 700,
      fontSize: '18px',
      padding: '12px 32px',
      textTransform: 'none',
      transition: 'background 0.2s, color 0.2s, border 0.2s',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#FFB3F6',
        color: '#111111',
        border: '1.5px solid #FFB3F6',
        cursor: 'pointer',
      },
    };
  }
};

const CustomButton = ({
  variant = 'primary',
  disabled = false,
  onClick,
  children,
}: CustomButtonProps) => {
  const sx = getButtonStyles(variant, disabled);
  return (
    <Button sx={sx} disabled={disabled} onClick={onClick} disableElevation>
      {children}
    </Button>
  );
};

export default CustomButton;
