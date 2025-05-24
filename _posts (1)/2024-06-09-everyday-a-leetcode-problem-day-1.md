---
layout: post
title: Everyday a Leetcode Problem - 88. Merge Sorted Array 
date: 2024-06-09 15:15:00 +0700
categories: [Linh the Scientist]
tags: [cse, dsa]     # TAG names should always be lowercase
---

This summer I will open the series to practice a Leetcode problem everyday to hone my coding skills! Hope to receive your feedback.

Today problem link: [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150)

---

## Ideas

- What we have: 2 vectors in C++, that means we can access to std C++ functions, at least `vector` one.

- What we have to notice: We have `m` and `n` as lengths of 2 vectors needed to be merge. So `m` and `n` maybe won't be the same as vectors' actual lengths.

- Step by step to solve the problem:
  - Visit [`std::vector`](https://en.cppreference.com/w/cpp/container/vector) to see if there is any functions we can use.
  - Realize that we can use `insert()` and `resize()`.
  - Use `resize()` to make 2 vectors have `m`, `n` lengths.
  - Use `insert()` to merge `nums2` into `nums1`.
  - Use `sort()` to sort the vector in non-decreasing order.

## Functions explanation

### `resize()`

```cpp
void resize( size_type count );
```

So it's a `void` function with `count` is the value we need to resize. Simply `nums1.resize(m)` will do the trick.

### `insert()`

Here I am the bad guy because I didn't follow exactly like the format of the function.

```cpp
template< class InputIt >
iterator insert( const_iterator pos, InputIt first, InputIt last );
```

We have some ways to use `insert()`, but in this case we will use this one. I didn't declare a variable for `insert()` cause I don't need that value, we only need to care that after we call it, it will work with the vectors.

### `sort()`

I hate learning sorting algorithms and thank God, C++ has std function for sorting.

```cpp
template <class RandomAccessIterator>  void sort (RandomAccessIterator first, RandomAccessIterator last);
```

It's a `void` function, require last and first iterator of the vector. `vector.begin()` and `vector.end()` are all you need.

## Code

C++ always my love :heart: I don't use other languages except someone pointing guns at my head.

```cpp
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        nums1.resize(m);
        nums2.resize(n);
        nums1.insert(nums1.end(), nums2.begin(),nums2.end());
        sort(nums1.begin(), nums1.end());
    }
};
```

The solution has runtime 0ms and memory usage 11mb, beats 100% runtime and 71.62% memory usage.

---

That's all for the day. If you have any questions, don't hesitate to ask!
