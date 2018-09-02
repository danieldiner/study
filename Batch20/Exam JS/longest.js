function lengthOfLongestSubstring(s) {
     
    var arr = s.split('');
    var pre = 0, len;
 
    var map = {};
 
    for (var i = 0; i < arr.length; i++) {
        if (map[arr[i]]==null) {
            map[arr[i]] =  i;
        } else {
            len = Object.keys(map).length;
            pre = Math.max(pre, len);
            i = map[arr[i]];
            map = {};
        }
    }
    len = Object.keys(map).length;
    return Math.max(pre, len);
}
console.log(lengthOfLongestSubstring('abcdefghijkabcbb'));