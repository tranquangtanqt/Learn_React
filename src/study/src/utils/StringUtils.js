class StringUtils {
    /**
     * 
     * @param {*} n 
     * @param {*} width 
     * @param {*} z 
     * @returns 
     */
    static padZero(n, width, z) {
      z = z || "0";
      n = n + "";
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
  
    /**
     * 
     * @param {*} string 
     * @param {*} search 
     * @param {*} replace 
     * @returns 
     */
    static replaceAll(string, search, replace) {
      return string.split(search).join(replace);
    }
  }
  
  export default StringUtils;
  