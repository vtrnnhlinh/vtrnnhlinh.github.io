---
layout: post
title: Grindin' Thesis Journal - 20240721
date: 2024-07-22 00:25:00 +0700
categories: [Journal of Sciences]
tags: [academic, thesis, quantum, cse]     # TAG names should always be lowercase
---

It has been a rough time for myself, both physically and mentally. I felt unmotivated, there were days I came back from work just to lie on bed and do nothing else. *I just lied for an hour after writing last sentence*.

I had a meeting with my supervisors on Saturday. I feel ashamed that my group had nothing to show. So now I am trying to write down what I did for my topic of research. Don't talk, show!

Words of a worthy man worth more than gold!

All for my dear old man!

---

## Planning

I have 3 main tasks for today:

- [x] Create an obsidian page to keep track of related papers to do my thesis
- [x] Find some papers about quantum scheduling to read and grab an overview, report to supervisor
- [ ] Try to understand more about the first paper

## First task: Create obsidian page

I use Dataview to do this. I don't know JS, Jquery or whatever. So I will use ChatGPT to do this for me.

The prompt I sent to ChatGPT

> create dataview code for obsidian to list all files has tag `#academic/thesis` and `#academic/papers`

This is what ChatGPT created for me:

```javascript
```dataview
table file.name as "File Name", file.path as "Path"
from "folder_path"  // Optional: specify the folder if you want to narrow down the search
where contains(file.tags, "#academic/thesis") and contains(file.tags, "#academic/papers")
sort file.name asc

```

I want to have the `understood` and created date column. So here is my final code:

```javascript
```dataview
table file.ctime as "Date", done as "Understood?"
from "Notes"  // Optional: specify the folder if you want to narrow down the search
where contains(file.tags, "#academic/thesis") and contains(file.tags, "#academic/papers")
sort file.ctime asc
```


The result I have:

![thesis_paper_reading_track](https://images2.imgbox.com/f4/5c/DJGKSCFz_o.png)

## Second task: Find and read a paper about quantum scheduling

I have to admit, this is rough and hard as hell cause I am so inexperience. I am lost in a lot of papers have fancy names that I can't even understand the names fully.

So here are two papers I choose [A Hybrid Quantum-Classical Approach to Solving Scheduling Problems](https://ojs.aaai.org/index.php/SOCS/article/view/18390/18181) and [Hybrid Quantum-Classical Scheduling for Accelerating Neural Network Training with Newton’s Gradient Descent](https://arxiv.org/pdf/2405.00252).

I will try to grab an overview and summarize the first chosen paper and send to my supervisor to see if it worth to dig deeper. I don't want to be a lazy dick, I have to make sure that I know the shit I am doing and **my supervisor is really my supervisor, not my babysitter**.

### A Hybrid Quantum-Classical Approach to Solving Scheduling Problems

Because this series is purely about my progress, not the content of my progress. So if you want to check out my note about this paper, please wait for another post or email me.

I sent the link of the paper and my note, don't be shy Linh. You have to grow up.

---

And it's sad to say but maybe that's all for today. I need to sleep early to go to university and work tomorrow. I also need to finish the Qiskit challenge... :) 

