#!/bin/bash
DATA=$(date +%F)
cd $1
for FILE in `ls *$2`
do
    echo "O Arquivo chamava: $FILE"
    mv $FILE ${DATA}-${FILE}
    echo "O Arquivo agora se chama: ${DATA}-${FILE}"

done