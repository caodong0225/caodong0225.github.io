#coding:gbk
dataset=open("dataset.txt","r",encoding="gbk")
datastring = ""
for i in dataset.readlines():
	datastring = datastring + i.replace("\n","")
datadict = {}
for i in datastring:
	if (i in datadict.keys()):
		datadict[i] = datadict.get(i) + 1
	else:
		datadict[i] = 1
fw = open("information.txt","w",encoding="gbk")
fw.write(str(datadict))
fw.close()