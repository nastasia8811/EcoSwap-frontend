import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

interface PreloaderProps {
    open: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ open }) => (
    <div>
        <Backdrop
            sx={{ color: '#4f9c2c', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            style={{ backgroundColor: 'white', opacity: 0.7, position: 'absolute' }}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    </div>
);


export default Preloader;
