import * as React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
export const ActionBar = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'flex-end' }}>
      <Button sx={{margin: "20px" }} variant="contained">
        Add Product
      </Button>
    </Box>
  );
};
