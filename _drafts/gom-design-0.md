---
layout: post
title: Graph-of-Models - First Sketch
date: 2025-07-01 13:30:00 +0700
description: the first step in developing GoM, to sketch what I will do and the most abstract ideas
tags: cse ml moe goh english
categories: Linh-the-Engineer
giscus_comments: true
related_posts: true
toc:
  sidebar: right
related_publications: true
---

After hopeless moments, I think I figure a prototype idea for my work. Everything is less and less vague. Even though the limitations seem clear but if it can serve the final purpose, it is good.

## First Draft

{% include figure.liquid loading="eager" path="assets/img/gom_first_draft.png" class="img-fluid rounded z-depth-1" %}
My first proposed structure.

The structure is simple, there are 3 main parts:
- Input Processing
- Graph-of-Models
- Output Processing

There are 3 problems we need to encounter:
- How we shape the graph?
- How we processing the input?
- How the graphs "communicate" and give output?

The limitation of this work is the complexity to make the graph or input processing, and there is a concern about extending the graph. So there must be a sustainable method to make the algorithm of making graph brilliant and less hand-work.

## First Idea

How to solve those 3 problems is a problem. I don't know if I should read some papers about Multi-Agent AI.
