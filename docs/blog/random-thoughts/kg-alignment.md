---
title: "A note on adapting old KG-alignment work to LLM-era problems"
---

# A note on adapting old KG-alignment work to LLM-era problems

My pre-PhD research was on knowledge graph alignment: given two knowledge graphs from different sources, find which entities correspond. The community working on it produced a body of techniques building on word alignment and graph matching.

I drifted toward LLMs when most of my interests moved there. My first crossover was [GraphEval](https://arxiv.org/abs/2404.00942), using KGs to evaluate LLMs. It's fine work, but it kept KGs as the object of study; it didn't really revisit the alignment techniques themselves.

Working on cross-family LLM systems more recently, I keep noticing that some of the actual technical problems look structurally similar to KG alignment. Aligning two tokenizers that don't agree on vocabulary. Finding correspondences between two embedding spaces that aren't natively comparable. Mapping events extracted under different schemas into a shared representation. The settings are different, but the underlying shape (find correspondences between two heterogeneous structured spaces) is close enough that the techniques I used to work on transfer directly.
