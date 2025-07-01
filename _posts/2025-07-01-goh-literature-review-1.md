---
layout: post
title: Graphs-of-Heads - The Second Literature Review
date: 2025-07-01 13:30:00 +0700
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

The graph will be $G = (V, E)$ with $V$ are the users and items. The edges $E$ are constructed by the interactions between users and items. Each node has a textual description. 

We have prompt template to rewrite/generate the description of users and items. Let call it $PROMPT_{user}$ and $PROMPT_{item}$.

To improve the quality of descriptions **for users**, we will rewrite user's raw description $T_u$ by,

$$T'_u = LLM(PROMPT_{user}(T_u, \{T_i:(u,i) \in E\})),$$

Similarity, to improve the quality of descriptions **for items**, we will rewrite user's raw description $T_i$ by,

$$T'_i = LLM(PROMPT_{item}(T_i, \{T_u:(u,i) \in E\})),$$

To do this, they enhance the layers by running LLM in a loop with first layer is the raw input. LLM now is taking the role as an "aggregator" in the graph convolutional processing. After $L$ interations, we obtain different layers of user and item descriptions for both users and items.

{% include figure.liquid loading="eager" path="assets/img/token_llm.png" class="img-fluid rounded z-depth-1" %}
Different ways for token usage in LLMs {% cite du2024large %}.

They claim the proposed LLM-based convolutional strategy has 2 main strengths:
- High quality descriptions of users and items in a least-to-most manner
- Effectively capture graph-related info with limited context of length
  - Break down the task of description enhancement into multiple steps
  - Each step (layer) only integrates the descriptions of one-decrease in the number of tokens needed
- Efficiently alleviate the redundancy of describing the graph for target nodes

### Aligning GCN-based Embeddings for Recommendation

To bridge text info and structural info, they align the descriptions of users and items with their **embeddings** in a unified manner.

First layer represents the initial step for both users' and items' representation. Each user and item will associated with the embedding from a specific ID. Then they encode them into the constant text-based embedding by encoder. 

There will be an *objective function* to measure the matching scores between users and items for final predictions. 

## Some of Thoughts

I am still confused and not clarify my idea yet. Do you have any thoughts? But I guess re-enact the work of GaCLLM will be interesting.

This afternoon I will have a meeting with my team to discuss about this, I will update the progress in upcoming posts.
