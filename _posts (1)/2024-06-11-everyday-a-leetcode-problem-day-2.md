---
layout: post
title: Everyday a Leetcode Problem - 27. Remove Elements 
date: 2024-06-11 06:00:00 +0700
categories: [Linh the Scientist]
tags: [cse, dsa]     # TAG names should always be lowercase
---

Let's move on to next day problem! I am doing Top Interview 150 if you wonder.

Here is the link for today's problem: [27. Remove Elements](https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150).

## Ideas

- Use `erase()` and `remove()` functions to remove the elements equal to `val`.
- Use `sort()` and copy constructor to make expectedNums;
- Return like requirements.

## Explanation

- The `remove()` function rearranges the elements in the range `[vec.begin(), vec.end()]`, removing all elements that are equal to `val`. It returns an iterator to the new end of the range.
- The `erase()` function is then used to actually remove the elements from the vector, effectively resizing it.

## Solution

```cpp
class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        nums.erase(remove(nums.begin(),nums.end(),val),nums.end());
        sort(nums.begin(), nums.end());
        vector<int> expectedNums(nums);
        return expectedNums.size();
    }
};
```

The runtime and the memory is hell but I am lazy to code longer...

---

See you next time!
