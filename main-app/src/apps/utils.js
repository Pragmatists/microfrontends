export const runScript = async (url) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
};

export const matchingPathname = (pathnames) => (location) => pathnames.some(pathname => location.pathname === pathname);
