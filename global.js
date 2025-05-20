//该文件用于存放全局变量
const GLOBAL = {
    author_name : "caodong0225",
    games: [
        {picture: 'static/images/1.png', url: '/game/index2', date: '2022年07月10日', title: '五子棋小游戏', description: '五子棋小游戏，目前单人模式还没做完，悔棋功能无法使用', tags: ['unity游戏开发']},
        {picture: 'static/images/2.png', url: '/game/index1', date: '2023年01月05日', title: '井字棋小游戏', description: '井字棋小游戏，加入了极大极小值算法，可以单人和AI对战', tags: ['unity游戏开发']},
        {picture: 'static/images/3.png', url: '/game/index3', date: '2023年08月04日', title: '贪吃蛇小游戏', description: '贪吃蛇小游戏，Unity练手用的', tags: ['unity游戏开发']},
        {picture: 'static/images/4.png', url: '/game/index4', date: '2023年09月16日', title: '纽约市地图', description: '第一次做3D游戏，把下载下来的两个素材整合了一下', tags: ['unity游戏开发']},
    ],
    articles: [
        {month:'2023年01月', content:[
            {picture: 'static/images/激活函数.jpg', url: '/archives/激活函数', date: '2023年01月06日', title: '人工智能学习笔记一——激活函数', tags: ['人工智能']},
            {picture: 'static/images/神经网络.png', url: '/archives/神经网络', date: '2023年01月08日', title: '人工智能学习笔记二——损失函数', tags: ['人工智能']},
            {picture: 'static/images/卷积神经网络.jpg', url: '/archives/卷积神经网络', date: '2023年01月10日', title: '人工智能学习笔记三——卷积神经网络', tags: ['人工智能', '计算机视觉']},
            {picture: 'static/images/手写数字识别.jpg', url: '/archives/手写数字识别', date: '2023年01月14日', title: '人工智能学习笔记四——手写数字识别', tags: ['人工智能', '计算机视觉']},
            {picture: 'static/images/RSA加密.png', url: '/archives/RSA加密', date: '2023年01月20日', title: 'CTF学习笔记一——RSA加密', tags: ['CTF', '密码学']},
            {picture: 'static/images/孪生神经网络.png', url: '/archives/孪生神经网络', date: '2023年01月21日', title: '人工智能学习笔记五——孪生神经网络', tags: ['人工智能']},
            {picture: 'static/images/ECC加密.jpg', url: '/archives/ECC加密', date: '2023年01月24日', title: 'CTF学习笔记二——ECC加密', tags: ['CTF', '密码学']},
            ]
        },
        {month:'2023年02月', content:[
                {picture: 'static/images/t01e7d22573828a8a81.jpg', url: '/archives/Real world ctf密码学题目讲解', date: '2023年02月1日', title: '23年Real World CTF个人wp', tags: ['CTF']},
            ]
        },
        {month:'2023年03月', content:[
            {picture: 'static/images/CBOW模型.jpg', url: '/archives/CBOW模型', date: '2023年03月14日', title: '人工智能学习笔记六——CBOW模型', tags: ['人工智能', '自然语言处理']},
            {picture: 'static/images/基于BiLstm的恶意url检测.png', url: '/archives/基于BiLstm的恶意url检测', date: '2023年03月14日', title: '人工智能学习笔记七——基于BiLstm的恶意url检测', tags: ['人工智能', '自然语言处理']},
            {picture: 'static/images/Pohlig-Hellman算法.jpg', url: '/archives/Pohlig-Hellman算法', date: '2023年03月29日', title: 'CTF学习笔记三——Pohlig-Hellman算法', tags: ['CTF', '密码学']},
            {picture: 'static/images/LCG发生器.png', url: '/archives/LCG发生器', date: '2023年03月29日', title: 'CTF学习笔记四——LCG发生器', tags: ['CTF', '密码学']},
        ]
        },
        {month:'2023年04月', content:[
            {picture: 'static/images/基于深度学习的钓鱼(垃圾)短信检测.jpg', url: '/archives/基于深度学习的钓鱼(垃圾)短信检测', date: '2023年04月09日', title: '人工智能学习笔记八——基于深度学习的钓鱼短信检测', tags: ['人工智能', '自然语言处理']},
            {picture: 'static/images/基于transformer的恶意网页识别.jpg', url: '/archives/基于transformer的恶意网页识别', date: '2023年04月09日', title: '人工智能学习笔记九——基于transformer的恶意网页识别', tags: ['人工智能', '自然语言处理']},
            {picture: 'static/images/红明谷.jpg', url: '/archives/红明谷密码学', date: '2023年04月20日', title: '23年红明谷杯密码学Wp', tags: ['CTF']},
        ]
        },
        {month:'2023年05月', content:[
                {picture: 'static/images/ISCC.jpg', url: '/archives/ISCC个人wp', date: '2023年05月25日', title: '23年ISCC数据思维赛个人wp', tags: ['CTF']},
            ]
        },
        {month:'2023年06月', content:[
                {picture: 'static/images/pwn刷题记录.jpg', url: '/archives/pwn刷题记录', date: '2023年06月22日', title: 'pwn刷题记录', tags: ['CTF']},
            ]
        },
        {month:'2023年07月', content:[
                {picture: 'static/images/20200612003019272.png', url: '/archives/数学建模论文', date: '2023年07月30日', title: '上理工数学建模比赛校赛个人Wp', tags: ['数学建模']},
            ]
        },
        {month:'2023年08月', content: [
            {picture: 'static/images/springboot+mybatisplus框架.png', url: '/archives/springboot+mybatisplus框架', date: '2023年08月23日', title: 'Java学习笔记一——springboot和mybatisplus框架', tags: ['Java']},
            {picture: 'static/images/基于aaegan的手写英文欺骗样本生成.png', url: '/archives/基于aaegan的手写英文欺骗样本生成', date: '2023年08月29日', title: '人工智能学习笔记十——基于aaegan的手写英文欺骗样本生成', tags: ['人工智能']},
            {picture: 'static/images/基于crnn+ctc的验证码识别机制.png', url: '/archives/基于crnn+ctc的验证码识别机制', date: '2023年08月29日', title: '人工智能学习笔记十一——基于crnn+ctc的验证码识别机制', tags: ['人工智能', '计算机视觉']},
        ]
        },
        {month:'2024年03月', content: [
                {picture: 'static/images/pwn刷题记录.jpg', url: '/archives/第二届上理工信息安全竞赛个人writeup', date: '2024年03月30日', title: '第二届上理工信息安全竞赛个人writeup', tags: ['CTF']},
            ]
        },
        {month:'2024年05月', content: [
                {picture: 'static/images/OIP2.jpg', url: '/archives/writeup', date: '2024年05月19日', title: '2024华东南CISCN初赛wp', tags: ['CTF']},
                {picture: 'static/images/R-C.jpg', url: '/archives/wp', date: '2024年05月25日', title: '2024上海市网络安全大赛wp', tags: ['CTF']},
            ]
        },
        {month:'2025年04月', content: [
                {picture: 'static/images/OIP.jpg', url: '/archives/writeup_gr', date: '2025年04月20日', title: '第三届蓝桥杯网安赛道个人Wp', tags: ['CTF']},
            ]
        },
    ]
};

export default GLOBAL;
