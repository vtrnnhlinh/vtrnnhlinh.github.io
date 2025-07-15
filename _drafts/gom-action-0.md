---
layout: post
title: Graph-of-Models - a journey of a thousand miles begins with a single step 
date: 2025-07-11 18:15:00 +0700
description: the results and reflection of cosine similarity graph and first attempt to fine-tune
tags: cse ml gom english
categories: Linh-the-Engineer
giscus_comments: true
related_posts: true
mermaid:
  enabled: true
  zoomable: true
toc:
  sidebar: right
related_publications: true
---

Hohoho, finally, I did something instead of talking :laughing:

There are 2 main achievements I will present in this post. First, I calculated the **Cosine Similarity** {% cite gunawan2018implementation dehak2010cosine %}. Second, I have attempted to fine-tuned first `miniModel_1`, even though the result isn't so good, but still.

I can show Jupyter Notebook and such in this blog, but I won't do that here, at least today. I believe the engineering mindset is more worth sharing.

## What I did?

I will try to explain from the idea, purpose to implement.

### Repo Structure

The current code structure of this project is something like this:

```
.
├── datasets
│   ├── dataset_1
│   ├── dataset_2
│   ├── dataset_3
├── edges_calculation
│   ├── cosine_similarity
│   │   └── results
│   └── jaccard_index
├── environment.yml
├── graph-of-models
├── graph_visualization
│   ├── cosine_similarity
│   └── jaccard_index
├── inference
├── LICENSE
├── Models
└── README.md
```

The workflow is divided into different components (folders).

The `datasets` and `Models` contents are in `.gitignore` due to its mass size. 

### Cosine Similarity Graph Visualization

{% include figure.liquid loading="eager" path="assets/img/cosine_similarity_graph_0.png" class="img-fluid rounded z-depth-1" %}
The first **Cosine Similarity** result we have.

## Some reflections

## Future action


