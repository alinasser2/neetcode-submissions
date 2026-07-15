class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore[key]) {
            this.keyStore[key] = [];
        }
        
        this.keyStore[key].push({ timestamp: timestamp, value: value });
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) 
    {
        // DS Visualization
        // [
        // {timstamp : 1, value : 'sad'},
        // {timstamp : 2, value : 'meh'},
        // {timstamp : 3, value : 'happy'}
        // ]
        if (!this.keyStore[key]) return "";
        let arrayOfObjects = this.keyStore[key]
        let start = 0
        let end = arrayOfObjects.length - 1
        let closestNumber = -1
        while (start <= end)
        {
            let mid = Math.floor((start + end ) / 2)
            if (mid >= closestNumber && arrayOfObjects[mid].timestamp <= timestamp)
            {
                closestNumber = mid
            }
            if (arrayOfObjects[mid].timestamp == timestamp) return arrayOfObjects[mid].value
            if (arrayOfObjects[mid].timestamp < timestamp)
            {
                start = mid + 1
            }
            else 
            {
                end = mid - 1
            }
        }
        return closestNumber > -1 ? arrayOfObjects[closestNumber].value : ""
    }
}

