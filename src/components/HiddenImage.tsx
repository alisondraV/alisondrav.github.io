import React, { ReactElement, useState } from 'react';
import MotionImage from '@/components/MotionImage';
import { motion } from 'framer-motion';

interface HiddenImageProps {
    image: string;
    text: string
}

export default function HiddenImage({ image, text }: HiddenImageProps): ReactElement {
    const [imageVisibility, setImageVisibility] = useState('hidden');

    return (
        <motion.span
            onHoverStart={() => { setImageVisibility(''); }}
            onHoverEnd={() => { setImageVisibility('hidden'); }}
            className="font-header text-2xl font-semibold underline"
        >
            {text}
            <MotionImage src={image} classes={`absolute right-1/4 bottom-1/3 ${imageVisibility}`} />
        </motion.span>
    );
}