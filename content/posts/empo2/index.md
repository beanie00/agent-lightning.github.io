---
title: "(ICLR26) Training Memory-Augmented LLM Agent via Online Self-Distillation"
date: 2026-02-06
draft: true
tags: ["LLM", "Reinforcement Learning", "Agent", "Exploration", "Memory"]
math: true
---

<style>
.empo-hero {
  text-align: center;
  padding: 1rem 0 2rem;
}
.empo-hero h1 {
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 1rem;
}
.empo-accent { color: #333eba; }
.empo-authors {
  font-size: 1.05rem;
  margin: 1rem 0 0.5rem;
  line-height: 1.8;
}
.empo-authors a {
  color: #333eba;
  text-decoration: none;
  font-weight: 500;
}
.empo-authors a:hover { text-decoration: underline; }
.empo-affil {
  font-size: 0.95rem;
  color: #64748b;
  margin-top: 0.25rem;
}
.empo-note {
  font-size: 0.85rem;
  color: #94a3b8;
  margin-top: 0.5rem;
}
.empo-links {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}
.empo-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1.2rem;
  background: #1e293b;
  color: #fff !important;
  border-radius: 9999px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none !important;
  transition: background 0.2s;
}
.empo-btn:hover { background: #333eba; }
.empo-section {
  margin: 2.5rem 0;
  padding: 2rem 0;
}
.empo-section-alt {
  margin: 0 -2rem;
  padding: 2rem 2rem;
  background: #f8fafc;
}
.empo-section h2, .empo-section-alt h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.empo-img-center {
  text-align: center;
  margin: 1.5rem 0;
}
.empo-img-center img {
  max-width: 100%;
  border-radius: 8px;
}
.empo-caption {
  margin-top: 0.5rem;
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.5;
}
.empo-abstract {
  text-align: justify;
  font-size: 1rem;
  line-height: 1.75;
}
.empo-results-grid {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin: 1.5rem 0;
}
.empo-results-left { width: 55%; }
.empo-results-right { width: 45%; }
.empo-results-grid img { width: 100%; border-radius: 8px; }
@media (max-width: 768px) {
  .empo-results-grid { flex-direction: column; }
  .empo-results-left, .empo-results-right { width: 100%; }
}
.empo-key-results {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
}
.empo-key-left { width: 30%; }
.empo-key-right { width: 60%; }
.empo-key-results img { width: 100%; border-radius: 8px; }
@media (max-width: 768px) {
  .empo-key-results { flex-direction: column; }
  .empo-key-left, .empo-key-right { width: 100%; }
}
.empo-bibtex {
  position: relative;
  background: #1e293b;
  color: #e2e8f0;
  padding: 1.25rem;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 0.85rem;
  line-height: 1.6;
}
.empo-bibtex code {
  color: #e2e8f0;
  background: none;
}
.empo-copy-btn {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: #333eba;
  color: #fff;
  border: none;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  font-size: 0.8rem;
  cursor: pointer;
}
.empo-copy-btn:hover { background: #4f56d9; }
.empo-teaser-text {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #475569;
  margin-top: 1rem;
  padding-bottom: 3rem;
}
</style>

<!-- Hero -->
<div class="empo-hero">

<h1 style="font-size:1.8rem; font-weight:800; line-height:1.3; margin-bottom:1rem;">
  <span class="empo-accent">EMPO<sup>2</sup></span>: Exploratory Memory-Augmented LLM Agent via Hybrid On- and Off-Policy Optimization
</h1>

<div class="empo-authors">
  <a href="https://github.com/Sadnine-One" target="_blank">Zeyuan Liu</a><sup>1*</sup> &nbsp;
  <a href="https://www.beanie00.com/" target="_blank">Jeonghye Kim</a><sup>1,2*</sup> &nbsp;
  <a href="https://www.microsoft.com/en-us/research/people/xufluo/" target="_blank">Xufang Luo</a><sup>1†</sup> &nbsp;
  <a href="https://www.microsoft.com/en-us/research/people/dongsli/" target="_blank">Dongsheng Li</a><sup>1</sup> &nbsp;
  <a href="https://www.microsoft.com/en-us/research/people/yuqyang/" target="_blank">Yuqing Yang</a><sup>1</sup>
</div>
<div class="empo-affil">Microsoft Research<sup>1</sup> · KAIST<sup>2</sup> · ICLR 2026</div>
<div class="empo-note">* Equal contribution; work done during an internship at Microsoft Research &nbsp;|&nbsp; † Corresponding author</div>

<div class="empo-links">
  <a href="https://openreview.net/pdf/c3f914c63072858c90376dcdf90ee00023322f05.pdf" target="_blank" class="empo-btn">📄 Paper</a>
  <a href="https://github.com/microsoft/agent-lightning/tree/main/contrib/recipes/simulation" target="_blank" class="empo-btn">💻 Code</a>
  <a href="https://openreview.net/forum?id=UOzxviKVFO" target="_blank" class="empo-btn">📝 OpenReview</a>
</div>
</div>

<!-- Teaser -->
<div class="empo-img-center">
  <img src="images/empo2_gif.gif" alt="EMPO2 teaser animation">
</div>
<p class="empo-teaser-text">
Existing LLM-based agents rely heavily on prior knowledge and thus fail to learn effectively in environments that require discovering and exploring novel states. To address this limitation, we propose a reinforcement learning framework that promotes exploration through memory and combines on- and off-policy optimization to improve generalization without relying on memory at inference time.
</p>

<!-- Abstract -->
<div class="empo-section-alt">
<h2>Abstract</h2>
<p class="empo-abstract">
Exploration remains the key bottleneck for large language model agents trained with reinforcement learning. While prior methods exploit pretrained knowledge, they fail in environments requiring the discovery of novel states. We propose Exploratory Memory-Augmented On- and Off-Policy Optimization (EMPO<sup>2</sup>), a hybrid RL framework that leverages memory for exploration and combines on- and off-policy updates to make LLMs perform well with memory while also ensuring robustness without it. On ScienceWorld and WebShop, EMPO<sup>2</sup> achieves <strong style="color:#333eba">128.6%</strong> and <strong style="color:#333eba">11.3%</strong> improvements over GRPO, respectively. Moreover, in out-of-distribution tests, EMPO<sup>2</sup> demonstrates superior adaptability to new tasks, requiring only a few trials with memory and no parameter updates. These results highlight EMPO<sup>2</sup> as a promising framework for building more exploratory and generalizable LLM-based agents.
</p>
</div>

<!-- Key Results -->
<div class="empo-section">
<h2>Key Results</h2>

<div class="empo-key-results">
  <div class="empo-key-left">
    <img src="images/25_graph.png" alt="Learning curve comparison">
    <p class="empo-caption">(a)</p>
  </div>
  <div class="empo-key-right">
    <img src="images/overview_double.png" alt="Overview comparison">
    <p class="empo-caption">(b)</p>
  </div>
</div>

<p style="font-size:0.93rem; line-height:1.7; color:#475569;">
(a) <strong>Comparison of the learning curves of GRPO and EMPO<sup>2</sup> (ours)</strong> on the ScienceWorld <code>power-component</code> task. While GRPO converges to suboptimal performance, EMPO<sup>2</sup> continues to improve and accomplish the task.
<br><br>
(b) <strong>Comparison of EMPO<sup>2</sup> and other baselines in in-distribution (ID) and out-of-distribution (OOD) settings</strong> on ScienceWorld and WebShop. In ID experiments, it adapts well to familiar environments, achieving <strong style="color:#333eba">128.6% on ScienceWorld</strong> and <strong style="color:#333eba">11.3% on WebShop</strong> improvements over GRPO. In OOD experiments, it also shows strong performance with few trials and no weight updates, indicating effective use of memory to explore unfamiliar environments.
</p>
</div>

<!-- Exploration Problem -->
<div class="empo-section-alt">
<h2>The Exploration Problem of LLM Agents</h2>

<p>Although LLMs possess strong prior knowledge, it often misaligns with environment rules, requiring exploration and trial-and-error adaptation. However, LLM agents struggle to explore beyond their confident behavior distribution.</p>

<div class="empo-img-center">
  <img src="images/exploration_problem.png" alt="Exploration problem illustration" style="max-width:85%;">
  <p class="empo-caption">When training an LLM with GRPO in ScienceWorld, limited exploration leads to failure. For example, in the task "turn on the red light bulb," the agent fails to find the bulb and keeps repeating the same actions, resulting in stagnant performance despite additional training.</p>
</div>

<p>We study online RL for training agents without prior knowledge of environment rules, where the main challenge is insufficient exploration. Agents often follow instructions literally instead of searching the environment, and methods like GRPO, which rely on scalar rewards, further restrict exploration and learning.</p>
</div>

<!-- Memory Method -->
<div class="empo-section">
<h2>Advancing Exploration with Self-Generated Memory</h2>

<p>EMPO<sup>2</sup> leverages memory to maintain continuity across rollouts. In addition to learning through policy optimization, the agent reviews past rollouts to generate self-guidance (<em>tips</em>) stored in memory, which conditions future rollouts and promotes exploration. By exploiting the pretrained LLM's summarization and reflection abilities as auxiliary signals beyond scalar rewards, EMPO<sup>2</sup> enables autonomous exploration that is later consolidated through policy updates.</p>

<div class="empo-img-center">
  <img src="images/motivation3.png" alt="Memory-augmented exploration" style="max-width:85%;">
</div>
</div>

<!-- Hybrid Policy -->
<div class="empo-section-alt">
<h2>Parameterizing Non-Parametric Updates via Hybrid Policy Optimization</h2>

<p>EMPO<sup>2</sup> introduces hybrid learning that combines memory-assisted exploration with parameter learning. The agent alternates between standard rollouts and memory-augmented rollouts, where retrieved tips from past experiences condition action generation and encourage exploration. While trajectories without memory are updated on-policy, memory-augmented trajectories are updated either on-policy or off-policy.</p>

<div class="empo-img-center">
  <img src="images/EMPO.png" alt="EMPO2 framework" style="max-width:85%;">
</div>

<p>In the off-policy case, the agent performs <strong style="color:#333eba">reward-guided self-distillation</strong>, where high-reward behaviors discovered under tip-conditioned rollouts are selectively distilled into the base policy that conditions only on the state and task. Memory thus serves as temporary scaffolding for exploration, while its benefits are internalized into the model parameters, removing the need for memory at inference time.</p>
</div>

<!-- Results -->
<div class="empo-section">
<h2>Results</h2>

<div class="empo-results-grid">
  <div class="empo-results-left">
    <img src="images/results1.png" alt="ScienceWorld results">
    <p class="empo-caption">(a) <strong>Comparison results of ScienceWorld.</strong> Each task in ScienceWorld contains multiple variants. Bold shows the best performance per task, while red shading marks cases where parametric updates score lower than non-parametric updates.</p>
  </div>
  <div class="empo-results-right">
    <img src="images/results2.png" alt="WebShop results" style="margin-bottom:1.25rem;">
    <p class="empo-caption">(b) <strong>Comparison results of WebShop.</strong> We average results over three random seeds and report both the mean score and the mean success rate.</p>
    <br>
    <img src="images/results3.png" alt="OOD adaptation results">
    <p class="empo-caption">(c) <strong>Adaptation to new tasks.</strong> With memory enabled, EMPO<sup>2</sup> adapts rapidly to novel tasks, yielding an average improvement of 136% within 10 steps. GRPO shows greater variability and often fails to adapt to unfamiliar tasks.</p>
  </div>
</div>
</div>

<!-- BibTeX -->
<div class="empo-section">
<h2>BibTeX</h2>
<div class="empo-bibtex">
<button class="empo-copy-btn" onclick="navigator.clipboard.writeText(document.getElementById('bibtex-text').innerText).then(()=>{this.textContent='Copied!';setTimeout(()=>{this.textContent='Copy'},2000)})">Copy</button>
<pre style="margin:0;"><code id="bibtex-text">@inproceedings{
empo2,
title={Exploratory Memory-Augmented {LLM} Agent via Hybrid On- and Off-Policy Optimization},
author={Liu, Zeyuan and Kim, Jeonghye and Luo, Xufang and Li, Dongsheng and Yang, Yuqing},
booktitle={The Fourteenth International Conference on Learning Representations},
year={2026},
url={https://openreview.net/forum?id=UOzxviKVFO}
}</code></pre>
</div>
</div>