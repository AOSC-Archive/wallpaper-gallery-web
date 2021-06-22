#!/bin/bash

OLDPATH="$1"
NEWPATH="${OLDPATH/img-src/img}"

convert "$OLDPATH" -resize 1920x1080\> "$NEWPATH"
