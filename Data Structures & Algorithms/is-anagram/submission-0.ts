class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) return false;
        const sMap = new Map();
        for (const char of s) {
            if (sMap.has(char)) {
                let value = sMap.get(char);
                sMap.set(char, value + 1);
            } else {
                sMap.set(char, 1);
            }
        }
        for (const char of t) {
            if (!sMap.has(char)) return false;
            let value = sMap.get(char);
            if (value - 1 < 0) return false;
            sMap.set(char, value - 1);
        }
        const arrValues = Array.from(sMap.values());
        for (const value of arrValues) {
            if (value != 0) return false;
        }
        return true;
    }
}
