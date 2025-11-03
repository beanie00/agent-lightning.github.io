const translations = {
  zh: {
    "logo.text": "Agent Lightning",
    "nav.overview": "总览",
    "nav.capabilities": "核心能力",
    "nav.workflows": "落地路径",
    "nav.blog": "博文",
    "nav.resources": "资源",
    "hero.badge": "Agent Lightning is the absolute trainer to light up AI agents.",
    "hero.title": "Agent Lightning：解耦训练，点亮你的智能体",
    "hero.subtitle": "将 Algorithm—Runner—LightningStore 闭环无缝接入现有 Agent 代码，基于标准化 Rollout/Span/Reward 协议与可插拔中间件，实现几乎零改动的持续 RL / 提示词 / SFT 优化；兼容任意框架并支持多智能体选择性优化。",
    "section.features": "核心特性",
    "features.zerochange.title": "几乎零代码改动",
    "features.zerochange.desc": "以 Sidecar 方式挂载，不重写原有工作流即可获得追踪与训练数据。",
    "features.framework.title": "兼容任意框架",
    "features.framework.desc": "支持 LangChain、OpenAI Agent SDK、AutoGen、CrewAI、Microsoft Agent Framework 甚至无框架纯 Python。",
    "features.selective.title": "选择性多智能体优化",
    "features.selective.desc": "在复杂系统中仅对关键子 Agent 优化，降低训练成本与风险。",
    "features.algorithms.title": "多算法后端",
    "features.algorithms.desc": "拥抱强化学习（VERL/GRPO）、自动提示词优化（APO）与监督微调（SFT）等范式。",
    "hero.primary": "GitHub Repo",
    "hero.secondary": "文档",
  "metrics.modularity": "解耦闭环",
  "metrics.modularity.desc": "Algorithm ↔ Runner 通过 LightningStore 交换 rollouts / spans / resources，实现异构扩展。",
  "metrics.observability": "标准协议",
    "metrics.observability.desc": "统一 Rollout / Span / Reward 结构 + Tracer & Adapter，算法与业务逻辑彻底分离。",
    "metrics.scalability": "零侵入集成",
    "metrics.scalability.desc": "几乎零代码改动接入任意框架，支持多 Agent 选择性优化与资源热更新。",
    "section.capabilities": "核心能力：从接入到持续优化",
    "capabilities.context": "训练与执行解耦",
    "capabilities.context.desc": "Algorithm（训练）与 Runner（执行）分离，减少耦合；LightningStore 统一数据与资源流。",
    "capabilities.workflow": "数据协议与中间件",
    "capabilities.workflow.desc": "Rollout / Span / Reward 标准化 + Tracer & Adapter 自动采样转化，兼容 RL / APO / SFT。",
    "capabilities.governance": "多算法与可观测性",
    "capabilities.governance.desc": "原生支持 VERL/GRPO、提示词优化与 SFT；内建追踪、错误监控与资源热更新。",
    "section.workflows": "落地路径：三步提升智能体质量",
    "workflows.pilot.title": "接入与埋点",
    "workflows.pilot.desc": "以 Sidecar 方式接入 Tracer，零侵入收集 spans 与奖励信号，打通数据闭环。",
    "workflows.integration.title": "关键调用优化",
    "workflows.integration.desc": "选择性锁定核心 LLM / 工具调用位置，以 RL/提示词策略学习获取性能增益。",
    "workflows.scale.title": "持续迭代演进",
    "workflows.scale.desc": "资源（提示词/权重）热更新回注执行端；监控 Retokenization Drift 与错误模式，稳定扩展。",
    "section.blog": "智能体洞察",
    "blog.intro": "实时掌握 Agent Lightning 的技术动态、最佳实践与行业案例。",
    "section.resources": "资源与支持",
    "resources.docs": "官方文档",
    "resources.docs.desc": "学习框架架构、API 参考与最佳实践。",
    "resources.samples": "示例与模板",
    "resources.samples.desc": "快速复制官方工作流、部署脚本与演示项目。",
    "resources.community": "社区交流",
    "resources.community.desc": "加入微信讨论组，获取来自团队的最新答疑。",
    "cta.title": "将你的 Agent 变成可持续优化的进化系统",
    "cta.subtitle": "借助解耦闭环与标准协议，快速进入 RL / 提示词 / SFT 持续改进通道。",
    "cta.button": "联系我们",
    "footer.about": "Agent Lightning 是微软开源的事件驱动智能体框架，帮助企业快速将智能体系统推向生产。",
    "footer.links": "快速链接",
    "footer.contact": "联系我们：agent-lightning@microsoft.com",
    "footer.rights": "© 2025 Agent Lightning",
    // Markdown block lists (ZH)
    "capabilities.context.md": "- Algorithm ↔ Runner 分离\n- LightningStore 共享资源\n- 选择性优化子 Agent",
    "capabilities.workflow.md": "- 统一结构化采样\n- Tracer 自动埋点\n- Adapter 样本转换",
    "capabilities.governance.md": "- VERL / GRPO RL\n- Prompt / SFT 优化\n- 错误模式监控",
    "workflows.pilot.md": "- 使用 examples 快速集成，开始采样。",
    "workflows.integration.md": "- 设置 reward 策略与 Adapter，将 spans 转成 (prompt, response, reward)。",
    "workflows.scale.md": "- 通过 token IDs 与错误分类数据保持训练与线上一致性。"
  },
  en: {
    "logo.text": "Agent Lightning",
    "nav.overview": "Overview",
    "nav.capabilities": "Capabilities",
    "nav.workflows": "Go Live",
    "nav.blog": "Blog",
    "nav.resources": "Resources",
    "hero.badge": "Agent Lightning is the absolute trainer to light up AI agents.",
    "hero.title": "Agent Lightning: Decouple Training & Ignite Your Agents",
    "hero.subtitle": "Seamlessly attach Algorithm—Runner—LightningStore loop to existing code; standard Rollout/Span/Reward protocol + pluggable middleware enables near zero-change RL / Prompt / SFT optimization; compatible with ANY framework & selective multi-agent optimization.",
    "section.features": "Key Features",
    "features.zerochange.title": "ZERO CODE CHANGE (almost)",
    "features.zerochange.desc": "Sidecar-style attach; gain tracing & training signals without rewriting workflows.",
    "features.framework.title": "ANY Framework Compatible",
    "features.framework.desc": "Works with LangChain, OpenAI Agent SDK, AutoGen, CrewAI, Microsoft Agent Framework or raw Python.",
    "features.selective.title": "Selective Multi-Agent Optimization",
    "features.selective.desc": "Target only critical sub-agents for improvement to reduce cost & risk.",
    "features.algorithms.title": "Multi-Algorithm Backend",
    "features.algorithms.desc": "Embraces RL (VERL/GRPO), Automatic Prompt Optimization (APO), and Supervised Fine-Tuning (SFT).",
    "hero.primary": "GitHub Repo",
    "hero.secondary": "Docs",
    "metrics.modularity": "Decoupled Loop",
    "metrics.modularity.desc": "Algorithm ↔ Runner exchange rollouts / spans / resources through LightningStore for elastic scaling.",
    "metrics.observability": "Standard Protocol",
    "metrics.observability.desc": "Unified Rollout / Span / Reward + Tracer & Adapter turns executions into learnable samples.",
    "metrics.scalability": "Near Zero Integration",
    "metrics.scalability.desc": "Plug into ANY framework with minimal edits; selectively optimize multi-agent hot spots.",
    "section.capabilities": "Core Capabilities: From Hooking to Optimization",
    "capabilities.context": "Training–Execution Decoupling",
    "capabilities.context.desc": "Separate Algorithm (training) and Runner (execution); LightningStore unifies data & resource flow.",
    "capabilities.workflow": "Data Protocol & Middleware",
    "capabilities.workflow.desc": "Standard Rollout / Span / Reward + Tracer & Adapter auto-transform traces for RL / APO / SFT.",
    "capabilities.governance": "Multi-Algorithm & Observability",
    "capabilities.governance.desc": "Supports VERL/GRPO, prompt optimization & SFT with built-in tracing, error monitoring & hot resource updates.",
    "section.workflows": "Workflow Path: 3 Steps to Better Agents",
    "workflows.pilot.title": "Plug & Trace",
    "workflows.pilot.desc": "Sidecar attach Tracer; passively collect spans & rewards to open the data loop.",
    "workflows.integration.title": "Targeted Optimization",
    "workflows.integration.desc": "Select critical LLM / tool calls; apply RL / prompt strategies for measurable gains.",
    "workflows.scale.title": "Continuous Evolution",
    "workflows.scale.desc": "Hot-update prompts / weights; monitor retokenization drift & error modes for stable scaling.",
    "section.blog": "Agent Lightning Insights",
    "blog.intro": "Stay ahead with the latest updates, practices, and industry stories from the team.",
    "section.resources": "Resources & Support",
    "resources.docs": "Documentation",
    "resources.docs.desc": "Study architecture, APIs, and best practices in depth.",
    "resources.samples": "Samples & Templates",
    "resources.samples.desc": "Clone official workflows, deployment scripts, and demo projects fast.",
    "resources.community": "Community",
    "resources.community.desc": "Join WeChat discussion groups for the latest Q&A from the team.",
    "cta.title": "Turn Agents into Continuously Optimizing Systems",
    "cta.subtitle": "Leverage decoupled loops & standard protocol to enter sustained RL / Prompt / SFT improvement.",
    "cta.button": "Contact Us",
    "footer.about": "Agent Lightning is Microsoft’s open-source event-driven agent framework to ship enterprise-grade systems fast.",
    "footer.links": "Quick Links",
    "footer.contact": "Contact us: agent-lightning@microsoft.com",
    "footer.rights": "© 2025 Agent Lightning",
    // Markdown block lists (EN)
    "capabilities.context.md": "- Algorithm ↔ Runner decoupling\n- LightningStore shared resources\n- Selective sub-agent optimization",
    "capabilities.workflow.md": "- Unified structured sampling\n- Automatic tracing via Tracer\n- Adapter sample transformation",
    "capabilities.governance.md": "- VERL / GRPO RL\n- Prompt / SFT optimization\n- Error pattern monitoring",
    "workflows.pilot.md": "- Use examples to integrate quickly and start sampling.",
    "workflows.integration.md": "- Define reward strategy & Adapter to convert spans into (prompt, response, reward).",
    "workflows.scale.md": "- Maintain consistency with token IDs & error classification data."
  }
};

// Blog posts (unchanged except for updated URLs/titles)
const blogPosts = [
  {
    id: "retokenization",
    category: { zh: "技术洞察", en: "Insights" },
    title: {
      zh: "告别重分词偏移：兼容 OpenAI API 的 Token ID 回传实战",
      en: "No More Retokenization Drift: Token ID Return via OpenAI-Compatible API"
    },
    description: {
      zh: "解析为何在 Agent RL 中直接回传 token IDs 可避免分词不一致造成的训练漂移。",
      en: "Explains how returning token IDs stabilizes Agent RL by avoiding retokenization inconsistencies."
    },
    url: "https://blog.vllm.ai/2025/10/22/agent-lightning.html",
    readTime: { zh: "阅读 7 分钟", en: "7 min read" }
  },
  {
    id: "sql-rl",
    category: { zh: "最佳实践", en: "Playbook" },
    title: {
      zh: "用强化学习训练智能体编写与自纠 SQL",
      en: "Training AI Agents to Write & Self-Correct SQL with RL"
    },
    description: {
      zh: "展示奖励设计与回放策略如何提升智能体在复杂 SQL 生成与纠错任务中的稳定性。",
      en: "Shows reward shaping and replay tactics for robust SQL generation & self-correction."
    },
    url: "https://medium.com/@yugez/training-ai-agents-to-write-and-self-correct-sql-with-reinforcement-learning-571ed31281ad",
    readTime: { zh: "阅读 9 分钟", en: "9 min read" }
  },
  {
    id: "rl-any-agent",
    category: { zh: "研究进展", en: "Research" },
    title: {
      zh: "Agent Lightning：用强化学习训练任意智能体",
      en: "Agent Lightning: Train Any AI Agent with Reinforcement Learning"
    },
    description: {
      zh: "arXiv 论文提出几乎零改动的训练闭环，将执行端数据转化为可学习样本。",
      en: "arXiv paper introduces a near zero-change training loop turning executions into learnable samples."
    },
    url: "https://arxiv.org/abs/2508.03680",
    readTime: { zh: "阅读 12 分钟", en: "12 min read" }
  }
];

// Language initialization from URL (?lang=zh|en), default English
let currentLang = 'en';
try {
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  if (urlLang && ['zh','en'].includes(urlLang)) currentLang = urlLang;
} catch (e) {}

const applyTranslations = lang => {
  document.documentElement.lang = lang === 'zh' ? 'zh' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(node => {
    const key = node.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      node.textContent = translations[lang][key];
    }
  });
  renderBlog(lang);
  renderMarkdownBlocks(lang);
  // Rebalance headings after language switch
  rebalanceAll();
};

const renderBlog = lang => {
  const container = document.getElementById('blog-list');
  if (!container) return;
  container.innerHTML = '';
  const fragment = document.createDocumentFragment();
  blogPosts.forEach(post => {
    const card = document.createElement('article');
    card.className = 'blog-card';
    const category = document.createElement('div');
    category.className = 'category';
    category.textContent = post.category[lang];
    const title = document.createElement('h4');
    title.textContent = post.title[lang];
    const description = document.createElement('p');
    description.textContent = post.description[lang];
    const meta = document.createElement('p');
    meta.className = 'meta';
    meta.textContent = post.readTime[lang];
    const link = document.createElement('a');
    link.href = post.url;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = lang === 'zh' ? '阅读全文' : 'Read article';
    card.append(category, title, description, meta, link);
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
};

function renderMarkdownBlocks(lang) {
  const nodes = document.querySelectorAll('[data-i18n-md]');
  nodes.forEach(el => {
    const key = el.getAttribute('data-i18n-md');
    const md = translations[lang] && translations[lang][key];
    if (!md) return;
    const lines = md.split(/\n+/).map(l => l.trim()).filter(l => l.startsWith('- '));
    const ul = document.createElement('ul');
    ul.className = 'md-ul';
    lines.forEach(line => {
      const li = document.createElement('li');
      li.textContent = line.replace(/^[-]\s*/, '');
      ul.appendChild(li);
    });
    el.innerHTML = '';
    if (el.tagName.toLowerCase() === 'ul') {
      el.append(...ul.children);
    } else {
      el.appendChild(ul);
    }
  });
}

const registerLanguageToggle = () => {
  const toggleButtons = document.querySelectorAll('[data-lang]');
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetLang = button.getAttribute('data-lang');
      if (targetLang !== currentLang) {
        currentLang = targetLang;
        toggleButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        applyTranslations(currentLang);
      }
    });
  });
};

// ---------------- Text Balance Polyfill -----------------
function supportsBalance() {
  return typeof CSS !== 'undefined' && CSS.supports && CSS.supports('text-wrap', 'balance');
}

function initTextBalancePolyfill() {
  if (supportsBalance()) return; // Native support present
  rebalanceAll();
}

function rebalanceAll() {
  if (supportsBalance()) return;
  const targets = document.querySelectorAll('.hero-copy h1, .section-title');
  targets.forEach(el => balanceElement(el));
}

function balanceElement(el) {
  if (!el) return;
  const original = el.getAttribute('data-original-text') || el.textContent.trim();
  if (!el.getAttribute('data-original-text')) {
    el.setAttribute('data-original-text', original);
  } else {
    el.textContent = original; // reset
  }
  if (original.length < 18) return; // short skip
  const isChinese = /[\u4e00-\u9fa5]/.test(original) && !/\s/.test(original);
  if (isChinese) {
    balanceChinese(el, original);
  } else {
    balanceEnglish(el, original);
  }
}

function balanceEnglish(el, text) {
  const words = text.split(/\s+/);
  if (words.length < 3) return;
  let bestIdx = 1, bestDiff = Infinity;
  for (let i = 1; i < words.length - 1; i++) {
    const first = words.slice(0, i).join(' ');
    const second = words.slice(i).join(' ');
    const diff = Math.abs(first.length - second.length) + (second.length < 10 ? (10 - second.length) * 1.5 : 0);
    if (diff < bestDiff) { bestDiff = diff; bestIdx = i; }
  }
  const first = words.slice(0, bestIdx).join(' ');
  const second = words.slice(bestIdx).join(' ');
  el.innerHTML = `${escapeHtml(first)}<br>${escapeHtml(second)}`;
}

function balanceChinese(el, text) {
  const chars = Array.from(text);
  const len = chars.length;
  let breakPos = Math.round(len / 2);
  while (len - breakPos <= 2 && breakPos > 3) breakPos--;
  const firstLen = breakPos;
  const secondLen = len - breakPos;
  if (firstLen - secondLen > len * 0.25) {
    const shift = Math.min(Math.round((firstLen - secondLen) / 2), secondLen - 2);
    breakPos -= shift;
  }
  const first = chars.slice(0, breakPos).join('');
  const second = chars.slice(breakPos).join('');
  el.innerHTML = `${escapeHtml(first)}<br>${escapeHtml(second)}`;
}

function escapeHtml(str) {
  return str.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
}

function debounce(fn, wait) { let t; return function() { clearTimeout(t); t = setTimeout(fn, wait); }; }

// --------------- WeChat Modal -----------------
function initWeChatModal() {
  const trigger = document.getElementById('wechat-trigger');
  const modal = document.getElementById('wechat-modal');
  const backdrop = document.getElementById('wechat-backdrop');
  const closeBtn = document.getElementById('wechat-close');
  if (!trigger || !modal) return;
  const open = () => { modal.style.display = 'flex'; document.body.style.overflow='hidden'; };
  const close = () => { modal.style.display = 'none'; document.body.style.overflow=''; };
  trigger.addEventListener('click', open);
  backdrop && backdrop.addEventListener('click', close);
  closeBtn && closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

document.addEventListener('DOMContentLoaded', () => {
  registerLanguageToggle();
  const defaultButton = document.querySelector(`[data-lang="${currentLang}"]`);
  if (defaultButton) defaultButton.classList.add('active');
  applyTranslations(currentLang);
  initTextBalancePolyfill();
  window.addEventListener('resize', debounce(rebalanceAll, 180));
  initWeChatModal();
});

// (Removed corrupted duplicate block at end of file)
