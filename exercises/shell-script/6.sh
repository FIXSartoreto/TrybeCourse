#!/bin/bash
if [ $# -lt 1 ]
then
    echo "Nenhum argumento foi informado."
    exit 1
fi

COUNT=0
for ARG in $*; do
COUNT=`expr $COUNT + 1`
if [ -f "$ARG" ]
then
    echo "$ARG é um arquivo comum."
elif [ -d "$ARG" ]
then
    echo "$ARG é um diretório."
else
   echo "$ARG é outra coisa."
fi
ls -l $ARG
done