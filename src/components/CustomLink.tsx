import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { CustomLinkProps } from '@/interfaces'
import { motion } from 'framer-motion'

export function CustomLink({ action, label, route }: CustomLinkProps): ReactElement {
  return (
    <Link to={route} onClick={() => action()}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className='font-regular text-l text-background hover:underline'>{label}
      </motion.div>
    </Link>
  )
}
