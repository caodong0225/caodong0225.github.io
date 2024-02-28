//该文件用于存放全局变量
const GLOBAL = {
    author_name : "caodong0225",
    games: [
        {picture: 'static/images/1.png', url: '/game/index1', date: '2022年07月10日', title: '五子棋小游戏', description: '五子棋小游戏，目前单人模式还没做完，悔棋功能无法使用', tags: ['unity游戏开发']},
        {picture: 'static/images/2.png', url: '/game/index2', date: '2023年01月05日', title: '井字棋小游戏', description: '井字棋小游戏，加入了极大极小值算法，可以单人和AI对战', tags: ['unity游戏开发','极大极小值算法']},
        {picture: 'static/images/3.png', url: '/game/index3', date: '2023年08月04日', title: '贪吃蛇小游戏', description: '贪吃蛇小游戏，Unity练手用的', tags: ['unity游戏开发']},
        {picture: 'static/images/4.png', url: '/game/index4', date: '2023年09月16日', title: '纽约市地图', description: '第一次做3D游戏，把下载下来的两个素材整合了一下', tags: ['unity游戏开发']},
    ],
    articles: [
        {month:'2023年01月', content:[
            {picture: 'static/images/pic1.jpg', url: '/archives/article1', date: '2023年01月06日', title: '人工智能学习笔记一——激活函数', tags: ['人工智能']},
            {picture: 'static/images/pic2.png', url: '/archives/article2', date: '2023年01月08日', title: '人工智能学习笔记二——损失函数', tags: ['人工智能']},
            {picture: 'static/images/pic3.jpg', url: '/archives/article3', date: '2023年01月10日', title: '人工智能学习笔记三——卷积神经网络', tags: ['人工智能', '计算机视觉']},
            {picture: 'static/images/pic4.jpg', url: '/archives/article4', date: '2023年01月14日', title: '人工智能学习笔记四——手写数字识别', tags: ['人工智能', '计算机视觉']},
            {picture: 'static/images/pic5.png', url: '/archives/article5', date: '2023年01月20日', title: 'CTF学习笔记一——RSA加密', tags: ['CTF', '密码学']},
            {picture: 'static/images/pic6.png', url: '/archives/article6', date: '2023年01月21日', title: '人工智能学习笔记五——孪生神经网络', tags: ['人工智能']},
            {picture: 'static/images/pic7.jpg', url: '/archives/article7', date: '2023年01月24日', title: 'CTF学习笔记二——ECC加密', tags: ['CTF', '密码学']},
            ]
        },
        {month:'2023年03月', content:[
            {picture: 'static/images/pic8.jpg', url: '/archives/article8', date: '2023年03月14日', title: '人工智能学习笔记六——CBOW模型', tags: ['人工智能', '自然语言处理']},
            {picture: 'static/images/pic9.png', url: '/archives/article9', date: '2023年03月14日', title: '人工智能学习笔记七——基于BiLstm的恶意url检测', tags: ['人工智能', '自然语言处理']},
        ]
        },
        {month:'2023年04月', content:[
            {picture: 'static/images/pic10.jpg', url: '/archives/article10', date: '2023年04月09日', title: '人工智能学习笔记八——基于深度学习的钓鱼短信检测', tags: ['人工智能', '自然语言处理']},
            {picture: 'static/images/pic11.jpg', url: '/archives/article11', date: '2023年04月09日', title: '人工智能学习笔记九——基于transformer的恶意网页识别', tags: ['人工智能', '自然语言处理']},
        ]
        },
        {month:'2023年08月', content: [
            {picture: 'static/images/pic12.png', url: '/archives/article12', date: '2023年08月29日', title: '人工智能学习笔记十——基于aaegan的手写英文欺骗样本生成', tags: ['人工智能']},
            {picture: 'static/images/pic13.png', url: '/archives/article13', date: '2023年08月29日', title: '人工智能学习笔记十一——基于crnn+ctc的验证码识别机制', tags: ['人工智能', '计算机视觉']},
        ]
        }
    ]
};

export default GLOBAL;
