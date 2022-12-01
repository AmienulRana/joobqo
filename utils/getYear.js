const getYears = () => {
    let years = [];
    let max = new Date().getFullYear();
    let min = max - 32;
  
    for (let i = max; i >= min; i--) {
      years.push(i);
    }
    return years;
}
export default getYears;