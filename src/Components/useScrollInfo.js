import React,{ useState, useEffect } from 'react';

export default function ScrollInfo() {
const [scrollDepth, setScrollDepth] = useState(0);

function determineUserScrollDepth() {
    const scrolled = document.documentElement.scrollTop ||
    document.body.scrollTop;
    setScrollDepth(scrolled);
}

useEffect(() => {
    window.addEventListener('scroll', determineUserScrollDepth);
});

return(
    <h5>{scrollDepth}</h5>
);
}