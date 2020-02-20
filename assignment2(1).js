function longestword(words) {
    var max = words[0].length;
    words.map(v => max = Math.max(max, v.length));
    result =words.filter(v => v.length == max);
    return result;
  }
    console.log(longestword(['Australia','Germany','United States Of America']))