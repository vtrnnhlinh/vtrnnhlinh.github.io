---
layout: post
title: Everyday a Leetcode Problem - 26. Remove Duplicates from Sorted Array
date: 2024-07-31 03:45:00 +0700
categories: [Linh the Scientist]
tags: [cse, dsa]     # TAG names should always be lowercase
---

Today we come to another easy peasy problem. Here is the link to [80. Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150)

## Ideas

I think this problem is too basic, even though statistically my solution isn't optimized, but lazy brain is better than hardcore for some basic features to me.

So here is the idea:
1. Initial Check: If the size of `nums` is less than or equal to 2, return the size directly since no processing is needed.
2. Using an Index: Start with an index at 1 (since the first element is always included).
3. Managing Duplicates:
  - Iterate through the vector starting from the second element.
  - Track the count of duplicates for each element.
  - Place the element at the index position if the count is within the allowed limit (up to 2).
4. Resizing the Vector: Resize the vector to the new size, which is the final value of index.

## Code

```cpp
class Solution {
public:
    int removeDuplicates(std::vector<int>& nums) {
        if (nums.size() <= 2) return nums.size(); // No need to process if size <= 2
        
        int index = 1; // Index to place the next unique or allowed duplicate number
        int count = 1; // Current count of the number being processed

        for (int i = 1; i < nums.size(); ++i) {
            if (nums[i] == nums[i - 1]) {
                count++;
            } else {
                count = 1;
            }

            // If count is within the allowed limit, we place the number at the current index
            if (count <= 2) {
                nums[index++] = nums[i];
            }
        }
        return index;
    }
};
```
