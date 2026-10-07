import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import {
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
  IconButton
} from '@mui/material'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import GitHubIcon from '@mui/icons-material/GitHub'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

import CodeIcon from '@mui/icons-material/Code'
import DevicesIcon from '@mui/icons-material/Devices'
import SpeedIcon from '@mui/icons-material/Speed'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'


function Projects() {

  // ==================================================
  // PROJECTS
  // ==================================================

  const projects = [

    {
      image: '/myWebsite.png',
      name: 'My Portfolio',
      live: 'https://nanthini-portfolio.vercel.app/',
      github: 'https://github.com/nanthini23k/myPortfolio',
      available: true
    },

    {
      image: '/candlesite.png',
      name: 'Candle Shop Website',
      live: 'https://candle-website-mu.vercel.app/',
      github: 'https://github.com/nanthini23k/Candle-Website',
      available: true
    },

    {
      image: null,
      name: 'Work in Progress',
      live: '#',
      github: '#',
      available: false
    }

  ]


  const [currentSlide, setCurrentSlide] = useState(0)


  // ==================================================
  // NEXT SLIDE
  // ==================================================

  const nextSlide = () => {

    setCurrentSlide((prev) =>
      (prev + 1) % projects.length
    )

  }


  // ==================================================
  // PREVIOUS SLIDE
  // ==================================================

  const previousSlide = () => {

    setCurrentSlide((prev) =>
      (prev - 1 + projects.length) % projects.length
    )

  }


  // ==================================================
  // AUTO SLIDE
  // 10 SECONDS
  // ==================================================

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide((prev) =>
        (prev + 1) % projects.length
      )

    }, 10000)

    return () => clearInterval(interval)

  }, [])


  const project = projects[currentSlide]


  // ==================================================
  // SLIDE ANIMATION
  // ==================================================

  const slideVariants = {

    enter: {
      opacity: 0,
      x: 100,
      scale: 0.96
    },

    center: {
      opacity: 1,
      x: 0,
      scale: 1
    },

    exit: {
      opacity: 0,
      x: -100,
      scale: 0.96
    }

  }


  // ==================================================
  // QUALIFICATION STYLE GLOSSY CARD
  // ==================================================

  const glossyCard = {

    position: 'relative',

    overflow: 'hidden',

    background:
      'linear-gradient(135deg, rgba(123,44,191,0.25), rgba(255,255,255,0.035))',

    backdropFilter: 'blur(16px)',

    WebkitBackdropFilter: 'blur(16px)',

    border:
      '1px solid rgba(192,132,252,0.30)',

    boxShadow:
      '0 15px 45px rgba(0,0,0,0.30)',

    transition:
      'all 0.35s ease',

    '&::before': {

      content: '""',

      position: 'absolute',

      top: 0,

      left: '-120%',

      width: '75%',

      height: '100%',

      background:
        'linear-gradient(100deg, transparent, rgba(255,255,255,0.14), transparent)',

      transform: 'skewX(-20deg)',

      transition: 'left 0.8s ease',

      pointerEvents: 'none',

      zIndex: 2

    },

    '&::after': {

      content: '""',

      position: 'absolute',

      top: 0,

      left: 0,

      right: 0,

      height: '1px',

      background:
        'linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)',

      pointerEvents: 'none',

      zIndex: 3

    },

    '&:hover': {

      transform:
        'translateY(-7px)',

      borderColor:
        'rgba(192,132,252,0.48)',

      boxShadow:
        '0 18px 45px rgba(0,0,0,0.42), 0 0 25px rgba(142,45,226,0.18), inset 0 1px 1px rgba(255,255,255,0.15)',

      '&::before': {

        left: '130%'

      }

    }

  }


  return (

    <Box

      sx={{

        minHeight: '100vh',

        boxSizing: 'border-box',

        position: 'relative',

        overflow: 'hidden',

        // ==================================================
        // QUALIFICATION STYLE DARK BACKGROUND
        // ==================================================

        backgroundImage:
          "linear-gradient(135deg, rgba(3,3,7,0.72), rgba(12,6,20,0.62), rgba(3,3,7,0.72)), url('/plainImage.png')",

        backgroundSize: 'cover',

        backgroundPosition: 'center',

        backgroundAttachment: {

          xs: 'scroll',

          md: 'fixed'

        },

        // Slightly increased top space
        // to avoid navbar overlap

        pt: {

          xs: 8,

          md: 9

        },

        pb: {

          xs: 6,

          md: 8

        },

        px: {

          xs: 1,

          sm: 2,

          md: 4

        },

        // ==================================================
        // QUALIFICATION OVERLAY
        // ==================================================

        '&::before': {

          content: '""',

          position: 'absolute',

          inset: 0,

          background:
            'linear-gradient(120deg, rgba(0,0,0,0.18), transparent 35%, rgba(255,255,255,0.015) 65%, rgba(0,0,0,0.18))',

          pointerEvents: 'none'

        }

      }}

    >


      {/* ==================================================
          BACKGROUND GLOW
      ================================================== */}

      <Box

        component={motion.div}

        animate={{

          scale: [1, 1.12, 1],

          opacity: [0.12, 0.24, 0.12]

        }}

        transition={{

          duration: 5,

          repeat: Infinity,

          ease: 'easeInOut'

        }}

        sx={{

          position: 'absolute',

          width: {

            xs: 250,

            md: 450

          },

          height: {

            xs: 250,

            md: 450

          },

          borderRadius: '50%',

          background:
            'radial-gradient(circle, rgba(142,45,226,0.18), transparent 70%)',

          filter: 'blur(45px)',

          left: '50%',

          top: {

            xs: 80,

            md: 90

          },

          transform:
            'translateX(-50%)',

          pointerEvents: 'none'

        }}

      />


      {/* ==================================================
          TITLE
      ================================================== */}

      <motion.div

        initial={{

          opacity: 0,

          y: -35,

          scale: 0.96

        }}

        animate={{

          opacity: 1,

          y: 0,

          scale: 1

        }}

        transition={{

          duration: 0.8,

          ease: 'easeOut'

        }}

        style={{

          position: 'relative',

          zIndex: 2

        }}

      >

        <Typography

          sx={{

            textAlign: 'center',

            fontSize: {

              xs: '2rem',

              sm: '2.5rem',

              md: '3rem'

            },

            fontWeight: 800,

            color: '#F5F3FF',

            textShadow:
              '0 0 20px rgba(192,132,252,0.18)',

            mb: 1

          }}

        >

          My Projects

        </Typography>


        <Box

          sx={{

            width: 75,

            height: 4,

            mx: 'auto',

            borderRadius: 10,

            background:
              'linear-gradient(90deg, #8E2DE2, #C084FC, #8E2DE2)',

            boxShadow:
              '0 0 15px rgba(142,45,226,0.5)',

            mb: {

              xs: 3,

              md: 4

            }

          }}

        />

      </motion.div>


      {/* ==================================================
          SLIDER
      ================================================== */}

      <Box

        sx={{

          position: 'relative',

          zIndex: 2,

          maxWidth: '1150px',

          mx: 'auto',

          display: 'flex',

          alignItems: 'center',

          justifyContent: 'center',

          gap: {

            xs: 0.5,

            sm: 2,

            md: 3

          }

        }}

      >


        {/* ==================================================
            LEFT ARROW
        ================================================== */}

        <IconButton

          onClick={previousSlide}

          sx={{

            flexShrink: 0,

            width: {

              xs: 40,

              sm: 48,

              md: 54

            },

            height: {

              xs: 40,

              sm: 48,

              md: 54

            },

            color: '#E9D5FF',

            background:
              'rgba(123,44,191,0.18)',

            border:
              '1px solid rgba(192,132,252,0.30)',

            backdropFilter:
              'blur(12px)',

            boxShadow:
              '0 8px 25px rgba(0,0,0,0.25)',

            transition:
              'all 0.3s ease',

            '&:hover': {

              background:
                'rgba(142,45,226,0.32)',

              borderColor:
                '#C084FC',

              color: '#fff',

              transform:
                'scale(1.08)',

              boxShadow:
                '0 0 25px rgba(142,45,226,0.35)'

            }

          }}

        >

          <ArrowBackIosNewIcon

            sx={{

              fontSize: {

                xs: 16,

                md: 20

              }

            }}

          />

        </IconButton>


        {/* ==================================================
            CARD AREA
        ================================================== */}

        <Box

          sx={{

            width: {

              xs: 'calc(100% - 82px)',

              sm: 650,

              md: 820,

              lg: 900

            },

            minHeight: {

              xs: 440,

              sm: 490,

              md: 530

            },

            position: 'relative',

            display: 'flex',

            alignItems: 'center',

            justifyContent: 'center',

            overflow: 'hidden'

          }}

        >

          <AnimatePresence mode="wait">

            <motion.div

              key={currentSlide}

              variants={slideVariants}

              initial="enter"

              animate="center"

              exit="exit"

              transition={{

                duration: 0.55,

                ease: [0.22, 1, 0.36, 1]

              }}

              style={{

                width: '100%',

                display: 'flex',

                justifyContent: 'center'

              }}

            >


              {/* ==================================================
                  MAIN PROJECT CARD
              ================================================== */}

              <Card

                sx={{

                  ...glossyCard,

                  width: {

                    xs: '100%',

                    sm: 600,

                    md: 760,

                    lg: 820

                  },

                  minHeight: {

                    xs: 400,

                    sm: 450,

                    md: 485

                  },

                  borderRadius: {

                    xs: '20px',

                    md: '24px'

                  }

                }}

              >


                {/* ==================================================
                    PROJECT HEADER
                ================================================== */}

                <Box

                  sx={{

                    height: {

                      xs: 38,

                      md: 44

                    },

                    display: 'flex',

                    alignItems: 'center',

                    justifyContent: 'space-between',

                    px: {

                      xs: 1.5,

                      md: 2

                    },

                    background:
                      'linear-gradient(135deg, rgba(123,44,191,0.20), rgba(255,255,255,0.035))',

                    backdropFilter:
                      'blur(14px)',

                    WebkitBackdropFilter:
                      'blur(14px)',

                    borderBottom:
                      '1px solid rgba(192,132,252,0.20)'

                  }}

                >


                  {/* LEFT DOTS */}

                  <Box

                    sx={{

                      display: 'flex',

                      alignItems: 'center',

                      gap: 0.8

                    }}

                  >

                    <Box

                      sx={{

                        width: 8,

                        height: 8,

                        borderRadius: '50%',

                        background:
                          '#8E2DE2',

                        boxShadow:
                          '0 0 10px rgba(142,45,226,0.65)'

                      }}

                    />

                    <Box

                      sx={{

                        width: 8,

                        height: 8,

                        borderRadius: '50%',

                        background:
                          '#C084FC',

                        boxShadow:
                          '0 0 10px rgba(192,132,252,0.65)'

                      }}

                    />

                    <Box

                      sx={{

                        width: 8,

                        height: 8,

                        borderRadius: '50%',

                        background:
                          '#D8B4FE',

                        boxShadow:
                          '0 0 10px rgba(216,180,254,0.65)'

                      }}

                    />

                  </Box>


                  {/* CENTER TITLE */}

                  <Typography

                    sx={{

                      position: 'absolute',

                      left: '50%',

                      transform:
                        'translateX(-50%)',

                      color: '#B8B2C8',

                      fontSize: {

                        xs: '0.6rem',

                        md: '0.68rem'

                      },

                      fontWeight: 600,

                      letterSpacing:
                        '0.08em',

                      textTransform:
                        'uppercase'

                    }}

                  >

                    Project Preview

                  </Typography>


                  {/* RIGHT DOT */}

                  <Box

                    sx={{

                      width: 7,

                      height: 7,

                      borderRadius: '50%',

                      background:
                        '#C084FC',

                      boxShadow:
                        '0 0 10px rgba(192,132,252,0.55)'

                    }}

                  />

                </Box>


                {/* ==================================================
                    PROJECT IMAGE
                ================================================== */}

                {project.available ? (

                  <Box

                    sx={{

                      px: {

                        xs: 1.2,

                        sm: 1.7,

                        md: 2.2

                      },

                      pt: {

                        xs: 1.2,

                        sm: 1.6,

                        md: 2

                      }

                    }}

                  >

                    <CardMedia

                      component="img"

                      image={project.image}

                      alt={project.name}

                      sx={{

                        width: '100%',

                        height: {

                          xs: 220,

                          sm: 270,

                          md: 315

                        },

                        objectFit: 'cover',

                        borderRadius: {

                          xs: '14px',

                          md: '17px'

                        },

                        border:
                          '1px solid rgba(192,132,252,0.25)',

                        boxShadow:
                          '0 12px 30px rgba(0,0,0,0.30)',

                        transition:
                          'all 0.4s ease',

                        '&:hover': {

                          transform:
                            'scale(1.012)',

                          boxShadow:
                            '0 14px 35px rgba(142,45,226,0.15)'

                        }

                      }}

                    />

                  </Box>

                ) : (

                  /* ==================================================
                      COMING SOON
                  ================================================== */

                  <Box

                    sx={{

                      height: {

                        xs: 260,

                        sm: 300,

                        md: 340

                      },

                      mx: {

                        xs: 1.2,

                        sm: 1.7,

                        md: 2.2

                      },

                      mt: {

                        xs: 1.2,

                        sm: 1.6,

                        md: 2

                      },

                      borderRadius: {

                        xs: '14px',

                        md: '17px'

                      },

                      display: 'flex',

                      flexDirection: 'column',

                      alignItems: 'center',

                      justifyContent: 'center',

                      background:
                        'linear-gradient(135deg, rgba(123,44,191,0.22), rgba(255,255,255,0.035))',

                      backdropFilter:
                        'blur(14px)',

                      border:
                        '1px solid rgba(192,132,252,0.25)',

                      boxShadow:
                        '0 10px 30px rgba(0,0,0,0.20)'

                    }}

                  >

                    <Box

                      component={motion.div}

                      animate={{

                        y: [0, -8, 0],

                        rotate: [0, 4, -4, 0]

                      }}

                      transition={{

                        duration: 3,

                        repeat: Infinity,

                        ease: 'easeInOut'

                      }}

                      sx={{

                        width: {

                          xs: 65,

                          md: 78

                        },

                        height: {

                          xs: 65,

                          md: 78

                        },

                        borderRadius: '22px',

                        display: 'flex',

                        alignItems: 'center',

                        justifyContent: 'center',

                        background:
                          'linear-gradient(135deg, rgba(123,44,191,0.50), rgba(192,132,252,0.22))',

                        border:
                          '1px solid rgba(192,132,252,0.35)',

                        boxShadow:
                          '0 0 30px rgba(142,45,226,0.22)'

                      }}

                    >

                      <AutoAwesomeIcon

                        sx={{

                          fontSize: {

                            xs: 34,

                            md: 40

                          },

                          color:
                            '#D8B4FE',

                          filter:
                            'drop-shadow(0 0 9px rgba(192,132,252,0.45))'

                        }}

                      />

                    </Box>


                    <Typography

                      sx={{

                        mt: 2.5,

                        fontSize: {

                          xs: '1.35rem',

                          md: '1.7rem'

                        },

                        fontWeight: 800,

                        color: '#F5F3FF',

                        textShadow:
                          '0 0 15px rgba(192,132,252,0.15)'

                      }}

                    >

                      In Progress

                    </Typography>

                  </Box>

                )}


                {/* ==================================================
                    NAME + BUTTONS
                ================================================== */}

                {project.available && (

                  <Box

                    sx={{

                      textAlign: 'center',

                      px: 2,

                      pt: {

                        xs: 1.2,

                        md: 1.5

                      },

                      pb: {

                        xs: 2,

                        md: 2.5

                      }

                    }}

                  >

                    <Typography

                      sx={{

                        fontSize: {

                          xs: '1.35rem',

                          sm: '1.5rem',

                          md: '1.7rem'

                        },

                        fontWeight: 800,

                        color: '#F5F3FF',

                        mb: 1.5,

                        textShadow:
                          '0 0 15px rgba(192,132,252,0.15)'

                      }}

                    >

                      {project.name}

                    </Typography>


                    {/* BUTTONS */}

                    <Box

                      sx={{

                        display: 'flex',

                        justifyContent: 'center',

                        gap: 1.5,

                        flexWrap: 'wrap'

                      }}

                    >


                      {/* LIVE DEMO */}

                      <Button

                        variant="contained"

                        endIcon={
                          <ArrowForwardIcon />
                        }

                        href={project.live}

                        target="_blank"

                        rel="noopener noreferrer"

                        sx={{

                          borderRadius: '24px',

                          px: {

                            xs: 2.3,

                            md: 2.8

                          },

                          py: 0.8,

                          fontWeight: 700,

                          color: '#fff',

                          background:
                            'linear-gradient(135deg, #8E2DE2, #C084FC)',

                          boxShadow:
                            '0 7px 22px rgba(142,45,226,0.28)',

                          transition:
                            'all 0.3s ease',

                          '&:hover': {

                            transform:
                              'translateY(-3px)',

                            background:
                              'linear-gradient(135deg, #7B1FA2, #8E2DE2)',

                            boxShadow:
                              '0 10px 28px rgba(142,45,226,0.42)'

                          }

                        }}

                      >

                        Live Demo

                      </Button>


                      {/* GITHUB */}

                      <Button

                        variant="outlined"

                        startIcon={
                          <GitHubIcon />
                        }

                        href={project.github}

                        target="_blank"

                        rel="noopener noreferrer"

                        sx={{

                          borderRadius: '24px',

                          px: {

                            xs: 2.3,

                            md: 2.8

                          },

                          py: 0.8,

                          fontWeight: 700,

                          color: '#D8B4FE',

                          borderColor:
                            'rgba(192,132,252,0.32)',

                          background:
                            'rgba(123,44,191,0.08)',

                          transition:
                            'all 0.3s ease',

                          '&:hover': {

                            borderColor:
                              '#C084FC',

                            color: '#fff',

                            background:
                              'rgba(142,45,226,0.14)',

                            transform:
                              'translateY(-3px)',

                            boxShadow:
                              '0 0 20px rgba(142,45,226,0.18)'

                          }

                        }}

                      >

                        GitHub

                      </Button>

                    </Box>

                  </Box>

                )}

              </Card>

            </motion.div>

          </AnimatePresence>

        </Box>


        {/* ==================================================
            RIGHT ARROW
        ================================================== */}

        <IconButton

          onClick={nextSlide}

          sx={{

            flexShrink: 0,

            width: {

              xs: 40,

              sm: 48,

              md: 54

            },

            height: {

              xs: 40,

              sm: 48,

              md: 54

            },

            color: '#E9D5FF',

            background:
              'rgba(123,44,191,0.18)',

            border:
              '1px solid rgba(192,132,252,0.30)',

            backdropFilter:
              'blur(12px)',

            boxShadow:
              '0 8px 25px rgba(0,0,0,0.25)',

            transition:
              'all 0.3s ease',

            '&:hover': {

              background:
                'rgba(142,45,226,0.32)',

              borderColor:
                '#C084FC',

              color: '#fff',

              transform:
                'scale(1.08)',

              boxShadow:
                '0 0 25px rgba(142,45,226,0.35)'

            }

          }}

        >

          <ArrowForwardIosIcon

            sx={{

              fontSize: {

                xs: 16,

                md: 20

              }

            }}

          />

        </IconButton>

      </Box>


      {/* ==================================================
          SLIDE DOTS
      ================================================== */}

      <Box

        sx={{

          position: 'relative',

          zIndex: 2,

          display: 'flex',

          justifyContent: 'center',

          alignItems: 'center',

          gap: 1,

          mt: 2

        }}

      >

        {projects.map((_, index) => (

          <Box

            key={index}

            onClick={() =>
              setCurrentSlide(index)
            }

            sx={{

              width:
                currentSlide === index
                  ? 26
                  : 8,

              height: 8,

              borderRadius: 10,

              cursor: 'pointer',

              background:
                currentSlide === index

                  ? 'linear-gradient(90deg, #8E2DE2, #C084FC)'

                  : 'rgba(255,255,255,0.22)',

              boxShadow:
                currentSlide === index

                  ? '0 0 12px rgba(192,132,252,0.45)'

                  : 'none',

              transition:
                'all 0.3s ease',

              '&:hover': {

                background:
                  '#C084FC'

              }

            }}

          />

        ))}

      </Box>


      {/* ==================================================
          WHY WORK WITH ME
      ================================================== */}

      <Box

        sx={{

          position: 'relative',

          zIndex: 2,

          maxWidth: '1100px',

          mx: 'auto',

          mt: {

            xs: 5,

            md: 6

          },

          px: {

            xs: 1,

            sm: 2

          }

        }}

      >


        {/* SECTION TITLE */}

        <Typography

          sx={{

            textAlign: 'center',

            fontSize: {

              xs: '1.7rem',

              sm: '2rem',

              md: '2.4rem'

            },

            fontWeight: 800,

            color: '#F5F3FF',

            textShadow:
              '0 0 18px rgba(192,132,252,0.18)',

            mb: 1

          }}

        >

          Why Work With Me?

        </Typography>


        {/* TITLE LINE */}

        <Box

          sx={{

            width: 70,

            height: 3,

            mx: 'auto',

            mb: {

              xs: 3,

              md: 4

            },

            borderRadius: 10,

            background:
              'linear-gradient(90deg, #8E2DE2, #C084FC, #8E2DE2)',

            boxShadow:
              '0 0 14px rgba(142,45,226,0.45)'

          }}

        />


        {/* ==================================================
            ABILITY CARDS
        ================================================== */}

        <Box

          sx={{

            display: 'grid',

            gridTemplateColumns: {

              xs: '1fr',

              sm: 'repeat(2, 1fr)',

              md: 'repeat(4, 1fr)'

            },

            gap: {

              xs: 2,

              md: 2.5

            }

          }}

        >


          {/* ==================================================
              CLEAN CODE
          ================================================== */}

          <Card

            sx={{

              ...glossyCard,

              minHeight: {

                xs: 150,

                md: 170

              },

              borderRadius: '18px',

              display: 'flex',

              flexDirection: 'column',

              alignItems: 'center',

              justifyContent: 'center',

              textAlign: 'center',

              px: 2,

              '&:hover': {

                transform:
                  'translateY(-8px)',

                borderColor:
                  'rgba(192,132,252,0.48)',

                boxShadow:
                  '0 18px 45px rgba(0,0,0,0.42), 0 0 25px rgba(142,45,226,0.18)',

                '& .ability-icon': {

                  transform:
                    'scale(1.12) translateY(-3px)'

                }

              }

            }}

          >

            <CodeIcon

              className="ability-icon"

              sx={{

                fontSize: {

                  xs: 42,

                  md: 48

                },

                color: '#C084FC',

                mb: 1.5,

                filter:
                  'drop-shadow(0 0 10px rgba(192,132,252,0.45))',

                transition:
                  'all 0.3s ease'

              }}

            />

            <Typography

              sx={{

                color: '#F5F3FF',

                fontSize: '1.05rem',

                fontWeight: 800

              }}

            >

              Clean Code

            </Typography>

          </Card>


          {/* ==================================================
              RESPONSIVE DESIGN
          ================================================== */}

          <Card

            sx={{

              ...glossyCard,

              minHeight: {

                xs: 150,

                md: 170

              },

              borderRadius: '18px',

              display: 'flex',

              flexDirection: 'column',

              alignItems: 'center',

              justifyContent: 'center',

              textAlign: 'center',

              px: 2,

              '&:hover': {

                transform:
                  'translateY(-8px)',

                borderColor:
                  'rgba(192,132,252,0.48)',

                boxShadow:
                  '0 18px 45px rgba(0,0,0,0.42), 0 0 25px rgba(142,45,226,0.18)',

                '& .ability-icon': {

                  transform:
                    'scale(1.12) translateY(-3px)'

                }

              }

            }}

          >

            <DevicesIcon

              className="ability-icon"

              sx={{

                fontSize: {

                  xs: 42,

                  md: 48

                },

                color: '#C084FC',

                mb: 1.5,

                filter:
                  'drop-shadow(0 0 10px rgba(192,132,252,0.45))',

                transition:
                  'all 0.3s ease'

              }}

            />

            <Typography

              sx={{

                color: '#F5F3FF',

                fontSize: '1.05rem',

                fontWeight: 800

              }}

            >

              Responsive Design

            </Typography>

          </Card>


          {/* ==================================================
              FAST PERFORMANCE
          ================================================== */}

          <Card

            sx={{

              ...glossyCard,

              minHeight: {

                xs: 150,

                md: 170

              },

              borderRadius: '18px',

              display: 'flex',

              flexDirection: 'column',

              alignItems: 'center',

              justifyContent: 'center',

              textAlign: 'center',

              px: 2,

              '&:hover': {

                transform:
                  'translateY(-8px)',

                borderColor:
                  'rgba(192,132,252,0.48)',

                boxShadow:
                  '0 18px 45px rgba(0,0,0,0.42), 0 0 25px rgba(142,45,226,0.18)',

                '& .ability-icon': {

                  transform:
                    'scale(1.12) translateY(-3px)'

                }

              }

            }}

          >

            <SpeedIcon

              className="ability-icon"

              sx={{

                fontSize: {

                  xs: 42,

                  md: 48

                },

                color: '#C084FC',

                mb: 1.5,

                filter:
                  'drop-shadow(0 0 10px rgba(192,132,252,0.45))',

                transition:
                  'all 0.3s ease'

              }}

            />

            <Typography

              sx={{

                color: '#F5F3FF',

                fontSize: '1.05rem',

                fontWeight: 800

              }}

            >

              Fast Performance

            </Typography>

          </Card>


          {/* ==================================================
              ONGOING SUPPORT
          ================================================== */}

          <Card

            sx={{

              ...glossyCard,

              minHeight: {

                xs: 150,

                md: 170

              },

              borderRadius: '18px',

              display: 'flex',

              flexDirection: 'column',

              alignItems: 'center',

              justifyContent: 'center',

              textAlign: 'center',

              px: 2,

              '&:hover': {

                transform:
                  'translateY(-8px)',

                borderColor:
                  'rgba(192,132,252,0.48)',

                boxShadow:
                  '0 18px 45px rgba(0,0,0,0.42), 0 0 25px rgba(142,45,226,0.18)',

                '& .ability-icon': {

                  transform:
                    'scale(1.12) translateY(-3px)'

                }

              }

            }}

          >

            <SupportAgentIcon

              className="ability-icon"

              sx={{

                fontSize: {

                  xs: 42,

                  md: 48

                },

                color: '#C084FC',

                mb: 1.5,

                filter:
                  'drop-shadow(0 0 10px rgba(192,132,252,0.45))',

                transition:
                  'all 0.3s ease'

              }}

            />

            <Typography

              sx={{

                color: '#F5F3FF',

                fontSize: '1.05rem',

                fontWeight: 800

              }}

            >

              Ongoing Support

            </Typography>

          </Card>

        </Box>

      </Box>

    </Box>

  )

}


export default Projects