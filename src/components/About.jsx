import React from 'react'
import { motion } from 'framer-motion'

import {
  Box,
  Typography,
  Button,
  Chip,
  Card,
  CardContent,
  Avatar,
  Stack
} from '@mui/material'

import EmailIcon from '@mui/icons-material/Email'
import CallIcon from '@mui/icons-material/Call'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CodeIcon from '@mui/icons-material/Code'
import WebIcon from '@mui/icons-material/Web'
import DevicesIcon from '@mui/icons-material/Devices'
import PsychologyIcon from '@mui/icons-material/Psychology'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import LightbulbIcon from '@mui/icons-material/Lightbulb'

import { Link } from 'react-router-dom'


const containerVariants = {
  hidden: {
    opacity: 0
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.15
    }
  }
}


const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7
    }
  }
}


const contactDetails = [
  {
    icon: <CallIcon />,
    label: 'Phone',
    value: '+91 8637676800',
    link: 'tel:+918637676800'
  },

  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'nanthini23.k@gmail.com',
    link: 'mailto:nanthini23.k@gmail.com'
  },

  {
    icon: <LocationOnIcon />,
    label: 'Location',
    value: 'Mayiladuthurai, Tamil Nadu'
  }
]


const developmentFocus = [
  {
    icon: <CodeIcon />,
    title: 'Frontend Development',
    description: 'React, JavaScript, HTML & CSS'
  },

  {
    icon: <WebIcon />,
    title: 'Modern UI',
    description: 'Clean and attractive interfaces'
  },

  {
    icon: <DevicesIcon />,
    title: 'Responsive Design',
    description: 'Websites that work on all devices'
  },

  {
    icon: <PsychologyIcon />,
    title: 'Problem Solving',
    description: 'Turning ideas into practical solutions'
  }
]


const learningItems = [
  'Advanced React',
  'Next.js',
  'Node.js',
  'Advanced JavaScript',
  'Modern UI/UX',
  'Backend Fundamentals'
]


/* =====================================================
   SAME GLOSSY STYLE FOR EVERY CARD
===================================================== */

const glossyCard = {
  position: 'relative',

  overflow: 'hidden',

  background:
    'linear-gradient(135deg, rgba(123,44,191,0.25), rgba(255,255,255,0.035))',

  backdropFilter: 'blur(16px)',

  WebkitBackdropFilter: 'blur(16px)',

  border:
    '1px solid rgba(192,132,252,0.30)',

  borderRadius: 4,

  boxShadow:
    '0 15px 45px rgba(0,0,0,0.30)',

  transition:
    'all 0.35s ease',

  /* Glossy reflection */

  '&::before': {
    content: '""',

    position: 'absolute',

    top: 0,

    left: '-120%',

    width: '75%',

    height: '100%',

    background:
      'linear-gradient(100deg, transparent, rgba(255,255,255,0.13), transparent)',

    transform: 'skewX(-20deg)',

    transition:
      'left 0.8s ease',

    pointerEvents: 'none',

    zIndex: 2
  },

  /* Top glossy line */

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
    transform: 'translateY(-7px)',

    borderColor:
      'rgba(192,132,252,0.48)',

    boxShadow:
      '0 18px 45px rgba(0,0,0,0.42), 0 0 25px rgba(142,45,226,0.18), inset 0 1px 1px rgba(255,255,255,0.15)',

    '&::before': {
      left: '130%'
    }
  }
}


function About() {

  return (

    <Box
      sx={{
        minHeight: '100vh',

        position: 'relative',

        overflow: 'hidden',

        py: {
          xs: 7,
          md: 11
        },

        /* HOME DARK BACKGROUND */

        backgroundImage:
          "linear-gradient(135deg, rgba(3,3,7,0.72), rgba(12,6,20,0.62), rgba(3,3,7,0.72)), url('/plainImage.png')",

        backgroundSize: 'cover',

        backgroundPosition: 'center',

        backgroundAttachment: {
          xs: 'scroll',
          md: 'fixed'
        },

        /* Glossy background layer */

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

      <Box
        component={motion.div}

        variants={containerVariants}

        initial="hidden"

        animate="visible"

        sx={{
          position: 'relative',

          zIndex: 1,

          maxWidth: '1200px',

          mx: 'auto',

          px: {
            xs: 2,
            sm: 4,
            md: 6
          }
        }}
      >

        {/* =================================================
            PAGE TITLE
        ================================================= */}

        <Box
          component={motion.div}

          variants={itemVariants}

          sx={{
            textAlign: 'center',

            mb: {
              xs: 6,
              md: 8
            }
          }}
        >

          <Typography
            variant="h3"

            sx={{
              fontWeight: 800,

              color: '#FFFFFF',

              fontSize: {
                xs: '2rem',
                sm: '2.5rem',
                md: '3rem'
              },

              textShadow:
                '0 5px 20px rgba(0,0,0,0.6)'
            }}
          >
            About Me
          </Typography>


          <Box
            sx={{
              width: '70px',

              height: '4px',

              borderRadius: '10px',

              background:
                'linear-gradient(90deg, #7B2CBF, #C084FC)',

              mx: 'auto',

              mt: 2,

              boxShadow:
                '0 0 15px rgba(192,132,252,0.45)'
            }}
          />

        </Box>


        {/* =================================================
            PROFILE SECTION
        ================================================= */}

        <Box
          component={motion.div}

          variants={itemVariants}

          sx={{
            display: 'flex',

            flexDirection: {
              xs: 'column',
              md: 'row'
            },

            alignItems: 'center',

            gap: {
              xs: 5,
              md: 8
            },

            mb: 8
          }}
        >

          {/* PROFILE IMAGE */}

          <Box
            sx={{
              position: 'relative',

              width: {
                xs: 210,
                sm: 250,
                md: 280
              },

              height: {
                xs: 210,
                sm: 250,
                md: 280
              },

              flexShrink: 0
            }}
          >

            <Box
              component={motion.div}

              animate={{
                rotate: 360
              }}

              transition={{
                duration: 12,

                repeat: Infinity,

                ease: 'linear'
              }}

              sx={{
                position: 'absolute',

                inset: -8,

                borderRadius: '50%',

                border:
                  '2px solid rgba(192,132,252,0.5)',

                borderTopColor: '#C084FC',

                borderBottomColor: '#7B2CBF',

                boxShadow:
                  '0 0 25px rgba(142,45,226,0.35)'
              }}
            />


            <Box
              sx={{
                position: 'absolute',

                inset: -25,

                borderRadius: '50%',

                background:
                  'radial-gradient(circle, rgba(142,45,226,0.28), transparent 65%)',

                filter: 'blur(15px)',

                zIndex: -1
              }}
            />


            <Avatar
              src="/profile.jpeg"

              alt="Nanthini K"

              sx={{
                width: '100%',

                height: '100%',

                border:
                  '5px solid rgba(255,255,255,0.15)',

                boxShadow:
                  '0 15px 45px rgba(0,0,0,0.55)',

                backgroundColor: '#17121f'
              }}
            />

          </Box>


          {/* PROFILE CONTENT */}

          <Box
            sx={{
              flex: 1,

              textAlign: {
                xs: 'center',
                md: 'left'
              }
            }}
          >

            <Chip
              label="WEB DEVELOPER"

              icon={<CodeIcon />}

              sx={{
                mb: 2,

                color: '#E9D5FF',

                background:
                  'rgba(123,44,191,0.22)',

                border:
                  '1px solid rgba(192,132,252,0.45)',

                fontWeight: 700,

                backdropFilter: 'blur(10px)',

                boxShadow:
                  '0 5px 20px rgba(0,0,0,0.25)'
              }}
            />


            <Typography
              variant="h4"

              sx={{
                fontWeight: 800,

                color: '#FFFFFF',

                mb: 1,

                fontSize: {
                  xs: '1.8rem',
                  sm: '2.2rem',
                  md: '2.6rem'
                },

                textShadow:
                  '0 5px 20px rgba(0,0,0,0.6)'
              }}
            >
              Hi, I'm NANTHINI K
            </Typography>


            <Typography
              variant="h5"

              sx={{
                fontWeight: 700,

                mb: 3,

                background:
                  'linear-gradient(135deg, #C084FC, #E9D5FF)',

                WebkitBackgroundClip: 'text',

                WebkitTextFillColor: 'transparent',

                fontSize: {
                  xs: '1.25rem',
                  sm: '1.5rem',
                  md: '1.8rem'
                }
              }}
            >
              Web Developer
            </Typography>


            <Typography
              sx={{
                color:
                  'rgba(255,255,255,0.78)',

                lineHeight: 1.9,

                fontSize: {
                  xs: '0.95rem',
                  md: '1rem'
                },

                mb: 2
              }}
            >
              I am a passionate Web Developer focused on
              creating modern, responsive and user-friendly
              websites using React and JavaScript.
            </Typography>


            <Typography
              sx={{
                color:
                  'rgba(255,255,255,0.68)',

                lineHeight: 1.9,

                fontSize: {
                  xs: '0.95rem',
                  md: '1rem'
                }
              }}
            >
              I enjoy transforming ideas into interactive
              digital experiences and continuously improving
              my skills by learning modern web technologies.
            </Typography>

          </Box>

        </Box>


        {/* =================================================
            CONTACT CARDS
        ================================================= */}

        <Box
          component={motion.div}

          variants={itemVariants}

          sx={{
            mb: 7
          }}
        >

          <Typography
            variant="h5"

            sx={{
              fontWeight: 800,

              color: '#FFFFFF',

              textAlign: 'center',

              mb: 3
            }}
          >
            Get In Touch
          </Typography>


          <Box
            sx={{
              display: 'grid',

              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)'
              },

              gap: 3
            }}
          >

            {contactDetails.map((item, index) => (

              <Card
                key={index}

                sx={{
                  ...glossyCard,

                  height: '100%'
                }}
              >

                <CardContent
                  sx={{
                    position: 'relative',

                    zIndex: 4
                  }}
                >

                  <Stack
                    direction="row"

                    spacing={2}

                    alignItems="center"
                  >

                    <Box
                      sx={{
                        width: 45,

                        height: 45,

                        borderRadius: 2,

                        display: 'flex',

                        alignItems: 'center',

                        justifyContent: 'center',

                        color: '#C084FC',

                        background:
                          'rgba(123,44,191,0.20)',

                        border:
                          '1px solid rgba(192,132,252,0.30)',

                        boxShadow:
                          'inset 0 1px 2px rgba(255,255,255,0.12)'
                      }}
                    >
                      {item.icon}
                    </Box>


                    <Box>

                      <Typography
                        sx={{
                          color:
                            'rgba(255,255,255,0.58)',

                          fontSize: '0.8rem',

                          mb: 0.3
                        }}
                      >
                        {item.label}
                      </Typography>


                      {item.link ? (

                        <Typography
                          component="a"

                          href={item.link}

                          sx={{
                            color: '#FFFFFF',

                            textDecoration: 'none',

                            fontWeight: 600,

                            fontSize: {
                              xs: '0.85rem',
                              sm: '0.9rem'
                            },

                            '&:hover': {
                              color: '#C084FC'
                            }
                          }}
                        >
                          {item.value}
                        </Typography>

                      ) : (

                        <Typography
                          sx={{
                            color: '#FFFFFF',

                            fontWeight: 600,

                            fontSize: '0.9rem'
                          }}
                        >
                          {item.value}
                        </Typography>

                      )}

                    </Box>

                  </Stack>

                </CardContent>

              </Card>

            ))}

          </Box>

        </Box>


        {/* =================================================
            DEVELOPMENT FOCUS
        ================================================= */}

        <Box
          component={motion.div}

          variants={itemVariants}

          sx={{
            mb: 7
          }}
        >

          <Typography
            variant="h5"

            sx={{
              fontWeight: 800,

              color: '#FFFFFF',

              textAlign: 'center',

              mb: 3
            }}
          >
            My Development Focus
          </Typography>


          <Box
            sx={{
              display: 'grid',

              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)'
              },

              gap: 3
            }}
          >

            {developmentFocus.map((item, index) => (

              <Card
                key={index}

                sx={{
                  ...glossyCard,

                  height: '100%'
                }}
              >

                <CardContent
                  sx={{
                    position: 'relative',

                    zIndex: 4,

                    textAlign: 'center',

                    p: 3
                  }}
                >

                  <Box
                    sx={{
                      width: 55,

                      height: 55,

                      mx: 'auto',

                      mb: 2,

                      borderRadius: '50%',

                      display: 'flex',

                      alignItems: 'center',

                      justifyContent: 'center',

                      color: '#C084FC',

                      background:
                        'rgba(123,44,191,0.20)',

                      border:
                        '1px solid rgba(192,132,252,0.30)',

                      boxShadow:
                        '0 0 20px rgba(123,44,191,0.18), inset 0 1px 2px rgba(255,255,255,0.12)'
                    }}
                  >
                    {item.icon}
                  </Box>


                  <Typography
                    sx={{
                      color: '#FFFFFF',

                      fontWeight: 700,

                      mb: 1
                    }}
                  >
                    {item.title}
                  </Typography>


                  <Typography
                    sx={{
                      color:
                        'rgba(255,255,255,0.65)',

                      fontSize: '0.88rem',

                      lineHeight: 1.6
                    }}
                  >
                    {item.description}
                  </Typography>

                </CardContent>

              </Card>

            ))}

          </Box>

        </Box>


        {/* =================================================
            CURRENTLY LEARNING
        ================================================= */}

        <Box
          component={motion.div}

          variants={itemVariants}

          sx={{
            mb: 7
          }}
        >

          <Card
            sx={{
              ...glossyCard
            }}
          >

            <CardContent
              sx={{
                position: 'relative',

                zIndex: 4,

                p: {
                  xs: 3,
                  md: 5
                }
              }}
            >

              <Stack
                direction="row"

                alignItems="center"

                spacing={2}

                sx={{
                  mb: 3
                }}
              >

                <Box
                  sx={{
                    width: 48,

                    height: 48,

                    borderRadius: 2,

                    display: 'flex',

                    alignItems: 'center',

                    justifyContent: 'center',

                    color: '#C084FC',

                    background:
                      'rgba(123,44,191,0.20)',

                    border:
                      '1px solid rgba(192,132,252,0.30)',

                    boxShadow:
                      'inset 0 1px 2px rgba(255,255,255,0.12)'
                  }}
                >
                  <RocketLaunchIcon />
                </Box>


                <Typography
                  variant="h5"

                  sx={{
                    color: '#FFFFFF',

                    fontWeight: 800
                  }}
                >
                  Currently Learning
                </Typography>

              </Stack>


              <Box
                sx={{
                  display: 'flex',

                  flexWrap: 'wrap',

                  gap: 1.5
                }}
              >

                {learningItems.map((item, index) => (

                  <Chip
                    key={index}

                    label={item}

                    sx={{
                      color: '#E9D5FF',

                      background:
                        'rgba(123,44,191,0.20)',

                      border:
                        '1px solid rgba(192,132,252,0.30)',

                      fontWeight: 600,

                      transition:
                        'all 0.25s ease',

                      '&:hover': {
                        background:
                          'rgba(123,44,191,0.32)',

                        borderColor:
                          'rgba(192,132,252,0.55)'
                      }
                    }}
                  />

                ))}

              </Box>

            </CardContent>

          </Card>

        </Box>


        {/* =================================================
            LAST CARD
            Same glossy style
        ================================================= */}

        <Box
          component={motion.div}

          variants={itemVariants}

          sx={{
            textAlign: 'center',

            mb: 4
          }}
        >

          <Card
            sx={{
              ...glossyCard
            }}
          >

            <CardContent
              sx={{
                position: 'relative',

                zIndex: 4,

                py: {
                  xs: 4,
                  md: 5
                },

                px: {
                  xs: 3,
                  md: 6
                }
              }}
            >

              <LightbulbIcon
                sx={{
                  fontSize: 40,

                  color: '#C084FC',

                  mb: 1,

                  filter:
                    'drop-shadow(0 0 10px rgba(192,132,252,0.45))'
                }}
              />


              <Typography
                variant="h5"

                sx={{
                  color: '#FFFFFF',

                  fontWeight: 800,

                  mb: 1.5
                }}
              >
                Let's Build Something Amazing
              </Typography>


              <Typography
                sx={{
                  color:
                    'rgba(255,255,255,0.68)',

                  maxWidth: 700,

                  mx: 'auto',

                  lineHeight: 1.8,

                  mb: 3
                }}
              >
                I'm always excited to work on new projects,
                learn new technologies and create meaningful
                digital experiences.
              </Typography>


              <Button
                component={Link}

                to="/contact"

                variant="contained"

                startIcon={<EmailIcon />}

                sx={{
                  px: 3.5,

                  py: 1.2,

                  borderRadius: 3,

                  textTransform: 'none',

                  fontWeight: 700,

                  color: '#FFFFFF',

                  background:
                    'linear-gradient(135deg, #7B2CBF, #9D4EDD)',

                  boxShadow:
                    '0 8px 25px rgba(123,44,191,0.35)',

                  '&:hover': {
                    background:
                      'linear-gradient(135deg, #9D4EDD, #7B2CBF)',

                    boxShadow:
                      '0 10px 30px rgba(123,44,191,0.5)',

                    transform:
                      'translateY(-2px)'
                  }
                }}
              >
                Contact Me
              </Button>

            </CardContent>

          </Card>

        </Box>

      </Box>

    </Box>
  )
}

export default About