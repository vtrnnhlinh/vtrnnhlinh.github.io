---
layout: page
title: graphrag-mini-pipeline
description: an implementation of GraphRAG
img: assets/img/pj_bgsv_graphrag-mini-pipeline.png
importance: 1
category: engineer
toc:
  sidebar: right
mermaid:
  enabled: true
  zoomable: true
related_publications: true
---

This is my solo project during my internship at BGSV. Happy to share trivia things with you about my proud work.

## Motivation

This is a part of a AI development in my former company. Our AI focuses on assisting Testing in AUTOSAR system. I am assigned to tackle the question: **How the LLM can understand the relationships of components in AUTOSAR?**

To me, relationships = graph. That is the main driver leads me to GraphRAG {% cite edge2024local %}. But because of my weird 

## Conceptual Overview

Before diving into your code, give a bird’s-eye view. One diagram here works wonders: user query → graph retrieval → LLM reasoning → final output.
Readers need to understand the flow before they care about the details.

## Tech Stack

List the tools (Neo4j, Qwen3, Python, maybe LangChain if used). Briefly justify choices—people love knowing why you didn’t just follow a tutorial verbatim.

## Pipeline Breakdown

This is your main dish. Split into subsections like:

Data ingestion & graph construction

Retrieval logic (Cypher queries, relevance ranking)

LLM interaction & response generation
Include code snippets, but keep them minimal and readable—link to full repo if needed.

## Challenges & Gotchas

Share at least one thing that went sideways. Readers love learning from mistakes because it saves them time later.

## Results & Demos

Show output examples. Maybe compare “with GraphRAG” vs “without” so readers see the improvement.

## Future Ideas

End with what you want to try next—e.g., multi-hop reasoning, caching, or bigger LLMs.

## Resources

- [microsoft/graphrag](https://github.com/microsoft/graphrag)
