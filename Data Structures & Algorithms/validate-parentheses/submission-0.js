class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const temp = [];
        const closeToOpen = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        for (let i = 0; i < s.length; i++) {
            console.log(temp);
            if (closeToOpen[s[i]]) {
                if (temp.length > 0 && temp[temp.length-1] === closeToOpen[s[i]]) {
                    temp.pop()
                }
                else {
                    return false;
                }
            }
            else {
                temp.push(s[i])
            }
        }
        return temp.length === 0;
    }
}
