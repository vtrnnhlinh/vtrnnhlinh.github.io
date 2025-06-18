---
layout: post
title: Mixture-of-Experts - first diggin'
date: 2025-06-18 15:30:00 +0700
description: my first take when discovering MoE
tags: cse ml moe english
categories: Linh-the-Engineer
giscus_comments: true
related_posts: true
toc:
  sidebar: right
related_publications: true
---

At Bosch, I have a chance to discover about Machine Learning, specifically LLM and MoE. In this post I will share the content of my first presentation about Mixture-of-Experts (MoE). I take the structure and content mainly from a survey in 2025 {% cite mu2025comprehensive %} and some information from a survey in 2024 {% cite Cai_2025 %}.

> **Disclaimer**: I am very noob in this field, I am not sure what I wrote in this post is true. But if I find out any problems, I will update.

## Why MoE?

AI applications are developing fast, we can say some popular names like ChatGPT, Gemini, DeepSeek,... But developing it also faces some problems, 2 major problems are:

- Computational cost of training and deploying
- Integrating conflicting or heterogeneous knowledge within a single model

So here we are, MoE is proposed to tackle these 2 problems. You can imagine MoE as a "divide-and-conquer" approach. 

## MoE components

In MoE structure, we have two main parts: **Experts** and **Router**.

### Router

Router works as a distributor to route data to suitable expert.

We have **Gating Function** is the mathematical implementation of the Router. A good Gating Function meets 2 criteria:

- Accurately discern characteristics of both input data and experts
- Distribute evenly as possible among the predefined experts

We can categorise Gating Function into 3 types:

- **Linear Gating**: Using `softmax` function
- **Non-linear Gating**: Using **cosine similarity** in assigning experts
- **Soft MoE**: Combining tokens to avoid dropping tokens issues

### Experts

Experts are small LLM models that specialise in solving a defined dataset. The **Experts Network** based on Transformer {% cite vaswani2023attentionneed %} structure.

There are 3 popular experts network method:

- Replace FFN layer in Transformer with an MoE layer
  - Suitable to incorporate sparse activation mechanisms
  - Ideal choice for introducing the MoE mechanism
- Apply MoE to the attention module in Transformer
	- **MoA** {% cite wang2024moamixtureofattentionsubjectcontextdisentanglement %} Mixture-of-Attention – gating network to dynamically select the most relevant attention
	- **MoH** {% cite jin2025mohmultiheadattentionmixtureofhead %} Mixture-of-Head attention – has great potential
- Apply MoE to CNN layer
	- Fully leverage CNN’s strengths in local feature extraction 
	- Apply mainly in Computer Vision field

## MoE Paths

### Routing Strategy

**Routing Strategy** based on:

- Token-Level
- Modality-Level
- Task-Level
- Context-Level
- Attribute-Level

### Training Strategy

**Training Strategy** has 3 steps:

- Auxiliary Loss Function Design: balance usage and distribute load
- Expert Selection: choose expert for data input. Some popular methods like *TopK, Top1, TopP,...*
- Pipeline Design: optimize resource allocation and distribute data among experts

## My current work

I am trying to use [Megatron-SWIFT](https://swift.readthedocs.io/en/latest/Instruction/Megatron-SWIFT-Training.html) Framework to train **Qwen2.5-7B-Instruct** {% cite qwen2.5 %}. It is really strugging even from first step is setup environment, when have some results, I will write post sharing about that. Hopefully I can write proper tutorial the next time we meet.
