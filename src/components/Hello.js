import { Box, Typography } from '@mui/material';
import React from 'react';

const Hello = function (props) {
    const { name } = props;

    return <Box>
        <Typography>
            Hello {name || 'World'} !
        </Typography>
    </Box>
}

export default Hello;