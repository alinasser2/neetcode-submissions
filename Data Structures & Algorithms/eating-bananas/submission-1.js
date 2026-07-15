class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) 
    {
        let start = 1
        let end = Math.max(...piles)
        let result = -1
        while (start <= end)
        {
            let mid = Math.floor((start+end)/2)
            let hoursToFinish = this.isItDoable(mid, piles,h)
            console.log(`is it doable : mid is ${mid} and hours yo finish are ${hoursToFinish}`)
            if (hoursToFinish > h) start = mid + 1
            else {
                result = mid
                end = mid - 1
            } 
        }
        return result
    }


    isItDoable(solutionK, piles, targetH)
    {
        let hours = 0
        for (let pile of piles)
        {
            hours+= Math.ceil(pile/solutionK)
        }
        return hours
    }
}
