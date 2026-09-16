import React from 'react'
import { motion } from 'framer-motion'

import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip
} from '@mui/material'

import SchoolIcon from '@mui/icons-material/School'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import CodeIcon from '@mui/icons-material/Code'

import DevicesIcon from '@mui/icons-material/Devices'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'


function Qualification() {

  // ==================================================
  // EDUCATION
  // ==================================================

  const education = [

    {
      name: 'Under Graduate',
      course: 'B.E Computer Science',
      institute: 'Arasu Engineering College, Kumbakonam',
      yop: '2013 - 2017',
      score: 'CGPA: 7.4',
      icon: <SchoolIcon />
    },

    {
      name: 'SSLC & HSC',
      course: 'Maths & Biology',
      institute: 'Minerva Higher Secondary School',
      yop: '2010 - 2013',
      score: 'HSC: 74%',
      icon: <MenuBookIcon />
    }

  ]


  // ==================================================
  // CORE SUBJECTS
  // ==================================================

  const subjects = [

    'Data Structures',
    'Object Oriented Programming',
    'Database Management Systems',
    'Operating Systems',
    'Computer Networks',
    'Computer Architecture',
    'Software Engineering',
    'Web Technologies',
    'Computer Graphics'

  ]


  // ==================================================
  // SKILLS - CORE TECHNOLOGIES
  // ==================================================

  const coreSkills = [

    {
      name: 'C',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
    },

    {
      name: 'HTML5',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },

    {
      name: 'CSS3',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },

    {
      name: 'JavaScript',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },

    {
      name: 'React',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    }

  ]


  // ==================================================
  // SKILLS - TOOLS
  // ==================================================

  const tools = [

    {
      name: 'GitHub',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },

    {
      name: 'Material UI',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'
    },

    {
      name: 'Vite',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg'
    },

    {
      name: 'VS Code',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
    }

  ]


  // ==================================================
  // SKILLS - DESIGN
  // RESPONSIVE + UI + ANIMATION ONLY
  // ==================================================

  const designSkills = [

    {
      name: 'Responsive Design',
      icon: <DevicesIcon />
    },

    {
      name: 'UI Design',
      icon: <DesignServicesIcon />
    },

    {
      name: 'Web Animation',
      icon: <AutoAwesomeIcon />
    }

  ]


  // ==================================================
  // ANIMATION VARIANTS
  // ==================================================

  const containerVariants = {

    hidden: {
      opacity: 0
    },

    visible: {

      opacity: 1,

      transition: {
        staggerChildren: 0.12
      }

    }

  }


  const itemVariants = {

    hidden: {
      opacity: 0,
      y: 35
    },

    visible: {

      opacity: 1,
      y: 0,

      transition: {
        duration: 0.65,
        ease: 'easeOut'
      }

    }

  }


  // ==================================================
  // EDUCATION LEFT ANIMATION
  // ==================================================

  const leftCardVariants = {

    hidden: {
      opacity: 0,
      x: -90,
      scale: 0.94
    },

    visible: {

      opacity: 1,
      x: 0,
      scale: 1,

      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }

    }

  }


  // ==================================================
  // EDUCATION RIGHT ANIMATION
  // ==================================================

  const rightCardVariants = {

    hidden: {
      opacity: 0,
      x: 90,
      scale: 0.94
    },

    visible: {

      opacity: 1,
      x: 0,
      scale: 1,

      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }

    }

  }


  // ==================================================
  // GLOSSY CARD STYLE
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

    borderRadius: '20px',

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


  // ==================================================
  // SKILL CARD COMPONENT STYLE
  // ==================================================

  const skillCard = {

    width: {
      xs: 125,
      sm: 140,
      md: 155
    },

    height: {
      xs: 125,
      sm: 135,
      md: 145
    },

    ...glossyCard,

    cursor: 'default',

    display: 'flex',

    alignItems: 'center',

    justifyContent: 'center'

  }


  return (

    <Box

      sx={{

        minHeight: '100vh',

        backgroundImage:
          "linear-gradient(135deg, rgba(3,3,7,0.72), rgba(12,6,20,0.62), rgba(3,3,7,0.72)), url('/plainImage.png')",

        backgroundSize: 'cover',

        backgroundPosition: 'center',

        backgroundAttachment: {
          xs: 'scroll',
          md: 'fixed'
        },

        py: {
          xs: 8,
          md: 12
        },

        px: {
          xs: 2,
          sm: 3,
          md: 5
        },

        overflow: 'hidden',

        position: 'relative',

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
          PAGE TITLE
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

          Qualification

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

            mb: 2

          }}

        />


        <Typography

          sx={{

            textAlign: 'center',

            color: '#B8B2C8',

            fontSize: {
              xs: '0.9rem',
              md: '1rem'
            },

            mb: 7

          }}

        >

          My educational journey and technical foundation

        </Typography>

      </motion.div>


      {/* ==================================================
          EDUCATION TIMELINE
      ================================================== */}

      <Box

        sx={{

          maxWidth: '1000px',

          mx: 'auto',

          position: 'relative',

          zIndex: 2

        }}

      >

        {/* DESKTOP CENTER LINE */}

        <Box

          sx={{

            display: {
              xs: 'none',
              md: 'block'
            },

            position: 'absolute',

            top: 0,

            bottom: 0,

            left: '50%',

            width: 4,

            transform: 'translateX(-50%)',

            borderRadius: 10,

            background:
              'linear-gradient(to bottom, #8E2DE2, #C084FC, #8E2DE2)',

            boxShadow:
              '0 0 18px rgba(142,45,226,0.5)'

          }}

        />


        {/* MOBILE LINE */}

        <Box

          sx={{

            display: {
              xs: 'block',
              md: 'none'
            },

            position: 'absolute',

            top: 0,

            bottom: 0,

            left: 22,

            width: 3,

            borderRadius: 10,

            background:
              'linear-gradient(to bottom, #8E2DE2, #C084FC, #8E2DE2)',

            boxShadow:
              '0 0 15px rgba(142,45,226,0.4)'

          }}

        />


        {/* MOVING LIGHT */}

        <Box

          component={motion.div}

          animate={{

            y: ['0%', '100%'],

            opacity: [0, 1, 1, 0]

          }}

          transition={{

            duration: 3.5,

            repeat: Infinity,

            ease: 'linear'

          }}

          sx={{

            display: {
              xs: 'none',
              md: 'block'
            },

            position: 'absolute',

            left: '50%',

            top: 0,

            transform: 'translateX(-50%)',

            width: 10,

            height: 80,

            borderRadius: 20,

            background:
              'linear-gradient(to bottom, transparent, #ffffff, transparent)',

            filter:
              'drop-shadow(0 0 10px #C084FC)',

            zIndex: 1,

            pointerEvents: 'none'

          }}

        />


        {/* EDUCATION ITEMS */}

        <Box

          component={motion.div}

          variants={containerVariants}

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.2
          }}

        >

          {education.map((detail, index) => (

            <Box

              key={index}

              sx={{

                position: 'relative',

                minHeight: {
                  xs: 210,
                  md: 190
                },

                mb: {
                  xs: 3,
                  md: 4
                }

              }}

            >

              {/* TIMELINE DOT */}

              <Box

                component={motion.div}

                animate={{

                  scale: [
                    1,
                    1.15,
                    1
                  ],

                  boxShadow: [

                    '0 0 0 rgba(142,45,226,0.2)',

                    '0 0 28px rgba(142,45,226,0.7)',

                    '0 0 0 rgba(142,45,226,0.2)'

                  ]

                }}

                transition={{

                  duration: 2,

                  repeat: Infinity,

                  ease: 'easeInOut',

                  delay: index * 0.4

                }}

                sx={{

                  position: 'absolute',

                  zIndex: 5,

                  left: {
                    xs: 0,
                    md: '50%'
                  },

                  top: 28,

                  transform: {
                    xs: 'none',
                    md: 'translateX(-50%)'
                  },

                  width: {
                    xs: 46,
                    md: 58
                  },

                  height: {
                    xs: 46,
                    md: 58
                  },

                  borderRadius: '50%',

                  display: 'flex',

                  alignItems: 'center',

                  justifyContent: 'center',

                  background:
                    'linear-gradient(135deg, #8E2DE2, #C084FC)',

                  color: '#fff',

                  border:
                    '4px solid rgba(255,255,255,0.9)'

                }}

              >

                {detail.icon}

              </Box>


              {/* EDUCATION CARD */}

              <Box

                component={motion.div}

                variants={

                  index % 2 === 0
                    ? leftCardVariants
                    : rightCardVariants

                }

                sx={{

                  position: 'absolute',

                  top: 0,

                  width: {
                    xs: 'calc(100% - 65px)',
                    md: '42%'
                  },

                  left: {

                    xs: 65,

                    md:
                      index % 2 === 0
                        ? 0
                        : '58%'

                  }

                }}

              >

                <Card

                  sx={{

                    ...glossyCard,

                    borderRadius: '24px',

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

                    }

                  }}

                >

                  <CardContent

                    sx={{

                      p: {
                        xs: 2.3,
                        md: 3
                      }

                    }}

                  >

                    <Chip

                      icon={detail.icon}

                      label={detail.name}

                      sx={{

                        mb: 1.5,

                        color: '#D8B4FE',

                        background:
                          'rgba(123,44,191,0.20)',

                        border:
                          '1px solid rgba(192,132,252,0.30)',

                        fontWeight: 700,

                        backdropFilter: 'blur(8px)',

                        '& .MuiChip-icon': {
                          color: '#C084FC'
                        }

                      }}

                    />


                    <Typography

                      sx={{

                        fontSize: {
                          xs: '1.05rem',
                          md: '1.25rem'
                        },

                        fontWeight: 800,

                        color: '#F5F3FF',

                        mb: 0.8

                      }}

                    >

                      {detail.course}

                    </Typography>


                    <Typography

                      sx={{

                        color: '#B8B2C8',

                        fontSize: {
                          xs: '0.82rem',
                          md: '0.9rem'
                        },

                        lineHeight: 1.5,

                        mb: 1.5

                      }}

                    >

                      {detail.institute}

                    </Typography>


                    <Box

                      sx={{

                        display: 'flex',

                        flexWrap: 'wrap',

                        gap: 1

                      }}

                    >

                      <Chip

                        size="small"

                        icon={<CalendarMonthIcon />}

                        label={detail.yop}

                        sx={{

                          color: '#C8C0D4',

                          background:
                            'rgba(255,255,255,0.05)',

                          '& .MuiChip-icon': {
                            color: '#C084FC'
                          }

                        }}

                      />


                      <Chip

                        size="small"

                        icon={<EmojiEventsIcon />}

                        label={detail.score}

                        sx={{

                          color: '#D8B4FE',

                          background:
                            'rgba(123,44,191,0.18)',

                          fontWeight: 700,

                          '& .MuiChip-icon': {
                            color: '#C084FC'
                          }

                        }}

                      />

                    </Box>

                  </CardContent>

                </Card>

              </Box>

            </Box>

          ))}

        </Box>

      </Box>


      {/* ==================================================
          CORE SUBJECTS
      ================================================== */}

      <Box

        sx={{

          maxWidth: '950px',

          mx: 'auto',

          mt: {
            xs: 7,
            md: 10
          },

          position: 'relative',

          zIndex: 2

        }}

      >

        {/* Background Glow */}

        <Box

          component={motion.div}

          animate={{

            scale: [1, 1.12, 1],

            opacity: [0.2, 0.35, 0.2]

          }}

          transition={{

            duration: 5,

            repeat: Infinity,

            ease: 'easeInOut'

          }}

          sx={{

            position: 'absolute',

            width: 300,

            height: 300,

            borderRadius: '50%',

            background:
              'radial-gradient(circle, rgba(142,45,226,0.18), transparent 70%)',

            filter: 'blur(35px)',

            left: '50%',

            top: 50,

            transform:
              'translateX(-50%)',

            pointerEvents: 'none'

          }}

        />


        {/* Heading */}

        <motion.div

          initial={{
            opacity: 0,
            y: 25
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          viewport={{
            once: true
          }}

          transition={{
            duration: 0.7
          }}

        >

          <Typography

            sx={{

              position: 'relative',

              textAlign: 'center',

              fontSize: {
                xs: '1.7rem',
                sm: '2rem',
                md: '2.3rem'
              },

              fontWeight: 800,

              color: '#F5F3FF'

            }}

          >

            Core Subjects

          </Typography>


          <Box

            sx={{

              width: 65,

              height: 3,

              mx: 'auto',

              mt: 1,

              borderRadius: 10,

              background:
                'linear-gradient(90deg, #8E2DE2, #C084FC)',

              boxShadow:
                '0 0 12px rgba(142,45,226,0.5)'

            }}

          />


          <Typography

            sx={{

              textAlign: 'center',

              color: '#AFA7BE',

              mt: 1.2,

              mb: 4,

              fontSize: {
                xs: '0.82rem',
                sm: '0.9rem'
              }

            }}

          >

            Key areas covered during my Computer Science education

          </Typography>

        </motion.div>


        {/* SUBJECT CARDS */}

        <Box

          component={motion.div}

          variants={containerVariants}

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.2
          }}

          sx={{

            position: 'relative',

            display: 'grid',

            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(3, 1fr)'
            },

            gap: {
              xs: 1.3,
              sm: 1.7,
              md: 2
            },

            maxWidth: '820px',

            mx: 'auto'

          }}

        >

          {subjects.map((subject, index) => (

            <Box

              key={index}

              component={motion.div}

              variants={itemVariants}

              whileHover={{
                y: -5,
                scale: 1.025
              }}

              sx={{

                height: {
                  xs: 68,
                  sm: 74,
                  md: 78
                },

                display: 'flex',

                alignItems: 'center',

                justifyContent: 'flex-start',

                px: {
                  xs: 1.2,
                  sm: 1.5,
                  md: 1.7
                },

                borderRadius: '15px',

                position: 'relative',

                overflow: 'hidden',

                background:
                  'linear-gradient(135deg, rgba(123,44,191,0.22), rgba(255,255,255,0.035))',

                backdropFilter: 'blur(14px)',

                border:
                  '1px solid rgba(192,132,252,0.25)',

                boxShadow:
                  '0 10px 30px rgba(0,0,0,0.28)',

                transition:
                  'all 0.3s ease',

                cursor: 'default',

                '&::before': {

                  content: '""',

                  position: 'absolute',

                  left: 0,

                  top: 0,

                  width: '3px',

                  height: '100%',

                  background:
                    'linear-gradient(to bottom, #8E2DE2, #C084FC)',

                  opacity: 0.9

                },

                '&::after': {

                  content: '""',

                  position: 'absolute',

                  width: 80,

                  height: 80,

                  borderRadius: '50%',

                  background:
                    'rgba(192,132,252,0.08)',

                  right: -40,

                  bottom: -40,

                  transition:
                    'all 0.4s ease'

                },

                '&:hover': {

                  borderColor: '#C084FC',

                  boxShadow:
                    '0 15px 35px rgba(142,45,226,0.25)',

                  '&::after': {

                    transform:
                      'scale(2)'

                  },

                  '& .subject-icon': {

                    transform:
                      'rotate(8deg) scale(1.08)',

                    boxShadow:
                      '0 0 14px rgba(142,45,226,0.45)'

                  }

                }

              }}

            >

              <Box

                className="subject-icon"

                sx={{

                  width: {
                    xs: 30,
                    sm: 32,
                    md: 34
                  },

                  height: {
                    xs: 30,
                    sm: 32,
                    md: 34
                  },

                  minWidth: {
                    xs: 30,
                    sm: 32,
                    md: 34
                  },

                  mr: {
                    xs: 1,
                    sm: 1.2
                  },

                  borderRadius: '10px',

                  display: 'flex',

                  alignItems: 'center',

                  justifyContent: 'center',

                  background:
                    'linear-gradient(135deg, #8E2DE2, #C084FC)',

                  color: '#fff',

                  boxShadow:
                    '0 4px 12px rgba(142,45,226,0.3)',

                  transition:
                    'all 0.3s ease',

                  position: 'relative',

                  zIndex: 2

                }}

              >

                <CodeIcon

                  sx={{

                    fontSize: {
                      xs: 15,
                      sm: 16
                    }

                  }}

                />

              </Box>


              <Typography

                sx={{

                  position: 'relative',

                  zIndex: 2,

                  color: '#E9E2F2',

                  fontWeight: 700,

                  fontSize: {
                    xs: '0.7rem',
                    sm: '0.76rem',
                    md: '0.82rem'
                  },

                  lineHeight: 1.3

                }}

              >

                {subject}

              </Typography>

            </Box>

          ))}

        </Box>

      </Box>


      {/* ==================================================
          TECHNICAL SKILLS
      ================================================== */}

      <Box

        sx={{

          maxWidth: '1050px',

          mx: 'auto',

          mt: {
            xs: 8,
            md: 11
          },

          position: 'relative',

          zIndex: 2

        }}

      >

        {/* MAIN HEADING */}

        <motion.div

          initial={{
            opacity: 0,
            y: 30
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          viewport={{
            once: true
          }}

          transition={{
            duration: 0.7
          }}

        >

          <Typography

            sx={{

              textAlign: 'center',

              fontSize: {
                xs: '1.8rem',
                md: '2.3rem'
              },

              fontWeight: 800,

              color: '#F5F3FF'

            }}

          >

            Technical Skills

          </Typography>


          <Box

            sx={{

              width: 65,

              height: 4,

              mx: 'auto',

              mt: 1,

              borderRadius: 10,

              background:
                'linear-gradient(90deg, #8E2DE2, #C084FC, #8E2DE2)',

              boxShadow:
                '0 0 15px rgba(142,45,226,0.45)'

            }}

          />

        </motion.div>


        {/* ==================================================
            1. CORE TECHNOLOGIES
        ================================================== */}

        <SkillSection
          title="Core Technologies"
          skills={coreSkills}
          variants={containerVariants}
          itemVariants={itemVariants}
          skillCard={skillCard}
        />


        {/* ==================================================
            2. TOOLS & LIBRARIES
        ================================================== */}

        <SkillSection
          title="Tools & Libraries"
          skills={tools}
          variants={containerVariants}
          itemVariants={itemVariants}
          skillCard={skillCard}
        />


        {/* ==================================================
            3. DESIGN & UI
        ================================================== */}

        <SkillSection
          title="Design & UI"
          skills={designSkills}
          variants={containerVariants}
          itemVariants={itemVariants}
          skillCard={skillCard}
        />

      </Box>

    </Box>

  )
}


// ==================================================
// SKILL SECTION COMPONENT
// ==================================================

function SkillSection({
  title,
  skills,
  variants,
  itemVariants,
  skillCard
}) {

  return (

    <Box

      sx={{

        mb: {
          xs: 6,
          md: 8
        }

      }}

    >

      {/* SECTION TITLE */}

      <motion.div

        initial={{
          opacity: 0,
          y: 20
        }}

        whileInView={{
          opacity: 1,
          y: 0
        }}

        viewport={{
          once: true
        }}

        transition={{
          duration: 0.6
        }}

      >

        <Typography

          sx={{

            textAlign: 'center',

            fontSize: {
              xs: '1.25rem',
              sm: '1.4rem',
              md: '1.55rem'
            },

            fontWeight: 800,

            color: '#E9D5FF',

            mb: 2.8

          }}

        >

          {title}

        </Typography>

      </motion.div>


      {/* SKILL CARDS */}

      <Box

        component={motion.div}

        variants={variants}

        initial="hidden"

        whileInView="visible"

        viewport={{
          once: true,
          amount: 0.2
        }}

        sx={{

          display: 'flex',

          justifyContent: 'center',

          alignItems: 'center',

          flexWrap: 'wrap',

          gap: {
            xs: 1.5,
            sm: 2,
            md: 2.5
          }

        }}

      >

        {skills.map((skill, index) => (

          <Card

            key={index}

            component={motion.div}

            variants={itemVariants}

            whileHover={{
              y: -8,
              scale: 1.05
            }}

            sx={{

              ...skillCard,

              '&:hover .skill-icon': {

                transform:
                  'scale(1.12) rotate(5deg)',

                boxShadow:
                  '0 0 25px rgba(192,132,252,0.45)'

              },

              '&:hover .tech-logo': {

                transform:
                  'scale(1.12)'

              }

            }}

          >

            <CardContent

              sx={{

                height: '100%',

                width: '100%',

                p: 1.5,

                display: 'flex',

                flexDirection: 'column',

                justifyContent: 'center',

                alignItems: 'center'

              }}

            >

              {/* ICON CONTAINER */}

              <Box

                className="skill-icon"

                sx={{

                  width: {
                    xs: 52,
                    sm: 56,
                    md: 60
                  },

                  height: {
                    xs: 52,
                    sm: 56,
                    md: 60
                  },

                  borderRadius: '16px',

                  display: 'flex',

                  alignItems: 'center',

                  justifyContent: 'center',

                  background:
                    'linear-gradient(135deg, rgba(123,44,191,0.55), rgba(192,132,252,0.25))',

                  border:
                    '1px solid rgba(192,132,252,0.35)',

                  boxShadow:
                    '0 8px 22px rgba(0,0,0,0.25)',

                  transition:
                    'all 0.35s ease',

                  mb: 1.3

                }}

              >

                {/* TECHNOLOGY IMAGE */}

                {skill.image && (

                  <Box

                    component="img"

                    className="tech-logo"

                    src={skill.image}

                    alt={skill.name}

                    sx={{

                      width: {
                        xs: 32,
                        sm: 36,
                        md: 40
                      },

                      height: {
                        xs: 32,
                        sm: 36,
                        md: 40
                      },

                      objectFit: 'contain',

                      transition:
                        'all 0.35s ease',

                      filter:
                        'drop-shadow(0 0 7px rgba(255,255,255,0.15))'

                    }}

                  />

                )}


                {/* DESIGN / UI MATERIAL ICON */}

                {skill.icon && (

                  <Box

                    className="tech-logo"

                    sx={{

                      color: '#D8B4FE',

                      display: 'flex',

                      alignItems: 'center',

                      justifyContent: 'center',

                      transition:
                        'all 0.35s ease',

                      '& svg': {

                        fontSize: {
                          xs: 34,
                          sm: 38,
                          md: 42
                        },

                        filter:
                          'drop-shadow(0 0 9px rgba(192,132,252,0.45))'

                      }

                    }}

                  >

                    {skill.icon}

                  </Box>

                )}

              </Box>


              {/* NAME */}

              <Typography

                sx={{

                  fontSize: {
                    xs: '0.75rem',
                    sm: '0.8rem',
                    md: '0.85rem'
                  },

                  fontWeight: 700,

                  color: '#F1ECF7',

                  textAlign: 'center'

                }}

              >

                {skill.name}

              </Typography>

            </CardContent>

          </Card>

        ))}

      </Box>

    </Box>

  )

}


export default Qualification