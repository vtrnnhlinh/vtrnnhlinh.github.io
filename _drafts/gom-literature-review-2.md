---
layout: post
title: Graph-of-Models - Literature Review 3 - and they call LLM and KG
date: 2025-07-01 13:30:00 +0700
description: 
tags: cse ml gom english
categories: Linh-the-Engineer
giscus_comments: true
related_posts: true
toc:
  sidebar: right
related_publications: true
---

Bro, hear me out. I feel like my [Graph-of-Models](https://vtrnnhlinh.github.io/blog/tag/gom/) dream is falling apart. There is a field called **LLM+KG** seems very near to my idea, I think it worth to see what is it.

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

| Metric                | Work                                                                                                                |                                                                                                                                                                     |
|-----------------------|--------------------------------------------------------------------|-------------------------------------------------|------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
|                       | GaCLLM                                                             | readi                                           | edc                                                                    | KG-FIT                                                                                      |
| Problem & Methodology | Adapts the LLM's to operate within a graph-convolutional framework | Generate and refine a structured reasoning path | Sorting LLM Structure to Graph, Retrieval-Augmented Graph Construction | LLM-Guided Hierarchy Construction,  Global Knowledge-Guided Local KG Fine-Tuning, Graph RAG |
| Code structure        | No code                                                            |     Well-structured, no issues                  |     Structured, issues about dataset seems sus                         |     Structure not so brilliant, no issues                                                   |
|     Reputation        |     15 citations                                                   |     23   citations + 12 stars                   |     52   citations + 122 stars                                         |     11   citations + 112 stars                                                              |
|     Update?           |     404   Not Found                                                |     Last   year                                 |     11   months ago                                                    |     9   months ago                                                                          |

## edc
