const videos = [
  {
    id: "real-sample",
    column: "col-rewrite",
    title: "选择一家合适的编程机构，真的很重要！",
    category: "编程教育",
    type: "少儿编程",
    time: "00:49",
    hook: 86,
    structure: 82,
    viewpoint: 78,
    form: 65,
    risk: "低",
    riskLevel: "low",
    owner: "贾贝测试",
    source: "有数/有米云 · 直播引流素材",
    crawlTask: "关键词「少儿编程」/ 近半年 / 排序：素材质量降序",
    rawPath: "/Volumes/团队文件-Agent测试/视频下载-贾贝测试/选择一家合适的编程机构_2cd31e7b4b8b396893debe9336a259c3.mp4",
    playableUrl: "assets/videos/real-sample.mp4",
    processStatus: "已下载/已入库/演示转写/已拆解",
    candidateStatus: "已进入候选",
    date: "06/15",
    reason: "行业高度相关，开头钩子和三点判断结构可直接改写",
    progress: 45,
    palette: "linear-gradient(135deg, #08111f, #2563eb 48%, #10b981)",
    isRealSample: true,
    workflow: ["已下载", "已入库", "已转写", "已拆结构", "已评分", "可改写", "待生成文案"],
    pipeline: [
      {
        step: "1",
        name: "批量下载",
        owner: "下载 Agent",
        status: "done",
        input: "有数素材 URL、关键词「少儿编程」、目标 SMB 目录",
        action: "识别已登录素材页，定位播放器资源，提取授权 mp4 地址并下载。",
        output: "原视频 MP4 文件，6.5MB，已保存到网络盘和原型 assets。",
        module: "下载任务 / 原始视频库",
      },
      {
        step: "2",
        name: "原始视频入库",
        owner: "素材库服务",
        status: "done",
        input: "MP4 文件、素材 ID、来源账号、标题、下载时间",
        action: "生成 material_id，登记来源、路径、文件大小、播放地址和处理状态。",
        output: "原始视频库记录，可在原型右侧播放真实视频。",
        module: "原始视频库",
      },
      {
        step: "3",
        name: "语音转文字",
        owner: "ASR 服务",
        status: "mock",
        input: "原始 MP4 音轨",
        action: "抽取音频，生成逐字稿和时间轴。当前原型用演示转写稿占位。",
        output: "原视频文案、字幕稿、句子级时间轴。",
        module: "视频拆解",
      },
      {
        step: "4",
        name: "结构拆解",
        owner: "结构拆解 Agent",
        status: "done",
        input: "转写稿、标题、视频类型、产品知识库",
        action: "按开头钩子、痛点、观点、证据、产品承接、转化动作拆解。",
        output: "六段结构拆解和可复用脚本结构。",
        module: "视频拆解",
      },
      {
        step: "5",
        name: "标签与评分",
        owner: "评分 Agent",
        status: "done",
        input: "结构拆解、行业类目、目标人群、对标优先级",
        action: "按开头钩子 > 文案结构 > 观点 > 呈现形式评分，并判断可改写价值。",
        output: "编程教育/少儿编程标签，改写评分 88，推荐理由。",
        module: "选题池",
      },
      {
        step: "6",
        name: "多版文案生成",
        owner: "文案 Agent",
        status: "done",
        input: "产品知识库、原视频结构、风险规则",
        action: "生成强钩子版、观点延展版、产品种草版，并标注钩子和结构分。",
        output: "三版可拍摄文案。",
        module: "文案工坊",
      },
      {
        step: "7",
        name: "拍摄任务单",
        owner: "拍摄 Agent",
        status: "done",
        input: "选定文案、镜头规则、产品素材库",
        action: "生成设备、场景、分镜、提词器、补拍素材清单。",
        output: "拍摄任务单和提词器稿。",
        module: "拍摄任务",
      },
      {
        step: "8",
        name: "拼接图纸/初剪",
        owner: "拼装 Agent",
        status: "next",
        input: "语义片段库、拍摄素材、时间轴、脚本文案",
        action: "按 0-49 秒时间轴匹配镜头片段，生成拼接图纸并调用剪辑 Agent。",
        output: "混剪图纸，下一步生成初剪视频。",
        module: "混剪工作台",
      },
    ],
    rawMeta: {
      materialId: "2cd31e7b4b8b396893debe9336a259c3-202",
      account: "小码王图书编程信奥",
      fileSize: "约 6.5MB",
      originalTitle: "选择一家合适的编程机构，真的很重要！ #小码王 #小码王少儿编程 #少儿编程",
    },
    breakdown: {
      hook: "“选择一家合适的编程机构，真的很重要。”直接击中家长决策焦虑，属于提醒型/避坑型钩子。",
      pain: "家长不知道怎么选少儿编程机构，容易只看价格、距离、品牌名气，担心报错课浪费时间和钱。",
      logic: "选课提醒 → 决策误区 → 三条判断标准 → 测评/咨询承接，结构清晰，适合套用。",
      viewpoint: "少儿编程机构不能只看表层条件，要看课程体系、老师能力和长期学习路径。",
      evidence: "用三条标准支撑观点：课程进阶路线、作品输出、长期规划/信奥方向。",
      product: "承接到编程课程/编程规划服务：帮助孩子做测评，匹配合适路线和课程阶段。",
      cta: "引导家长私信、预约测评、领取选课清单或试听课。",
      form: "常规真人讲解/素材展示型，画面不是主要复刻点，优先复刻钩子和三点结构。",
    },
    transcript:
      "给孩子选择一家合适的编程机构，真的很重要。很多家长只看价格、只看离家近，或者听别人说哪家火就报哪家，但其实少儿编程最重要的是课程体系、老师能力和孩子的学习路径。第一，要看课程是不是连续的，从图形化编程到 Python、C++，有没有清晰的进阶路线。第二，要看孩子是不是能做出作品，而不是只跟着老师照着敲代码。第三，要看机构有没有长期规划，比如兴趣启蒙、逻辑训练、项目实践，甚至后续的信息学方向。选对机构，孩子学到的不只是一门课，而是一种拆解问题、解决问题的能力。如果你还不知道孩子适合哪条路线，可以先做一次编程能力测评。",
    scripts: [
      {
        name: "强钩子版",
        text: "孩子学编程，选错机构真的会浪费一年。很多家长只看价格、距离和品牌名气，但真正重要的是三件事：课程路线清不清楚，孩子能不能做出作品，老师会不会训练孩子拆问题。",
        hook: 94,
        structure: 86,
      },
      {
        name: "观点延展版",
        text: "少儿编程不是越早学语法越好。启蒙阶段最重要的是先让孩子学会观察问题、拆解步骤、设计方案，再逐步进入代码实现。",
        hook: 88,
        structure: 84,
      },
      {
        name: "产品种草版",
        text: "给孩子选编程课，先看是不是项目制学习、有没有进阶路线、有没有反馈机制。我们会先做能力测评，再匹配适合孩子的学习路线。",
        hook: 82,
        structure: 88,
      },
    ],
    shooting: [
      "老师真人口播，竖屏 4K 30fps，领夹麦",
      "电脑桌/教室背景，保留课程路线图或白板",
      "补充学生作品、代码界面、课程路线图素材",
      "开头 3 秒必须保留“选错机构浪费一年”的强提醒",
      "CTA 测试：领取选课清单 vs 预约能力测评",
    ],
    blueprint: [
      ["0-3s", "老师口播特写", "孩子学编程，选错机构真的会浪费一年", "强钩子"],
      ["3-8s", "家长咨询/表单画面", "只看价格、距离、名气，都不够", "放大痛点"],
      ["8-16s", "课程路线图", "真正要看课程路线是否清楚", "建立判断标准"],
      ["16-25s", "学生作品/项目画面", "孩子能不能做出作品，比听懂更重要", "证据支撑"],
      ["25-38s", "课堂/老师讲解", "好课程会训练孩子拆问题", "产品价值"],
      ["38-49s", "测评入口/二维码", "私信领取选课清单，先做一次测评", "转化动作"],
    ],
  },
  {
    id: "v1",
    column: "col-candidate",
    title: "低分段该怎么报？不要不好意思问",
    category: "教育培训",
    type: "升学规划",
    time: "03:16",
    hook: 92,
    structure: 78,
    viewpoint: 86,
    form: 72,
    risk: "低",
    riskLevel: "low",
    owner: "李雨皓",
    source: "抖音 · 关键词「低分段怎么报」",
    crawlTask: "近7天 / K12教育 / 热榜采集",
    rawPath: "/原始视频库/2026-06-13/抖音/低分段怎么报_v1.mp4",
    processStatus: "已转写/已拆解",
    candidateStatus: "已进入候选",
    date: "06/15",
    reason: "开头钩子强，结构清晰",
    progress: 0,
    palette: "linear-gradient(135deg, #2f4053, #b0845d 52%, #203746)",
    breakdown: {
      hook: "用“不好意思问”制造反差，快速抓住低分段家长注意力。",
      pain: "家长不知道低分段该怎么选学校和专业，又不好意思主动咨询。",
      logic: "问题确认 → 现状分析 → 解决方案 → 行动建议，逻辑完整。",
      viewpoint: "低分段也有机会，选对路径比盲目冲刺更重要。",
      evidence: "用分数段和报考路径举例，降低家长的不确定感。",
      product: "承接到升学规划服务：帮家长按分数、地区和目标筛路径。",
      cta: "引导家长私信分数段，获取一对一报考建议。",
      form: "真人口播 + 书架背景，白板书写重点，字幕重点突出。",
    },
    transcript: "分数低的，不知道怎么报？不要不好意思问。低分段最怕的不是没机会，而是家长一上来就只盯着热门学校和热门专业。先看孩子现在的分数段，再看能不能走适合自己的升学路径。",
  },
  {
    id: "v2",
    column: "col-candidate",
    title: "小学靠背的英语，初中全崩了？",
    category: "教育培训",
    type: "英语学习",
    time: "02:34",
    hook: 88,
    structure: 76,
    viewpoint: 80,
    form: 74,
    risk: "低",
    riskLevel: "low",
    owner: "王浩",
    source: "抖音 · 账号「雅思无敌Vicky」",
    crawlTask: "近7天 / 英语学习 / 账号监控",
    rawPath: "/原始视频库/2026-06-03/抖音/小学靠背的英语_v2.mp4",
    processStatus: "已转写/已拆解",
    candidateStatus: "已进入候选",
    date: "06/14",
    reason: "情绪共鸣强，观点明确",
    progress: 0,
    palette: "linear-gradient(135deg, #f1d9b5, #6d7f9c 54%, #26324b)",
    breakdown: {
      hook: "直接点破“小学能背，初中崩”的焦虑场景。",
      pain: "家长发现孩子小学成绩还行，到了初中英语突然跟不上。",
      logic: "现象对比 → 根因拆解 → 方法替换 → 产品承接。",
      viewpoint: "学习不能只靠背，必须建立可迁移的方法系统。",
      evidence: "通过小学和初中考法差异说明，背诵无法覆盖理解型题目。",
      product: "承接到英语方法课：从背诵转向阅读、语法和结构训练。",
      cta: "引导领取初中英语学习方法清单或试听课。",
      form: "孩子书桌场景，沉浸感强，但对编程产品只适合借结构。",
    },
    transcript: "小学靠背的英语，到了初中为什么全崩了？因为小学背单词、背课文还能撑一撑，初中一旦开始考理解、语法和阅读逻辑，光靠背就不够了。",
  },
  {
    id: "v3",
    column: "col-candidate",
    title: "26秋新版课本发货，暑假预习提前买",
    category: "教育培训",
    type: "学习资料",
    time: "00:13",
    hook: 75,
    structure: 65,
    viewpoint: 52,
    form: 82,
    risk: "中",
    riskLevel: "mid",
    owner: "陈晨",
    source: "抖音 · 类目「学习资料」",
    crawlTask: "近7天 / K12教育 / 类目榜单",
    rawPath: "/原始视频库/2026-06-09/抖音/新版课本发货_v3.mp4",
    processStatus: "已转写/已拆解",
    candidateStatus: "已进入候选",
    date: "06/13",
    reason: "呈现形式突出，复刻难度高",
    progress: 0,
    palette: "linear-gradient(135deg, #d8c08b, #f2efe7 48%, #67805f)",
    breakdown: {
      hook: "用“新版课本发货”制造稀缺和紧迫感。",
      pain: "家长担心暑假没有提前准备，开学后孩子跟不上。",
      logic: "新品展示 → 暑假提前买 → 标品转化，逻辑简单。",
      viewpoint: "刚需标品驱动，不适合直接套用到编程课。",
      evidence: "用实拍库存、课本封面和版本信息建立可信度。",
      product: "直接承接到课本/教辅销售，强调版本齐全和提前预习。",
      cta: "引导评论或私信年级，购买对应教材。",
      form: "货架扫拍有冲击，但需要实体库存和强刚需场景。",
    },
    transcript: "二十六秋新版课本已经到货了，暑假想提前预习的家长可以提前准备。语文、数学、英语都有，开学前把基础内容过一遍，孩子会更从容。",
  },
  {
    id: "v4",
    column: "col-rewrite",
    title: "思维，提升娃的上限，不保校内成绩",
    category: "教育培训",
    type: "学习方法",
    time: "01:13",
    hook: 86,
    structure: 74,
    viewpoint: 88,
    form: 70,
    risk: "低",
    riskLevel: "low",
    owner: "张晓明",
    source: "抖音 · 关键词「思维课」",
    crawlTask: "近7天 / 家庭教育 / 热榜采集",
    rawPath: "/原始视频库/2026-06-08/抖音/思维提升上限_v4.mp4",
    processStatus: "已转写/已拆解",
    candidateStatus: "已进入候选",
    date: "06/13",
    reason: "观点可迁移，适合产品承接",
    progress: 20,
    palette: "linear-gradient(135deg, #836a55, #d4e4ea 52%, #192a34)",
    breakdown: {
      hook: "先拆掉“学了就提分”的期待，制造认知反差。",
      pain: "家长期待思维课立刻提分，但实际短期成绩变化不明显。",
      logic: "预期纠偏 → 能力定义 → 长期价值 → 课程承接。",
      viewpoint: "思维课提升的是上限，不是短期分数。",
      evidence: "用能力维度解释：观察、拆解、推理、表达比短期刷题更底层。",
      product: "承接到思维/编程课：训练问题拆解能力和长期学习上限。",
      cta: "引导家长预约测评，看孩子适合哪类思维训练。",
      form: "真人讲解可信度高，适合迁移到少儿编程表达。",
    },
    transcript: "思维课提升的是孩子的上限，不是保证校内成绩马上提高。它真正训练的是孩子面对新问题时，能不能观察、拆解、推理和表达。",
  },
  {
    id: "v5",
    column: "col-rewrite",
    title: "Python小白必看：30天从入门到实战",
    category: "编程",
    type: "Python入门",
    time: "00:27",
    hook: 95,
    structure: 82,
    viewpoint: 90,
    form: 78,
    risk: "低",
    riskLevel: "low",
    owner: "刘畅",
    source: "抖音 · 关键词「Python入门」",
    crawlTask: "近7天 / 编程 / 高相关采集",
    rawPath: "/原始视频库/2026-06-13/抖音/Python小白必看_v5.mp4",
    processStatus: "已转写/已拆解",
    candidateStatus: "已进入候选",
    date: "06/13",
    reason: "编程相关，高价值样本",
    progress: 35,
    palette: "linear-gradient(135deg, #151f2e, #4460a8 52%, #19a974)",
    breakdown: {
      hook: "“小白必看+30天”同时降低门槛并制造路径感。",
      pain: "初学者一开始就学语法，很快失去兴趣和方向。",
      logic: "痛点定位 → 路径拆解 → 结果承诺 → 课程转化。",
      viewpoint: "入门难不是智力问题，而是路径和练习设计问题。",
      evidence: "用小项目举例证明概念能在实践中自然理解。",
      product: "承接到 Python 入门课：项目驱动、30天路径、阶段练习。",
      cta: "引导领取 30 天 Python 入门路线图。",
      form: "屏幕录制 + 讲师头像，复刻成本低。",
    },
    transcript: "Python 小白别一上来就死磕语法。先用三十天做几个能跑起来的小项目，你会发现变量、循环、函数这些概念，都能在项目里自然理解。",
  },
  {
    id: "v6",
    column: "col-script",
    title: "初中英语逆袭的3个关键习惯",
    category: "教育培训",
    type: "英语学习",
    time: "02:48",
    hook: 80,
    structure: 80,
    viewpoint: 75,
    form: 68,
    risk: "低",
    riskLevel: "low",
    owner: "何佳",
    source: "抖音 · 关键词「英语逆袭」",
    crawlTask: "近7天 / 英语学习 / 结构样本",
    rawPath: "/原始视频库/2026-06-16/抖音/英语逆袭三个习惯_v6.mp4",
    processStatus: "已转写/已拆解",
    candidateStatus: "已进入候选",
    date: "06/16",
    reason: "结构稳定，可改成编程学习习惯",
    progress: 80,
    palette: "linear-gradient(135deg, #f5efe1, #6f91a9 52%, #2e4057)",
    breakdown: {
      hook: "“逆袭的3个关键习惯”是典型清单型钩子。",
      pain: "学生努力背单词，但成绩提升慢，家长不知道问题在哪。",
      logic: "三个习惯并列展开，每点都能接训练方法。",
      viewpoint: "学习结果来自稳定习惯，不是临时冲刺。",
      evidence: "用固定输入、错题复盘、阅读结构训练三个动作作支撑。",
      product: "承接到系统训练课：把习惯拆成每日任务和反馈机制。",
      cta: "引导领取学习习惯打卡表或预约规划。",
      form: "学习场景 + 字幕重点，稳定但不新奇。",
    },
    transcript: "初中英语想逆袭，别只想着多背单词。真正有效的是这三个习惯：每天固定输入，错题及时复盘，阅读时训练句子结构。",
  },
  {
    id: "v7",
    column: "col-shoot",
    title: "初中英语逆袭的3个关键习惯",
    category: "教育培训",
    type: "英语学习",
    time: "02:46",
    hook: 80,
    structure: 80,
    viewpoint: 75,
    form: 68,
    risk: "低",
    riskLevel: "low",
    owner: "张晓明",
    source: "抖音 · 改写任务生成",
    crawlTask: "由候选视频推进 / 待拍摄",
    rawPath: "/生产素材库/拍摄任务/英语逆袭改写版_v7.mp4",
    processStatus: "已生成任务单",
    candidateStatus: "生产中",
    date: "06/16",
    reason: "已生成拍摄清单",
    progress: 0,
    palette: "linear-gradient(135deg, #c4b49d, #e7edf6 55%, #1d2939)",
    breakdown: {
      hook: "从“英语逆袭”改成“孩子学编程别先追语法”。",
      pain: "孩子刚学编程就被语法和报错劝退，家长误以为孩子不适合。",
      logic: "常见误区 → 正确路径 → 练习设计 → 课程承接。",
      viewpoint: "编程启蒙先练拆问题，再学语法。",
      evidence: "用任务拆解演示说明：先拆目标，再写代码，孩子更容易理解。",
      product: "承接到少儿编程课：项目制学习、拆题训练、作品输出。",
      cta: "引导预约试听课，领取孩子编程能力测评。",
      form: "讲师口播 + 屏幕案例，容易低成本复刻。",
    },
    transcript: "孩子学编程，别一开始就追着语法学。真正应该先练的是把一个问题拆成几个步骤，再用代码把每一步实现出来。",
  },
  {
    id: "v8",
    column: "col-edit",
    title: "如何用思维导图提升学习效率",
    category: "教育培训",
    type: "学习方法",
    time: "01:05",
    hook: 84,
    structure: 72,
    viewpoint: 82,
    form: 85,
    risk: "低",
    riskLevel: "low",
    owner: "周杰",
    source: "抖音 · 关键词「思维导图」",
    crawlTask: "近7天 / 学习方法 / 形式样本",
    rawPath: "/原始视频库/2026-06-16/抖音/思维导图效率_v8.mp4",
    processStatus: "已切片",
    candidateStatus: "待混剪",
    date: "06/16",
    reason: "镜头素材齐，待拼接图纸",
    progress: 65,
    palette: "linear-gradient(135deg, #0f172a, #475569 52%, #22c55e)",
    breakdown: {
      hook: "“别再死记硬背”与思维导图形成明确替代关系。",
      pain: "孩子记了很多知识点，但考试时不会迁移和应用。",
      logic: "错误方法 → 新方法 → 案例演示 → 工具承接。",
      viewpoint: "把知识变成结构，才更容易迁移。",
      evidence: "用思维导图前后对比，展示知识点之间的关系更清楚。",
      product: "承接到学习方法课或编程逻辑课：训练结构化表达。",
      cta: "引导领取一份思维导图模板或报名体验课。",
      form: "屏幕录制和手绘结合，呈现有新意。",
    },
    transcript: "不要再让孩子死记硬背了。真正高效的学习，是把知识点之间的关系画出来，先形成结构，再去记细节。",
  },
  {
    id: "v9",
    column: "col-review",
    title: "暑假预习这3步，开学不掉队",
    category: "教育培训",
    type: "学习资料",
    time: "01:05",
    hook: 78,
    structure: 68,
    viewpoint: 70,
    form: 64,
    risk: "低",
    riskLevel: "low",
    owner: "杨田",
    source: "抖音 · 关键词「暑假预习」",
    crawlTask: "近7天 / 学习规划 / 初剪审核",
    rawPath: "/生产素材库/初剪视频/暑假预习三步_v9.mp4",
    processStatus: "初剪完成",
    candidateStatus: "待审核",
    date: "06/15",
    reason: "初剪已出，待审核",
    progress: 95,
    palette: "linear-gradient(135deg, #8b5e34, #f3e1c2 48%, #6b7280)",
    breakdown: {
      hook: "暑假预习和开学不掉队是稳定焦虑场景。",
      pain: "家长担心暑假没规划，孩子开学后节奏跟不上。",
      logic: "时间窗口 → 三步路径 → 任务清单 → 转化动作。",
      viewpoint: "提前预习的关键不是多学，而是知道怎么学。",
      evidence: "用三步预习法提供具体行动，让建议看起来可执行。",
      product: "承接到暑假规划课：按阶段安排学习任务。",
      cta: "引导领取暑假预习计划表。",
      form: "常规口播，可直接复刻但差异化一般。",
    },
    transcript: "暑假预习不是把下学期内容全学一遍，而是先建立框架。开学前做好这三步，孩子上课会轻松很多。",
  },
  {
    id: "v10",
    column: "col-upload",
    title: "少儿编程入门别先学语法",
    category: "编程",
    type: "少儿编程",
    time: "00:45",
    hook: 96,
    structure: 88,
    viewpoint: 92,
    form: 75,
    risk: "低",
    riskLevel: "low",
    owner: "投手组",
    source: "自有素材 · 产品改写成片",
    crawlTask: "由文案工坊生成 / 待上传",
    rawPath: "/成片素材库/待上传/少儿编程入门别先学语法_v10.mp4",
    processStatus: "审核通过",
    candidateStatus: "待上传",
    date: "06/18",
    reason: "审核通过，待上传千川",
    progress: 100,
    palette: "linear-gradient(135deg, #0b1220, #1f73ff 52%, #0f766e)",
    breakdown: {
      hook: "反常识表达“别先学语法”，适合快速停留。",
      pain: "孩子学编程容易卡在语法和报错，失去成就感。",
      logic: "误区纠偏 → 拆题能力 → 项目练习 → 试听转化。",
      viewpoint: "会拆问题的孩子，后面学任何语言都更快。",
      evidence: "用学员作品和代码画面证明项目制学习能带来可见成果。",
      product: "承接到自有少儿编程产品：先做作品，再理解代码。",
      cta: "引导私信领取体验课名额或能力测评。",
      form: "口播 + 代码画面 + 学员作品，复刻可控。",
    },
    transcript: "少儿编程入门，别先学语法。孩子真正需要的是先学会拆问题，把一个目标拆成几个小任务，再用代码一步步完成。",
  },
];

const columns = {
  "col-candidate": document.getElementById("col-candidate"),
  "col-rewrite": document.getElementById("col-rewrite"),
  "col-script": document.getElementById("col-script"),
  "col-shoot": document.getElementById("col-shoot"),
  "col-edit": document.getElementById("col-edit"),
  "col-review": document.getElementById("col-review"),
  "col-upload": document.getElementById("col-upload"),
};

const columnNames = {
  "col-candidate": "候选视频",
  "col-rewrite": "待改写",
  "col-script": "文案生成中",
  "col-shoot": "待拍摄",
  "col-edit": "待混剪",
  "col-review": "初剪审核",
  "col-upload": "待上传",
};

let selectedId = "real-sample";
let activeFilter = "all";

function matchesFilter(video) {
  if (activeFilter === "all") return true;
  if (activeFilter === "hook") return video.hook >= 88;
  if (activeFilter === "programming") return video.category === "编程";
  if (activeFilter === "risk") return video.riskLevel !== "low";
  if (activeFilter === "shoot") return video.column === "col-shoot";
  if (activeFilter === "upload") return video.column === "col-upload";
  return true;
}

function cardTemplate(video) {
  return `
    <article class="video-card ${video.id === selectedId ? "active" : ""}" data-id="${video.id}">
      ${video.isRealSample ? `<div class="sample-ribbon">真实样本</div>` : ""}
      <div class="thumb" data-time="${video.time}" style="--thumb:${video.palette}"></div>
      <h3>${video.title}</h3>
      <div class="tags">
        <span class="tag label">标签</span>
        <span class="tag">${video.category}</span>
        <span class="tag">${video.type}</span>
      </div>
      <div class="scores">
        <span class="score">钩子 ${video.hook}</span>
        <span class="score"><span>结构</span> ${video.structure}</span>
      </div>
      <p class="reason">${video.reason}</p>
      <p class="source-line">${video.source}</p>
      ${video.progress ? `<div class="progress" style="--progress:${video.progress}%"><i></i></div>` : ""}
      <div class="owner">
        <span>${video.owner}</span>
        <span>${video.date}</span>
        <span class="risk ${video.riskLevel}">${video.risk}</span>
      </div>
    </article>
  `;
}

function renderBoard() {
  Object.values(columns).forEach((column) => {
    column.innerHTML = "";
  });

  videos
    .filter(matchesFilter)
    .forEach((video) => {
      columns[video.column].insertAdjacentHTML("beforeend", cardTemplate(video));
    });

  document.querySelectorAll(".video-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectedId = card.dataset.id;
      renderBoard();
      renderDetail();
    });
  });
}

function renderDetail() {
  const video = videos.find((item) => item.id === selectedId) || videos[0];
  const scriptItems =
    video.scripts ||
    [
      {
        name: "强钩子版",
        text: "孩子学编程，最怕的不是不会写代码，而是一上来就被语法劝退。先练拆问题，后面学 Python、C++ 都会快很多。",
        hook: 95,
        structure: 76,
      },
      {
        name: "观点延展版",
        text: "编程课真正拉开差距的，不是提前背了多少代码，而是孩子能不能把一个复杂问题拆成一步一步的小任务。",
        hook: 88,
        structure: 80,
      },
      {
        name: "产品种草版",
        text: "我们把每节课都设计成项目任务，让孩子先看结果，再拆步骤，最后自己完成作品，学习路径更自然。",
        hook: 82,
        structure: 78,
      },
    ];
  const shootingItems =
    video.shooting ||
    [
      "设备建议：手机竖屏 4K 30fps，补光灯，领夹麦",
      "场景建议：书房 / 绿幕 / 电脑桌，白板保留一块",
      "提词器稿：开头 3 秒必须保留反常识表达",
      "分镜建议：口播 12s + 作品演示 10s + CTA 5s",
    ];
  const blueprintRows = video.blueprint || [];
  const detailPanel = document.getElementById("detailPanel");
  detailPanel.innerHTML = `
    <div class="detail-hero">
      ${
        video.playableUrl
          ? `<video class="detail-video" src="${video.playableUrl}" controls preload="metadata"></video>`
          : `<div class="thumb" data-time="${video.time}" style="--thumb:${video.palette}"></div>`
      }
      <div>
        <h3>${video.title}</h3>
        <p>标签：${video.category} / ${video.type}<br/>来源：${video.source}</p>
      </div>
    </div>

    <section class="section source-card">
      <h4>抓取来源</h4>
      <div class="source-meta">
        ${video.rawMeta ? `<div><span>素材 ID</span><strong>${video.rawMeta.materialId}</strong></div>` : ""}
        ${video.rawMeta ? `<div><span>来源账号</span><strong>${video.rawMeta.account}</strong></div>` : ""}
        <div><span>来源渠道</span><strong>${video.source}</strong></div>
        <div><span>采集任务</span><strong>${video.crawlTask}</strong></div>
        <div><span>原视频存储</span><strong>${video.rawPath}</strong></div>
        ${video.playableUrl ? `<div><span>原型播放地址</span><strong>${video.playableUrl}</strong></div>` : ""}
        ${video.rawMeta ? `<div><span>文件大小</span><strong>${video.rawMeta.fileSize}</strong></div>` : ""}
        <div><span>当前位置</span><strong>${columnNames[video.column]}</strong></div>
      </div>
    </section>

    ${
      video.workflow
        ? `<section class="section">
            <h4>今日目标流程</h4>
            <div class="workflow-steps">
              ${video.workflow.map((step, index) => `<span class="${index <= 5 ? "done" : ""}">${step}</span>`).join("")}
            </div>
          </section>`
        : ""
    }

    <div class="score-grid">
      <div class="score-box"><strong>${video.hook}</strong><span>开头钩子</span></div>
      <div class="score-box"><strong>${video.structure}</strong><span>结构逻辑</span></div>
      <div class="score-box"><strong>${video.viewpoint}</strong><span>观点价值</span></div>
      <div class="score-box"><strong>${video.form}</strong><span>呈现形式</span></div>
    </div>

    <section class="section">
      <h4>原视频文案</h4>
      <div class="transcript-box">
        <p>${video.transcript}</p>
        <div class="transcript-actions">
          <button class="mini-btn" id="copyTranscript">复制文案</button>
          <button class="mini-btn" id="expandTranscript">查看完整转写</button>
        </div>
      </div>
    </section>

    <section class="section">
      <h4>对标价值拆解</h4>
      <div class="value-list">
        <div class="value-row"><strong>开头钩子</strong><span>${video.breakdown.hook}</span><em class="risk low">优先</em></div>
        <div class="value-row"><strong>结构逻辑</strong><span>${video.breakdown.logic}</span><em class="risk low">可套用</em></div>
        <div class="value-row"><strong>观点</strong><span>${video.breakdown.viewpoint}</span><em class="risk ${video.viewpoint > 80 ? "low" : "mid"}">${video.viewpoint > 80 ? "可延展" : "一般"}</em></div>
        <div class="value-row"><strong>呈现形式</strong><span>${video.breakdown.form}</span><em class="risk ${video.form > 80 ? "low" : "mid"}">${video.form > 80 ? "有亮点" : "附加"}</em></div>
      </div>
    </section>

    <section class="section">
      <h4>视频结构拆解</h4>
      <div class="structure-list">
        <div><strong>开头钩子</strong><p>${video.breakdown.hook}</p></div>
        <div><strong>痛点</strong><p>${video.breakdown.pain}</p></div>
        <div><strong>观点</strong><p>${video.breakdown.viewpoint}</p></div>
        <div><strong>证据</strong><p>${video.breakdown.evidence}</p></div>
        <div><strong>产品承接</strong><p>${video.breakdown.product}</p></div>
        <div><strong>转化动作</strong><p>${video.breakdown.cta}</p></div>
      </div>
    </section>

    <section class="section">
      <h4>生成的文案方案</h4>
      ${scriptItems
        .map(
          (script) => `
            <div class="script-card">
              <strong>${script.name}</strong>
              <p>${script.text}</p>
              <div class="scores"><span class="score">钩子 ${script.hook}</span><span class="score"><span>结构</span> ${script.structure}</span></div>
            </div>
          `
        )
        .join("")}
      <button class="primary" id="generateShoot">生成拍摄任务单</button>
    </section>

    <section class="section">
      <h4>拍摄任务单</h4>
      <div class="checklist">
        ${shootingItems.map((item, index) => `<label><input type="checkbox" ${index < 2 ? "checked" : ""} /> ${item}</label>`).join("")}
      </div>
      <button class="secondary" id="moveForward">推进到下一环节</button>
      ${video.pipeline ? `<button class="secondary" id="openPipeline">查看处理流水线</button>` : ""}
    </section>

    ${
      blueprintRows.length
        ? `<section class="section">
            <h4>拼接图纸</h4>
            <div class="blueprint-list">
              ${blueprintRows
                .map(
                  (row) => `
                    <div>
                      <strong>${row[0]}</strong>
                      <span>${row[1]}</span>
                      <p>${row[2]}</p>
                      <em>${row[3]}</em>
                    </div>
                  `
                )
                .join("")}
            </div>
          </section>`
        : ""
    }
  `;

  document.getElementById("generateShoot").addEventListener("click", () => {
    showToast("已生成拍摄任务单，自动同步到拍摄任务列");
  });

  document.getElementById("copyTranscript").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(video.transcript);
      showToast("原视频文案已复制");
    } catch {
      showToast("当前浏览器不支持自动复制");
    }
  });

  document.getElementById("expandTranscript").addEventListener("click", () => {
    showToast("完整转写将在视频拆解页打开");
  });

  document.getElementById("moveForward").addEventListener("click", () => {
    const sequence = ["col-candidate", "col-rewrite", "col-script", "col-shoot", "col-edit", "col-review", "col-upload"];
    const index = sequence.indexOf(video.column);
    if (index < sequence.length - 1) {
      video.column = sequence[index + 1];
      video.progress = Math.min(100, video.progress + 20);
      showToast(`已推进到：${columnNames[video.column]}`);
      renderBoard();
    } else {
      showToast("当前素材已在待上传队列");
    }
  });

  const openPipelineButton = document.getElementById("openPipeline");
  if (openPipelineButton) {
    openPipelineButton.addEventListener("click", () => {
      renderPipeline(video);
      pipelineModal.classList.add("show");
      pipelineModal.setAttribute("aria-hidden", "false");
    });
  }
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1800);
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderBoard();
  });
});

document.getElementById("searchInput").addEventListener("input", (event) => {
  const keyword = event.target.value.trim();
  if (!keyword) {
    renderBoard();
    return;
  }
  Object.values(columns).forEach((column) => {
    column.innerHTML = "";
  });
  videos
    .filter((video) => `${video.title}${video.category}${video.type}${video.reason}`.includes(keyword))
    .forEach((video) => columns[video.column].insertAdjacentHTML("beforeend", cardTemplate(video)));
  document.querySelectorAll(".video-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectedId = card.dataset.id;
      renderBoard();
      renderDetail();
    });
  });
});

document.getElementById("closeInspector").addEventListener("click", () => {
  document.querySelector(".inspector").scrollTo({ top: 0, behavior: "smooth" });
  showToast("右侧拆解面板已置顶");
});

function renderLibraryRows() {
  const rows = document.getElementById("libraryRows");
  rows.innerHTML = videos
    .map(
      (video) => `
        <tr>
          <td>
            <strong>${video.title}</strong>
            <span>${video.category} / ${video.type}</span>
          </td>
          <td>${video.source}</td>
          <td><code>${video.rawPath}</code></td>
          <td><span class="status-chip">${video.processStatus}</span></td>
          <td><span class="status-chip ${video.candidateStatus.includes("已进入") ? "ok" : ""}">${video.candidateStatus}</span></td>
        </tr>
      `
    )
    .join("");
}

const libraryModal = document.getElementById("libraryModal");
const pipelineModal = document.getElementById("pipelineModal");

function renderPipeline(video) {
  const body = document.getElementById("pipelineBody");
  const steps = video.pipeline || [];
  body.innerHTML = `
    <div class="pipeline-summary">
      <div>
        <span>当前样本</span>
        <strong>${video.title}</strong>
      </div>
      <div>
        <span>素材 ID</span>
        <strong>${video.rawMeta?.materialId || video.id}</strong>
      </div>
      <div>
        <span>当前环节</span>
        <strong>${columnNames[video.column]}</strong>
      </div>
      <div>
        <span>下一步</span>
        <strong>接入真实 ASR / 生成初剪</strong>
      </div>
    </div>
    <div class="pipeline-grid">
      ${steps
        .map(
          (item) => `
            <article class="pipeline-step ${item.status}">
              <div class="pipeline-step-head">
                <b>${item.step}</b>
                <div>
                  <strong>${item.name}</strong>
                  <span>${item.owner} · ${item.module}</span>
                </div>
                <em>${statusLabel(item.status)}</em>
              </div>
              <dl>
                <dt>输入</dt><dd>${item.input}</dd>
                <dt>处理</dt><dd>${item.action}</dd>
                <dt>输出</dt><dd>${item.output}</dd>
              </dl>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function statusLabel(status) {
  if (status === "done") return "已完成";
  if (status === "mock") return "演示占位";
  if (status === "next") return "下一步";
  return "待处理";
}
document.getElementById("openLibrary").addEventListener("click", () => {
  renderLibraryRows();
  libraryModal.classList.add("show");
  libraryModal.setAttribute("aria-hidden", "false");
});

document.getElementById("openDownloadTask").addEventListener("click", () => {
  renderLibraryRows();
  libraryModal.classList.add("show");
  libraryModal.setAttribute("aria-hidden", "false");
  showToast("新建下载任务入口已打开，原型中先展示下载任务库");
});

document.getElementById("runSample").addEventListener("click", () => {
  selectedId = "real-sample";
  activeFilter = "all";
  document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
  document.querySelector('.filter[data-filter="all"]').classList.add("active");
  const sample = videos.find((item) => item.id === "real-sample");
  sample.column = "col-rewrite";
  sample.progress = 45;
  renderBoard();
  renderDetail();
  showToast("已载入真实样本：已下载 → 已入库 → 已拆解 → 可改写");
});

document.getElementById("closeLibrary").addEventListener("click", () => {
  libraryModal.classList.remove("show");
  libraryModal.setAttribute("aria-hidden", "true");
});

document.getElementById("closePipeline").addEventListener("click", () => {
  pipelineModal.classList.remove("show");
  pipelineModal.setAttribute("aria-hidden", "true");
});

libraryModal.addEventListener("click", (event) => {
  if (event.target === libraryModal) {
    libraryModal.classList.remove("show");
    libraryModal.setAttribute("aria-hidden", "true");
  }
});

pipelineModal.addEventListener("click", (event) => {
  if (event.target === pipelineModal) {
    pipelineModal.classList.remove("show");
    pipelineModal.setAttribute("aria-hidden", "true");
  }
});

renderBoard();
renderDetail();
