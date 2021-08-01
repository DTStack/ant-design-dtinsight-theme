#!/bin/bash
registry="http://registry.npm.dtstack.com/"
is_add=true
package=""

while [[ $# > 0 ]];
do
    case $1 in
    -d|--delete)
        package=$2;
        is_add="";
        shift;;
    *)
        echo "Unknown parameter passed: $1";
        exit 1;;
    esac;
    shift;
done

npm set registry $registry

if [ -z $is_add ] && [ -z $package ];
then
    echo "Please enter the correct version. Eg: 1.0.0"

elif [ -z $is_add ] && [ $package ];
then
    version="ant-design-dtinsight-theme@$package"
    npm unpublish $version --registry $registry
    echo "Unpublish over."

else [ is_add ];
    npm publish --registry $registry
    echo "Publish over."
fi