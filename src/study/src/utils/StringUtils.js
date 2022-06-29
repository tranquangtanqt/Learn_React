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

    /**
     * string to camel
     * @param {*} str 
     * @returns 
     */
    static camelize(str) {
      return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      });
    }
  }
  
  export default StringUtils;
  