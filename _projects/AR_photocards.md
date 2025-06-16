---
layout: page
title: AR Photocards
description: a support project for NSND Tu Long at ATVNCG Concert Day3, 4 with Augmented Reality technology
img: assets/img/AR_photocards.png
importance: 1
category: fun
toc:
  sidebar: right
---

This is the first coding product project I ever made. I don't like web development, but sometimes, it's the optimized approach to your problem.

## Introduction

Freebies is a crucial part of ATVNCG community, but an impressive one is a whole problem. How do we make the freebies worth keeping?

Our main goal is sending a message from our idol to the fans. To reach the goal, we decide to use Augmented Reality technology.

The idea is when you scan the AR mark on the card, a video will pop up and play.

```mermaid
stateDiagram-v2
    [*] --> Phone_Camera
    Phone_Camera --> AR_Photocards: Scan AR Marks
    AR_Photocards --> Videos: Show Videos
    Videos --> [*]
```

## Objectives

- Able to play AR Videos
- Different marks show different videos
