import { Box, Grid } from '@mui/material';
import styled from 'styled-components';
import { ReactComponent as MainDesc } from '../assets/imgs/MainDesc.svg';
import GalleryView from './GalleryView';

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
`;

export default function MainGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <MainDesc style={{ position: 'fixed' }} />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <GalleryView />
        </Grid>
      </Grid>
    </Box>
  );
}
