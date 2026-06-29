// Cabinet · data source (open-source seed set)
// Model: feel ← move (facet) ← plate (reference)
// - Each plate is a specimen; facets are the concrete moves that achieve its feel.
// - facet.feels: which feel-words this move serves (feel-words live only on facets).
// - facet.at: anchor position of the move on the image, [x%, y%].
// - facet.mech: why it works (for humans); facet.say: how to tell an AI (for AI); facet.tune: borrowing boundary.
// Seed set = 7 curated plates. Add your own via the /ingest flow (see INGEST.md).

window.LIBRARY = [
  {
    "id": "0001",
    "title": "Google 柔彩超现实地景",
    "family": "Image",
    "asset": "assets/0001.jpg",
    "thumb": "thumbs/0001.jpg",
    "ar": 0.75,
    "colors": [
      "#c4b4d6",
      "#e89a84",
      "#f4dcc3",
      "#aec24a",
      "#74ad8f"
    ],
    "facets": [
      {
        "id": "0001-color",
        "zh": "柔彩渐变",
        "en": "pastel gradient",
        "at": [
          60,
          16
        ],
        "feels": [
          "柔和",
          "梦幻"
        ],
        "mech": "柔和、低攻击性的未来感，而不是高饱和霓虹。",
        "say": "Use soft pastel gradients as atmospheric background color fields instead of sharp high-saturation gradients.",
        "q": "pastel gradient soft future brand visual",
        "tune": "渐变保持低饱和和空气感，避免变成糖果色彩虹条。"
      },
      {
        "id": "0001-space",
        "zh": "超现实品牌地景",
        "en": "surreal brand landscape",
        "at": [
          52,
          72
        ],
        "feels": [
          "梦幻",
          "未来"
        ],
        "mech": "用抽象场景承载品牌气质，而不是放普通插画。",
        "say": "Create a hero section with a surreal landscape-like visual field that supports the brand mood without literal product screenshots.",
        "q": "surreal brand landscape hero design",
        "tune": "超现实空间用于暗示氛围，不要复刻原场景或品牌标识。"
      },
      {
        "id": "0001-surface",
        "zh": "虹彩玻璃形体",
        "en": "iridescent glass forms",
        "at": [
          39,
          43
        ],
        "feels": [
          "未来"
        ],
        "mech": "轻盈、未来、半透明的纵向发光形体，做安静的视觉锚。",
        "say": "Use slim iridescent glass forms or translucent vertical accents as quiet visual anchors.",
        "q": "iridescent glass forms brand visual design",
        "tune": "虹彩形体要少量使用，太多会变成装饰性科幻风。"
      },
      {
        "id": "0001-texture",
        "zh": "胶片颗粒",
        "en": "film grain",
        "at": [
          14,
          88
        ],
        "feels": [
          "柔和"
        ],
        "mech": "削弱纯数字感，让画面有温度和空气感。",
        "say": "Add a subtle film-grain or noise overlay to soften digital gradients and give the page a tactile atmosphere.",
        "q": "film grain pastel gradient web design",
        "tune": "颗粒几乎不可见即可，用来软化纯数字渐变，不要把 UI 弄脏。"
      }
    ]
  },
  {
    "id": "0016",
    "title": "邮路档案·拟物陈列页",
    "family": "Screen",
    "asset": "assets/0016.jpg",
    "thumb": "thumbs/0016.jpg",
    "ar": 1.33,
    "colors": [
      "#f4efec",
      "#bb5f41",
      "#daa642",
      "#25211f"
    ],
    "facets": [
      {
        "id": "0016-props",
        "zh": "邮政拟物道具",
        "en": "postal ephemera",
        "at": [
          24,
          48
        ],
        "feels": [
          "典藏",
          "玩味"
        ],
        "mech": "用真实邮政物件（齿孔邮票、邮戳、明信片）当主视觉，档案感变成可触摸的道具。",
        "say": "Use skeuomorphic postal ephemera — a perforated stamp, a postmarked card, slightly rotated and layered with soft shadow — as the hero visual instead of abstract illustration.",
        "q": "postal ephemera stamp postcard brand design",
        "tune": "道具最多叠放两件，再多就成剪贴簿大杂烩。"
      },
      {
        "id": "0016-layout",
        "zh": "分屏布局",
        "en": "split-screen layout",
        "at": [
          50.4,
          55.4
        ],
        "feels": [
          "精致",
          "冷静"
        ],
        "mech": "左边给实物道具一块整色场，右边纯排版做索引，两侧密度各管各的。",
        "say": "Split the screen: one side is a solid-color artifact showcase panel, the other a clean typographic index — keep imagery and navigation strictly separated.",
        "q": "split screen editorial layout brand site",
        "tune": "保住两侧密度对比，索引一侧不要再塞图。"
      },
      {
        "id": "0016-type",
        "zh": "大号衬线标题",
        "en": "display serif headline",
        "at": [
          75.1,
          19.2
        ],
        "feels": [
          "典藏",
          "精致"
        ],
        "mech": "衬线大标题一句话定下「档案馆 / 印刷品」的语气。",
        "say": "Set the headline in a large editorial serif with generous line breaks; keep supporting labels in small caps sans.",
        "q": "editorial serif headline brand archive design",
        "tune": "衬线只用在标题层级，正文和清单仍用无衬线。"
      },
      {
        "id": "0016-list",
        "zh": "细线索引清单",
        "en": "hairline index list",
        "at": [
          74,
          66
        ],
        "feels": [
          "安静",
          "精致"
        ],
        "mech": "导航做成目录页：线性小图标 + 条目 + 右箭头，细分隔线隔行，像档案柜的抽屉标签。",
        "say": "Render navigation as a table-of-contents list: small line icons, item labels, right-arrow affordances, separated by hairline rules with generous row height.",
        "q": "hairline divider list navigation editorial web",
        "tune": "行高放松、图标统一线性风格，分隔线压到最细。"
      },
      {
        "id": "0016-color",
        "zh": "暖陶土配色",
        "en": "terracotta palette",
        "at": [
          12,
          18
        ],
        "feels": [
          "自然",
          "典藏"
        ],
        "mech": "陶土橙 + 芥末黄 + 米白，旧旅行海报式的暖色印刷感。",
        "say": "Use a warm heritage palette — terracotta, mustard, cream — muted and slightly desaturated, like aged print inks.",
        "q": "terracotta mustard vintage travel poster palette",
        "tune": "饱和度压住；一旦提亮就从「老海报」滑向快餐风。"
      }
    ]
  },
  {
    "id": "0019",
    "title": "MUSÉE 美术馆展陈式首屏",
    "family": "Screen",
    "asset": "assets/0019.jpg",
    "thumb": "thumbs/0019.jpg",
    "ar": 1.91,
    "colors": [
      "#e7e5e0",
      "#2a2926",
      "#9aa39b",
      "#b0463a",
      "#c2a079"
    ],
    "facets": [
      {
        "id": "0019-placard",
        "zh": "博物馆展签说明",
        "en": "museum placard caption",
        "at": [
          22,
          80
        ],
        "feels": [
          "典藏",
          "精致"
        ],
        "mech": "内容条目按墙上展签排版——一行 tracked 大写的分类（ROOM 02 / PORTRAITURE）压在斜体衬线标题上，下面跟灰色小字的归属与材质说明，信息分三层，像展品铭牌。",
        "say": "Caption each item like a museum wall label: a tiny tracked uppercase category line above an italic serif title, followed by a small muted-gray attribution and spec caption.",
        "q": "museum placard caption italic serif wall label",
        "tune": "三层层级不变（分类caps→斜体标题→灰说明）；灰说明保持短，别写成正文段落。"
      },
      {
        "id": "0019-daterange",
        "zh": "衬线年代区间标签",
        "en": "serif date-range label",
        "at": [
          50,
          88
        ],
        "feels": [
          "典藏",
          "仪式感"
        ],
        "mech": "页面正中放一组超大衬线数字年代区间（1642 — 1745），中间一道长破折号，把整屏组织成一条时间轴，数字本身成了导航坐标和仪式性焦点。",
        "say": "Place a large serif year-range like 1642 — 1745 joined by a long em-rule at the optical center, as a temporal anchor that organizes the page along a timeline.",
        "q": "large serif year range timeline em dash center",
        "tune": "只用一组区间做全局锚，数字够大但留白要压住它；别加更多数字或刻度变成真图表。"
      },
      {
        "id": "0019-salonhang",
        "zh": "沙龙式挂画",
        "en": "salon hang layout",
        "at": [
          42,
          35
        ],
        "feels": [
          "安静",
          "典藏"
        ],
        "mech": "两件作品按不同尺寸、不同高度散挂在大片暖灰留白里——大风景在左、小静物在右、垂直错位，像画廊墙上的挂法而不是网格排列，留白即展墙。",
        "say": "Arrange images salon-style — different sizes hung at different heights across generous warm negative space — so they read as framed works on a gallery wall rather than a grid.",
        "q": "salon hang asymmetric images gallery wall negative space",
        "tune": "错落是有意的尺寸/高度差，不是随机；留白要足够大、图不超两三件，多了就回到网格感。"
      },
      {
        "id": "0019-chrome",
        "zh": "机构角标微文案",
        "en": "institutional corner microcopy",
        "at": [
          88,
          7
        ],
        "feels": [
          "精致",
          "典藏"
        ],
        "mech": "四角放极小 tracked 大写微字——左上导航词、右上地点加实时时钟（PARIS, FR — 14:03）、底部 SCROLL TO NAVIGATE——像美术馆前台的标识系统，给界面盖上机构印章。",
        "say": "Frame the screen with tiny tracked-uppercase microcopy in the corners — nav words, a location plus live clock such as PARIS, FR — 14:03, and a bottom scroll hint — like an institution's wayfinding signage.",
        "q": "tracked uppercase corner microcopy location live clock",
        "tune": "微字要真的小且字距拉开，只放导航/地点/时间这类机构信息；别塞正文或营销文案。"
      }
    ]
  },
  {
    "id": "0021",
    "title": "BOOKS 奶油书亭·拟物货架首页",
    "family": "Screen",
    "asset": "assets/0021.jpg",
    "thumb": "thumbs/0021.jpg",
    "ar": 1,
    "colors": [
      "#f4ebdf",
      "#d8cab5",
      "#a7ac9b",
      "#12211d",
      "#d7aa63"
    ],
    "facets": [
      {
        "id": "0021-canvas",
        "zh": "奶油纸面底色",
        "en": "warm cream UI canvas",
        "at": [
          10,
          14
        ],
        "feels": [
          "柔和",
          "安静"
        ],
        "mech": "整站铺一层奶油米白做底，文字用近黑的墨绿而不是纯黑——像印在未漂白的纸上，电商界面立刻有了书页的温度。",
        "say": "Set the whole UI on a warm cream canvas like #f4ebdf and use a deep ink-green near-black for text instead of pure black, so the screen reads like print on unbleached paper.",
        "q": "warm cream beige ui background ink green text bookstore",
        "tune": "底色要暖但饱和度极低，奶油不是黄色；正文与底的对比度仍要过 AA，别为了纸感牺牲可读。"
      },
      {
        "id": "0021-shelf",
        "zh": "拟物搁板投影",
        "en": "skeuomorphic shelf ledge",
        "at": [
          50,
          72
        ],
        "feels": [
          "玩味",
          "柔和"
        ],
        "mech": "商品不排成平面网格，而是一本本站在一条带厚度的浅色搁板上，书脚落下柔和的接触阴影——货架的物理感让浏览变成逛书店。",
        "say": "Stand products upright on a dimensional light shelf ledge with soft contact shadows under each item, so a product row reads as a physical display shelf rather than a flat grid.",
        "q": "3d shelf ledge product display contact shadow ecommerce ui",
        "tune": "阴影要短而柔、只在物品脚下；搁板最多两层，整页都是架子就成了家具城效果图。"
      },
      {
        "id": "0021-covercard",
        "zh": "封面即卡片",
        "en": "artwork-as-card",
        "at": [
          42,
          34
        ],
        "feels": [
          "精致"
        ],
        "mech": "书封不装进任何带边框的卡片容器，封面本身就是可点击单元——商品自带的视觉设计直接成为界面的色彩和质感来源。",
        "say": "Drop card chrome entirely and let each item's own cover artwork be the clickable unit; the product art supplies the interface's color and texture.",
        "q": "book cover grid no card border ui product artwork",
        "tune": "只适用于封面/海报这类自带设计的商品；视觉杂乱的商品图仍需要卡片容器去统一。"
      },
      {
        "id": "0021-tray",
        "zh": "圆角面板叠层",
        "en": "stacked rounded panels",
        "at": [
          25,
          30
        ],
        "feels": [
          "柔和",
          "轻盈"
        ],
        "mech": "首屏和货架各自装在一块大圆角、微妙描边加投影的浅色浮板里，板与板之间露出底色——整页像几块叠放的厚纸板，分区不靠分割线。",
        "say": "Section the page into large rounded slabs floating on the canvas with subtle borders and soft shadows, letting the background show between them instead of using divider lines.",
        "q": "rounded panel sections soft shadow layered cream ui",
        "tune": "板间留出的底色缝隙是分区信号，别贴死；圆角统一一个大半径，每板各用一个半径会散。"
      },
      {
        "id": "0021-goldaccent",
        "zh": "哑光金点缀",
        "en": "muted gold accent",
        "at": [
          50,
          8
        ],
        "feels": [
          "精致",
          "典藏"
        ],
        "mech": "全页奶油灰调里只允许一支哑光暖金出现在导航徽标、评分星和行动按钮上——金色在纸面上的稀缺出现，给书店镀上一层老牌精装的气质。",
        "say": "Reserve a single muted gold like #d7aa63 for the logo mark, rating stars and primary buttons on the cream-gray page — one scarce metallic accent that suggests a heritage hardcover.",
        "q": "muted gold accent cream ui rating stars button",
        "tune": "金色必须压灰压哑，亮黄会变廉价促销；出现面积控制在零星几处，大面积铺金就俗了。"
      }
    ]
  },
  {
    "id": "0032",
    "title": "深绿网球学院·马克笔标题与运动光迹",
    "family": "Screen",
    "asset": "assets/0032.jpg",
    "thumb": "thumbs/0032.jpg",
    "ar": 1.33,
    "colors": [
      "#013d35",
      "#155647",
      "#d9ed92",
      "#91a955",
      "#000000"
    ],
    "facets": [
      {
        "id": "0032-mockup",
        "zh": "透视斜置设备样机",
        "en": "perspective-tilted device mockup",
        "at": [
          78,
          66.4
        ],
        "feels": [
          "沉浸",
          "科技"
        ],
        "mech": "把整张网页放进一台被手斜握、带 3D 透视的平板里，背景压黑——设备倾斜带来纵深，界面不再是平贴的截图，而像真实场景里正被人用的产品。",
        "say": "Place the whole web UI inside a tablet held at a 3D-perspective tilt against a dark backdrop; the angled device adds depth so the interface reads as a product being used in a real scene rather than a flat screenshot.",
        "q": "tablet mockup hand held perspective tilt dark background website",
        "tune": "倾斜角和透视要自然、屏幕内容仍清晰可读；角度过大或反光太强会让界面看不清，样机沦为炫技。"
      },
      {
        "id": "0032-limeondark",
        "zh": "暗底柠檬绿点缀",
        "en": "lime-green accent on dark",
        "at": [
          56.5,
          25.7
        ],
        "feels": [
          "能量",
          "冲击力"
        ],
        "mech": "深绿近黑的底色上，只在标题字、按钮和光迹用高饱和柠檬绿——暗底把这一抹亮绿衬得发光，活力与运动感被集中投放，画面既沉稳又有冲劲。",
        "say": "On a near-black deep-green ground, reserve a high-saturation lime-green only for the headline word, buttons and the light trail; the dark base makes the green glow, concentrating energy and motion while keeping the whole composition grounded.",
        "q": "dark green website lime green accent sports hero",
        "tune": "亮绿只给一两个主元素；铺太多绿就失去『暗底里发光』的对比，沉稳感被吃掉。"
      },
      {
        "id": "0032-marker",
        "zh": "手写马克笔标题字",
        "en": "marker script headline",
        "at": [
          45.8,
          21.4
        ],
        "feels": [
          "玩味",
          "能量"
        ],
        "mech": "标题里的关键词用手写马克笔/喷绘笔触替代规整字体——粗细不匀的笔锋带来街头与现场感，让一句普通口号瞬间有了人味和运动场上的躁动。",
        "say": "Swap the key headline word for hand-drawn marker or spray-pen lettering instead of a clean typeface; the uneven brush strokes bring a street, in-the-moment feel that injects personality and athletic energy into an otherwise plain slogan.",
        "q": "marker script lettering headline graffiti handwritten sports brand",
        "tune": "只给一个词上手写体、其余保持规整正文；满屏手写会失控、可读性垮掉，反衬不出那一笔的张力。"
      },
      {
        "id": "0032-grid",
        "zh": "细线网格分区",
        "en": "hairline grid overlay",
        "at": [
          55.8,
          34.2
        ],
        "feels": [
          "冷静",
          "严谨"
        ],
        "mech": "主视觉上叠一层纵横细线，把画面切成规整的格子（此处暗合网球场的分区线）——细线既给内容定位坐标，又把杂乱的图文收进秩序，强化专业与结构感。",
        "say": "Overlay a layer of thin vertical and horizontal rules that divide the hero into a tidy grid (here echoing court lines); the hairlines both anchor content to coordinates and pull scattered text and images into order, reinforcing a structured, professional feel.",
        "q": "hairline grid overlay lines layout hero structure",
        "tune": "线要够细、颜色压低，只做底层秩序；线一粗或一亮就抢戏，把内容割得支离。"
      },
      {
        "id": "0032-overhead",
        "zh": "俯拍动作小图",
        "en": "overhead action shots",
        "at": [
          33,
          20
        ],
        "feels": [
          "玩味",
          "能量"
        ],
        "mech": "把从正上方俯拍的运动员小图嵌进网格格子里——俯视视角少见、带抓拍动感，像从空中俯瞰球场，比常规人像更有现场张力和构图新意。",
        "say": "Drop small top-down photos of athletes into the grid cells; the overhead viewpoint is uncommon and full of caught-in-motion energy, like looking down on the court, giving more on-court tension and compositional freshness than ordinary portraits.",
        "q": "overhead top down action sports photo tennis player grid",
        "tune": "俯拍图要小、统一抠底融进格子；放大或视角不一就显凌乱，俯视的新鲜感变成噪点。"
      },
      {
        "id": "0032-trail",
        "zh": "运动光迹拖尾",
        "en": "motion light trail",
        "at": [
          20,
          65
        ],
        "feels": [
          "能量",
          "未来"
        ],
        "mech": "运动主体（这里是网球）后面拖一条发光的速度光迹——光带把瞬间的速度凝成可见的轨迹，画面立刻有了冲出屏幕的动势和能量。",
        "say": "Trail a glowing light streak behind the moving subject (here a tennis ball); the luminous band freezes momentary speed into a visible path, instantly giving the scene a bursting-off-screen sense of motion and energy.",
        "q": "motion light trail glowing speed streak ball sports",
        "tune": "光迹方向要顺着运动、收尾自然衰减；乱拉或太亮就像特效贴图，速度感反而假。"
      }
    ]
  },
  {
    "id": "0040",
    "title": "巨型字标·苔藓混凝土地景",
    "family": "Screen",
    "asset": "assets/0040.jpg",
    "thumb": "thumbs/0040.jpg",
    "ar": 1.84,
    "colors": [
      "#f3efeb",
      "#302b1e",
      "#b3aa9c",
      "#857754",
      "#ffffff"
    ],
    "facets": [
      {
        "id": "0040-paper",
        "zh": "暖白纸底",
        "en": "warm off-white paper background",
        "at": [
          50,
          20
        ],
        "feels": [
          "安静",
          "精致"
        ],
        "mech": "暖白纸底铺满整页，给巨大的黑色字标一个素净舞台——底子越空，字标和混入的实物雕塑越显分量，画面克制又高级。",
        "say": "Spread the warm off-white paper ground across the page as a plain stage for the giant black wordmark; the emptier the base, the more the wordmark and the embedded sculpture carry weight, keeping the frame restrained and premium.",
        "q": "warm off-white paper background hero minimal wordmark",
        "tune": "底色统一暖白、四周留足空；底子一花或填太满，字标的分量就被稀释。"
      },
      {
        "id": "0040-wordmark",
        "zh": "横贯整版字标",
        "en": "edge-to-edge wordmark band",
        "at": [
          50,
          42
        ],
        "feels": [
          "冲击力",
          "典藏"
        ],
        "mech": "品牌名『Floema®』用定制无衬线放到几乎横贯整版——字标即主视觉，超大尺度把品牌名钉成纪念碑，进站第一眼就只记住这一个名字。",
        "say": "Blow the brand name 'Floema®' up in a custom sans almost spanning the full width; the wordmark is the hero, the monumental scale stamping the name like a monument so the first thing a visitor remembers is that single name.",
        "q": "oversized edge to edge wordmark hero custom sans logotype",
        "tune": "字标横贯时要留呼吸边距、字形要稳；拉太满顶到边或字形怪异，纪念碑感就变成挤压。"
      },
      {
        "id": "0040-letterform",
        "zh": "字母即实物",
        "en": "object as letterform",
        "at": [
          50,
          62
        ],
        "feels": [
          "自然",
          "梦幻"
        ],
        "mech": "字标里有一个字母不是排出来的，而是一座长着苔藓的混凝土雕塑实物顶替——真实质感的物件嵌进字形，让平面 logo 突然有了重量、生长和故事，呼应品牌的自然主题。",
        "say": "Replace one letter of the wordmark not with type but with a real moss-grown concrete sculpture standing in for the glyph; a tactile object set into the letterform gives a flat logo sudden weight, growth and story, echoing the brand's nature theme.",
        "q": "object as letterform sculpture replacing letter typography nature",
        "tune": "只替换一个字母、物件要读得出原字形；替换太多或物件认不出字，巧思就变成看不懂。"
      },
      {
        "id": "0040-landscape",
        "zh": "超现实品牌地景",
        "en": "surreal brand landscape",
        "at": [
          62,
          60
        ],
        "feels": [
          "自然",
          "沉浸"
        ],
        "mech": "字标下方长出真实的苔藓、芦苇、野花，一只翠鸟停在字边——把自然元素当生命体种进品牌画面，超现实的『字标长出生态』让一个市政家具品牌瞬间有了诗意和环保叙事。",
        "say": "Grow real moss, reeds and wildflowers below the wordmark with a kingfisher perched at a letter's edge; planting living nature into the brand frame, the surreal 'ecosystem sprouting from the logotype' instantly lends a civic-furniture brand poetry and an eco narrative.",
        "q": "surreal brand landscape nature growing logotype moss bird plants",
        "tune": "自然元素要和品牌叙事相关、统一光影；堆太多或风格不一，诗意就垮成拼贴。"
      }
    ]
  },
  {
    "id": "0041",
    "title": "软件制造手册·蓝图分解编辑页",
    "family": "Screen",
    "asset": "assets/0041.jpg",
    "thumb": "thumbs/0041.jpg",
    "ar": 0.884,
    "colors": [
      "#fbfbfb",
      "#3f52f0",
      "#8a99f2",
      "#e4e6ef",
      "#1f2333"
    ],
    "facets": [
      {
        "id": "0041-illus",
        "zh": "蓝图技术插画",
        "en": "blueprint technical illustration",
        "at": [
          61.1,
          42.3
        ],
        "feels": [
          "科技",
          "精致",
          "冷静"
        ],
        "mech": "全页插图只用一种墨蓝描线 + 半透明蓝填充，像工程蓝图一样把实物画成精密线稿——单色高约束反而显专业、可信、耐看，把一本讲技术的书的封面变成它讲的东西本身。",
        "say": "Draw every illustration as precise line art in a single ink-blue stroke with translucent blue fills, like an engineering blueprint rendering real objects as exact technical drawings; the single-hue constraint reads as professional and trustworthy, turning a book about technology into the thing it describes.",
        "q": "blueprint technical illustration single color line art engineering drawing",
        "tune": "全站锁一种蓝、线宽统一、填充半透明；加第二个强调色或用照片，蓝图的工整与可信就散了。"
      },
      {
        "id": "0041-iso",
        "zh": "等距爆炸图",
        "en": "isometric exploded-view diagram",
        "at": [
          80,
          30
        ],
        "feels": [
          "科技",
          "严谨"
        ],
        "mech": "把一只软盘沿装配轴线在等距视角里上下拉开成悬浮的零件序列，每片用虚线引到名称——爆炸图一眼讲清『一个东西由什么组成、怎么叠起来』，把枯燥结构变成可读的解剖。",
        "say": "Pull an object apart along its assembly axis into a floating stack of components in isometric view, each piece tied by a dashed leader to its label; an exploded view instantly explains what a thing is made of and how it stacks, turning dry structure into a readable dissection.",
        "q": "isometric exploded view diagram components dashed leaders assembly",
        "tune": "沿单一装配轴对齐、间距均等、引线不交叉；零件乱摆或角度不统一，解剖感就变成散件堆。"
      },
      {
        "id": "0041-grid",
        "zh": "方格纸底纹",
        "en": "graph-paper grid ground",
        "at": [
          18,
          30
        ],
        "feels": [
          "科技",
          "冷静"
        ],
        "mech": "每幅图垫一层极淡的方格纸网格，像在工程笔记本上作图——细网格给插画一个坐标系，暗示『这是被测量、被推演过的』，平添严谨气质又不抢主体。",
        "say": "Lay a very faint square graph-paper grid under each diagram, as if drawn on engineering notebook paper; the fine grid gives the illustration a coordinate system, implying the subject was measured and worked out, adding rigor without competing with the main object.",
        "q": "graph paper grid background faint blueprint engineering notebook",
        "tune": "网格要极淡、只垫在图区、线距统一；网格太重或铺满全页，会盖过线稿主体。"
      },
      {
        "id": "0041-type",
        "zh": "像素点阵标题",
        "en": "pixel bitmap headline",
        "at": [
          24,
          4
        ],
        "feels": [
          "科技",
          "玩味",
          "未来"
        ],
        "mech": "大标题用方块点阵的位图字母拼出，像早期电脑屏幕的字——刻意的低分辨率复古感把『软件』这个主题直接写进字形里，一眼带出极客与怀旧的双重气质。",
        "say": "Set the main title in blocky bitmap letterforms made of square pixels, like text on an early computer screen; the deliberately low-res retro look writes the software theme straight into the type, signalling geek heritage and nostalgia at a glance.",
        "q": "pixel bitmap headline blocky retro computer font lettering",
        "tune": "只在主标题用、保持方块网格对齐；正文也用像素字会难读，点阵字一旦缩小就糊。"
      },
      {
        "id": "0041-label",
        "zh": "等宽微标签",
        "en": "mono micro-labels",
        "at": [
          37,
          8
        ],
        "feels": [
          "冷静",
          "科技"
        ],
        "mech": "图号（FIG.001）、零件名、版权都用小号等宽字母全大写排版——等宽字的机械均匀让这些标注像仪器读数，给整页盖上一层技术档案的印章。",
        "say": "Set figure numbers, part names and credits in small all-caps monospace; the mechanical evenness of a monospaced face makes the annotations read like instrument readouts, stamping the page as a technical archive.",
        "q": "monospace micro labels all caps figure numbers technical annotation",
        "tune": "标注类小字才用等宽、字号压住别抢眼；用在大标题或长正文会显呆、伤可读。"
      },
      {
        "id": "0041-column",
        "zh": "多栏书刊正文",
        "en": "multi-column editorial body",
        "at": [
          71.7,
          83.1
        ],
        "feels": [
          "严谨",
          "精致"
        ],
        "mech": "正文分成等宽的多栏、两端对齐，像翻开一本印刷手册——多栏让密集文字有了报刊般的节奏和权威感，读者把它当『正经的书』而非网页。",
        "say": "Break the body text into equal justified columns like an open printed manual; multiple columns give dense copy a newspaper-like rhythm and authority, making readers treat it as a proper book rather than a web page.",
        "q": "multi column justified editorial body text print manual layout",
        "tune": "栏宽相等、栏距充足、两端对齐；栏太窄会出现难看的字间裂口，行长过长则失去多栏的意义。"
      },
      {
        "id": "0041-dropcap",
        "zh": "首字下沉",
        "en": "drop cap",
        "at": [
          5,
          16
        ],
        "feels": [
          "典藏",
          "精致"
        ],
        "mech": "开篇第一个字母放大下沉占据数行高度——一个经典的书籍排印动作，给读者一个明确的『从这里读起』入口，瞬间带出印刷品的典藏气质。",
        "say": "Enlarge the opening letter so it drops down across several lines of text; a classic book-typography move that gives the reader a clear 'start reading here' entry point and instantly lends a printed, collectible feel.",
        "q": "drop cap initial letter editorial book typography opening paragraph",
        "tune": "只用在开篇首段、与正文基线对齐；每段都加或字体不搭，典雅就变杂乱。"
      },
      {
        "id": "0041-paper",
        "zh": "暖白纸底",
        "en": "warm off-white paper background",
        "at": [
          34.3,
          60.6
        ],
        "feels": [
          "安静",
          "精致"
        ],
        "mech": "整页铺暖白纸底而非纯白，给墨蓝线稿一个素净又不刺眼的舞台——微暖的底色像真实纸张，让技术插画看着像印在书页上，安静又耐读。",
        "say": "Spread a warm off-white paper ground instead of pure white as a plain, non-glaring stage for the ink-blue line art; the slightly warm base reads like real paper, making the technical illustration feel printed on a page — quiet and easy to read.",
        "q": "warm off-white paper background minimal technical illustration",
        "tune": "底色统一暖白、别用纯白或冷灰；底子一花或对比拉太高，纸感与安静就丢了。"
      }
    ]
  }
];
