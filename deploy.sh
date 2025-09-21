#!/bin/bash
cd /opt/mattermost || exit 1

git pull origin main

sudo systemctl restart mattermost
