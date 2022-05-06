class Utils {
  static padZero(n, width, z) {
    z = z || "0";
    n = n + "";
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  static replaceAll(string, search, replace) {
    return string.split(search).join(replace);
  }
}

export default Utils;
