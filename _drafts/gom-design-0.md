---
layout: post
title: Graph-of-Models - First Sketch
date: 2025-07-01 13:30:00 +0700
description: the first step in developing GoM, to sketch what I will do and the most abstract ideas
tags: cse ml goh english
categories: Linh-the-Engineer
giscus_comments: true
related_posts: true
toc:
  sidebar: right
related_publications: true
---

After hopeless moments, I think I figure a prototype idea for my work. Everything is less and less vague. Even though the limitations seem clear but if it can serve the final purpose, it is good.

## First Draft

{% include figure.liquid loading="eager" path="assets/img/gom_first_structure.png" class="img-fluid rounded z-depth-1" %}
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

How to solve those 3 problems is a problem. I don't know if I should read some papers about Multi-Agent AI @@.

### How we shape the graph?

{% include figure.liquid loading="eager" path="assets/img/gom_idea_ex.png" class="img-fluid rounded z-depth-1" %}
My imagination on how the graph should looks like. It's something like Dijkstra graph {% cite bento2019dijkstra %}.

To shape the graph, we need to calculate the relationship between the models which is based on the **datasets we used to fine-tune**.

To calculate this number like in the diagram above, there are some options that I am not sure which one is the best:
- **Jaccard index** {% cite niwattanakul2013using %}: This method seems faster to run, run on the raw dataset.
- **Cosine Similarity** {% cite gunawan2018implementation dehak2010cosine %}: This method seems slower as I need to convert the dataset into embeddings to calculate.

There are more advanced methods but I don't have time to dig deeper yet. I think I will apply 2 classic methods first to see the efficiency.

## First Step

Here is my collection of the models and datasets I collect for this project: [vtrnnhlinh's Collection: Graph-of-Models](https://huggingface.co/collections/vtrnnhlinh/graphs-of-models-686f8bfc6070ec6ad9111fff).


