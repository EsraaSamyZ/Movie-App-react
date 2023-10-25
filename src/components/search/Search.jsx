import { useState } from "react";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";

const Search = ({ query, onSearch, onQueryChange, searchResults }) => {
  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Container style={{ marginTop: "50px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9}>
          <TextField
            fullWidth
            variant="outlined"
            label="Search Movies & TV Shows"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search
          </Button>
        </Grid>
        {searchResults && (
          <Grid item xs={12}>
            <Typography variant="body2">
              {searchResults.length} results found.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Search;