---
home: true
heroImage: /img/photo.jpg
heroText: Xiaoze Liu
tagline: ねだるな、勝ち取れ、さすれば与えられん
# actionText: About Me
# actionLink: /about.html
---


## **About**

I'm a PhD student at [Purdue University](https://purdue.edu/), advised by [Prof. Jing Gao](https://engineering.purdue.edu/~jinggao/index.html) and [Prof. Xiaoqian Wang](https://engineering.purdue.edu/~joywang/). I hold a Master's Degree with honors from [Zhejiang University (China)](https://www.zju.edu.cn/) and a Bachelor's Degree with honors from [Northeastern University (China)](https://www.neu.edu.cn/). 
I interned at [AWS AI Fundamental Research Team](https://aws.amazon.com/) (led by [Prof. Stefano Soatto](http://web.cs.ucla.edu/~soatto/) and [Dr. Wei Xia](https://scholar.google.com/citations?hl=en&user=OCdJxC8AAAAJ)) in Summer 2025, working with [Dr. Dhananjay Ram](https://scholar.google.com/citations?user=yyK_4zMAAAAJ&hl=en) and [Dr. Yuting Zhang](https://ytzhang.net/). In the past, I have also interned at [Alibaba DAMO Academy](https://damo.alibaba.com/), [Alibaba Cloud](https://www.alibabacloud.com/) and [ByteDance](https://www.bytedance.com/).



My research focuses on the **post-training and alignment** of large language models (LLMs), with a recent emphasis on **multi-agent systems** for collaborative reasoning and decision-making. I develop methods that improve **capability, trustworthiness, and structural safety**. My work has appeared in top-tier venues (e.g., ICLR, COLM, and ACL) and garnered [![Google Scholar citations](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fxz-liu.github.io%2Fscholar-citations.json&query=%24.citations&label=Google%20Scholar%20citations&logo=googlescholar&style=flat&color=4285F4)](https://scholar.google.com/citations?user=MaIQOwsAAAAJ).

I investigate two complementary frontiers:
* **(1) Collaborative Intelligence**: Enhancing capabilities through **heterogeneous multi-agent systems**, **collaborative learning**, and **model merging** frameworks. Key contributions include **mutual reinforcement learning** and **dynamic ensembling**, extending to **federated preference optimization**. I also uncover **critical supply-chain vulnerabilities** in model merging.
* **(2) AI Safety & Trustworthiness**: Addressing systemic risks with a focus on **copyright** and **factuality**. I engineer mechanisms for **copyright compliance** via **reinforcement unlearning** and **agent-based defense**, while enhancing **model reliability** through **knowledge-based evaluation** and **calibration**.

<!-- **OPEN TO RESEARCH INTERNSHIP POSITIONS FOR SUMMER 2026!** If you have any opportunities, please feel free to reach out to me via email ([myfirstname]@purdue.edu) or [LinkedIn](https://www.linkedin.com/in/xzliu/). -->



## **News**

<div class="news-scroll">
<ul class="news-list">
  <li><strong>[Feb 2026]</strong> We introduce <my-link href="https://arxiv.org/abs/2602.15382"><em>The Vision Wormhole: Latent-Space Communication in Heterogeneous Multi-Agent Systems</em></my-link>, a text-free communication framework that uses a Universal Visual Codec to enable efficient latent-space transfer across heterogeneous VLM agents. Code is available <my-link href="https://github.com/xz-liu/heterogeneous-latent-mas">here</my-link>.</li>
  <li><strong>[Jan 2026]</strong> We release <my-link href="./tokenforge">tokenforge</my-link>, exposing <my-link href="https://github.com/arcee-ai/mergekit/tree/main?tab=readme-ov-file#tokenizer-transplantation-mergekit-tokensurgeon">tokenizer transplant</my-link> as a critical supply-chain attack surface in modular AI. We demonstrate how the <my-link href="https://github.com/arcee-ai/mergekit/">standard merging pipeline</my-link> can be exploited to inject "sleeper" backdoors that remain mathematically inert in donor models but activate downstream.</li>
  <!-- We release <my-link href="./tokenforge">tokenforge</my-link>, a novel attack against in LLM merging pipelines! -->
  <li><strong>[Jul 2025]</strong> <my-link href="https://arxiv.org/abs/2503.22948">SUV</my-link>, a scalable copyright compliance framework for large language models (LLMs) with regularized selective unlearning, is accepted by <my-link href="https://colmweb.org/">COLM 2025</my-link>.</li>
  <li><strong>[May 2025]</strong> I joined <my-link href="https://aws.amazon.com/">AWS AI Labs – Fundamental Research Team</my-link> as an <my-link href="https://www.amazon.science/tag/internships">Applied Scientist Intern</my-link> for Summer 2025.</li>
  <li><strong>[May 2025]</strong> I will present a portion of the tutorial, <my-link href="https://aclanthology.org/2025.naacl-tutorial.7.pdf"><em>LLMs and Copyright Risks: Benchmarks and Mitigation Approaches</em></my-link>, at <my-link href="https://2025.naacl.org/">NAACL 2025</my-link>.</li>
  <li><strong>[Jan 2025]</strong> <my-link href="https://openreview.net/forum?id=mqNKiEB6pd">FedBiscuit</my-link> accepted by <my-link href="https://iclr.cc">ICLR 2025</my-link>.</li>
  <li><strong>[Jan 2025]</strong> <my-link href="https://arxiv.org/abs/2410.16676">CausalEval</my-link> accepted by <my-link href="https://2025.naacl.org/">NAACL 2025</my-link>.</li>
  <li><strong>[Jan 2025]</strong> <my-link href="https://arxiv.org/abs/2310.07521">Survey on Factuality in Large Language Models</my-link> accepted by <my-link href="https://dl.acm.org/journal/csur">ACM Computing Surveys</my-link>.</li>
  <li><strong>[Dec 2024]</strong> <my-link href="https://arxiv.org/abs/2404.00942">GraphEval</my-link> accepted by <my-link href="https://tc.computer.org/tcde/data-engineering-bulletin/">IEEE Data Engineering Bulletin</my-link>.</li>
  <li><strong>[Nov 2024]</strong> Listed as one of the <my-link href="https://neurips.cc/Conferences/2024/ProgramCommittee">Top Reviewers</my-link> for NeurIPS 2024.</li>
  <li><strong>[Sep 2024]</strong> Two Papers Accepted by <my-link href="https://2024.emnlp.org/">EMNLP 2024 Main Conference</my-link>: <my-link href="https://arxiv.org/abs/2406.12975">SHIELD</my-link> and <my-link href="https://arxiv.org/abs/2405.20974">SaySelf</my-link>. See you in Miami, Florida!</li>
</ul>
</div>

## **Recent Publications**

1. [The Vision Wormhole: Latent-Space Communication in Heterogeneous Multi-Agent Systems.](https://arxiv.org/abs/2602.15382)
    <small>*Xiaoze Liu, Ruowang Zhang, Weichen Yu, Siheng Xiong, Liu He, Feijie Wu, Hoin Jung, Matt Fredrikson, Xiaoqian Wang, Jing Gao*.
    [Code](https://github.com/xz-liu/heterogeneous-latent-mas)
    </small>

1. [The Trojan in the Vocabulary: Stealthy Sabotage of LLM Composition.](https://arxiv.org/abs/2601.00065)
    <small>*Xiaoze Liu, Weichen Yu, Matt Fredrikson, Xiaoqian Wang, Jing Gao*
    </small>

1. [SUV: Scalable Large Language Model Copyright Compliance with Regularized Selective Unlearning.](https://arxiv.org/abs/2503.22948) 
    <small>*Tianyang Xu#, **Xiaoze Liu**#, Feijie Wu, Xiaoqian Wang, Jing Gao*,
    **The 2025 Conference on Language Modeling (COLM)**, 2025.
    </small>

1. [SHIELD: Evaluation and Defense Strategies for Copyright Compliance in LLM Text Generation.](https://arxiv.org/abs/2406.12975)
    <small>***Xiaoze Liu#**, Ting Sun#, Tianyang Xu, Feijie Wu, Cunxiang Wang, Xiaoqian Wang, Jing Gao*,
    **The 2024 Conference on Empirical Methods in Natural Language Processing (EMNLP)**, 2024.
    </small>


1. [Survey on Factuality in Large Language Models: Knowledge, Retrieval and Domain-Specificity.](https://arxiv.org/abs/2310.07521)
    <small>*Cunxiang Wang#, **Xiaoze Liu**#, Yuanhao Yue#, Qipeng Guo, Xiangkun Hu, Xiangru Tang, Tianhang Zhang, Jiayang Cheng, Yunzhi Yao, Wenyang Gao, Xuming Hu, Zehan Qi, Yidong Wang, Linyi Yang, Jindong Wang, Xing Xie, Zheng Zhang, Yue Zhang*,
    **ACM Computing Surveys (CSUR)**, 2025
    </small>



1. [Towards Federated RLHF with Aggregated Client Preference for LLMs.](https://openreview.net/forum?id=mqNKiEB6pd)
    <small>*Feijie Wu, **Xiaoze Liu**, Haoyu Wang, Xingchen Wang, Lu Su, Jing Gao*,
    **Thirteenth International Conference on Learning Representations (ICLR)**, 2025
    </small>


1. [Evaluating the Factuality of Large Language Models using Large-Scale Knowledge Graphs.](https://arxiv.org/abs/2404.00942)
    <small>***Xiaoze Liu**, Feijie Wu, Tianyang Xu, Zhuo Chen, Yichi Zhang, Xiaoqian Wang, Jing Gao*
    **IEEE Data Engineering Bulletin**, 2024
    </small>


1. [SaySelf: Teaching LLMs to Express Confidence with Self-Reflective Rationales. EMNLP 2024](https://arxiv.org/abs/2405.20974)
    <small class="author">*Tianyang Xu, Shujin Wu, Shizhe Diao, **Xiaoze Liu**, Xingyao Wang, Yangyi Chen, Jing Gao*,
    **The 2024 Conference on Empirical Methods in Natural Language Processing (EMNLP)**, 2024.
    </small>

1. [CausalEval: Towards Better Causal Reasoning in Language Models.](https://arxiv.org/abs/2410.16676)
    <small>*Longxuan Yu, Delin Chen, Siheng Xiong, Qingyang Wu, Qingzhen Liu, Dawei Li, Zhikai Chen, **Xiaoze Liu**, Liangming Pan*,
    **The 2025 Annual Conference of the Nations of the Americas Chapter of the ACL (NAACL)**, 2025
    </small>

...

 [(Google Scholar)](https://scholar.google.com/citations?hl=zh-TW&user=MaIQOwsAAAAJ&view_op=list_works&sortby=pubdate)


## **Education and Experience**

- **PhD Student**, [Purdue University](https://purdue.edu/), 2023 - Present
    - Advised by [Prof. Jing Gao](https://engineering.purdue.edu/~jinggao/index.html) and [Prof. Xiaoqian Wang](https://engineering.purdue.edu/~joywang/)
    - **Applied Scientist Intern**, [AWS AI Labs – Fundamental Research Team](https://aws.amazon.com/), 2025
- **Master's Degree**, [Zhejiang University](https://www.zju.edu.cn/), 2020 - 2023, Graduated with honors
    - Awarded **Outstanding Master’s Thesis of Zhejiang Province (122 out of 35,149, Top 0.3\%)**
    - **Research Intern**, [AliCloud & Alibaba DAMO Academy](https://www.alibaba.com/), 2021-2023
- **Bachelor's Degree**, [Northeastern University](https://www.neu.edu.cn/), 2016 - 2020, Graduated with honors
    - **Intern**, [ByteDance](https://www.bytedance.com/), 2019 - 2020
    - **Exchange Student**, [Kanazawa University](https://www.kanazawa-u.ac.jp/), 2019 - 2020, Supported by [JASSO Scholarship](https://www.jasso.go.jp/en/ryugaku/scholarship_j/index.html)

## **Academic Services**

Serve as a reviewer/PC for 
- **2026:** ICML, ACL Rolling Review, KDD
- **2025:** ICLR, ICML, NeurIPS, ACL Rolling Review, KDD
- **2024:** NeurIPS, ACM MM, SDM, CIKM, ISWC, ACL Rolling Review, KDD
- **2023:** NeurIPS, EMNLP, KDD

Served as a Journal reviewer for Transactions on Machine Learning Research, IEEE Transactions on Pattern Analysis and Machine Intelligence,
 IEEE Transactions on Knowledge and Data Engineering, IEEE Transactions on Neural Networks and Learning Systems,
Pattern Recognition, Information Sciences, IEEE Transactions on Big Data
