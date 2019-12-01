import os
import re
import sys

from PIL import Image

import setting


def progress(count, total, status=''):
    bar_len = 60
    filled_len = int(round(bar_len * count / float(total)))

    percents = round(100.0 * count / float(total), 1)
    bar = '=' * filled_len + '-' * (bar_len - filled_len)

    sys.stdout.write('[%s] %s%s ...%s\r' % (bar, percents, '%', status))
    sys.stdout.flush()  # As suggested by Rom Ruben (see: http://stackoverflow.com/questions/3173320/text-progress-bar-in-the-console/27871113#comment50529068_27871113)


dasd = setting.d

dName = list()


resizeCount = 2

for currentDir, dirs, files in os.walk(dasd):
    for d in dirs:
        dName.append(currentDir + "\\" + d)

for d in dName:
    for currentDir, dirs, files in os.walk(d):
        os.mkdir(d + "_min")
        for f in files:
            foo = Image.open(currentDir + "\\" + f)
            i, j = foo.size
            foo = foo.resize((int(i/resizeCount), int(j/resizeCount)), Image.ANTIALIAS)
            foo.save(d + "_min\\" + f, optimize=True, quality=95)