#coding:gbk
class Node():
    def __init__(self,name = None,weight = None):
        self.name = name #节点的名字编号
        self.weight = weight #节点的权重
        self.lchild = None #节点的左孩子
        self.rchild = None #节点的右孩子
class Huffmantree():
    #初始化
    def __init__(self,name_weight):
        self.leaf = [Node(x[0],x[1]) for x in name_weight] #创建叶子节点列表
        while len(self.leaf) != 1:
            self.leaf.sort(key=lambda x:x.weight,reverse=True) #对他们的权重从大到小排个序
            node = Node(weight=(self.leaf[-1].weight+self.leaf[-2].weight)) 
            #将最小的两个节点组成一棵新的二叉树，对应的两个节点的权重之和赋给新二叉树的根
            node.lchild = self.leaf.pop(-1)
            node.rchild = self.leaf.pop(-1)
            #以上两个pop操作从叶子节点列表取出这两个权值最小的作为新二叉树的根的两个孩子
            self.leaf.append(node) #叶子节点列表添上这个新二叉树的根
        self.root=self.leaf[0] #根节点
        self.code = list(range(25))
        #self.code用于保存每个叶子节点的Haffuman编码,range的值只需要不小于树的深度就行
    def getcode(self,tree,length = 0):
        if not tree: #没有树的话直接退出
            return
        elif tree.name: #如果是对应的叶子节点就输出编码
            coding = ""
            for i in range(length):
                coding = coding + str(self.code[i])
            encodingdict[tree.name] = coding

            return
        #处理左孩子
        self.code[length]=0
        self.getcode(tree.lchild,length+1)
        #处理右孩子
        self.code[length]=1
        self.getcode(tree.rchild,length+1)
fr = open("information.txt","r",encoding = "gbk")
dataset = eval(fr.read())
fr.close()
encodingdict = {}
charweights=[]
for i in dataset.keys():
    charweights.append((i,dataset[i]))
tree=Huffmantree(charweights)
tree.getcode(tree.root)
fr = open("frequency.txt","w",encoding = "gbk")
fr.write(str(encodingdict))
fr.close()