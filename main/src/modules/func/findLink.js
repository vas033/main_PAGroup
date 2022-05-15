const findLink = (str) => {
        const compareResult = str.slice(0, 5) === 'https';
        return compareResult;
};

export default findLink;
