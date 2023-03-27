#!/bin/sh
UUID=${UUID:-'1588d655-96cd-491c-ba42-56c97ed75971'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
