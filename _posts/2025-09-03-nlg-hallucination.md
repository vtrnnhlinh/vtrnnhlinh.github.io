---
layout: post
title: Hallucination in NLG - Hallelujah yappin' ya
date: 2025-09-03 09:15:00 +0700
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

### From Training and Inference

Even when your dataset has very little divergence, *hallucination* will find you in another way around, in the way you train and inference your model :evil:.

First is maybe your encoder isn't suitable? The encoder will turn your input text into meaningful representations, if the encoder learns wrong correlations between different parts of the training data, everything will drift away, fast.

Then the decoder, what if the decoder attends the wrong part of encoded input source? Or some decoding strategy improves the generation diversity, like *TopK* sampling strategy is positively correlated with increased hallucination. This is a point we need to find a middle ground to balance between hallucination and answer quality.

The *exposure bias*, or the discrepancy between training and inference is also a problem. It's like you when studying and in exam. But I think this one can be improved through some techniques :sparkles:.

Pre-trained models can prioritize parametric knowledge over the provided input that leads to hallucination. About this information, I wonder about fine-tuned models *thonk*.

## Metrics

Thank you, this is very valuable section, I love it. Added FRANK (cite frank) and TRUE (cite true) to my collection to assess my model later. These have the effort to quantifying hallucination?

One of the simplest approaches is to leverage **lexical features (n-grams)**. This will calculate overlap information and contradictions between generated and reference texts.

NLG tasks can have many outputs from the same input (one-to-many mapping), so to simplify the evaluation setup, they only rely on the source text as sole reference.

**Model-based** metrics measure the hallucination degree in generated text.

*Information Extraction (IE)-based* use IE models to represent the knowledge in tuplet format then verify against tuplets extracted from source/reference.

*QA-based* works in 3 steps:

- Question generation (QG) model generates set of question-answer pairs
- Question answering (QA) model answers generated questions - become the reference
- Hallucination score calculates base on **similarity** of corresponding answers.

The problems of these 2 approaches are similar, it depends on the accuracy of the models using to evaluate.

*Natural Language Inference (NLI)* metrics determines whether a "hypothesis" is true, false or undetermined. NLI-based approach seems more robust, but also has bad performance in abstractive summarization task.

*Faithfulness Classification Metrics* are constructed to improve from the NLI-based metrics. But I don't understand how superior it is (yet).

*LM-based Metrics*. This method uses 2 language models.

- Unconditional LM - only trained on the **target data**.
- Conditional LM - trained on **both source and target data**.

*Human Evaluation* is still one of the most commonly used approaches as current automatic evaluation of hallucinations is still imperfect. Two main forms of human evaluation:

- **Scoring**: human rate the hallucination level in a range
- **Comparing**: Human compare output texts with baseline

## Hallucination Mitigation Methods

### Data-Related

- Building a faithful dataset. You can use "rice-fuel machines" to write clean and faithful targets, another way is use model to generate data and instruct annotators to label.
- Clean Data Automatically. This approach suitable for case has low or moderate level of noise in original data.
- Augment Information. Help model has better semantic understanding, enforce a stronger alignment between inputs and outputs.

### Modeling and Inference

In my understanding, we can reduce the hallucination by specific (or tailor-made) encoder, attention and decoder strategy. This seems an interesting aspect to discover? :wink: Ahehe.

About Training strategy, there are a lot of approaches, we can consider some famous one like Reinforcement Learning (RL), Multi-task Learning, etc etc. An another way to reduce hallucination while requires less training data is post-processing. Some of works follow **generate-then-define strategy**. They use SOTA models to get the results, then correct it my using small amount of automatically generated training data.

---

I plan to write longer but I think it's long enough and I know enough to use in this topic, and I am afraid if I don't publish now, I won't have any motivations to finish like I planned. So here you are, a piece of my learning.
