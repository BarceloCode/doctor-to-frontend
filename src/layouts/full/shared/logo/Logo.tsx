import { FC } from "react";
import { useSelector } from "../../../../store/Store";
import Link from "next/link";
import { styled, Typography } from "@mui/material";
import { AppState } from "../../../../store/Store";
import Image from "next/image";

const Logo = () => {
  const customizer = useSelector((state: AppState) => state.customizer);
  const LinkStyled = styled(Link)(() => ({
    height: customizer.activeDir === "ltr" ? "78px" : customizer.TopbarHeight,
    width: customizer.isCollapse
      ? "40px"
      : customizer.activeDir === "ltr"
      ? "206px"
      : "411px",
    overflow: "hidden",
    display: "block",
  }));

  if (customizer.activeDir === "ltr") {
    return (
      // <div style={{ maxWidth: "206px" }}>
      <LinkStyled href="/">
        {customizer.activeMode === "dark" ? (
          // <Typography  mt={3} variant="h2" component="h2">
          //   USC Clinic
          // </Typography>
          // <Image
          //   src="/images/logos/light-logo.svg"
          //   alt="logo"
          //   height={customizer.TopbarHeight}
          //   width={174}
          //   priority
          // />

          <Image
            src="/images/logos/logo.png"
            alt="logo"
            height={78}
            width={206}
            priority
          />
        ) : (
          // <Typography mt={3} variant="h2" component="h2">
          //   USC Clinic
          // </Typography>
          // <Image
          //   src={"/images/logos/dark-logo.svg"}
          //   alt="logo"
          //   height={78}
          //   width={200}
          //   priority
          // />

          <Image
            src="/images/logos/logo.png"
            alt="logo"
            height={78}
            width={206}
            priority
          />
        )}
      </LinkStyled>
      // </div>
    );
  }

  return (
    <LinkStyled href="/">
      {customizer.activeMode === "dark" ? (
        // <Typography mt={3} variant="h2" component="h2">
        //   USC Clinic
        // </Typography>
        // <Image
        //   src="/images/logos/dark-rtl-logo.svg"
        //   alt="logo"
        //   height={customizer.TopbarHeight}
        //   width={411}
        //   priority
        // />

        <Image
          src="/images/logos/logo.png"
          alt="logo"
          height={customizer.TopbarHeight}
          width={411}
          priority
        />
      ) : (
        // <Typography mt={3} variant="h2" component="h2">
        //   USC Clinic
        // </Typography>
        // <Image
        //   src="/images/logos/light-logo-rtl.svg"
        //   alt="logo"
        //   height={customizer.TopbarHeight}
        //   width={411}
        //   priority
        // />

        <Image
          src="/images/logos/logo.png"
          alt="logo"
          height={customizer.TopbarHeight}
          width={411}
          priority
        />
      )}
    </LinkStyled>
  );
};

export default Logo;
