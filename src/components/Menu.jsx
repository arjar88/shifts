import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { FaUser, FaWarehouse } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";
import { AiFillSchedule } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { RiPagesLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SubMenu from "./SubMenu";

const Menu = () => {
  const drawerWidth = 240;
  const navigate = useNavigate();
  const navigateOnClick = (path) => {
    navigate(path);
  };

  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <Drawer
      PaperProps={{
        sx: {
          backgroundColor: "black",
        },
      }}
      sx={{
        width: drawerWidth,
        backgroundColor: "pink",
        color: "red",
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
            text: "Schedule",
            icon: (
              <AiFillSchedule style={{ color: "purple", fontSize: "1.3em" }} />
            ),
            subItems: [
              {
                text: "View Schedule",
                path: "/createSchedule",
                icon: (
                  <RiPagesLine
                    style={{ color: "#BA55D3", fontSize: "1.35em" }}
                  />
                ),
              },
              ,
              {
                text: "Create Schedule",
                path: "/createSchedule",
                icon: (
                  <VscTools style={{ color: "#BA55D3", fontSize: "1.35em" }} />
                ),
              },
              {
                text: "Shift Structure",
                path: "/shifts",
                icon: (
                  <FiEdit2 style={{ color: "#BA55D3", fontSize: "1.3em" }} />
                ),
              },
            ],
          },
          {
            text: "Workers",
            path: "/workers",
            icon: <FaUser style={{ color: "pink", fontSize: "1em" }} />,
          },
          {
            text: "Inventory",
            icon: <FaWarehouse style={{ color: "cyan", fontSize: "1em" }} />,
          },
        ].map((obj) => (
          <>
            <ListItem
              onClick={
                obj.subItems ? handleExpand : () => navigateOnClick(obj.path)
              }
              key={obj.text}
              disablePadding
              sx={{ paddingTop: "3em" }}
            >
              <ListItemButton>
                <ListItemIcon style={{ marginRight: "-1em" }}>
                  {obj.icon}
                </ListItemIcon>
                <ListItemText
                  primary={obj.text}
                  sx={{
                    color: "darkcyan",
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    fontSize: "1.4em",
                  }}
                  disableTypography
                />
              </ListItemButton>
            </ListItem>
            {obj.subItems && (
              <Collapse in={expand} timeout="auto" unmountOnExit>
                <SubMenu subItems={obj.subItems} />
              </Collapse>
            )}
          </>
        ))}
      </List>
    </Drawer>
  );
};
export default Menu;
