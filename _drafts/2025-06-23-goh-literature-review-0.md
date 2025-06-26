---
layout: post
title: Graphs-of-Heads - The First Literature Review
date: 2025-06-23 11:30:00 +0700
description: the first literature review of my series writting about my work I called Graph-of-Heads
tags: cse ml moe goh english
categories: Linh-the-Engineer
giscus_comments: true
related_posts: true
toc:
  sidebar: right
related_publications: true
---

At work I am assigned to learn about Mixture-of-Experts (MoE) but my mentor wants another specific, tailor-made approach to our problem.

I name it **Graphs-of-Heads** (GoH).

I have a vague idea in my mind but I think I need a **Literature Review** to make my idea becomes realistic as most as possible.

However, I don't follow the ordinary literature review in academic research, as I am working in industry. I will try to adapt and build the code along the way.

This is a series of posts about this project, and this first post is about 2 first literature review of mine.

## Plan

In my first plan, I want to use MoH structure {% cite jin2024moh %} as the base development. Then I will apply the experts network based on {% cite du2024large %}.

The Python project structure I apply is the [navdeep-G/samplemod](https://github.com/navdeep-G/samplemod). 

The training framework will be Megatron-LM {% cite shoeybi2019megatron %} with continual, meta and multi-task learning. Federated Learning will be developed when the application is deployed for many users.

{% include figure.liquid loading="eager" path="assets/img/plan_llm.png" class="img-fluid rounded z-depth-1" %}
My imagined structure.

## Attention is all you need!!

We will start from `Transformer` Structure {% cite vaswani2017attention %}.

I am pretty bad at Python, so I will learn and reference a lot of repositories, both in how they structure the file and the coding methodology.

I reference [SCCSMARTCODE/attention-is-all-you-need-from-scratch](https://github.com/SCCSMARTCODE/attention-is-all-you-need-from-scratch) and [jadore801120/attention-is-all-you-need-pytorch](https://github.com/jadore801120/attention-is-all-you-need-pytorch) to re-made the `transformer` structure.

`Transformer` is an architecture rely entirely on an attention mechanism to draw **global dependencies** between I/O. `Transformer` allows significantly more parallelization.

I believe my wanted structure is far from this work, but a thousand miles start from a step.

### Encoder & Decoder

{% include figure.liquid loading="eager" path="assets/img/attention_architecture.png" class="img-fluid rounded z-depth-1" %}
`Transformer` architecture. Source: {% cite vaswani2017attention %}.

With the illustration, you can see the `Transformer` has 2 main modules are **Encoder** and **Decoder**. There is also something worth noticing is **Positional Encoding**.

**Encoder** and **Decoder** has a stack of $N=6$ layer. Encoder's layer has 2 sub-layers:

- Multi-Head Attention
- Feed Forward

While Decoder's layer has 3 sub-layers:

- Multi-Head Attention
- Feed Forward
- Masked Multi-Head Attention

We employ residual connection around each of sub-layers, followed by layer normalization. The dimension is $d_{model} = 512$.

### Attention

To me, this is the heart of this work.

Attention function is mapping a query and a set of key-value pairs to vectors output.

- Output is weighted sum of values
- The weight has another compatibility function to calculate

#### Scaled Dot-Product Attention

- Input:
  - **Q**: queries
  - **K**: keys of dimension $d_k$
  - **V**: values of dimension $d_v$

$$Attention (Q,K,V) = softmax(\frac{QK^T}{\sqrt{d_k})V$$

- $\frac{1}{\sqrt{d_k}}$: scaling factor. Why? To avoid `softmax` is pushed into regions result extremely small gradients
- **Dot-product attention** faster and more space-efficient in practice than **additive attention**

#### Multi-Head Attention

They perform the attention function in parallel, yielding $d_v$-dim output values. They are concatenated and projected, make final values.

$$MultiHead(Q,K,V) = Concat(head_1,.... head_n)W^O$$
$$head_i = Attention(QW^Q_i, KW^K_i, VW^V_i)$$

## Transformer to MoH

In my understanding, MoH {% cite jin2024moh %} is a mix of Mixture-of-Experts (MoE) and `transformer` {% cite vaswani2017attention %}. 

## Training Strategy

## Conclusion
