#!/bin/bash

cd /root/UTFO-Website/server/

KEYWORD="npm"

get_pid() {
	ps aux | grep "$1" | grep -v grep | awl '{print $2}'
}

start_app() {
	echo "Starting $KEYWORD"
	nohup env $(cat .env) npm start &
}

stop_app() {
	PID=$(get_pid $KEYWORD)
	if [ -z "$PID" ]; then
		echo "No such process"
		exit 1
	fi
	echo "Killing $PID"
	kill -15 $PID
}

if [ "$1" == "restart" ]; then
	stop_app
	sleep 1
	start_app
elif [ "$1" == "status" ]; then
	if [ -z "$(get_pid $KEYWORD)" ]; then
		echo "Not running $KEYWORD"
		exit 3
	else
		echo "Running $KEYWORD"
		exit 0
	fi
else
	$1_app
fi
