import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useNavigate } from "react-router-dom";

const SubMenu = ({ subItems }) => {
  const navigate = useNavigate();
  const navigateOnClick = (path) => {
    navigate(path);
  };

  return (
    <List component="div" disablePadding>
      {subItems.map((subItem) => (
        <ListItem
          onClick={() => navigateOnClick(subItem.path)}
          key={subItem.text}
          disablePadding
          //sx={{ paddingTop: "1em", paddingLeft: "2em" }}
        >
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon style={{ marginRight: "-1em" }}>
              {subItem.icon}
            </ListItemIcon>
            <ListItemText
              primary={subItem.text}
              sx={{
                color: "darkcyan",
                fontFamily: "monospace",
                fontWeight: "bold",
                fontSize: "1.2em",
              }}
              disableTypography
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SubMenu;
