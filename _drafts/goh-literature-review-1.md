---
layout: post
title: Graphs-of-Heads - The Second Literature Review
date: 2025-06-27 18:30:00 +0700
description: the second literature review of my series writting about my work I called Graph-of-Heads
tags: cse ml moe goh english
categories: Linh-the-Engineer
giscus_comments: true
related_posts: true
toc:
  sidebar: right
related_publications: true
---

In this second part, we will focus mainly on GaCLLM {% cite du2024large %} and my new take on the system I imagined after digging deeper the work.

Read the previous part here: [Graphs-of-Heads - The First Literature Review](https://vtrnnhlinh.github.io/blog/2025/goh-literature-review-0/). 

---

## GaCLLM

In this work, authors proposed 4 main modules:
- Conduct SFT (Supervised Fine-tuning) for the LLM
- Propose LLM-based graph-aware convolutional inference
- Align and fuse generated description into graph-based embeddings
- Introduce the objective function and learning process

### Supervised Fine-tuning

In first stage, they fine-tune LLM with domain-specific data. This involves training of LLM with descriptions from matched user-item pairs. They will construct the prompt template for items. The optimization process involves minimizing the negative log-likelihood loss for these templates.

They adopt LoRa {% cite hu2022lora %} for parameter-efficient learning to improve time and computational efficiency.

### LLM-based Convolutional Inference in Graph

{% include figure.liquid loading="eager" path="assets/img/graphs_gacllm.png" class="img-fluid rounded z-depth-1" %}
My understanding about proposed graphs.

The graph will be $G = (V, E)$ with $V$ are the users and items. $V = \{u|u \in U\} \cup \{ i|i \in I\}$. The edges $E$ are constructed by the interactions between users and items. Each node has a textual description. 
