import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import {
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  Chip
} from '@mui/material'

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import DownloadIcon from '@mui/icons-material/Download'
import CodeIcon from '@mui/icons-material/Code'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
}

function Home() {

  // ================= TYPING ANIMATION =================

  const typingTexts = [
    'Web Developer',
    'Turning ideas into digital realities',
    'Building responsive websites'
  ]

  const [textIndex, setTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = typingTexts[textIndex]

    let speed = isDeleting ? 45 : 90

    // Pause after completing the text
    if (!isDeleting && displayText === currentText) {
      speed = 1500
    }

    const timer = setTimeout(() => {

      if (!isDeleting) {

        // Type one letter
        setDisplayText(
          currentText.substring(
            0,
            displayText.length + 1
          )
        )

        // Start deleting after full text
        if (displayText === currentText) {
          setIsDeleting(true)
        }

      } else {

        // Delete one letter
        setDisplayText(
          currentText.substring(
            0,
            displayText.length - 1
          )
        )

        // Move to next text
        if (displayText === '') {
          setIsDeleting(false)

          setTextIndex(
            (prevIndex) =>
              (prevIndex + 1) % typingTexts.length
          )
        }
      }

    }, speed)

    return () => clearTimeout(timer)

  }, [displayText, isDeleting, textIndex])

  return (
    <Box
      sx={{
        minHeight: '100vh',
        boxSizing: 'border-box',

        // Dark glossy overlay + background image
        backgroundImage:
          "linear-gradient(135deg, rgba(3,3,7,0.72), rgba(12,6,20,0.62), rgba(3,3,7,0.72)), url('/heroimg.png')",

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: {
          xs: 'scroll',
          md: 'fixed'
        },

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        overflow: 'hidden',
        position: 'relative',

        py: {
          xs: 10,
          md: 6
        },

        // Glossy layer
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

      {/* ================= PURPLE ANIMATED GLOW ================= */}

      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.12, 0.22, 0.12]
        }}
        transition={{
          duration: 6,
          repeat: Infinity
        }}
        sx={{
          position: 'absolute',

          width: {
            xs: 150,
            md: 300
          },

          height: {
            xs: 150,
            md: 300
          },

          borderRadius: '50%',

          background:
            'linear-gradient(135deg, #C084FC, #8E2DE2)',

          filter: 'blur(70px)',

          bottom: {
            xs: '5%',
            md: '8%'
          },

          right: {
            xs: '-70px',
            md: '8%'
          }
        }}
      />

      {/* ================= MAIN CONTAINER ================= */}

      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        sx={{
          position: 'relative',
          zIndex: 2,

          width: '92%',
          maxWidth: '1150px',

          mx: 'auto',

          display: 'flex',

          flexDirection: {
            xs: 'column',
            md: 'row'
          },

          alignItems: 'center',
          justifyContent: 'center',

          gap: {
            xs: 6,
            md: 10
          }
        }}
      >

        {/* ================= PROFILE IMAGE ================= */}

        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{
            width: {
              xs: '100%',
              md: '42%'
            },

            display: 'flex',
            justifyContent: 'center',

            position: 'relative'
          }}
        >

          {/* Purple glow behind image */}

          <Box
            component={motion.div}
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.20, 0.32, 0.20]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            sx={{
              position: 'absolute',

              width: {
                xs: 200,
                sm: 240,
                md: 300
              },

              height: {
                xs: 200,
                sm: 240,
                md: 300
              },

              borderRadius: '50%',

              background:
                'linear-gradient(135deg, #C084FC, #8E2DE2)',

              filter: 'blur(40px)'
            }}
          />

          {/* Floating glass card */}

          <Box
            component={motion.div}
            animate={{
              x: [0, 12, 0, -12, 0],
              y: [0, -8, 0, 8, 0],
              rotate: [8, 12, 8, 4, 8]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            sx={{
              position: 'absolute',

              width: {
                xs: 155,
                sm: 195,
                md: 235
              },

              height: {
                xs: 155,
                sm: 195,
                md: 235
              },

              borderRadius: '27px',

              background:
                'linear-gradient(135deg, rgba(255,255,255,0.10), rgba(126,34,206,0.28), rgba(10,8,15,0.65))',

              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',

              border:
                '1px solid rgba(255,255,255,0.12)',

              opacity: 0.9,

              zIndex: 0,

              top: {
                xs: '3%',
                md: '5%'
              },

              right: {
                xs: '18%',
                md: '10%'
              },

              boxShadow:
                '0 15px 35px rgba(0,0,0,0.55), inset 0 1px 1px rgba(255,255,255,0.12)'
            }}
          />

          {/* Main profile image */}

          <Box
            component={motion.div}
            animate={{
              y: [0, -12, 0],
              rotate: [-1, 1, -1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              y: -6
            }}
            sx={{
              position: 'relative',

              p: '6px',

              borderRadius: '32px',

              background:
                'linear-gradient(135deg, #8E2DE2, #C084FC, #6A11CB)',

              boxShadow:
                '0 15px 35px rgba(0,0,0,0.55), inset 0 1px 1px rgba(255,255,255,0.25)',

              transition:
                'box-shadow 0.3s ease',

              zIndex: 2,

              '&:hover': {
                boxShadow:
                  '0 20px 45px rgba(142,45,226,0.45), inset 0 1px 1px rgba(255,255,255,0.30)'
              }
            }}
          >

            <Box
              component="img"
              src="/profile.jpeg"
              alt="Nanthini K"
              sx={{
                display: 'block',

                width: {
                  xs: 180,
                  sm: 220,
                  md: 260
                },

                height: {
                  xs: 180,
                  sm: 220,
                  md: 260
                },

                objectFit: 'cover',

                borderRadius: '27px'
              }}
            />

          </Box>

        </Box>

        {/* ================= CONTENT ================= */}

        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{
            width: {
              xs: '100%',
              md: '58%'
            },

            textAlign: {
              xs: 'center',
              md: 'left'
            }
          }}
        >

          {/* ================= BADGE ================= */}

          <Chip
            icon={<CodeIcon />}
            label="WEBSITE DEVELOPER"
            sx={{
              mb: 2,

              color: '#D8B4FE',

              background:
                'rgba(142,45,226,0.15)',

              border:
                '1px solid rgba(192,132,252,0.30)',

              fontWeight: 700,

              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',

              boxShadow:
                '0 8px 20px rgba(0,0,0,0.30)',

              '& .MuiChip-icon': {
                color: '#C084FC'
              }
            }}
          />

          {/* ================= NAME ================= */}

          <Typography
            component={motion.h1}
            variants={itemVariants}
            sx={{
              color: '#FFFFFF',

              fontSize: {
                xs: '2.5rem',
                sm: '3.5rem',
                md: '4.2rem'
              },

              fontWeight: 800,

              lineHeight: 1.1,

              letterSpacing: {
                xs: '0.5px',
                md: '1px'
              },

              mb: 1,

              textShadow:
                '0 5px 25px rgba(0,0,0,0.45)'
            }}
          >
            NANTHINI K
          </Typography>

          {/* ================= TYPING ROLE + PHRASES ================= */}

          <Box
            component={motion.div}
            variants={itemVariants}
            sx={{
              minHeight: {
                xs: '42px',
                sm: '46px',
                md: '52px'
              },

              mb: 2,

              display: 'flex',

              justifyContent: {
                xs: 'center',
                md: 'flex-start'
              },

              alignItems: 'center',

              overflow: 'hidden',

              width: '100%'
            }}
          >

            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: '1.35rem',
                  sm: '1.7rem',
                  md: '2rem'
                },

                fontWeight: 700,

                lineHeight: 1.3,

                background:
                  'linear-gradient(135deg, #C084FC, #E9D5FF)',

                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',

                filter:
                  'drop-shadow(0 5px 15px rgba(142,45,226,0.25))',

                whiteSpace: {
                  xs: 'normal',
                  md: 'nowrap'
                }
              }}
            >

              {displayText}

              {/* Blinking Cursor */}

              <Box
                component="span"
                sx={{
                  display: 'inline-block',

                  width: '2px',

                  height: '1.1em',

                  ml: '5px',

                  verticalAlign: 'middle',

                  backgroundColor: '#C084FC',

                  animation:
                    'blink 0.8s infinite',

                  '@keyframes blink': {

                    '0%, 50%': {
                      opacity: 1
                    },

                    '51%, 100%': {
                      opacity: 0
                    }

                  }
                }}
              />

            </Typography>

          </Box>

          {/* ================= DESCRIPTION ================= */}

          <Typography
            component={motion.p}
            variants={itemVariants}
            sx={{
              color: '#D1CDD8',

              fontSize: {
                xs: '1rem',
                md: '1.1rem'
              },

              lineHeight: 1.8,

              maxWidth: '620px',

              mb: 3,

              mx: {
                xs: 'auto',
                md: 0
              }
            }}
          >
            I build modern, user-friendly and interactive
            web applications using React and JavaScript.
            I enjoy creating clean and engaging digital
            experiences.
          </Typography>

          {/* ================= BUTTONS ================= */}

          <Stack
            component={motion.div}
            variants={itemVariants}
            direction={{
              xs: 'column',
              sm: 'row'
            }}
            spacing={2}
            sx={{
              alignItems: {
                xs: 'center',
                md: 'flex-start'
              },

              mb: 3
            }}
          >

            {/* Resume */}

            <Button
  variant="contained"
  component="a"
  href="/Nanthini Resume.pdf"
  download="Nanthini Resume.pdf"
  startIcon={<DownloadIcon />}
  sx={{
    minWidth: {
      xs: '210px',
      sm: 'auto'
    },

    borderRadius: '30px',

    px: 3,
    py: 1.3,

    fontWeight: 700,

    background:
      'linear-gradient(135deg, #8E2DE2, #A855F7)',

    boxShadow:
      '0 8px 25px rgba(142,45,226,0.35), inset 0 1px 1px rgba(255,255,255,0.18)',

    transition:
      'all 0.3s ease',

    '&:hover': {
      transform:
        'translateY(-4px)',

      boxShadow:
        '0 14px 35px rgba(142,45,226,0.50)',

      background:
        'linear-gradient(135deg, #7B1FA2, #8E2DE2)'
    }
  }}
>
  Download Resume
</Button>

            {/* Projects */}

            <Button
              variant="outlined"
              component={Link}
              to="/projects"
              endIcon={<ArrowForwardIcon />}
              sx={{
                minWidth: {
                  xs: '210px',
                  sm: 'auto'
                },

                borderRadius: '30px',

                px: 3,
                py: 1.3,

                color: '#E9D5FF',

                border:
                  '2px solid rgba(192,132,252,0.65)',

                fontWeight: 700,

                background:
                  'rgba(255,255,255,0.04)',

                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter:
                  'blur(10px)',

                boxShadow:
                  '0 8px 20px rgba(0,0,0,0.30), inset 0 1px 1px rgba(255,255,255,0.08)',

                transition:
                  'all 0.3s ease',

                '&:hover': {
                  border:
                    '2px solid #C084FC',

                  color: '#FFFFFF',

                  backgroundColor:
                    'rgba(142,45,226,0.20)',

                  transform:
                    'translateY(-4px)',

                  boxShadow:
                    '0 12px 30px rgba(142,45,226,0.30)'
                }
              }}
            >
              My Projects
            </Button>

          </Stack>

          {/* ================= SOCIAL ICONS ================= */}

          <Box
            component={motion.div}
            variants={itemVariants}
            sx={{
              width: '100%',

              display: 'flex',

              justifyContent: {
                xs: 'center',
                md: 'flex-start'
              },

              alignItems: 'center',

              mt: 1
            }}
          >

            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              sx={{
                width: 'fit-content',
                flexWrap: 'nowrap'
              }}
            >

              {/* ================= EMAIL ================= */}

              <IconButton
                component="a"
                href="mailto:nanthini23.k@gmail.com"
                aria-label="Email"
                sx={{
                  width: 48,
                  height: 48,

                  minWidth: 48,
                  minHeight: 48,

                  padding: 0,
                  flexShrink: 0,

                  color: '#D8B4FE',

                  background:
                    'rgba(255,255,255,0.07)',

                  backdropFilter:
                    'blur(12px)',

                  WebkitBackdropFilter:
                    'blur(12px)',

                  border:
                    '1px solid rgba(255,255,255,0.12)',

                  boxShadow:
                    '0 8px 20px rgba(0,0,0,0.40), inset 0 1px 1px rgba(255,255,255,0.08)',

                  transition:
                    'all 0.3s ease',

                  '&:hover': {
                    color: '#FFFFFF',
                    background: '#8E2DE2',
                    transform:
                      'translateY(-5px)'
                  }
                }}
              >
                <EmailIcon />
              </IconButton>

              {/* ================= LINKEDIN ================= */}

              <IconButton
                component="a"
                href="https://www.linkedin.com/in/nanthini-maheswaran/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                sx={{
                  width: 48,
                  height: 48,

                  minWidth: 48,
                  minHeight: 48,

                  padding: 0,
                  flexShrink: 0,

                  color: '#D8B4FE',

                  background:
                    'rgba(255,255,255,0.07)',

                  backdropFilter:
                    'blur(12px)',

                  WebkitBackdropFilter:
                    'blur(12px)',

                  border:
                    '1px solid rgba(255,255,255,0.12)',

                  boxShadow:
                    '0 8px 20px rgba(0,0,0,0.40), inset 0 1px 1px rgba(255,255,255,0.08)',

                  transition:
                    'all 0.3s ease',

                  '&:hover': {
                    color: '#FFFFFF',
                    background: '#8E2DE2',
                    transform:
                      'translateY(-5px)'
                  }
                }}
              >
                <LinkedInIcon />
              </IconButton>

              {/* ================= GITHUB ================= */}

              <IconButton
                component="a"
                href="https://github.com/nanthini23k"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                sx={{
                  width: 48,
                  height: 48,

                  minWidth: 48,
                  minHeight: 48,

                  padding: 0,
                  flexShrink: 0,

                  color: '#D8B4FE',

                  background:
                    'rgba(255,255,255,0.07)',

                  backdropFilter:
                    'blur(12px)',

                  WebkitBackdropFilter:
                    'blur(12px)',

                  border:
                    '1px solid rgba(255,255,255,0.12)',

                  boxShadow:
                    '0 8px 20px rgba(0,0,0,0.40), inset 0 1px 1px rgba(255,255,255,0.08)',

                  transition:
                    'all 0.3s ease',

                  '&:hover': {
                    color: '#FFFFFF',
                    background: '#8E2DE2',
                    transform:
                      'translateY(-5px)'
                  }
                }}
              >
                <GitHubIcon />
              </IconButton>

              {/* ================= INSTAGRAM ================= */}

              <IconButton
                component="a"
                href="#"
                aria-label="Instagram"
                sx={{
                  width: 48,
                  height: 48,

                  minWidth: 48,
                  minHeight: 48,

                  padding: 0,
                  flexShrink: 0,

                  color: '#D8B4FE',

                  background:
                    'rgba(255,255,255,0.07)',

                  backdropFilter:
                    'blur(12px)',

                  WebkitBackdropFilter:
                    'blur(12px)',

                  border:
                    '1px solid rgba(255,255,255,0.12)',

                  boxShadow:
                    '0 8px 20px rgba(0,0,0,0.40), inset 0 1px 1px rgba(255,255,255,0.08)',

                  transition:
                    'all 0.3s ease',

                  '&:hover': {
                    color: '#FFFFFF',
                    background: '#8E2DE2',
                    transform:
                      'translateY(-5px)'
                  }
                }}
              >
                <InstagramIcon />
              </IconButton>

            </Stack>

          </Box>

        </Box>

      </Box>

    </Box>
  )
}

export default Home