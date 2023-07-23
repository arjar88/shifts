import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function Menu() {
  const drawerWidth = 240;

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <img
        style={{ paddingLeft: "4em", marginTop: "2em", marginBottom: "2em" }}
        width="70"
        height="80"
      ></img>

      <Divider />
      <List>
        {[
          {
            text: "Create Schedule",

            path: "/pills",
          },
          {
            text: "Workers",
          },
          {
            text: "",
          },
        ].map((obj) => (
          <ListItem
            onClick={() => navigateOnClick(obj.path)}
            key={obj.text}
            disablePadding
            sx={{ paddingTop: "3em" }}
          >
            <ListItemButton>
              <ListItemIcon>{obj.icon}</ListItemIcon>
              <ListItemText
                primary={obj.text}
                sx={{
                  color: "darkcyan",
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  fontSize: "1.5em",
                }}
                disableTypography
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
export default Menu;
