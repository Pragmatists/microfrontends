export const runScript = async (bundleAddress) => {
    const response = await fetch(bundleAddress);
    const text = await response.text();
    await eval(text);
};

export const matchingPathname = (pathnames) => (location) => pathnames.some(pathname => location.pathname === pathname);
