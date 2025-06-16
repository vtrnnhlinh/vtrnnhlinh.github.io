---
layout: post
title: my neovim kickstart - new tool that I love
date: 2024-06-08 01:08:00 +0700
categories: [Linh the Scientist]
tags: [cse, neovim]     # TAG names should always be lowercase
---

Hello my dears,

It's fun to announce that I am officially moving from VSC to nvim. It isn't a smooth, comfortable experience. So I am here to share my journey and hope you can find it's inspiring to try nvim yourself!

## story

I had a dream to play with vim some years ago. But it's really struggling to do. I heard about the power of vim, but when I try it, I ask myself: How they can make a terminal text editor that "powerful"? I can't see any advantages from vim and the commands are confusing like hell. And that time, I also had a big love for VSC. So "using vim is elegant and chad" idea stuck in my mind, but I don't want to mess with it.

Further on my university journey, I had to use terminal editor sometimes. I also avoided vim at all cost and used Nano instead. But then during my internship, something happen!

My mentor is better than me, of course. I don't mention about coding skills and knowledge, but even his skill when using VSC is far better than me. And then he recommended me to use the keyboard more. So when he had to go to an exhibition and I am alone in the office, I spent my whole day dedicating for nvim, to become a chad dev so my mentor won't make fun of me anymore! 

I did it, with a lot of pain and mistakes. So now I am here to give you some advice based on my experience.

## kickstart

First, I use Ubuntu. So that means this article is heavily based on this distro, I think it's similar to other platforms but idk.

I don't use `sudo apt install nvim` to install nvim. Instead of, I use PPA repo in `unstable`. Why? Cause when I try to install plugins for nvim, I realize that my nvim version is too old. Maybe Ubuntu 23.04 and 24.04 have better updates but whatever.

So after installing, you will find that nvim has nothing! Except some cool commands! Before digging deeper to custom vim, I highly recommend you to use `:Tutor` to start with the power of vim.

Now you have some options to do. You can explore [LazyVim](https://www.lazyvim.org/) or [Nvchad](https://nvchad.com/) for easy experience. I am currently using [kickstart](https://github.com/nvim-lua/kickstart.nvim). But I am really considering moving to Nvchad. Haha. *Tried to move to Nvchad while writing this post but it's not a good experience comparing to kickstart*.

So I use [kitty terminal](https://sw.kovidgoyal.net/kitty/) as the home for nvim. Cause when you click on the nvim icon, it will open the terminal instead, lol. Because my terminal is zsh so here is the code to automatically open nvim when click kitty.

```bash
# Check if the terminal is Kitty and launch Neovim
if [ "$TERM" = "xterm-kitty" ]; then
    exec nvim
fi

```

Also remember to install [nerdfonts](https://www.nerdfonts.com/font-downloads), I personally only download the Icon Only package.

## customize kickstart

After following the guide to install kickstart. You will open its config file by typing: `:e $MYVIMRC`.

You can follow the file to custom your vim. I installed some other plugins like dashboard, git-flog, some shortcuts and stuffs. If you want to take a peek, visit at my github repo: [vtrnnhlinh/kickstart.nvim](https://github.com/vtrnnhlinh/kickstart.nvim).

---

If you have any questions, feel free to comment or send me an email. Danke Viele! I feel like this is a bad tutorial whatsoever...

