import os

from PIL import Image

import setting

d = setting.d

resizeCount = 2

for currentDir, dirs, files in os.walk(d):
    for f in files:
        foo = Image.open(currentDir + "\\" + f)
        i, j = foo.size
        foo = foo.resize((int(i / resizeCount), int(j / resizeCount)), Image.ANTIALIAS)
        # foo = foo.resize((100, 200), Image.ANTIALIAS)
        foo.save(d + "\\min_" + f, optimize=True, quality=95)
    break