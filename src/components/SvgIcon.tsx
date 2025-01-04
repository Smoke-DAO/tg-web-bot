import React, { useEffect, useState } from 'react';

interface SvgIconProps {
    src: string;
}

export const SvgIcon: React.FC<SvgIconProps> = ({ src }) => {
    const [svgContent, setSvgContent] = useState<string>('');

    useEffect(() => {
        fetch(src)
            .then(response => response.text())
            .then(text => setSvgContent(text))
            .catch(console.error);
    }, [src]);

    return (
        <div dangerouslySetInnerHTML={{ __html: svgContent }} />
    );
}; 