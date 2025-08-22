---
layout: post
title: Hallucination in NLG - Hallelujah yappin' ya
date: 2025-08-07 09:15:00 +0700
description: in this post we will discover the world of hallucination in NLG
tags: cse ml gom english
categories: Linh-the-Engineer
giscus_comments: true
related_posts: true
toc:
  sidebar: right
related_publications: true
---

God knows why I researched about NLG Hallucination, but here you are, bro!

I will use {% cite ji2023survey %} and {% cite zhu2025can %} as the main source of this post. I may also cite other works but I can't make sure I read all of them carefully, *ehem*. And as my current work is focus on text generation, so I will mainly yap about hallucination in this field.

Okay. Get into the main dish. With the power of deep learning technologies, NLG (Natural Language Generation) develops rapidly. That also leads to the attention for limitations and risks increased, and they find out NLG models often generate nonsense, unfaithful text!

And they call it **hallucination**.

**Hallucination** is a problem that we need to be careful with. Because it hinders performance, raises safe concerns, and leads to potential privacy violations. Like, just imagine *hallucination* in medical application AI :skull:.

## Categorization

From an interesting work that maybe helpful for my work {% cite dziri2021neural %}, we can divide *hallucination* into 2 categories.

1. **Intrinsic Hallucinations**: the generated output **contradicts** the source content.
2. **Extrinsic Hallucinations**: the generated output **can't be verified** from source content.

### Factuality vs Faithfulness

According to the work {% cite maynez2020faithfulness %}, and {% cite ji2023survey %}, we should seperate **factuality** and **faithfulness** to provide more clear understanding.

| Factuality                                   | Faithfulness                                 |
|----------------------------------------------|----------------------------------------------|
| Consistent, truthful to **source knowledge** | Being actual or based on **world knowledge** |

## Contributors to Hallucinations

### From Data

Collecting heuristic data creates mismatches between source and data, that leads to *hallucination*. And in big datasets, there are cases the examples are duplicated or similar, lead the model to favor generating repeats of memorized phrases.

Another problem from data is some doesn't have factual knowledge, like some datasets for chit-chat style. That leads to extrinsic hallucinations. In this case I am not sure it's a bug or a feature.
