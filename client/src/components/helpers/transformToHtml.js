import parse from 'html-react-parser';

const transformToHtml = (string) => parse(`${string}`);

export default transformToHtml;
