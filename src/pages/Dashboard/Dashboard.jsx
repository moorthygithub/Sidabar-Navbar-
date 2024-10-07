import { Card, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
function Dashbord() {
  return (
    <Card
      sx={{
        bgcolor: grey[100],
        marginTop: "80px",
        padding: "16px",
        marginLeft:"0px",
        borderRadius:"15px",
        height:800
      }}
    >
      <Typography variant="h6" >Name</Typography>{" "}
    </Card>
  );
}
export default Dashbord;
