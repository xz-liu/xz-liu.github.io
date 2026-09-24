---
title: "A note on adding defense to peer review"
---

# A note on adding defense to peer review

This is a sketch of a peer review reform proposal I keep coming back to. It's not a worked-out system, and I'm not pretending to know all the second-order failure modes. But the structural moves feel right enough that I want to set them down.

## The problem

Current peer review has a structural property that, applied to almost any other decision-making system, would be considered a single point of failure: **the same reviewers who critique a paper also decide its fate**. Critique and adjudication are fused into one role. There is no in-system counterweight to a reviewer who, for whatever reason, comes in disposed to reject. The author is the only entity standing on the other side, and the author's response capacity is asymmetrically small compared to the volume a determined reviewer can produce.

This is not a complaint about reviewer character. It is a structural observation. Most institutions whose decisions affect people separate these two functions for reasons that have been understood since at least the Roman Republic. A prosecutor who is also the judge is a setup that anyone designing a fair adjudication system would refuse to ship.

## The proposal

Three roles, not one:

- **Critic reviewers**: read the paper and identify weaknesses. The current default role.
- **Defense reviewers**: read the paper and argue for it. They engage with critic reviewers on the author's behalf. Authors can choose to remain silent during the rebuttal phase.
- **Jury**: a separate group that reads both sides' written arguments and decides. The jury does not need to be made up of domain experts.

The defense role is the structural innovation. Critic reviewers exist already, and weak proxies for "the system decides" exist already (ACs, PCs). What does not exist is anyone in the system whose explicit job is to argue *for* the paper.

## Why this might work

A few specific properties.

**The asymmetric burden problem dissolves.** Authors are no longer the only party shouldering the cost of responding to potentially-bad-faith critique. A designated defender, with reviewer-level standing in the system, can engage on technical detail at the same scale as the critic.

**Hostile critique becomes self-checking.** A reviewer who fabricates plausible-looking weaknesses can be publicly countered by a peer in the system, not just by the author whose interest is obvious. The cost of bad-faith critique goes up because there is somebody whose explicit role is to surface it.

**Decision-makers lose direct stake in the critique.** When the people who issue critiques also vote on the outcome, retracting a critique is costly to them. When a separate body decides, critics are free to engage as arguers rather than as judges.

**The jury non-expert objection has a partial answer.** A juror in a complex legal case does not need to independently understand forensic chemistry; they need to be able to weigh which side's argument is more coherent. The same applies to technical claims. The technical content is brought into the proceedings by the critic and the defender, both of whom are domain-competent. The jury weighs the resulting case.

## Why this is hard

I do not want to oversell this. The practical objections are real.

- **Capacity**: reviewer pools are already overstretched. Adding a defense duty is a multiplicative load on the system.
- **Incentive alignment**: how does a defense reviewer avoid becoming an advocate-for-friends? CoI surface area roughly doubles.
- **Defender quality**: a paper might end up with a defender who does the role badly, which would be worse than no defender. The current system at least preserves the author's own voice.
- **Field-specific calibration**: heavily mathematical fields might genuinely require expert juries. The non-expert jury claim has real failure modes when the technical claim is itself the locus of disagreement.

## Where this might actually start

Full replacement of the current system is not going to happen, and probably shouldn't. The interesting move is *partial* implementation, somewhere the current process is already known to break.

A pilot: on papers with high reviewer disagreement (the borderline cases that currently consume the most AC effort), assign one additional reviewer as a designated defender. The defender argues for the paper in the discussion phase; the original reviewers stay in their existing role; the AC plays the jury function. This is a minimum viable trial. It does not require restructuring the whole conference. It adds one explicit role to a structure that already has the others.

The version of peer review reform that succeeds will look more like this than like a wholesale redesign. The broader proposal is still worth taking seriously, because it names a problem the current system has and answers it with a mechanism that has worked elsewhere.

A separate post on the LLM-amplified reviewing problem and what it suggests about the urgency of getting this right is in [Both sides of LLM peer review at ICML 2026](/blog/random-thoughts/llm-reviewing.html).
