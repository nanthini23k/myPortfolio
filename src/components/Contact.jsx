
import React, { useState } from 'react'
import { motion } from 'framer-motion'

import {
  Box,
  Typography,
  Card,
  TextField,
  Button,
  IconButton,
  Stack
} from '@mui/material'

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import CallIcon from '@mui/icons-material/Call'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import SendIcon from '@mui/icons-material/Send'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})

  // ================= WHATSAPP SUBMIT =================

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}

    // NAME VALIDATION
    const trimmedName = name.trim()

    if (!trimmedName) {
      newErrors.name = 'Name is required'
    } else if (trimmedName.length < 3) {
      newErrors.name = 'Name must contain at least 3 characters'
    } else if (trimmedName.length > 50) {
      newErrors.name = 'Name cannot exceed 50 characters'
    } else if (
      !/^[\p{L}\p{M}]+(?:[ '-][\p{L}\p{M}]+)*$/u.test(trimmedName)
    ) {
      newErrors.name = 'Enter a valid name without numbers or symbols'
    }

    // EMAIL VALIDATION
    const trimmedEmail = email.trim()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

    if (!trimmedEmail) {
      newErrors.email = 'Email is required'
    } else if (
      trimmedEmail.length > 254 ||
      !emailPattern.test(trimmedEmail)
    ) {
      newErrors.email = 'Enter a valid email address'
    }

    // MESSAGE VALIDATION
    const trimmedMessage = message.trim()

    if (!trimmedMessage) {
      newErrors.message = 'Message is required'
    } else if (trimmedMessage.length < 10) {
      newErrors.message = 'Message must contain at least 10 characters'
    } else if (trimmedMessage.length > 1000) {
      newErrors.message = 'Message cannot exceed 1000 characters'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      return
    }

    // IMPORTANT: Replace with your WhatsApp number
    // Example: 919876543210
    const whatsappNumber = '918637676850'

    const whatsappMessage = `Hello Nanthini,

Name: ${trimmedName}
Email: ${trimmedEmail}

Message:
${trimmedMessage}`

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`

    window.open(whatsappURL, '_blank', 'noopener,noreferrer')
  }

  // ================= CONTACT DETAILS =================

  const contactDetails = [
    {
      icon: <CallIcon />,
      title: 'Call Me',
      value: '+91 8637676850',
      link: 'tel:+918637676850'
    },
    {
      icon: <EmailIcon />,
      title: 'Email Me',
      value: 'nanthini23.k@gmail.com',
      link: 'mailto:nanthini23.k@gmail.com'
    },
    {
      icon: <LocationOnIcon />,
      title: 'Location',
      value: 'Mayiladuthurai, Tamil Nadu',
      link: null
    }
  ]

  // ================= ANIMATION =================

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
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  // ================= GLOSSY CARD STYLE =================

  const glossyCard = {
    position: 'relative',
    overflow: 'hidden',

    background:
      'linear-gradient(135deg, rgba(123,44,191,0.25), rgba(255,255,255,0.035))',

    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',

    border: '1px solid rgba(192,132,252,0.30)',

    boxShadow: '0 15px 45px rgba(0,0,0,0.30)',

    transition: 'all 0.35s ease',

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
      transform: 'translateY(-7px)',
      borderColor: 'rgba(192,132,252,0.48)',

      boxShadow:
        '0 18px 45px rgba(0,0,0,0.42), 0 0 25px rgba(142,45,226,0.18), inset 0 1px 1px rgba(255,255,255,0.15)',

      '&::before': {
        left: '130%'
      }
    }
  }

  // ================= SOCIAL ICON STYLE =================

  const socialIconStyle = {
    color: '#C084FC',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(192,132,252,0.18)',
    boxShadow: '0 5px 15px rgba(0,0,0,0.20)',
    transition: 'all 0.3s ease',

    '&:hover': {
      color: '#FFFFFF',
      background: '#8E2DE2',
      transform: 'translateY(-5px)',
      boxShadow: '0 0 20px rgba(142,45,226,0.35)'
    }
  }

  // ================= TEXT FIELD STYLE =================

  const textFieldStyle = {
    mb: 2,

    '& .MuiInputLabel-root': {
      color: '#A9A1B8'
    },

    '& .MuiInputLabel-root.Mui-focused': {
      color: '#C084FC'
    },

    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      color: '#F5F3FF',
      background: 'rgba(255,255,255,0.035)',

      '& fieldset': {
        borderColor: 'rgba(192,132,252,0.22)'
      },

      '&:hover fieldset': {
        borderColor: 'rgba(192,132,252,0.40)'
      },

      '&.Mui-focused fieldset': {
        borderColor: '#8E2DE2',
        borderWidth: '2px'
      }
    },

    '& .MuiFormHelperText-root': {
      mx: 0,
      mt: 0.7
    }
  }

  // ================= FIELD ERROR CLEARING =================

  const handleFieldChange = (field, setter) => (e) => {
    setter(e.target.value)

    setErrors((prev) => ({
      ...prev,
      [field]: ''
    }))
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',

        backgroundImage:
          "linear-gradient(135deg, rgba(3,3,7,0.72), rgba(12,6,20,0.62), rgba(3,3,7,0.72)), url('/plainImage.png')",

        backgroundSize: 'cover',
        backgroundPosition: 'center',

        backgroundAttachment: {
          xs: 'scroll',
          md: 'fixed'
        },

        pt: {
          xs: 8,
          md: 9
        },

        pb: {
          xs: 6,
          md: 8
        },

        px: {
          xs: 2,
          sm: 3,
          md: 5
        },

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
      {/* ================= PURPLE GLOW ================= */}

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
            xs: 70,
            md: 80
          },
          transform: 'translateX(-50%)',
          pointerEvents: 'none'
        }}
      />

      {/* ================= PAGE TITLE ================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: -25
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.7
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
            textShadow: '0 0 20px rgba(192,132,252,0.18)',
            display: 'table',
            mx: 'auto',
            position: 'relative'
          }}
        >
          Contact Me
        </Typography>

        {/* TITLE LINE */}

        <Box
          sx={{
            width: 70,
            height: 4,
            mx: 'auto',
            mt: 1,
            borderRadius: '10px',

            background:
              'linear-gradient(90deg, #8E2DE2, #C084FC, #8E2DE2)',

            boxShadow: '0 0 15px rgba(142,45,226,0.5)'
          }}
        />

        <Typography
          sx={{
            textAlign: 'center',
            color: '#B8B2C8',
            mt: 2,
            mb: {
              xs: 4,
              md: 6
            },
            fontSize: {
              xs: '0.9rem',
              md: '1rem'
            }
          }}
        >
          Feel free to get in touch with me
        </Typography>
      </motion.div>

      {/* ================= MAIN CONTENT ================= */}

      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15
        }}
        sx={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1050px',
          mx: 'auto',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',

          gap: {
            xs: 3,
            md: 5
          },

          flexDirection: {
            xs: 'column',
            md: 'row'
          }
        }}
      >
        {/* ================= LEFT SIDE ================= */}

        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{
            width: {
              xs: '100%',
              md: '45%'
            },
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}
        >
          {/* CONTACT CARDS */}

          {contactDetails.map((detail, index) => (
            <Card
              key={index}
              component={motion.div}
              whileHover={{
                y: -6,
                x: 4
              }}
              sx={{
                ...glossyCard,
                display: 'flex',
                alignItems: 'center',
                gap: 2,

                p: {
                  xs: 2,
                  sm: 2.5
                },

                borderRadius: '20px'
              }}
            >
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  minWidth: 52,
                  borderRadius: '50%',

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                  color: '#C084FC',
                  background: 'rgba(142,45,226,0.14)',

                  border: '1px solid rgba(192,132,252,0.25)',

                  boxShadow: '0 0 18px rgba(142,45,226,0.12)'
                }}
              >
                {detail.icon}
              </Box>

              <Box sx={{ minWidth: 0 }}>
                <Typography
                  sx={{
                    fontWeight: 800,
                    color: '#F5F3FF',
                    fontSize: '1rem',
                    mb: 0.5
                  }}
                >
                  {detail.title}
                </Typography>

                {detail.link ? (
                  <Typography
                    component="a"
                    href={detail.link}
                    sx={{
                      color: '#B8B2C8',
                      fontSize: {
                        xs: '0.85rem',
                        sm: '0.95rem'
                      },
                      wordBreak: 'break-word',
                      textDecoration: 'none',

                      '&:hover': {
                        color: '#C084FC'
                      }
                    }}
                  >
                    {detail.value}
                  </Typography>
                ) : (
                  <Typography
                    sx={{
                      color: '#B8B2C8',
                      fontSize: {
                        xs: '0.85rem',
                        sm: '0.95rem'
                      },
                      wordBreak: 'break-word'
                    }}
                  >
                    {detail.value}
                  </Typography>
                )}
              </Box>
            </Card>
          ))}

          {/* ================= SOCIAL MEDIA ================= */}

          <Card
            component={motion.div}
            variants={itemVariants}
            sx={{
              ...glossyCard,
              p: 2.5,
              borderRadius: '20px'
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                color: '#F5F3FF',
                mb: 2,
                textAlign: {
                  xs: 'center',
                  md: 'left'
                }
              }}
            >
              Connect With Me
            </Typography>

            <Stack
              direction="row"
              spacing={1.5}
              justifyContent={{
                xs: 'center',
                md: 'flex-start'
              }}
            >
              {/* LINKEDIN */}

              <IconButton
                component="a"
                href="https://www.linkedin.com/in/nanthini-maheswaran/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                sx={socialIconStyle}
              >
                <LinkedInIcon />
              </IconButton>

              {/* GITHUB */}

              <IconButton
                component="a"
                href="https://github.com/nanthini23k"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                sx={socialIconStyle}
              >
                <GitHubIcon />
              </IconButton>

              {/* INSTAGRAM */}

              <IconButton
                component="a"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                sx={socialIconStyle}
              >
                <InstagramIcon />
              </IconButton>

              {/* EMAIL */}

              <IconButton
                component="a"
                href="mailto:nanthini23.k@gmail.com"
                aria-label="Send email"
                sx={socialIconStyle}
              >
                <EmailIcon />
              </IconButton>
            </Stack>
          </Card>
        </Box>

        {/* ================= RIGHT SIDE - CONTACT FORM ================= */}

        <Card
          component={motion.div}
          variants={itemVariants}
          sx={{
            ...glossyCard,

            width: {
              xs: '100%',
              md: '55%'
            },

            borderRadius: '22px',

            p: {
              xs: 2.5,
              sm: 3.5,
              md: 4
            },

            boxSizing: 'border-box'
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: '1.4rem',
                md: '1.7rem'
              },

              fontWeight: 800,
              color: '#F5F3FF',
              mb: 3,

              textShadow: '0 0 15px rgba(192,132,252,0.12)'
            }}
          >
            Send Me a Message
          </Typography>

          {/* ================= CONTACT FORM ================= */}

          <Box component="form" onSubmit={handleSubmit} noValidate>
            {/* NAME */}

            <TextField
              fullWidth
              required
              name="name"
              label="Your Name"
              autoComplete="name"
              inputProps={{ maxLength: 50 }}
              value={name}
              onChange={handleFieldChange('name', setName)}
              error={Boolean(errors.name)}
              helperText={errors.name || ' '}
              sx={textFieldStyle}
            />

            {/* EMAIL */}

            <TextField
              fullWidth
              required
              name="email"
              type="email"
              label="Your Email"
              autoComplete="email"
              inputProps={{ maxLength: 254 }}
              value={email}
              onChange={handleFieldChange('email', setEmail)}
              error={Boolean(errors.email)}
              helperText={errors.email || ' '}
              sx={textFieldStyle}
            />

            {/* MESSAGE */}

            <TextField
              fullWidth
              required
              name="message"
              label="Your Message"
              multiline
              rows={5}
              inputProps={{ maxLength: 1000 }}
              value={message}
              onChange={handleFieldChange('message', setMessage)}
              error={Boolean(errors.message)}
              helperText={
                errors.message ||
                `${message.length}/1000 characters`
              }
              sx={{
                ...textFieldStyle,
                mb: 2.5
              }}
            />

            {/* SEND BUTTON */}

            <Button
              fullWidth
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                borderRadius: '25px',
                py: 1.3,
                fontWeight: 700,
                fontSize: '1rem',
                color: '#FFFFFF',

                background:
                  'linear-gradient(135deg, #8E2DE2, #C084FC)',

                boxShadow: '0 8px 20px rgba(142,45,226,0.20)',

                transition: 'all 0.3s ease',

                '&:hover': {
                  transform: 'translateY(-3px)',

                  background:
                    'linear-gradient(135deg, #7B1FA2, #8E2DE2)',

                  boxShadow:
                    '0 12px 28px rgba(142,45,226,0.30)'
                }
              }}
            >
              Send Message
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  )
}

export default Contact
