---
layout: post
title: Graph-of-Models - Literature Review 4 - embracing the KGs
date: 2025-08-07 09:15:00 +0700
description: in this post I reflect my understanding in shaping the KGs
tags: cse ml gom english
categories: Linh-the-Engineer
giscus_comments: true
related_posts: true
toc:
  sidebar: right
related_publications: true
---

After the last post reflecting on my actions in battling with datasets, I find out it will be not effective in large-scale. So here I am, in the light of the day, digging **Knowledge Graph (KGs)** again.

## What is it now?

To save time and effort, as if applicable to my real-life job, training models isn't my sh*t, so I have to find easiest way for me to save resources and energy. I plan to use [Kaggle](https://www.kaggle.com/) to train my models. Because the focus of my work is isn't in the power of models but how they graph and connect all together.

But my current focus will be about **Natural Language Processing (NLP)** to processing the datasets and the **Knowledge Graph (KGs)** as the dataframe.

## Embracin' KGs

**Knowledge Graph**, nodes represents **entities**, edges represents **relations**. There are some graph data models commonly used in practice, we will see~

### Directed edge-labelled graphs

Another name is **multi-relational graph**. Defined by a set of nodes and a set of directed labelled edges. Using this data model offers **flexibility** for integrating new sources of data.

Standardized data model of this type is **Resource Description Framework (RDF)**. **RDF** defines different types of nodes:

- **Internationalized Resource Identifiers (IRIs)**: global identification of entities on the Web
- **literals**: string
- **integers, dates,...**
- **blank nodes**: anonymous nodes

### Heterogeneous graphs

This type of graph is a graph where each node and edge are flexible. Different types of nodes can connect directly to each other (?). I hope my understanding is fit.

### Property graphs

This type can provide additional flexibility when modelling more complex relations. The set will be like `property-value` and `label` associated with both nodes and edges.

### Graph dataset

This one consists a set of **named graphs** and **default graph**. Default graph is a graph **without an ID**. This will help in **Linked Data**. Seems very interesting.

---

As when I publish this post, I already get past the Literature Review part and already have my own KG, so I have no motivations to get further and finish this post wholly :skull: But I think these are already enough to cover basic information about KG, if you want to get further, get in practicing :wink:
