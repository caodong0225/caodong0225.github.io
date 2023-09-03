#coding:gbk
import math
def readfrequency():
    fr = open("frequency.txt","r",encoding="gbk")
    dataread = fr.read()
    fr.close()
    return eval(dataread)
def readdata():
    fr = open("weightdata.txt","r",encoding="gbk")
    dataweight = fr.read()
    fr.close()
    fr = open("strudata.txt","r",encoding="gbk")
    datastru = fr.read()
    fr.close()
    return (eval(dataweight),eval(datastru))
def sigmoid(x):
    return(1/(1+math.exp(-x)))
def matrix_mulitiply(arr1,arr2):#输入两个数组，将数组每个对应位置的元素相乘，然后求和
    res = 0
    for i in range(len(arr1)):
        res = res + arr1[i]*arr2[i]
    return(res)
def cal_possbility(inpu,weight):#计算损失函数
    possibilitydict = {}
    for i in frequency_count.keys():
        poss = 1
        if frequency_count[i][-1] == "1":
            poss = poss * (1 - sigmoid(matrix_mulitiply(inpu,weight[frequency_count[i][:-1]])))
        else:
            poss = poss * sigmoid(matrix_mulitiply(inpu,weight[frequency_count[i][:-1]]))
        for k in range(1,len(frequency_count[i])):
            if frequency_count[i][:-k][-1] == "1":
                poss = poss * (1 - sigmoid(matrix_mulitiply(inpu,weight[frequency_count[i][:-(k+1)]])))
            else:
                poss = poss * sigmoid(matrix_mulitiply(inpu,weight[frequency_count[i][:-(k+1)]]))
        possibilitydict[i] = poss
    return possibilitydict
def range_string(dicte):   
    string_index = []
    number_index = []
    while len(dicte) > 0:
        maxnum = -1
        for i in dicte.keys():
            if dicte[i] > maxnum:
                maxnum = dicte[i]
                flag = i
        string_index.append(flag)
        number_index.append(maxnum)
        del dicte[flag]
    return (string_index,number_index)
frequency_count = readfrequency()
dataset = readdata()
weightdata = dataset[0]
strudata = dataset[1]
checkstring0 = input("请输入要检验的拼音前前")
checkstring1 = input("请输入要检验的拼音前")
checkstring2 = input("请输入要检验的拼音后")
checkstring3 = input("请输入要检验的拼音后后")
print(range_string(cal_possbility(weightdata[checkstring0] + weightdata[checkstring1] + weightdata[checkstring2] + weightdata[checkstring3],strudata)))
