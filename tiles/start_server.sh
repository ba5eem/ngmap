#!/bin/bash

docker run --rm -it --detach -v $(pwd):/data -p 8080:80 maptiler/tileserver-gl
