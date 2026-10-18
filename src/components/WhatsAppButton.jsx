
import React from 'react'
import { Box, IconButton, Tooltip } from '@mui/material'
import { motion, useReducedMotion } from 'framer-motion'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

function WhatsAppButton() {
  const shouldReduceMotion = useReducedMotion()

  const whatsappNumber = '918637676850' // Unga number add pannunga
  const message = 'Hi Nanthini! I visited your portfolio.'
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  const floatAnimation = shouldReduceMotion
    ? {}
    : {
        y: [0, -5, 0],
        transition: {
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }

  return (
    <Box
      sx={{
        position: 'fixed',
        right: { xs: 28, sm: 38, md: 45 },
        bottom: { xs: 35, sm: 45, md: 50 },
        width: 64,
        height: 64,
        zIndex: 9999,
        display: 'grid',
        placeItems: 'center',
      }}
    >
      {/* Expanding glow ring */}
      {!shouldReduceMotion && (
        <Box
          component={motion.div}
          animate={{
            scale: [1, 1.55, 1.8],
            opacity: [0.55, 0.2, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
          sx={{
            position: 'absolute',
            inset: 4,
            borderRadius: '50%',
            border: '2px solid #25D366',
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Rotating gradient halo */}
      <Box
        component={motion.div}
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
        sx={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background:
            'conic-gradient(from 0deg, #25D366, #C084FC, #8E2DE2, #25D366)',
          boxShadow: '0 0 22px rgba(168, 85, 247, 0.4)',
          pointerEvents: 'none',
        }}
      />

      {/* WhatsApp button */}
      <Tooltip title="Chat with me on WhatsApp" placement="left">
        <IconButton
          component={motion.a}
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with me on WhatsApp"
          animate={floatAnimation}
          whileHover={
            shouldReduceMotion
              ? {}
              : { scale: 1.12, rotate: -8, y: -4 }
          }
          whileTap={shouldReduceMotion ? {} : { scale: 0.88 }}
          sx={{
            position: 'relative',
            width: 56,
            height: 56,
            color: '#FFFFFF',
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
            border: '3px solid #160D20',
            boxShadow: '0 0 18px rgba(37, 211, 102, 0.6)',
            '&:hover': {
              background: 'linear-gradient(135deg, #2EE875, #128C7E)',
              boxShadow: '0 0 30px rgba(37, 211, 102, 0.85)',
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default WhatsAppButton
