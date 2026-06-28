class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();

        for (const num of nums) {
            if (!map.has(num)) map.set(num, 0);
            map.set(num, (map.get(num) ?? 0) + 1);
        }
        
        const buckets: number[][] =  Array.from({length: nums.length + 1}, () => []);

        for (const [num, count] of map) {
            buckets[count].push(num);
        }

        const result: number[] = [];
        for (let i = buckets.length - 1; i >= 1 && result.length < k; i--) {
            for (const num of buckets[i]) {
                result.push(num);
                if (result.length === k) return result;
            }
        }

        return result;
    }
}
