---
home: true
heroImage: /img/photo.jpg
heroText: Xiaoze Liu
---


## **About**

I'm a PhD student at [Purdue University](https://purdue.edu/), advised by [Prof. Jing Gao](https://engineering.purdue.edu/~jinggao/index.html) and [Prof. Xiaoqian Wang](https://engineering.purdue.edu/~joywang/). Most of my recent work is on [collaboration between heterogeneous LLM systems](/blog/cross-model-collaboration/), at three layers of the stack: [cross-family RL post-training](/blog/mutual-rl/), [latent-space communication between heterogeneous VLM agents](/blog/vision-wormhole/), and [tokenizer transplantation in cross-family merging](/blog/tokenforge/). I also work on [LLM copyright compliance](/blog/copyright-notes/), spanning detection, agent-based defense, and behavioral unlearning. More recently, I have been revisiting graph models for [low-latency, on-device LLM agents](/blog/knowledge-graphs/), where user activity is naturally structured rather than textual. [![Google Scholar citations](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fxz-liu.github.io%2Fscholar-citations.json&query=%24.citations&label=Google%20Scholar%20citations&logo=googlescholar&style=flat&color=4285F4)](https://scholar.google.com/citations?user=MaIQOwsAAAAJ)

## **News**

<div class="news-scroll">
<ul class="news-list">
  <li><strong>[Jun 2026]</strong> I started my summer Research Internship at <my-link href="https://www.microsoft.com/en-us/research/group/deep-learning-group/">Microsoft Research</my-link> in Redmond.</li>
  <li><strong>[May 2026]</strong> We introduce <my-link href="/blog/knowledge-graphs/">a graph-first architecture for proactive-agent triggering and routing</my-link>, asking whether always-on agents really need an LLM to decide when to wake and what to anchor.</li>
  <li><strong>[May 2026]</strong> Selected as a <my-link href="https://x.com/icmlconf/status/2054696826851234151">Gold Reviewer</my-link> for <my-link href="https://icml.cc/">ICML 2026</my-link>. Wrote up <my-link href="/blog/random-thoughts/llm-reviewing.html">some reflections</my-link> on both sides of LLM-assisted peer review this cycle.</li>
  <li><strong>[May 2026]</strong> We introduce <my-link href="/blog/mutual-rl/">Mutual Reinforcement Learning</my-link>, a framework for concurrent RL post-training in which heterogeneous LLM policies exchange typed experience while keeping separate parameters, objectives, and tokenizers.</li>
  <li><strong>[Mar 2026]</strong> I will be joining <my-link href="https://www.microsoft.com/en-us/research/group/deep-learning-group/">Microsoft Research - Deep Learning Group</my-link> this upcoming summer as a Research Intern.</li>
  <li><strong>[Feb 2026]</strong> We introduce <my-link href="/blog/vision-wormhole/">The Vision Wormhole: Latent-Space Communication in Heterogeneous Multi-Agent Systems</my-link>, a text-free communication framework that uses a Universal Visual Codec to enable efficient latent-space transfer across heterogeneous VLM agents. Code is available <my-link href="https://github.com/xz-liu/heterogeneous-latent-mas">here</my-link>.</li>
  <li><strong>[Jan 2026]</strong> We release <my-link href="/blog/tokenforge/">tokenforge</my-link>, a study of <my-link href="https://github.com/arcee-ai/mergekit/tree/main?tab=readme-ov-file#tokenizer-transplantation-mergekit-tokensurgeon">tokenizer transplantation</my-link> in modular model merging. We show how the <my-link href="https://github.com/arcee-ai/mergekit/">standard merging pipeline</my-link> can map seemingly inert donor-model tokens into high-salience downstream features.</li>
  <li><strong>[Jul 2025]</strong> <my-link href="https://arxiv.org/abs/2503.22948">SUV</my-link>, a scalable copyright compliance framework for large language models (LLMs) with regularized selective unlearning, is accepted by <my-link href="https://colmweb.org/">COLM 2025</my-link>.</li>
  <li><strong>[May 2025]</strong> I joined <my-link href="https://aws.amazon.com/">AWS AI Fundamental Research Team</my-link> as an <my-link href="https://www.amazon.science/tag/internships">Applied Scientist Intern</my-link> for Summer 2025.</li>
  <li><strong>[May 2025]</strong> I will present a portion of the tutorial, <my-link href="https://aclanthology.org/2025.naacl-tutorial.7.pdf">LLMs and Copyright Risks: Benchmarks and Mitigation Approaches</my-link>, at <my-link href="https://2025.naacl.org/">NAACL 2025</my-link>.</li>
  <li><strong>[Jan 2025]</strong> <my-link href="https://openreview.net/forum?id=mqNKiEB6pd">FedBiscuit</my-link> accepted by <my-link href="https://iclr.cc">ICLR 2025</my-link>.</li>
  <li><strong>[Jan 2025]</strong> <my-link href="https://arxiv.org/abs/2410.16676">CausalEval</my-link> accepted by <my-link href="https://2025.naacl.org/">NAACL 2025</my-link>.</li>
  <li><strong>[Jan 2025]</strong> <my-link href="https://arxiv.org/abs/2310.07521">Survey on Factuality in Large Language Models</my-link> accepted by <my-link href="https://dl.acm.org/journal/csur">ACM Computing Surveys</my-link>.</li>
  <li><strong>[Dec 2024]</strong> <my-link href="https://arxiv.org/abs/2404.00942">GraphEval</my-link> accepted by <my-link href="https://tc.computer.org/tcde/data-engineering-bulletin/">IEEE Data Engineering Bulletin</my-link>.</li>
  <li><strong>[Nov 2024]</strong> Listed as one of the <my-link href="https://neurips.cc/Conferences/2024/ProgramCommittee">Top Reviewers</my-link> for NeurIPS 2024.</li>
  <li><strong>[Sep 2024]</strong> Two papers accepted to <my-link href="https://2024.emnlp.org/">EMNLP 2024 Main Conference</my-link>: <my-link href="https://arxiv.org/abs/2406.12975">SHIELD</my-link> and <my-link href="https://arxiv.org/abs/2405.20974">SaySelf</my-link>.</li>
</ul>
</div>

## **Recent Publications**

<small>*Selected first-author and co-first-author work. `#` denotes equal contribution. See the [full publication list](/pub/) for the complete local list, or [Google Scholar](https://scholar.google.com/citations?hl=zh-TW&user=MaIQOwsAAAAJ&view_op=list_works&sortby=pubdate) for live citation counts.*</small>

1. [Do Proactive Agents Really Need an LLM to Decide When to Wake and What to Anchor?](https://arxiv.org/abs/2605.30152)
    <small>***Xiaoze Liu**, Ruowang Zhang, Amir H. Abdi, Michel Galley, Zhikai Chen, Siheng Xiong, Xiaoqian Wang, Jing Gao*,
    **Preprint**, 2026.
    [Blog](/blog/knowledge-graphs/)
    </small>

1. [Experience Sharing in Mutual Reinforcement Learning for Heterogeneous Language Models.](https://arxiv.org/abs/2605.07244)
    <small>***Xiaoze Liu**, Dhananjay Ram, Yuting Zhang, Zhaoyang Zhang, Wei Xia, Stefano Soatto*,
    **Preprint**, 2026.
    [Blog](/blog/mutual-rl/)
    </small>

1. [The Vision Wormhole: Latent-Space Communication in Heterogeneous Multi-Agent Systems.](https://arxiv.org/abs/2602.15382)
    <small>***Xiaoze Liu**#, Ruowang Zhang#, Weichen Yu, Siheng Xiong, Liu He, Feijie Wu, Hoin Jung, Matt Fredrikson, Xiaoqian Wang, Jing Gao*,
    **Preprint**, 2026.
    [Blog](/blog/vision-wormhole/) · [Code](https://github.com/xz-liu/heterogeneous-latent-mas)
    </small>

1. [When the Same Coefficients Reach Different Places: Asymmetric Realizability in Transplanting Tokenizers across Large Language Models.](https://arxiv.org/abs/2601.00065)
    <small>***Xiaoze Liu**, Weichen Yu, Matt Fredrikson, Xiaoqian Wang, Jing Gao*,
    **Preprint**, 2026.
    [Blog](/blog/tokenforge/)
    </small>

1. [SUV: Scalable Large Language Model Copyright Compliance with Regularized Selective Unlearning.](https://arxiv.org/abs/2503.22948)
    <small>*Tianyang Xu#, **Xiaoze Liu**#, Feijie Wu, Xiaoqian Wang, Jing Gao*,
    **The 2025 Conference on Language Modeling (COLM)**, 2025.
    [Blog](/blog/copyright-notes/)
    </small>

1. [SHIELD: Evaluation and Defense Strategies for Copyright Compliance in LLM Text Generation.](https://arxiv.org/abs/2406.12975)
    <small>***Xiaoze Liu**#, Ting Sun#, Tianyang Xu, Feijie Wu, Cunxiang Wang, Xiaoqian Wang, Jing Gao*,
    **The 2024 Conference on Empirical Methods in Natural Language Processing (EMNLP)**, 2024.
    [Blog](/blog/copyright-notes/)
    </small>


## **Invited Talks & Tutorials**

1. [LLMs and Copyright Risks: Benchmarks and Mitigation Approaches.](https://aclanthology.org/2025.naacl-tutorial.7.pdf)
    <small>**NAACL 2025 Tutorials**, May 2025.
    Delivered part of the tutorial session live on Zoom. Tutorial organized by Prof. Zhaozhuo Xu and Prof. Denghui Zhang.
    </small>

1. [SHIELD: Evaluation and Defense Strategies for Copyright Compliance in LLM Text Generation.](https://arxiv.org/abs/2406.12975)
    <small>**NICE NLP**, November 2024.
    Delivered talk in Mandarin on mitigating copyright violation via SHIELD.
    </small>


## **Education and Experience**

- **PhD Student**, [Purdue University](https://purdue.edu/), 2023 - Present
    - Advised by [Prof. Jing Gao](https://engineering.purdue.edu/~jinggao/index.html) and [Prof. Xiaoqian Wang](https://engineering.purdue.edu/~joywang/)
    - **Research Intern**, [Microsoft Research - Deep Learning Group](https://www.microsoft.com/en-us/research/group/deep-learning-group/), Redmond, Summer 2026, with [Michel Galley](https://www.microsoft.com/en-us/research/people/mgalley/) and [Amir H. Abdi](https://amir-abdi.com/).
    - **Applied Scientist Intern**, [AWS AI Fundamental Research Team](https://aws.amazon.com/), Summer 2025, with [Dhananjay Ram](https://www.linkedin.com/in/dhananjay-ram-6a1136153/) and [Yuting Zhang](https://ytzhang.net/).
- **Master's Degree**, [Zhejiang University](https://www.zju.edu.cn/), 2020 - 2023
    - Awarded **Outstanding Master's Thesis of Zhejiang Province (122 out of 35,149, Top 0.3\%)**, and **Excellent Postgraduate student's Award of Zhejiang University**. 
    - **Research Intern**, Alibaba DAMO Academy (now [Tongyi Lab](https://github.com/Alibaba-NLP)), Sep 2022 - 2023, with [Yong Jiang](https://jiangyong.site/).
    - **Research Intern**, [Alibaba Cloud](https://www.alibabacloud.com/), 2021 - Jul 2022
- **Bachelor's Degree**, [Northeastern University](https://www.neu.edu.cn/), 2016 - 2020
    - **Awarded the National Scholarship of China (Top 0.2\%)** twice during undergraduate studies, and the **Outstanding Graduate of Northeastern University** in 2020.
    - **Software Engineering Intern**, [ByteDance](https://www.bytedance.com/), TikTok server backend, 2019 - 2020
    - **Exchange Student**, [Kanazawa University](https://www.kanazawa-u.ac.jp/), 2019, Supported by [JASSO Scholarship](https://www.jasso.go.jp/en/ryugaku/scholarship_j/index.html)

## **Academic Services**

Serve as a reviewer/PC for 
- **2026:** ICML (Gold Reviewer), NeurIPS, ACL Rolling Review, KDD
- **2025:** ICLR, ICML, NeurIPS, ACL Rolling Review, KDD
- **2024:** NeurIPS (Top Reviewer), ACM MM, SDM, CIKM, ISWC, ACL Rolling Review, KDD
- **2023:** NeurIPS, EMNLP, KDD

Served as a Journal reviewer for Transactions on Machine Learning Research, IEEE Transactions on Pattern Analysis and Machine Intelligence,
 IEEE Transactions on Knowledge and Data Engineering, IEEE Transactions on Neural Networks and Learning Systems,
Pattern Recognition, Information Sciences, IEEE Transactions on Big Data
