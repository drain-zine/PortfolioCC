function timer(ms) { return new Promise(res => setTimeout(res, ms)); }
export default timer;