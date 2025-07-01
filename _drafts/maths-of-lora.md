---
layout: post
title: Witchcraft of LoRA - Mathematics Explained
date: 2025-07-01 13:30:00 +0700
description: my in-depth explanation from computer science to linear algebra of LoRA
tags: cse ml english
categories: Linh-the-Engineer
giscus_comments: true
related_posts: true
toc:
  sidebar: right
related_publications: true
---

1. Introduction
Brief overview of model fine-tuning challenges in large pretrained models

Motivation for efficient adaptation techniques like LoRA

What LoRA aims to achieve mathematically and practically

2. Background Concepts
Quick recap of linear layers in neural networks (weight matrices, forward pass)

The role of weight updates during fine-tuning

Definition of matrix rank and low-rank matrices

Why low-rank approximations are useful (parameter efficiency, regularization)

3. The Core Idea of LoRA
Formal problem statement: fine-tuning as learning a weight update ΔW

Conventional approach: full-rank ΔW (large parameter count)

LoRA’s approach: approximate ΔW as a product of two smaller matrices: ΔW ≈ A × B, where A ∈ ℝ^{d×r}, B ∈ ℝ^{r×k}, with r ≪ d,k

Explanation of low-rank decomposition here as a parameter bottleneck

4. Mathematical Formulation
Original layer output: y = Wx

Fine-tuned layer with LoRA: y = (W + ΔW)x ≈ W x + A (B x)

Dimensions and interpretation of each matrix (W, A, B)

Training only A and B, freezing W — impact on optimization complexity

Parameter savings analysis (compare number of parameters full ΔW vs. LoRA matrices)

5. Linear Algebra Insights
Why low-rank factorization reduces redundancy and improves generalization

Relationship to matrix factorization techniques (SVD, PCA) — intuitive analogy

Discussion on rank choice r and trade-offs between expressivity and efficiency

6. Optimization and Training Dynamics
How gradient updates are computed for A and B

Why this structure might lead to faster convergence or better regularization

Effect on backpropagation efficiency

7. Extensions and Variants (Optional)
Brief mention of related low-rank adaptation methods or improvements

How LoRA integrates with transformer architectures

8. Practical Implications and Use Cases
Summary of computational benefits: memory, speed, parameter count

Examples of tasks where LoRA shines (e.g., NLP fine-tuning, vision transformers)

9. Conclusion
Recap of the mathematical intuition behind LoRA

Why understanding the math helps in model design and tuning

Encouragement for readers to explore further
