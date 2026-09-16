import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

function Navbar() {

  const location = useLocation()
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Qualification', path: '/qualification' },
    { name: 'Projects', path: '/projects' },
  ]

  const navStyle = {
    position: "absolute",
    top: "25px",
    left: "0",
    width: "100%",
    background: "transparent",
    zIndex: 1000,
    padding: "0 15px",
    boxSizing: "border-box",
  }

  const containerStyle = {
    maxWidth: "1000px",
    minHeight: "65px",
    margin: "auto",
    padding: "6px 25px",

    background: "rgba(20,20,28,0.92)",

    boxShadow:
      "0 10px 30px rgba(0,0,0,0.35)",

    borderRadius: "50px",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    boxSizing: "border-box",

    backdropFilter: "blur(10px)",
  }

  /* ================= LOGO ================= */

  const logoStyle = {
    color: "#C084FC",

    fontSize: "32px",

    fontWeight: "800",

    margin: "0",

    cursor: "pointer",

    letterSpacing: "1px",

    animation: "logoEntrance 1s ease-out",

    textShadow:
      "0 0 5px rgba(192,132,252,0.25), 0 0 15px rgba(192,132,252,0.18)",

    transition: "all 0.3s ease",
  }

  /* ================= LINK STYLE ================= */

  const getLinkStyle = (path) => ({
    position: "relative",

    textDecoration: "none",

    color:
      location.pathname === path
        ? "#D8B4FE"
        : "#C084FC",

    fontSize: "19px",

    fontWeight: "600",

    padding: "10px 3px",

    display: "inline-block",

    transition: "all 0.3s ease",
  })

  return (

    <nav style={navStyle}>

      {/* =================================================
          DESKTOP APPBAR
      ================================================= */}

      <div
        className="desktop-navbar"
        style={containerStyle}
      >

        {/* ================= DESKTOP LOGO ================= */}

        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >

          <h2
            style={logoStyle}

            onMouseEnter={(e) => {

              e.currentTarget.style.transform =
                "scale(1.12) rotate(-2deg)"

              e.currentTarget.style.textShadow =
                `
                0 0 5px rgba(192,132,252,0.35),
                0 0 15px rgba(192,132,252,0.40),
                0 0 30px rgba(192,132,252,0.25)
                `
            }}

            onMouseLeave={(e) => {

              e.currentTarget.style.transform =
                "scale(1) rotate(0deg)"

              e.currentTarget.style.textShadow =
                `
                0 0 5px rgba(192,132,252,0.25),
                0 0 15px rgba(192,132,252,0.18)
                `
            }}
          >
            NK.
          </h2>

        </Link>


        {/* ================= DESKTOP LINKS ================= */}

        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "30px",
            alignItems: "center",
            margin: "0",
            padding: "0",
          }}
        >

          {navItems.map((item) => (

            <li key={item.path}>

              <Link
                to={item.path}

                style={getLinkStyle(item.path)}

                onMouseEnter={(e) => {

                  e.currentTarget.style.transform =
                    "translateY(-3px)"

                  e.currentTarget.style.color =
                    "#D8B4FE"

                  e.currentTarget.style.textShadow =
                    "0 5px 12px rgba(192,132,252,0.25)"
                }}

                onMouseLeave={(e) => {

                  e.currentTarget.style.transform =
                    "translateY(0)"

                  e.currentTarget.style.color =
                    location.pathname === item.path
                      ? "#D8B4FE"
                      : "#C084FC"

                  e.currentTarget.style.textShadow =
                    "none"
                }}
              >

                {item.name}

                {/* Active underline */}

                <span
                  style={{
                    position: "absolute",

                    left: "0",

                    bottom: "2px",

                    width:
                      location.pathname === item.path
                        ? "100%"
                        : "0%",

                    height: "3px",

                    borderRadius: "10px",

                    background:
                      "linear-gradient(90deg,#C084FC,#E9D5FF)",

                    transition:
                      "width 0.3s ease",
                  }}
                />

              </Link>

            </li>

          ))}

        </ul>


        {/* ================= DESKTOP CONTACT ================= */}

        <Button
          variant="contained"
          component={Link}
          to="/Contact"

          sx={{

            background:
              "linear-gradient(135deg,#7B2CBF,#9D4EDD)",

            borderRadius: "25px",

            fontWeight: 700,

            fontSize: "15px",

            padding: "9px 20px",

            textTransform: "none",

            boxShadow:
              "0 6px 18px rgba(123,44,191,0.30)",

            transition: "all 0.3s ease",

            "&:hover": {

              background:
                "linear-gradient(135deg,#6A1FA8,#7B2CBF)",

              transform:
                "translateY(-4px) scale(1.03)",

              boxShadow:
                "0 12px 28px rgba(123,44,191,0.45)",
            },
          }}
        >
          Contact Me
        </Button>

      </div>


      {/* =================================================
          MOBILE NAVBAR
      ================================================= */}

      <div className="mobile-navbar">

        {/* Mobile Logo */}

        <Link
          to="/"

          style={{
            textDecoration: "none",

            color: "#C084FC",

            fontSize: "24px",

            fontWeight: "800",

            animation: "mobileLogoEntrance 0.8s ease-out",
          }}
        >
          Nanthini K
        </Link>


        {/* Menu Button */}

        <IconButton
          onClick={() => setOpen(true)}

          sx={{

            color: "#C084FC",

            background:
              "rgba(192,132,252,0.08)",

            borderRadius: "12px",

            "&:hover": {

              background:
                "rgba(192,132,252,0.16)",

              transform: "rotate(5deg) scale(1.05)",
            },

            transition: "all 0.3s ease",
          }}
        >

          <MenuIcon />

        </IconButton>

      </div>


      {/* =================================================
          MOBILE SIDEBAR / DRAWER
      ================================================= */}

<Drawer
  anchor="right"
  open={open}
  onClose={() => setOpen(false)}
  sx={{
    "& .MuiDrawer-paper": {
      width: {
        xs: "75%",
        sm: "320px",
      },
      backgroundColor: "#14141C !important",
      backgroundImage: "none !important",
      color: "#fff",
    },
  }}
>

        {/* ================= SIDEBAR HEADER ================= */}

        <div
          style={{

            display: "flex",

            justifyContent: "space-between",

            alignItems: "center",

            padding: "20px 20px 15px",

            background:
              "rgba(20,20,28,0.95)",

            borderBottom:
              "1px solid rgba(192,132,252,0.15)"
          }}
        >

          <h2
            style={{

              margin: 0,

              color: "#C084FC",

              fontSize: "25px",

              fontWeight: "800",

              animation:
                "mobileLogoEntrance 0.7s ease-out"
            }}
          >
            Nanthini K
          </h2>


          <IconButton
            onClick={() => setOpen(false)}

            sx={{

              color: "#C084FC",

              "&:hover": {

                background:
                  "rgba(192,132,252,0.10)",

                transform:
                  "rotate(90deg)"
              },

              transition:
                "all 0.3s ease"
            }}
          >

            <CloseIcon />

          </IconButton>

        </div>


        {/* ================= SIDEBAR LINKS ================= */}

        <List
          sx={{
            px: 2,
            pt: 3
          }}
        >

          {navItems.map((item) => (

            <ListItem
              disablePadding
              key={item.path}
              sx={{
                mb: 1
              }}
            >

              <ListItemButton
                component={Link}

                to={item.path}

                onClick={() => setOpen(false)}

                sx={{

                  borderRadius: "14px",

                  color:
                    location.pathname === item.path
                      ? "#D8B4FE"
                      : "#D1D1D5",

                  background:
                    location.pathname === item.path
                      ? "rgba(192,132,252,0.15)"
                      : "transparent",

                  "&:hover": {

                    background:
                      "rgba(192,132,252,0.12)",

                    color: "#D8B4FE",

                    transform:
                      "translateX(5px)"
                  },

                  transition:
                    "all 0.25s ease",
                }}
              >

                <ListItemText
                  primary={item.name}

                  primaryTypographyProps={{

                    fontSize: "17px",

                    fontWeight:
                      location.pathname === item.path
                        ? 700
                        : 600
                  }}
                />

              </ListItemButton>

            </ListItem>

          ))}


          {/* ================= CONTACT ================= */}

          <ListItem
            disablePadding
            sx={{
              mt: 2
            }}
          >

            <ListItemButton
              component={Link}

              to="/Contact"

              onClick={() => setOpen(false)}

              sx={{

                borderRadius: "14px",

                color: "white",

                background:
                  "linear-gradient(135deg,#7B2CBF,#9D4EDD)",

                "&:hover": {

                  background:
                    "linear-gradient(135deg,#6A1FA8,#7B2CBF)",

                  transform:
                    "translateX(5px)"
                },

                transition:
                  "all 0.25s ease",
              }}
            >

              <ListItemText
                primary="Contact Me"

                primaryTypographyProps={{
                  fontSize: "17px",
                  fontWeight: 700,
                }}
              />

            </ListItemButton>

          </ListItem>

        </List>

      </Drawer>


      {/* =================================================
          ANIMATIONS + RESPONSIVE CSS
      ================================================= */}

      <style>
        {`

          /* ================= LOGO ANIMATION ================= */

          @keyframes logoEntrance {

            0% {
              opacity: 0;
              transform:
                translateY(-25px)
                scale(0.75)
                rotate(-8deg);
            }

            50% {
              opacity: 1;
              transform:
                translateY(5px)
                scale(1.12)
                rotate(2deg);
            }

            75% {
              transform:
                translateY(-2px)
                scale(1.04)
                rotate(-1deg);
            }

            100% {
              opacity: 1;
              transform:
                translateY(0)
                scale(1)
                rotate(0deg);
            }

          }


          /* ================= MOBILE LOGO ================= */

          @keyframes mobileLogoEntrance {

            0% {
              opacity: 0;
              transform:
                translateX(-20px)
                scale(0.85);
            }

            60% {
              opacity: 1;
              transform:
                translateX(5px)
                scale(1.05);
            }

            100% {
              opacity: 1;
              transform:
                translateX(0)
                scale(1);
            }

          }


          /* ================= MOBILE NAVBAR ================= */

          .mobile-navbar {
            display: none;
          }


          /* ================= TABLET ================= */

          @media (max-width: 900px) {

            .desktop-navbar {
              max-width: 850px !important;

              padding:
                6px 20px !important;
            }

            .desktop-navbar ul {
              gap: 20px !important;
            }

            .desktop-navbar ul a {
              font-size: 17px !important;
            }

          }


          /* ================= MOBILE ================= */

          @media (max-width: 750px) {

            .desktop-navbar {
              display: none !important;
            }

            .mobile-navbar {

              display: flex;

              width: 100%;

              max-width: 500px;

              min-height: 58px;

              margin: auto;

              padding:
                5px 18px;

              box-sizing: border-box;

              align-items: center;

              justify-content:
                space-between;

              background:
                rgba(20,20,28,0.92);

              border-radius: 30px;

              box-shadow:
                0 10px 30px
                rgba(0,0,0,0.35);

              backdrop-filter:
                blur(10px);
            }

            nav {

              top: 15px !important;

              padding:
                0 10px !important;
            }

          }


          /* ================= SMALL MOBILE ================= */

          @media (max-width: 500px) {

            nav {

              top: 10px !important;

              padding:
                0 8px !important;
            }

            .mobile-navbar {

              min-height: 54px;

              padding:
                4px 14px;

              border-radius: 27px;
            }

            .mobile-navbar a {

              font-size:
                21px !important;
            }

          }


          /* ================= VERY SMALL MOBILE ================= */

          @media (max-width: 380px) {

            .mobile-navbar {

              padding:
                4px 12px;
            }

            .mobile-navbar a {

              font-size:
                19px !important;
            }

          }

        `}
      </style>

    </nav>
  )
}

export default Navbar