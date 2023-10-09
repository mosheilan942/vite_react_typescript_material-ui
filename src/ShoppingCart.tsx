import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, BadgeProps, styled } from '@mui/material';

function ShoppingCart() {

    const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: 30,
          top: 30,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));
      

  return (
<>
<Badge color="primary">
<StyledBadge badgeContent={80} color="secondary">
        <ShoppingCartIcon fontSize='large'/>
      </StyledBadge>
</Badge>
</>
  )
}

export default ShoppingCart