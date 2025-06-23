---
layout: post
title: Graphs-of-Heads - The First Literature Review
date: 2025-06-23 11:30:00 +0700
description: the first literature review of my series writting about my work I called Heads of Neuron Networks
tags: cse ml moe goh english
categories: Linh-the-Engineer
giscus_comments: true
related_posts: true
toc:
  sidebar: right
related_publications: true
---

At work I am assigned to learn about Mixture-of-Experts (MoE) but my mentor wants another specific approach to tailor-made to our problem.

I name it **Graphs-of-Heads** (GoH).

I have a vague idea in my mind but I think I need a **Literature Review** to make my idea becomes realistic as most as possible.

However, I don't follow the ordinary literature review in academic research, as I am working in industry. I will try to adapt and build the code along the way.

This is a series of posts about this project, and this first post is about 2 first literature review of mine.

## Plan

In my first plan, I want to use MoH structure {% cite jin2024moh %} as the base development. Then I will apply the experts network based on {% cite du2024large %}.

The Python project structure I apply is the [navdeep-G/samplemod](https://github.com/navdeep-G/samplemod). 

The training framework will be Megatron-LM {% cite shoeybi2019megatron %} with continual, meta and multi-task learning. Federated Learning will be developed when the application is deployed for many users.

## Attention!!

I want to develop from scratch to understand and have fully the technology in my hands. We will start from `Transformer` Structure {% cite vaswani2017attention %}.

I am pretty bad at Python, so I will learn and reference a lot of repositories, both in how they structure the file and the coding methodology.

I reference [SCCSMARTCODE/attention-is-all-you-need-from-scratch](https://github.com/SCCSMARTCODE/attention-is-all-you-need-from-scratch) and [jadore801120/attention-is-all-you-need-pytorch](https://github.com/jadore801120/attention-is-all-you-need-pytorch) to re-made the `transformer` structure.

`Transformer` is an architecture rely entirely on an attention mechanism to draw **global dependencies** between I/O. `Transformer` allows significantly more parallelization.

I believe my wanted structure is far from this work, but a thousand miles start from a step.

### Architecture of Transformer

{% include figure.liquid loading="eager" path="assets/img/attention_architecture.png" class="img-fluid rounded z-depth-1" %}
`Transformer` architecture. Source: {% cite vaswani2017attention %}.

**Encoder** has a stack of $N=6$ layer. Each layer has 2 sub-layers:

- Multi-Head Attention
- Feed Forward

We employ residual connection around each of 2 sub-layers, followed by layer normalization.

### My Proposal of Transformer

- `Objects.py`: Implement of **Feed Forward** and **Multi-Head Attention**
- `Stacks.py`: Implement of **Encoder** and **Decoder** Stacks. Or, `SubLayers.py`'s components with **layer normalization**.
- `SubLayers.py`: Implement of **residual connection** with `Objects.py`'s components.


## Structure of Network

## Training Strategy

## Conclusion
