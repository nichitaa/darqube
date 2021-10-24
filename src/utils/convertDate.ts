// n -> UNIX timestamp
const convertDate = (unix: number): string => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const n = new Date(unix * 1000);

    // const year = n.getFullYear();
    // const hour = n.getHours();
    // const min = n.getMinutes();
    // const sec = n.getSeconds();

    const month = months[n.getMonth()];
    const date = n.getDate();
    return `${date} ${month}`;
};

export default convertDate;