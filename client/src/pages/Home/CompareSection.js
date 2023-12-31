import React from 'react';
import { Container, Grid, Typography, Box, Stack } from '@mui/material';
import {
  COLOR_SECONDARY_BRIGHT,
  FONT_SIZE_BODY1_DESKTOP,
  FONT_SIZE_H2_DESKTOP,
  FONT_SIZE_H3_DESKTOP,
  FONT_WEIGHT_NORMAL,
} from '../../utils/constants';
import { PrimaryButton } from '../../components/customComponents';

export default function CompareSection({ sx }) {
  return (
    <Container maxWidth="xl" sx={{ ...sx }}>
      <Grid container spacing={{ xs: 6, md: 0 }} alignItems="center">
        <Grid item xs={12} sm={6} md={5}>
          <Typography
            fontSize={FONT_SIZE_H2_DESKTOP}
            fontWeight={FONT_WEIGHT_NORMAL}
            textAlign={{ xs: 'center', md: 'left' }}
          >
            Compare performance with any wallet <br />
            (friends, celebs etc.)
          </Typography>
          <Typography
            fontSize={FONT_SIZE_H3_DESKTOP}
            color={COLOR_SECONDARY_BRIGHT}
            mt={2}
            textAlign={{ xs: 'center', md: 'left' }}
          >
            Get to know how your wallet compares to friends, celebrities, and others to make sure you get the most out of your investments.
          </Typography>
          <Stack direction="row" justifyContent={{ xs: 'center', md: 'start' }}>
            <PrimaryButton
              variant="contained"
              sx={{
                mt: 4,
                py: 1,
                px: 3,
                fontWeight: FONT_WEIGHT_NORMAL
              }}
            >
              Compare your wallet now!
            </PrimaryButton>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={2} sx={{ display: { xs: 'none', md: 'block' } }} />
        <Grid item xs={12} sm={6} md={5}>
          <Stack direction="row" justifyContent="end">
            <Box position="relative" width="fit-content">
              <Box component="img" src="assets/images/vs-frames.svg" alt="" />
              <Box position="absolute" top="30%" left="15%">
                <Box
                  component="img"
                  src="assets/images/nft-11-small.png"
                  alt=""
                  width="50%"
                  mb={{ xs: 1, md: 3 }}
                />
                <Typography
                  component="span"
                  fontSize={FONT_SIZE_BODY1_DESKTOP}
                  color={COLOR_SECONDARY_BRIGHT}
                >
                  0xe59DCf131
                </Typography>
              </Box>
              <Box position="absolute" top="30%" right="15%">
                <Stack alignItems="end">
                  <Box
                    component="img"
                    src="assets/images/nft-10-small.png"
                    alt=""
                    width="55%"
                    mb={{ xs: 1, md: 3 }}
                  />
                  <Typography
                    component="span"
                    fontSize={FONT_SIZE_BODY1_DESKTOP}
                    color={COLOR_SECONDARY_BRIGHT}
                  >
                    0xe59DCf131
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}