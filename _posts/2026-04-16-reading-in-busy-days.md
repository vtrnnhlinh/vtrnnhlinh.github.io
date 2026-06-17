---
layout: post
title: Reading in busy days
date: 2026-04-16 12:00:00 +0700
description: more details on Linh's reading setup with Kobo Libra Colour
tags: reading english hobbies
categories: Journal-of-Sciences
giscus_comments: true
related_posts: true
toc:
  sidebar: right
---


Not sure if I told this story, hope you don't mind to listen to it again.

I am a stubborn person, that I worshipped physical books. Not only for reading, but for collecting purpose.

But in the first days I had my internship at Bosch, the total distance I needed to travel is around 60km a day with traffic jam and the heat of this city.

That exhausted me, when I reach home, it's already around 8pm or later. I can't barely do anything beside eat something and take a bath, then mindlessly scrolled my phone on bed.

My physical books are too heavy for me to lie on bed and read, you know, dont expect me to sit up and read. The day was long enough that time. 

## Ereader

### Setup

My first ereader is a [Kobo Clara Colour](https://vtrnnhlinh.github.io/blog/2025/my-first-ereader/) I bought second hand. I talked about how I setup the device, but I think an update for the whole flow of my reading is an nice addition to my blog.

First, now I use KOReader instead of vanilla reader. The key feature that made me stick with KOReader is their reading statistics - Calendar.

{% include figure.liquid loading="eager" path="assets/img/koreader_calendar.png" class="img-fluid rounded z-depth-1" %}
My April reading calendar

Fancy, eh? And actually, you can make KOReader beautiful. I use [SimpleUI plugin](https://github.com/doctorhetfield-cmd/simpleui.koplugin).

{% include figure.liquid loading="eager" path="assets/img/koreader_homepage.jpg" class="img-fluid rounded z-depth-1" %}
Koreader with SimpleUI is a good experience

With 7in screen of Libra and auto-crop feature of KOReader, it's actually nice when reading pdf file. 

### Accessories

I use a detachable sleepcover with a bag to store my ereader.

The only thing I don't like from my sleepcover is its transparent backshell isn't so tightknit, so temporarily I can't decorate my ereader with stickers yet. Its stand feature is better than the last one design on my Clara.

I plan to buy a bluetooth page turner in future, it would be a nice addition when you hide in the blanket only tug the head out to read, hehe.

## Resources

So now about ebooks files, I admit I usually being a pirate. I only buy the book if the price is reasonable, there is no reasons to spend a digital file equal to a physical edition.

### De-DRM Books on archlinux

1. Install `gourou`: `yay -S gourou`
2. After having `gourou`
    1. `adept_activate -u <AdobeID USERNAME>` or`adept_activate --anonymous` to use an anonymous account with no need to login
    2. `acsmdownloader -f <ACSM_FILE>`(the acsm file you just export from ebook selling site)
    3. After the encrypted document file is downloaded: `adept_remove filename.epub`

My sources of buying books is Kobo Store and Google Books (available for export). I can de-DRM the book and read freely in KOReader. I also subscribe to Bookbub to check out the discounted books: [Bookbub Subscribe Link](https://www.bookbub.com/referral/97f302ef0f9aa28e)

After having the file, I will import to [Calibre](https://calibre-ebook.com/download) and **Send to Device**. Why I don't directly drag n drog my files? Because Calibre will help format the name of the files, my aesthetic soul is pleased.

