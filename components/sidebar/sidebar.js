import { useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import SvgColor from "../svg-color";
import useTheme from "@mui/material/styles/useTheme";
import { useMediaQuery } from "@mui/material";

import ClassIcon from "../../assets/icons/navbar/class.png";
import SubjectIcon from "../../assets/icons/navbar/subject.png";
import MaterialIcon from "../../assets/icons/navbar/material.png";
import MediumIcon from "../../assets/icons/navbar/medium.png";
import CategoryIcon from "../../assets/icons/navbar/category.png";
import LanguageIcon from "../../assets/icons/navbar/language.png";
import NewsIcon from "../../assets/icons/navbar/news.png";
import SliderIcon from "../../assets/icons/navbar/slider.png";
import ReviewIcon from "../../assets/icons/navbar/review.png";
import SupportIcon from "../../assets/icons/navbar/support.png";
import ReportIcon from "../../assets/icons/navbar/report.png";
import NotificationIcon from "../../assets/icons/navbar/notification.png";
import VersionIcon from "../../assets/icons/navbar/version.png";
import SettingIcon from "../../assets/icons/navbar/setting.png";

const testData = [
  {
    title: "dashboard",
    path: "/",
    icon: "https://minimal-kit-react.vercel.app/assets/icons/navbar/ic_analytics.svg",
  },
  {
    title: "class",
    path: "/class",
    icon: ClassIcon,
  },
  {
    title: "subject",
    path: "/subject",
    icon: SubjectIcon,
  },
  {
    title: "material",
    path: "/material",
    icon: MaterialIcon,
  },
  {
    title: "medium",
    path: "/medium",
    icon: MediumIcon,
  },
  {
    title: "category",
    path: "/category",
    icon: CategoryIcon,
  },
  {
    title: "language",
    path: "/language",
    icon: LanguageIcon,
  },
  {
    title: "news",
    path: "/news",
    icon: NewsIcon,
  },
  {
    title: "slider",
    path: "/slider",
    icon: SliderIcon,
  },
  {
    title: "review",
    path: "/review",
    icon: ReviewIcon,
  },
  {
    title: "support",
    path: "/support",
    icon: SupportIcon,
  },
  {
    title: "report",
    path: "/report",
    icon: ReportIcon,
  },
  {
    title: "notification",
    path: "/notification",
    icon: NotificationIcon,
  },
  {
    title: "version",
    path: "/version",
    icon: VersionIcon,
  },
  {
    title: "setting",
    path: "/setting",
    icon: SettingIcon,
  },
  {
    title: "Not found",
    path: "/404",
    icon: "https://minimal-kit-react.vercel.app/assets/icons/navbar/ic_disabled.svg",
  },
];

export default function Sidebar({ openSidebar, onCloseSidebar }) {
  const theme = useTheme();
  const upLg = useMediaQuery(theme.breakpoints.up("lg"));

  const width = 280;
  const renderAccount = (
    <Box
      sx={{
        my: 3,
        mx: 2.5,
        py: 2,
        px: 2.5,
        display: "flex",
        borderRadius: 1.5,
        alignItems: "center",
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
      }}
    >
      <Avatar
        src={
          "https://minimal-kit-react.vercel.app/assets/images/avatars/avatar_25.jpg"
        }
        alt="photoURL"
      />

      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle2">{"Karthi"}</Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {"Developer"}
        </Typography>
      </Box>
    </Box>
  );

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
      {testData.map((item, i) => (
        <NavItem key={i} item={item} />
      ))}
    </Stack>
  );

  const renderContent = (
    <Box
      sx={{
        height: "100%",
        background: (theme) => theme.palette.grey[0],
        boxShadow: (theme) => theme.shadows[6],
        borderRadius: "1rem",
        overflowY: "scroll",
        "::-webkit-scrollbar": { width: "4px" },
      }}
    >
      {renderAccount}
      {renderMenu}
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: width },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: "fixed",
            width: width,
            backgroundColor: "background.default",
            p: "1rem",
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: {
              width: width,
              margin: "1rem",
              height: "calc(100dvh - 2rem)",
              borderRadius: "1rem",
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

function NavItem({ item }) {
  const pathName = window.location.pathname;
  const active = item.path === pathName;

  return (
    <ListItemButton
      href={item.path}
      sx={{
        minHeight: 49,
        borderRadius: 0.75,
        typography: "body2",
        color: "text.secondary",
        textTransform: "capitalize",
        fontWeight: "fontWeightMedium",
        ...(active && {
          // color: 'primary.main',
          fontWeight: "fontWeightBold",
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
          "&:hover": {
            bgcolor: (theme) => theme.palette.grey[200],
          },
        }),
      }}
    >
      <Box
        component="span"
        sx={{
          display: "grid",
          placeItems: "center",
          width: 38,
          height: 38,
          borderRadius: 0.8,
          mr: 2,
          ...(active && {
            backgroundImage:
              "linear-gradient(310deg, rgb(234, 6, 6), rgb(255, 102, 124))",
          }),
        }}
      >
        <SvgColor src={item.icon} color={active ? "#fff" : ""} />
      </Box>

      <Box component="span">{item.title} </Box>
    </ListItemButton>
  );
}
