---
layout: post
title: Graph-of-Models - Literature Review 3 - and they call LLM and KG
date: 2025-07-11 14:45:00 +0700
description: 
tags: cse ml gom english
categories: Linh-the-Engineer
giscus_comments: true
related_posts: true
toc:
  sidebar: right
related_publications: true
---

Bro, hear me out. I feel like my [Graph-of-Models](https://vtrnnhlinh.github.io/blog/tag/gom/) dream is falling apart. There is a field called **LLM+KG** seems very close to my idea, I think it worth to see what is it.

After a day, I figure out that I can deploy my idea extending from this one to maximize the efficient of input data and methods to do the logic.

## Surveys

### What is LLM+KG?

LLM or **Large Language Models** is the hype of the world nowadays with the appearance of ChatGPT, Gemini or Bing AI (I heard about a shit called "vibe-coding" based on Claude but don't pay attention to it yet). To me it's a bunch of `tensorflow` files and `json` files *eyes roll*.

KG or **Knowledge Graph** is a structure represents the entity and its description, for the better data integration and insights {% cite hogan2021knowledge %}. 

### Why LLM+KG?

Based on the survey {% cite pan2024unifying %}, the combination of LLM and KG is very promising. They can fix each other's cons with their pros. 

According to the authors, there will be 3 types of framework developing in this direction:
1. **KG-enhanced LLMs**: incorporate KGs during pre-training to boost the power of LLMs
2. **LLM-augmented KGs**: using the power of LLM for various KG tasks
3. **Synergized LLMs + KG**: bidirectional reasoning to enhance both

After surfing for a while, with the main resource is [XiaoxinHe/Awesome-Graph-LLM](https://github.com/XiaoxinHe/Awesome-Graph-LLM), I use 3 more works to research, they are: {% cite cheng2024call %}, {% cite zhang2024extract %} and {% cite jiang2024kg %}. Beside {% cite du2024large %} I already talked about in [previous post](https://vtrnnhlinh.github.io/blog/2025/gom-literature-review-1/), we will create a table to compare the work:

Table: Comparison between 4 chosen works
| Metric                | GaCLLM {% cite du2024large %}            | ReaDi {% cite cheng2024call %}              | EDC {% cite zhang2024extract %}              | KG-FIT {% cite jiang2024kg %}              |
|-----------------------|-------------------------------------------|---------------------------------------------|----------------------------------------------|--------------------------------------------|
| Problem & Methodology | GCN-based LLM adaptation                  | Structured reasoning refinement              | LLM-to-Graph + Retrieval-Augmented Generation| Hierarchical graph fine-tuning             |
| Code Structure        | No code                                   | Well-structured                              | Structured, but dataset issues               | Decent structure, nothing remarkable       |
| Reputation            | 15 citations                              | 23 citations / 12 GitHub stars               | 52 citations / 122 GitHub stars              | 11 citations / 112 GitHub stars            |
| Last Update           | 404 Not Found                             | ~1 year ago                                  | 11 months ago                                | 9 months ago                               |

So in this post, we will focus on **edc** {% cite zhang2024extract %} and **KG-FIT** {% cite jiang2024kg %}.

## edc

In the current development of **edc** {% cite zhang2024extract %}, it's likely that the work is **LLM-augmented KGs**, but I believe there is potential to make it **Synergized LLMs + KG**. The purpose of this work is automatically create KGs to make it applicable when doing real-world application. This work proposes a framework has 3 steps: **Extract-Define-Canonicalize**
- **Extract**: take information from the dataset and convert them into a relation triplet `[Object A, Relationship of A and B, Object B]`
- **Define**: write the definition for each component of the schema
- **Canonicalize**: use the schema definition from **Define** step to standardize the triplets

The **Schema Retriever** of this work is what makes me impressed. It's a trained model specialized in extracting schema components relevant to input text. This work divides step by step, in which step you can use a different model. It's challenging but also a great chance to tailor-make and optimize the workflow.

## KG-FIT

KG-FIT or **Knowledge Graph - Finetuning** {% cite jiang2024kg %} has a different mindset to **edc** {% cite zhang2024extract %}. It focuses on fine-tuning or having a powerful LLM to improve the KG. The steps are less complex, the step to process the input data is also more easier for the devs. My concern is the graph traversing and the size of LLM as my resource isn't enough to fine-tune a large model. 

---

Maybe because I am already fall into **edc** so I am less investigated in this work. 

I feel like I can integrate **edc** into my next action :>
