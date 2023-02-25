#!/usr/bin/env bash
VERSION='';
NAME=''
rversion="\"(version)\": \"([^\"]*)\"";
rname="\"(name)\": \"([^\"]*)\"";

while read -r l; do
    if [[ $l =~ $rversion ]]; then
        value="${BASH_REMATCH[2]}";
        VERSION="$value";
    elif [[ $l =~ $rname ]]; then
        value="${BASH_REMATCH[2]}";
        NAME="$value";
    fi
done < package.json;

npm unpublish NAME@VERSION