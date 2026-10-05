---
title: "Both sides of LLM peer review at ICML 2026"
---

# Both sides of LLM peer review at ICML 2026

I was listed as a [Gold Reviewer for ICML 2026](https://x.com/icmlconf/status/2054696826851234151) this cycle, which is what made me sit down and write this up. It was also the first cycle where ICML's reviewer policy explicitly carved out room for LLM assistance ([ICML 2026 LLM Policy](https://icml.cc/Conferences/2026/Intro-LLM-Policy)). After spending the cycle on both sides of it, I came out thinking the LLM-in-review policy is the wrong thing to be arguing about. The real problem is what LLM assistance does to the bottom-quartile reviewer, and there's no policy lever that fixes that without also lowering the ceiling. The rest of this post is that argument and what I think follows from it.

## 欲加之罪，何患无辞

The cleanest name I know for what LLM amplification does to a hostile reviewer is 2500 years old. It comes from a line in the *Zuozhuan*, a Chinese chronicle from that era, in a passage on the death of Li Ke — a minister in the state of Jin who had killed two rulers to put the current Duke on the throne. The Duke decided to execute him anyway. When the messenger came to deliver the charge, Li Ke replied:

> 不有废也，君何以兴？欲加之罪，其无辞乎？
>
> Without those depositions, how would my lord have risen? If one is determined to lay a charge, would there be no pretext?

The phrase that came out of this, **欲加之罪，何患无辞** ("if one is determined to lay a charge, why worry about lacking pretexts"), has lived as an idiom in Chinese for two and a half millennia. It names something specific: when the disposition to convict precedes the search for reasons, reasons are never the bottleneck. Plausible-looking grounds are always available to whoever is looking for them.

This is the dynamic the LLM-as-reviewer worry compresses into a single cycle, and the asymmetry it produces is the thing I keep coming back to.

A careful reviewer with LLM assistance gets *somewhat* better. They catch a few more details they would have skimmed past, the prose tightens, the cross-paper bookkeeping that used to take an hour now takes ten minutes. The review is recognizably the same one they would have written without the tool, with the rough edges sanded down. The ceiling rose, modestly.

A careless or hostile reviewer with LLM assistance gets *radically* worse. The shape of the output changes. What used to be a curt rejection becomes a long ordered list of weaknesses, each phrased to sound like it survived deliberation. Confidence stays at maximum because the reviewer never had calibration to begin with. Rebuttal responses arrive that take the authors' clarifications and turn each one into a confirmation of the original concerns. The volume goes up several-fold; the epistemic content does not. *Looking thorough* used to cost about the same as *being correct* — that coupling is what kept hostile reviews short. LLM assistance broke the coupling. *欲加之罪* has not changed; *何患无辞* has gotten cheaper.

Most pro-LLM-in-review arguments — including the one I made to my peers earlier this year — implicitly model the upgrade as uniform: everyone gets a little better, so on net reviews improve. They don't. The upgrade is a multiplier on whatever the reviewer is already doing, and the bottom-quartile reviewer is the one who actually gets unbounded by it.

So the disqualifying property is not the LLM, and not LLM-use. It's the reviewer the LLM is multiplying. The bad-faith reviewer was always going to produce a destructive review; the LLM just lowered their cost from a Saturday afternoon to twenty minutes. The fight about LLM-in-review is, at the policy level, the wrong fight. The rest of this post is the same argument made concrete — a tool that produces the pattern on demand, an instance that landed on me — and where I think the right fight actually sits.

## Mean Reviewer

To make this pattern reproducible rather than just describable, I wrote a Claude Code skill: [mean-reviewer-skill](https://github.com/xz-liu/mean-reviewer-skill/). It's a deliberately destructive reviewer agent, the "Armchair Executioner," that I can run against my own drafts before submission. The kind of review it generates has a recognizable shape:

- Twenty-plus enumerated weaknesses, in a clean ordered list
- A mix of a few legitimate observations, several factually wrong claims that confidently misread the paper, and a long tail of unfalsifiable objections ("the authors should have explored…" with no specific demand)
- An evaluation-framework attack: the baselines and benchmarks declared insufficient, with a list of alternatives that are either inappropriate for the setting or don't exist in usable form
- Confidence: 5/5. Score: lowest possible.
- Rebuttal response of the form "the authors' clarifications reinforce my concerns," taking concessions on minor points and using them to confirm the rejection.

The point is not to enable abuse. That's available without me. The point is to make the pattern *legible* to authors, so they can:

- Stress-test their own paper against the worst-case review before submission and pre-empt the most dangerous objections
- Recognize the pattern when it lands on them post-decision, and not internalize a hostile-LLM review as a real signal about their work
- Discuss this concretely at the policy level, with examples that exist, rather than in the abstract

When I tested it against a NeurIPS 2025 oral paper, it produced a review that, on the surface, could have plausibly rejected that paper. That outcome is the warning.

Perfection isn't a property of made things. Any paper, however careful, contains choices a hostile reader can lift up and question. This isn't a statement about weak papers; the ones that win best-paper awards are not exempt. The cost of finding such things used to be the reviewer's own time and effort, which was a real bottleneck. LLM amplification makes that cost cheap enough that paper quality alone stops being a defense.

## What this looked like in one of my own submissions

The same shape arrived unsolicited in my inbox. One of my own submissions came back with a review that matched the bullets above almost line for line — close enough that I'm not going to re-list the structure. What made it worse than a generic hostile review was what the reviewer wrote in the rebuttal response, verbatim:

> This is not directed at the authors but at ICML and the AC: Some of us have day jobs. It's not acceptable for ICML to demand that reviewers - uncompensated volunteers - respond within 4 workdays.

The reviewer then resolved the rebuttal by selecting the option labeled "Partially resolved or unresolved, but the remaining concerns are not easily addressed in a short rebuttal," which the form itself describes as something to use sparingly and "only when... your questions concern the core tenets of the work." The questions in this case did not concern core tenets. The disposition was openly stated: not enough time, not enough interest, the rebuttal channel used to register that fact rather than to engage with what we had written. This is what indifference looks like in practice, and it's the same place the hostile-shape output above came from.

A reviewer can feel however they feel about a conference's review demands. That feeling is their personal right. The right channel for it is an email to the PC or AC, or declining the next invitation. The review form is not that channel; it's where a paper's fate is determined. Routing frustration with the conference through the form lands the cost on the authors, who had no part in setting the timeline and can't email the PC on their reviewer's behalf. Reviewing is voluntary, but accepting the invitation creates an obligation to make the call the form is asking for. If you can't make that call, the correct move is to recuse. The combination of the review's hostile shape and this admission of no-engagement leaves the authors with no recourse: the disposition was set independent of the paper, and registered through the system as if it were about the paper.

It's worth being precise about what "hostile" means here. A reviewer who reads a paper and concludes it shouldn't be accepted is doing their job. Accept and reject are both legitimate dispositions, and a thoughtful negative review is part of the system. What I'm describing is something else: a review whose disposition is set before the paper is read, for reasons that have nothing to do with the paper itself (CoI is the obvious case). That's the thing authors actually push back on, and it's the thing LLM amplification makes much worse.

I don't have proof an LLM wrote that review. That is also not the point. The point is that the review had the structural signature authors worry about: high-volume, high-confidence, low-accountability criticism whose rebuttal cost falls entirely on the authors.

## Where I'm coming from

Before I land the conclusion I should be explicit about my priors, because they cut the other way from what I just described.

I went into this cycle pro-LLM-in-review. When the dominant take from peers earlier in the year was "LLM-assisted reviewing is bad and shouldn't be allowed," my take was the opposite — most of my own recent work is on LLMs, and it would be intellectually dishonest to argue tools I work with shouldn't touch the workflow I'm part of. I declared Policy B (the permissive option, which permits LLM use on *all* my assigned papers as long as the use stays inside the policy's allowed list) and didn't think much more about it.

And the honest answer is that LLMs were useful for the boring parts of being a careful reviewer. When a paper claims a 4-point improvement over five baselines, somewhere in the appendix there's a table that says whether the baselines were tuned, what the sequence length was, whether the eval is comparable. Tracking that across the paper, the cited baseline paper, and supplementary material used to be the work I'd skim past when I was tired, and I think most reviewers do, in practice, skim past it. With LLM assistance to broadly verify "are these numbers actually comparable across what's cited," I caught fairness issues I would not otherwise have flagged, multiple times. Language polish on my own drafted review, also fine — same thing I'd ask a colleague to do, faster.

So the conclusion below is not "ban LLMs." It's coming from someone who used them, found them useful, and still thinks the policy debate is missing the point.

## Where I land now

The policy debate keeps framing the question as "should LLMs be allowed in review." I now think that's the wrong question. The thing that needs to be disqualified isn't the tool, and it isn't the use of the tool. It's the bad-faith, careless, or hostile reviewer who was always going to produce a destructive review and is now able to produce it faster. Banning LLMs lowers good-reviewer throughput without raising the floor; allowing them raises good-reviewer throughput without lowering it either. The floor is the actual problem.

So the lever, to me, sits with ACs and PCs:

- Weight reviewer disagreement more aggressively when one review shows the structural pattern above (long unfalsifiable weakness list, locked-in low score with max confidence, weaponized rebuttal response).
- Disqualify or demote reviewers whose pattern recurs across papers and cycles, *regardless of whether they used an LLM*. The behavior is the disqualifier, not the tool.
- Don't moralize about LLM-use in review. It's a distraction from the people who would write the same review without one.

For authors, my advice is more defensive: assume the adversarial pattern will land on you at least once, and design your paper's framing to survive it. That's what [mean-reviewer-skill](https://github.com/xz-liu/mean-reviewer-skill/) is for: making the worst-case review legible enough that you can pre-empt it, and recognizable enough that you don't internalize it as feedback when it arrives.

For myself: I follow each conference's specific policy, using LLM assistance where it's permitted (Policy B-style) and abstaining where it isn't. But on the other side of the desk, as an author, I'd rather not draw an LLM-assisted reviewer on my own submissions. Not because LLM-assisted reviewing is inherently worse, but because reviewer assignment is out of my hands, and a hostile reviewer with LLM amplification is much worse than a hostile reviewer without it. The LLM question still isn't the question. The question is who gets to keep reviewing.
