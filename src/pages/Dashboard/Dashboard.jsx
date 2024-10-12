import { Card, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import MovieList from "../MovieList/MovieDetails";
function Dashbord() {
  return (
    <Card
      sx={{
        bgcolor: grey[100],
        marginTop: "100px",
        padding: "16px",
        marginLeft: "0px",
        borderRadius: "15px",
        minHeight: "900px",
      }}
    >
      <MovieList />
    </Card>
  );
}
export default Dashbord;
