import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { useSelector } from "../../../../../store/Store";
import { IconPower } from "@tabler/icons-react";
import { AppState } from "../../../../../store/Store";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

export const Profile = () => {
  const customizer = useSelector((state: AppState) => state.customizer);
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  const { t } = useTranslation();
  const router = useRouter();
  const hideMenu = lgUp
    ? customizer.isCollapse && !customizer.isSidebarHover
    : "";

  return (
    <Box
      display={"flex"}
      alignItems="center"
      gap={2}
      sx={{ m: 3, p: 2, bgcolor: `${"secondary.light"}` }}
    >
      {!hideMenu ? (
        <>
          <Avatar
            alt="Remy Sharp"
            src={"/images/profile/user-1.jpg"}
            sx={{ height: 40, width: 40 }}
          />

          <Box>
            <Typography variant="h6">Sonia</Typography>
            <Typography variant="caption">{t(`${"Costemologist"}`)}</Typography>
          </Box>
          <Box sx={{ ml: "auto" }}>
            <Tooltip title="Logout" placement="top">
              <IconButton
                color="primary"
                // component={Link}
                onClick={() => {
                  if (typeof window !== "undefined") {
                    localStorage.removeItem("id");
                    localStorage.removeItem("token");
                    // window.location = "/auth/auth1/login" as any;
                    router.push("/auth/auth1/login");
                  }
                }}
                // href="/auth/auth1/login"
                aria-label="logout"
                size="small"
              >
                <IconPower size="20" />
              </IconButton>
            </Tooltip>
          </Box>
        </>
      ) : (
        ""
      )}
    </Box>
  );
};
