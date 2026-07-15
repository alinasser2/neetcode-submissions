class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) 
    {
        let resultArr = [...nums1, ...nums2].sort((a,b) => a - b)
        console.log(resultArr)
        if (resultArr.length % 2 == 0)
        {
            console.log(resultArr[(resultArr.length / 2)])
            console.log((resultArr[resultArr.length / 2] - 1 ))
            return (resultArr[resultArr.length / 2] + (resultArr[resultArr.length / 2 - 1] )) / 2
        }
        else return resultArr[Math.floor(resultArr.length / 2)]
    }
}
