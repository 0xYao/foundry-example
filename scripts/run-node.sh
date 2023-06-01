#!/bin/bash

STATE_FILE_PATH="./out/anvil-state.json"

if [ -e $STATE_FILE_PATH ]; then
    anvil --load-state $STATE_FILE_PATH --dump-state $STATE_FILE_PATH --state-interval 5
else
    anvil --dump-state $STATE_FILE_PATH --state-interval 5
fi
