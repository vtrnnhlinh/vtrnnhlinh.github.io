---
layout: post
title: Tutorial - Megatron-SWIFT and Qwen2.5 Setup
date: 2025-06-24 16:45:00 +0700
description: my tutorial to setup Megatron-SWIFT to train Qwen2.5 locally
tags: cse ml moe english
categories: Linh-the-Engineer
giscus_comments: true
related_posts: true
toc:
  sidebar: right
related_publications: true
---

This tutorial based a lot on my experience with my company's servers. So maybe there is some things not applicable in your case. Leave comment if you need anything to discuss.

## Purpose

I am trying to fine-tunning a model with Mixture-of-Experts (MoE) {% cite sanseviero2023moe %} methodology. I choose **Megatron-LM** {% cite shoeybi2019megatron %} and **SWIFT** {% cite zhao2025swift %} as the framework.

The tutorial I am following is: [Megatron-SWIFT Training](https://swift.readthedocs.io/en/latest/Instruction/Megatron-SWIFT-Training.html).

## Prerequisites

- Operating System: **Linux**
- **Python** should be pre-installed. Check if your OS already has Python.
```bash
python3 --version
```
- If your OS doesn't have Python yet, run below commands to install (this apply for Ubuntu, if you use different distro, google the tutorial for your OS).
```bash
sudo apt install python3 python3-pip
```
- Using virtual environment is a good practice for Python, I use `anaconda` for this. Follow [this guide](https://docs.conda.io/projects/conda/en/latest/user-guide/install/linux.html) to install `anaconda` on Linux.
- If you want to train with GPU, you need to install `cuda`: [CUDA Installation Guide for Linux](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html). **Recommended version**: `12.1.0`.
- With this framework, you also need to install `cuDNN`: [Installing cuDNN Backend on Linux](https://docs.nvidia.com/deeplearning/cudnn/installation/latest/linux.html). **Recommended version**: `9`.

## Install Megatron-SWIFT

First, we will create a virtual environment with `conda`:
```bash
conda create --name <ENV_NAME> python=3.10
conda activate <ENV_NAME>
```

Then we will install `pytorch` and `torchvision` first.
```bash
pip install pytorch==2.3.0 torchvision==0.18.0
```

Next we need to install `apex`, `transformer-engine`, and `ms-swift`.

```bash
git clone https://github.com/NVIDIA/apex
cd apex
pip install -v --disable-pip-version-check --no-cache-dir --no-build-isolation --config-settings "--build-option=--cpp_ext" --config-settings "--build-option=--cuda_ext" ./
pip install transformer-engine
pip install ms-swift
```

## Download Qwen2.5

### Install `git lfs`

Check availability of `git` and `git lfs`.
```bash
git --version
git lfs version
```

If your enviroment still not have `git-lfs` you need to install it
```bash
conda install conda-forge::git-lfs
```

### Clone model repo

**Qwen2.5** {% cite qwen2.5 %} is the model I use to train. First we will visit [HuggingFace](https://huggingface.co/) to create an account. Then visit **Profile > Access Tokens > Create new token**. Choose **Token Type** is **Write**. Remember to **copy the token**.

Return to our activated conda environment. Install `huggingface_hub`:
```bash
pip install huggingface_hub
```

Then login into your `huggingface` token.
```bash
huggingface-cli login --token <your-token>
```

Finally, we can clone the model repo to our folder. Example: [Qwen2.5-7B-Instruct](https://huggingface.co/Qwen/Qwen2.5-7B-Instruct)

```bash
cd <model folder>
git lfs install
git clone https://huggingface.co/Qwen/Qwen2.5-7B-Instruct
```
## Test

Create a `test.sh` file to run test.

```bash
CUDA_VISIBLE_DEVICES=0 \
swift export \
    --model <model_dir>/Qwen2.5-7B-Instruct \
    --to_mcore true \
    --torch_dtype bfloat16 \
    --output_dir Qwen2.5-7B-Instruct-mcore
```

---

I am afraid that because I wrote the tutorial after finishing setup, so maybe there is some incompatible version and tweak steps that I forgot. So comment to tell me if you can't follow the tutorial.
