import React, { ReactElement } from 'react'
import { CustomLinkProps } from '@/interfaces'
import { motion } from 'framer-motion'

export function CustomLink({ action, label, route }: CustomLinkProps): ReactElement {
  return (
    <a href={route} onClick={() => action()}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="font-regular text-l text-background hover:underline">{label}
      </motion.div>
    </a>
  )
}
