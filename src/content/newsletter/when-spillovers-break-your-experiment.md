---
title: "When Spillovers Break Your Experiment"
description: "You randomized perfectly. Your sample size is solid. But your treatment group is contaminating your control — and your platform won't tell you."
date: 2025-03-15
---

You randomized perfectly. Your sample size is solid. But your treatment group is contaminating your control — and your platform won't tell you.

## The stable unit treatment value assumption

Every A/B test you've ever run relies on a core assumption that most practitioners never name: **SUTVA** — the Stable Unit Treatment Value Assumption. It says that one user's treatment assignment doesn't affect another user's outcome.

In a marketplace, a social network, or any system with network effects, SUTVA is almost always violated.

## How spillovers show up in practice

- **Marketplace experiments**: You give sellers a new tool. They price more competitively. Buyers in the *control* group see lower prices too — because they're shopping in the same marketplace.
- **Social features**: You show a new sharing prompt to treatment users. They share more content. Control users see that content in their feeds.
- **Capacity-constrained systems**: You speed up matching for treatment users. That means control users wait longer.

In all three cases, your measured treatment effect is **biased toward zero**. The control group is partially treated.

## What to do about it

1. **Cluster randomization**: Randomize at the market level, not the user level. If users in a city interact mostly with each other, randomize cities.
2. **Graph cluster randomization**: Use the social graph to define clusters that minimize between-cluster edges.
3. **Measure and model**: Even if you can't eliminate spillovers, you can estimate their magnitude. Compare outcomes for control users who are "near" treatment users vs. those who are "far."

The fix isn't to stop experimenting — it's to stop pretending your units are independent when they aren't.
