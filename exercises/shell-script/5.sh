#!/bin/bash
echo "Informe o caminho do arquvo:"
read FILE
if [ -f "$FILE" ]
then
    echo "$FILE é um arquivo comum."
elif [ -d "$FILE" ]
then
    echo "$FILE é um diretório."
else
   echo "$FILE é outra coisa."
fi
ls -l $FILE
