---
layout: post
title: Mixture-of-Experts - first diggin'
date: 2024-06-08 01:08:00 +0700
description: my first take when discovering MoE
tags: cse ml moe english
categories: Linh-the-Engineer
giscus_comments: true
related_posts: true
toc:
  sidebar: right
---

At Bosch, I have a chance to discover about Machine Learning, specifically LLM and MoE. In this post I will share the content of my first presentation about Mixture-of-Experts (MoE).

## Basics of MoE

### Why MoE?

AI applications are developing fast, we can say some popular names like ChatGPT, Gemini, DeepSeek,... But developing it also faces some problems, 2 major problems are:

- Computational cost of training and deploying
- Integrating conflicting or heterogeneous knowledge within a single model

So here we are, MoE is proposed to tackle these 2 problems.
