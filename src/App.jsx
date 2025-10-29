import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { fetchUsers } from "./api"; 

function App() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
      setFiltered(data);
    });
  }, []);

  const handleSearch = (query) => {
    const filteredData = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(filteredData);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        👥 User Directory
      </Typography>
      <SearchBar onSearch={handleSearch} />
      <Grid container spacing={2} mt={2}>
        {filtered.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;

