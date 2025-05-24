---
layout: post
title: Everyday a Leetcode Problem - 26. Remove Duplicates from Sorted Array
date: 2024-06-16 16:00:00 +0700
categories: [Linh the Scientist] 
tags: [cse, dsa]     # TAG names should always be lowercase
---

Today we come with this simple problem but mine isn't so statistically impressive again, all because of you `erase()`!

Link to problem: [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150).

## Ideas

- This problem is kinda too simple for an idea to work, I am lazy for a brilliant one.

- You will use a for loop to erase duplicate elements in the vector.


## Code

```cpp
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int n = 0;
    for (std::vector<int>::iterator it = nums.begin()+1; it != nums.end();)
    {
        if (nums[n] == nums[n+1])
            it = nums.erase(it);
        else {
            it++;
            n++;
            }
    }
        return nums.size();
    }
};
```

From the idea to the realization, the problem is the variable type to fit with the functions of the library, haha.

---

See ya next time!
