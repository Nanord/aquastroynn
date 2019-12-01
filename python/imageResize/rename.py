import os

import setting

d = setting.d

fitst = "min"
last = "max"

for currentDir, dirs, files in os.walk(d):
    for f in files:
        if not fitst in f:
            os.rename(d + "\\" + f, d + "\\" + last + "_" + f)
    for f in dirs:
        if not fitst in f:
            os.rename(d + "\\" + f, d + "\\" + f + "_" + last)

    break

for currentDir, dirs, files in os.walk(d):
    for f in files:
        if fitst in f:
            os.rename(d + "\\" + f, d + "\\" + f.replace(fitst + "_", "").replace(" ", "_"))
    for f in dirs:
        if fitst in f:
            os.rename(d + "\\" + f, d + "\\" + f.replace("_" + fitst, "").replace(" ", "_"))

    break
