import { Box, Grid } from '@mui/material';
import styled from 'styled-components';
import ArchiveGalleryView from './ArchiveGalleryView';
import { Link } from 'react-router-dom';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: white;
  padding-left: 30px;
`;

const Word = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 50px;
  color: #9f9f9f;

  &:hover,
  &:active,
  &:focus {
    color: #f7f7f7;
  }
`;

const ClickWord = styled(Word)`
  color: #f7f7f7;
`;

export default function ArchiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Item>
            <div style={{ height: '150px' }} />
            <ClickWord>Archive</ClickWord>
            <Link to="/addphoto" underline="none">
              <Word>Add Photo</Word>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={10}>
          <ArchiveGalleryView />
        </Grid>
      </Grid>
    </Box>
  );
}
