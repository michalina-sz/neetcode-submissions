class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let records = [];

        for (let i = 0; i < operations.length; i++) {
            const num = Number(operations[i]);

            if (!Number.isNaN(num)) {
                records.push(num);
            } else {
                if (operations[i] === "+") {
                    records.push(records[records.length - 1] + records[records.length - 2]);
                } else if (operations[i] === "C") {
                    records.pop();
                } else if (operations[i] === "D") {
                    records.push(2 * records[records.length - 1]);
                }
            }
        }

        return records.reduce((sum, curr) => sum += curr, 0);
    }
}
