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

LoRA, or **Lo**w-**R**ank **A**daption {% cite hu2022lora %} isn't a new anymore, but it becomes a solid technique. LoRA can freezes pretrained model weights, injects trainable rank decomposition matrices into each layer of the `Transformer` architecture. From that, LoRA can greatly reduces the number of trainable parameters for downstream tasks.

You are here, in the light of the day, observe the dancing of Linh in her own world. When I type this line, I am not sure if it's a high quality post, but I believe it's my best effort.

---

## The Background

Many NLP applications rely on adapting *one* large-scale, pre-trained language model to *multiple* downstream applications. Such adaption is usually done via *fine-tuning* which updates all the params of pre-trained model. The major downside is that the new model contains a lot of similar params with the original model. The larger the model, the more inconvenient it is.

Approaches for this problem:
- Adapt some params
- Learn external modules for new task

LoRA is proposed based on the idea that change in weights during model adaption has a low "intrinsic rank". 
