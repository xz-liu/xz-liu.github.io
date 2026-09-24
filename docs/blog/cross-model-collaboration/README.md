---
title: "On cross-model-family collaboration"
---

# On cross-model-family collaboration

Most papers on multi-model systems assume the models *talk*. The interesting question is how much of that talking actually transfers.

In practice the default is text. Two models in a pipeline exchange natural language; an ensemble votes on token-level outputs; an agent network passes JSON-shaped messages between LLM nodes. All of these work. None of them are deep. The bandwidth is low, the signal is thin, the receiver re-derives almost everything from scratch.

The reason cross-model collaboration stays shallow is not that no one has noticed. It's that going deeper is technically hard. Different model families have different tokenizers, different parameter shapes, different objectives, different latent geometries. There is no native shared representation. Every meaningful exchange has to either flatten down to text (lossy and slow) or solve some version of the cross-family alignment problem (hard).

I think this is one of the more underexplored directions in the current LLM-systems literature. Not the most fashionable. Underexplored. The cost of staying shallow is real: as soon as you want a multi-model system to do something that requires the models to *share state*, not just *take turns talking*, the text interface collapses under its own bandwidth.

I've looked at this from three different sides over the past year, each from a different layer of the stack.

## Training-level: [Mutual Reinforcement Learning](/blog/mutual-rl/)

Multiple LLM policies, different families, different tokenizers, concurrent RL post-training. The hard problem is feeding off-policy data from one policy into another policy's on-policy gradient update without breaking either one. We built a substrate (Shared Experience Exchange, Multi-Worker Resource Allocation, Tokenizer Heterogeneity Layer) that makes the design question operational, and ran three controlled probes (data-level, value-level, outcome-level) to characterize the trade-off. The substrate is the contribution I most want to defend. The empirical wins are real but modest.

## Merging-level: [When the Same Coefficients Reach Different Places: Asymmetric Realizability in Transplanting Tokenizers across Large Language Models](/blog/tokenforge/)

When you merge across families, you first have to align tokenizers. The standard tool is shared-basis transplant, used in every cross-family merge in the wild today. We show that this layer is also a supply-chain attack surface: a single added vocabulary token can stay inert in the donor but reconstruct into a high-salience malicious feature in the base. The merging pipeline that the field treats as plumbing is in fact load-bearing, and the load it carries can be weaponized.

## Agentic-pipeline-level: [The Vision Wormhole](/blog/vision-wormhole/)

Latent-space communication between language models is having a moment, but almost all of the recent work assumes a single model family. Cross-family latent transfer is structurally harder because the latent geometries don't align. We use the vision encoder as a universal interface: encode one agent's reasoning trace into a continuous representation and inject it into the receiver's visual pathway. The agents exchange visual latents rather than text, across families, with bandwidth that text could not carry.

## What ties them together

Three layers, three different concrete problems, one common thesis: **cross-model-family collaboration only becomes useful when you stop treating the cross-family part as a plumbing detail. The plumbing is the work.**

What I expect the next round of work in this space to look like: less effort spent making any single multi-model system look impressive, more effort on the alignment-layer infrastructure that lets the system have real shared state in the first place. The shallow ceiling is the ceiling of the interface, not the ceiling of the models.

*A short note on how this connects to my earlier work in KG alignment is [here](/blog/random-thoughts/kg-alignment.html).*
