function find(nums, callback) {

    if (typeof callback !== 'function') throw new Error(callback + ' is not a function');  
        for(index=0; index<nums.length; index++) {  
            if (callback(nums[index])) { return nums[index]; }
        }
        return undefined;
}