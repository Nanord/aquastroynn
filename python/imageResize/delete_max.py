import os

import setting

d = setting.d

for currentDir, dirs, files in os.walk(d):
    for f in files:
        if "max" in f:
            os.remove(d + "\\" + f)
    for f in dirs:
        if "max" in f:
            os.remove(d + "\\" + f)

    break