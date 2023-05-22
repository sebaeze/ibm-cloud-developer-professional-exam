#! /bin/bash
#
# ibmcloud sl vs options
#
## Creating a transient virtual server
export NAME_VS=vsdemo2 && ibmcloud sl vs create -H ${NAME_VS} -D ibm.com --quantity 1  -d dal10  -o UBUNTU_LATEST --transient  --flavor ${NAME_VS} --test --export ./${NAME_VS}.log
#
