---
layout: page
title: AR Web - Experience idol card  
description: 
img: assets/img/product.png
importance: 1
category: hobbies 
related_publications: false 
---

Maybe you don't know, I am a fan of People's Artist Tu Long! I am a part of a small fanpage, and Concert ATVNCG Day 3-4 is coming. A question popped up in our brain:

> How to make freebies interesting and worth keeping?

And then, we decided to make AR card to gift people attending the concert.

---

## I. Ideas

We want to make a card that you can see a video of Mr. Tu Long say or sing. But how can we do that?

I am responsible for the core of this project. But I don't experienced before. To be honest, my only experience is with Embedded System. I don't know web, and I hate it.

After a while, I follow a Reddit post about `three.js` and `ar.js`, and even there is [AR-Examples](https://github.com/stemkoski/AR-Examples) by `stemkoski` to modify.

> Why I don't use default features of iOS or Android?

I have no experience with mobile development before, and especially I don't have a iPhone to test, while I know a lot of people in Vietnam use iPhone. So the only solution is a website to run AR.

## II. Progress

Based on the AR-Examples repo, I fork into my group's repo and deploy on Github: [phocheo.github.io](https://phocheo.github.io/AR/)

Things I did to make the examples repo suits in my need:

- Change the plane size
- Test and change video codec
- Make the video pause when not playing 
- Delete unnecessary pages to make the repo lighter

Website to make AR markers: [AR.js Marker Training](https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html)

### III. Results

The markers to test: [phocheo.github.io/markers](https://github.com/phocheo/AR/tree/master/markers)

AR Website: [phocheo.github.io/AR](https://phocheo.github.io/AR/)

Some images to show products:

{% include figure.liquid path="assets/img/WebAR_1.png" title="Marker 1" class="img-fluid rounded z-depth-1" %}
{% include figure.liquid path="assets/img/WebAR_2.png" title="Marker 2" class="img-fluid rounded z-depth-1" %}
